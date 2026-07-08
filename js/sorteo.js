/* ══════════════════════════════════════════════════════
   sorteo.js

   Estados:
     'idle'         → scroll lento automático (siempre)
     'spinning'     → aceleración hasta velocidad plena
     'decelerating' → frenado paulatino al terminar audio
     'snapping'     → micro-ajuste al centro → ganador
     'winner'       → ganador mostrado, carrusel reemplazado
══════════════════════════════════════════════════════ */

// ── Velocidades (px / frame a 60 fps) ──────────────────
const SPEED_IDLE = 1.2;   // scroll lento automático
const SPEED_FAST = 9.0;   // velocidad del sorteo
const RAMP_UP_MS = 700;   // ms para acelerar a plena velocidad
const RAMP_DOWN_MS = 2400; // ms de frenado paulatino
const SNAP_MS = 350;   // ms micro-ajuste al ganador

// ── Constantes de layout ────────────────────────────────
const CARD_W = 200;
const GAP = 16;
const STEP = CARD_W + GAP;

// ── 1. Fuente de datos ──────────────────────────────────
function cargarParticipantes() {
    try {
        const raw = localStorage.getItem('participantes');
        if (raw) {
            const arr = JSON.parse(raw);
            if (Array.isArray(arr) && arr.length > 0) return arr;
        }
    } catch (_) { }
    return [
        { nombre: "Carlos Ruiz", telefono: "555-1001" },
        { nombre: "Laura Fernández", telefono: "555-1002" },
        { nombre: "Diego Morales", telefono: "555-1003" },
        { nombre: "Ana García", telefono: "555-1004" },
        { nombre: "Luis Martínez", telefono: "555-1005" },
        { nombre: "Sofía Herrera", telefono: "555-1006" },
        { nombre: "Matías López", telefono: "555-1007" },
        { nombre: "Valentina Cruz", telefono: "555-1008" },
        { nombre: "Joaquín Pérez", telefono: "555-1009" },
        { nombre: "Camila Romero", telefono: "555-1010" },
        { nombre: "Ignacio Torres", telefono: "555-1011" },
        { nombre: "Florencia Vega", telefono: "555-1012" },
        { nombre: "Santiago Díaz", telefono: "555-1013" },
        { nombre: "Lucía Mendoza", telefono: "555-1014" },
        { nombre: "Andrés Castillo", telefono: "555-1015" },
    ];
}

const PARTICIPANTES = cargarParticipantes();
const NAMES = PARTICIPANTES.map(p => p.nombre);

// ── 2. Elementos DOM ────────────────────────────────────
const track = document.getElementById('track');
const centerLine = document.getElementById('centerLine');
const btn = document.getElementById('btnSorteo');
const confettiDiv = document.getElementById('confetti');
const counterNum = document.getElementById('counterNum');
const lightbox = document.getElementById('lightboxGanador');
const lbNombre = document.getElementById('lbNombre');
const lbTelefono = document.getElementById('lbTelefono');
const lbClose = document.getElementById('lbClose');
const lbConfetti = document.getElementById('lbConfetti');
const marqueeLabel = document.getElementById('marqueeLabel');
const winnerDisplay = document.getElementById('winnerDisplay');
const winnerNameEl = document.getElementById('winnerName');
const refreshIcon = document.getElementById('refreshIcon');

// ── 3. Contador ─────────────────────────────────────────
(function animarContador() {
    const target = NAMES.length;
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 28));
    const t = setInterval(() => {
        current = Math.min(current + step, target);
        counterNum.textContent = current;
        if (current >= target) {
            clearInterval(t);
            counterNum.classList.add('pop');
            counterNum.addEventListener('animationend',
                () => counterNum.classList.remove('pop'), { once: true });
        }
    }, 38);
})();

// ── 4. Construir carrusel (3 sets) ──────────────────────
const allCards = [];
const SETS = 4; // más sets = mejor loop infinito
for (let s = 0; s < SETS; s++) {
    NAMES.forEach(name => {
        const div = document.createElement('div');
        div.className = 'card';
        div.textContent = name;
        track.appendChild(div);
        allCards.push(div);
    });
}

const totalW = NAMES.length * STEP; // ancho de 1 set completo

// ── 5. Estado ───────────────────────────────────────────
let posX = 0;
let currentSpeed = SPEED_IDLE;
let state = 'idle';   // 'idle' | 'spinning' | 'decelerating' | 'snapping'
let rafId = null;
let rampId = null;

// ── 6. Helpers ──────────────────────────────────────────
function getCenterX() {
    return document.getElementById('carouselOuter').offsetWidth / 2;
}

function cardCenterX(i) {
    return i * STEP + CARD_W / 2;
}

function applyTranslate() {
    track.style.transform = `translateX(${-posX}px) translateY(-50%)`;
}

function updateHighlight() {
    const cx = posX + getCenterX();
    let closest = -1, minDist = Infinity;
    allCards.forEach((c, i) => {
        const d = Math.abs(cardCenterX(i) - cx);
        if (d < minDist) { minDist = d; closest = i; }
    });
    allCards.forEach((c, i) => c.classList.toggle('highlighted', i === closest));
    return closest;
}

// ── 7. Loop principal (siempre corriendo) ───────────────
function tick() {
    posX += currentSpeed;
    // Reseteo de loop infinito
    if (posX >= totalW * (SETS - 1)) posX -= totalW;
    applyTranslate();
    updateHighlight();
    rafId = requestAnimationFrame(tick);
}

// Posición inicial: primer card centrado
posX = totalW - getCenterX() + CARD_W / 2;
applyTranslate();
updateHighlight();
rafId = requestAnimationFrame(tick); // ← arranca automáticamente

// ── 8. Rampa de velocidad suave ──────────────────────────
function rampSpeed(from, to, duration, easeFn, onDone) {
    cancelAnimationFrame(rampId);
    const start = performance.now();
    function step(now) {
        const t = Math.min((now - start) / duration, 1);
        currentSpeed = from + (to - from) * easeFn(t);
        if (t < 1) {
            rampId = requestAnimationFrame(step);
        } else {
            currentSpeed = to;
            onDone && onDone();
        }
    }
    rampId = requestAnimationFrame(step);
}

const easeInCubic = t => t * t * t;                  // aceleración
const easeOutCubic = t => 1 - Math.pow(1 - t, 3);     // desaceleración suave

// ── 9. Botón ────────────────────────────────────────────
btn.addEventListener('click', () => {
    if (state === 'idle') iniciarSorteo();
});

// ── 10. INICIAR ─────────────────────────────────────────
let audioSorteo = null;
let audioExito = null;

function iniciarSorteo() {
    state = 'spinning';
    btn.disabled = true;
    centerLine.classList.add('activo');

    // Acelerar suavemente de IDLE a FAST
    rampSpeed(SPEED_IDLE, SPEED_FAST, RAMP_UP_MS, easeInCubic, null);

    // Reproducir audio del sorteo
    audioSorteo = new Audio('assets/premio.mp3');
    audioSorteo.play().catch(() => {});
    audioSorteo.addEventListener('ended', () => {
        const speedInicio = currentSpeed;
        rampSpeed(speedInicio, 0, RAMP_DOWN_MS, easeOutCubic, () => {
            currentSpeed = 0;
            snapAlGanador();
        });
    });
}

// ── 11. Snap al ganador ─────────────────────────────────
function snapAlGanador() {
    state = 'snapping';

    // Encontrar la tarjeta más cercana al centro
    const cx = posX + getCenterX();
    let closest = -1, minDist = Infinity;
    allCards.forEach((c, i) => {
        const d = Math.abs(cardCenterX(i) - cx);
        if (d < minDist) { minDist = d; closest = i; }
    });

    // Posición exacta para que esa tarjeta quede centrada
    const targetPos = cardCenterX(closest) - getCenterX();
    const startPos = posX;
    const diff = targetPos - startPos;
    const snapStart = performance.now();

    function snapStep(now) {
        const t = Math.min((now - snapStart) / SNAP_MS, 1);
        const eased = easeOutCubic(t);
        posX = startPos + diff * eased;
        applyTranslate();
        updateHighlight();

        if (t < 1) {
            requestAnimationFrame(snapStep);
        } else {
            posX = targetPos;
            applyTranslate();
            updateHighlight();
            // Índice real del participante
            const winnerIdx = closest % NAMES.length;
            setTimeout(() => mostrarGanador(winnerIdx), 350);
        }
    }
    requestAnimationFrame(snapStep);
}

// ── 13. Mostrar ganador ─────────────────────────────────
function mostrarGanador(idx) {
    const ganador = PARTICIPANTES[idx];

    lbNombre.textContent = ganador.nombre;
    lbTelefono.textContent = ganador.telefono
        ? `📞  ${ganador.telefono}`
        : '📞  Sin teléfono registrado';

    lightbox.classList.add('mostrar');
    launchLbConfetti();
    launchCarrouselConfetti();

    audioExito = new Audio('assets/exito.mp3');
    audioExito.play().catch(() => {});
}

// ── 14. Cerrar lightbox → volver a idle ─────────────────
lbClose.addEventListener('click', cerrarLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) cerrarLightbox(); });

function cerrarLightbox() {
    lightbox.classList.remove('mostrar');
    lbConfetti.innerHTML = '';

    if (audioExito) {
        audioExito.pause();
        audioExito.currentTime = 0;
        audioExito = null;
    }

    // Mostrar ganador en lugar del carrusel
    marqueeLabel.textContent = 'PARTICIPANTE GANADOR';
    document.getElementById('carouselOuter').style.display = 'none';
    winnerDisplay.classList.add('visible');
    winnerNameEl.textContent = lbNombre.textContent;
    refreshIcon.classList.add('visible');

    // Botón deshabilitado hasta que se resetee
    btn.disabled = true;
    centerLine.classList.remove('activo');

    state = 'winner';
    currentSpeed = 0;
}

// ── 15. Refresh ─────────────────────────────────────────
refreshIcon.addEventListener('click', () => {
    marqueeLabel.textContent = 'Últimos participantes registrados';
    document.getElementById('carouselOuter').style.display = '';
    winnerDisplay.classList.remove('visible');
    refreshIcon.classList.remove('visible');

    btn.disabled = false;
    state = 'idle';
    currentSpeed = SPEED_IDLE;
});

// ── 16. Confetti ────────────────────────────────────────
const CONFETTI_COLORS = [
    '#ffd700', '#d77f37', '#e8b97a', '#c06820',
    '#ff9f43', '#ffecd2', '#ff6b6b', '#fdcb6e'
];

function makeConfetti(container, count) {
    container.innerHTML = '';
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'confetti-piece';
        const color = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
        const size = 6 + Math.random() * 8;
        p.style.cssText = `
            left:${Math.random() * 100}%;
            background-color:${color};
            width:${size}px; height:${size}px;
            animation-duration:${2.2 + Math.random() * 1.8}s;
            animation-delay:${Math.random() * 0.8}s;
            border-radius:${Math.random() > .5 ? '50%' : '2px'};
        `;
        container.appendChild(p);
    }
}

function launchLbConfetti() {
    makeConfetti(lbConfetti, 90);
    setTimeout(() => { lbConfetti.innerHTML = ''; }, 5000);
}

function launchCarrouselConfetti() {
    makeConfetti(confettiDiv, 55);
    setTimeout(() => { confettiDiv.innerHTML = ''; }, 4000);
}

// ── 16. Resize ──────────────────────────────────────────
window.addEventListener('resize', () => {
    applyTranslate();
    updateHighlight();
});