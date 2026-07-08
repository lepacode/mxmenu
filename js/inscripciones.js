var btnEnviar = document.getElementById('btnEnviar');
var toast = document.getElementById('toast');
var inputNombre = document.getElementById('nombre');
var inputTelefono = document.getElementById('telefono');
var toastTimer = null;
var lightbox = document.getElementById('lightbox');
var lightboxNombre = document.getElementById('lightboxNombre');
var btnCerrar = document.getElementById('lightboxClose');
var confettiContainer = document.getElementById('confettiContainer');

function mostrarToast(mensaje, tipo) {
    if (toastTimer) clearTimeout(toastTimer);
    toast.classList.remove('toast__active', 'toast__error');
    toast.textContent = mensaje;
    void toast.offsetWidth;
    if (tipo === 'error') toast.classList.add('toast__error');
    toast.classList.add('toast__active');
    toastTimer = setTimeout(function () {
        toast.classList.remove('toast__active', 'toast__error');
        toastTimer = null;
    }, 2600);
}

function estadoBoton(clase, duracion, texto) {
    var original = btnEnviar.textContent;
    btnEnviar.textContent = texto || original;
    btnEnviar.classList.add(clase);
    btnEnviar.disabled = true;
    setTimeout(function () {
        btnEnviar.classList.remove(clase);
        btnEnviar.textContent = original;
        btnEnviar.disabled = false;
        btnEnviar.style.opacity = '1';
    }, duracion);
}

function validarTelefono(v) {
    var d = v.replace(/[\s\-]/g, '');
    return d.length >= 8 && /^\d+$/.test(d);
}

function shakeInput(el) {
    el.style.animation = 'none';
    void el.offsetWidth;
    el.style.animation = 'inputShake 0.35s ease';
}

function lanzarConfetti() {
    confettiContainer.innerHTML = '';
    var colores = ['#d4a373','#d77f37','#c06820','#8b3a3a','#5a3e2b','#f5c87a','#e8956d','#fff5e6'];
    var formas  = ['2px', '50%'];
    for (var i = 0; i < 60; i++) {
        var p = document.createElement('div');
        p.className = 'confetti-piece';
        var size = Math.random() * 7 + 5;
        var dur  = Math.random() * 2 + 2.2;
        var del  = Math.random() * 1.4;
        p.style.cssText = [
            'left: ' + (Math.random() * 100) + 'vw',
            'width: ' + size + 'px',
            'height: ' + size + 'px',
            'background-color: ' + colores[Math.floor(Math.random() * colores.length)],
            'border-radius: ' + formas[Math.floor(Math.random() * formas.length)],
            'animation-duration: ' + dur + 's',
            'animation-delay: ' + del + 's',
        ].join(';');
        confettiContainer.appendChild(p);
    }
    setTimeout(function () { confettiContainer.innerHTML = ''; }, 4200);
}

function showLightbox(nombre) {
    lightboxNombre.textContent = nombre || 'participante';
    lightbox.classList.add('mostrar');
    lanzarConfetti();
    new Audio('assets/ding.mp3').play().catch(function () {});
}

function hideLightbox() {
    lightbox.classList.remove('mostrar');
    confettiContainer.innerHTML = '';
    window.location.href = 'index.html';
}

btnCerrar.addEventListener('click', hideLightbox);

lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) hideLightbox();
});

btnEnviar.addEventListener('click', function () {
    var nombre = inputNombre.value.trim();
    var telefono = inputTelefono.value.trim();

    if (!nombre) {
        mostrarToast('Ingresa tu nombre', 'error');
        estadoBoton('prize__button__error', 700, 'Falta nombre');
        inputNombre.focus();
        shakeInput(inputNombre);
        return;
    }

    if (!telefono) {
        mostrarToast('Ingresa tu telefono', 'error');
        estadoBoton('prize__button__error', 700, 'Falta telefono');
        inputTelefono.focus();
        shakeInput(inputTelefono);
        return;
    }

    if (!validarTelefono(telefono)) {
        mostrarToast('Telefono invalido (min 8 digitos)', 'error');
        estadoBoton('prize__button__error', 700, 'Invalido');
        inputTelefono.focus();
        shakeInput(inputTelefono);
        return;
    }

    btnEnviar.textContent = 'Enviando...';
    btnEnviar.disabled = true;
    btnEnviar.style.opacity = '0.7';

    setTimeout(function () {
        showLightbox(nombre);
        btnEnviar.textContent = 'Enviado';
        btnEnviar.disabled = false;
        btnEnviar.style.opacity = '1';
        inputNombre.value = '';
        inputTelefono.value = '';
    }, 900);
});

inputNombre.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') { e.preventDefault(); inputTelefono.focus(); }
});
inputTelefono.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') { e.preventDefault(); btnEnviar.click(); }
});

var s = document.createElement('style');
s.textContent = '@keyframes inputShake{0%,100%{transform:translateX(0)}20%{transform:translateX(-5px)}40%{transform:translateX(4px)}60%{transform:translateX(-3px)}80%{transform:translateX(2px)}}';
document.head.appendChild(s);
