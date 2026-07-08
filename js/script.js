var menuData = {
    categorias: ['Promociones', 'Tacos', 'Tortas', 'Quesadillas', 'Antojitos', 'Botanas y Compartir', 'Sopas y Caldos', 'Guarniciones', 'Postres', 'Bebidas sin Alcohol', 'Bebidas con Alcohol'],
    productos: {
        Promociones: [
            {
                nombre: 'Combo Tortero',
                descripcion: 'Torta a elección con papas y refresco. La mejor combinación para tu antojo.',
                precio: '179',
                imagen: 'assets/mx/promociones/combo-tortero.webp',
                esPromo: true
            },
            {
                nombre: 'Combo Taquero',
                descripcion: 'Cinco tacos a elección acompañados de refresco. Perfecto para compartir.',
                precio: '229',
                imagen: 'assets/mx/promociones/combo-taquero.webp',
                esPromo: true
            },
            {
                nombre: 'Antojo Familiar',
                descripcion: 'Combinación para cuatro con tacos, tortas, papas y guacamole.',
                precio: '429',
                imagen: 'assets/mx/promociones/antojo-familiar.webp',
                esPromo: true
            }
        ],
        Tacos: [
            {
                nombre: 'Tacos al Pastor',
                descripcion: 'Cerdo adobado con piña asada, cebolla y cilantro en tortilla de maíz.',
                precio: '139',
                imagen: 'assets/mx/tacos/tacos-al-pastor.webp'
            },
            {
                nombre: 'Tacos de Asada',
                descripcion: 'Bistec de res asado a la parrilla con cebolla y cilantro.',
                precio: '159',
                imagen: 'assets/mx/tacos/tacos-de-asada-bistec.webp'
            },
            {
                nombre: 'Tacos de Carnitas',
                descripcion: 'Cerdo confitado en manteca, suave y dorado con cebolla y salsa.',
                precio: '139',
                imagen: 'assets/mx/tacos/tacos-de-carnitas.webp'
            },
            {
                nombre: 'Tacos de Pollo',
                descripcion: 'Pechuga de pollo marinada y asada con verduras frescas.',
                precio: '129',
                imagen: 'assets/mx/tacos/tacos-de-pollo.webp'
            },
            {
                nombre: 'Tacos de Chorizo',
                descripcion: 'Chorizo artesanal dorado con cebolla y salsa verde.',
                precio: '129',
                imagen: 'assets/mx/tacos/tacos-de-chorizo.webp'
            },
            {
                nombre: 'Tacos de Suadero',
                descripcion: 'Carne suave tipo brisket, dorada y jugosa con cebolla y cilantro.',
                precio: '149',
                imagen: 'assets/mx/tacos/tacos-de-suadero.webp'
            }
        ],
        Tortas: [
            {
                nombre: 'Torta de Jamón',
                descripcion: 'Jamón, queso, frijoles refritos, aguacate y mayonesa en telera crujiente.',
                precio: '99',
                imagen: 'assets/mx/tortas/torta-de-jamón.webp'
            },
            {
                nombre: 'Torta de Salchicha',
                descripcion: 'Salchicha asada, frijoles, queso derretido y jalapeño en pan telera.',
                precio: '99',
                imagen: 'assets/mx/tortas/torta-de-salchicha.webp'
            },
            {
                nombre: 'Torta de Pierna',
                descripcion: 'Pierna de cerdo adobada con verduras frescas y queso.',
                precio: '119',
                imagen: 'assets/mx/tortas/torta-de-pierna.webp'
            },
            {
                nombre: 'Torta de Pastor',
                descripcion: 'Pastor con piña asada, queso, frijoles y aguacate en pan.',
                precio: '129',
                imagen: 'assets/mx/tortas/torta-de-pastor.webp'
            },
            {
                nombre: 'Torta de Cubana',
                descripcion: 'Jamón, salchicha, pierna, pastor, queso y huevo en un solo pan.',
                precio: '149',
                imagen: 'assets/mx/tortas/torta-de-cubana.webp'
            },
            {
                nombre: 'Torta de Milanesa',
                descripcion: 'Milanesa de res o pollo empanizada con verduras y queso.',
                precio: '129',
                imagen: 'assets/mx/tortas/torta-de-milanesa-res-pollo.webp'
            }
        ],
        Quesadillas: [
            {
                nombre: 'Quesadilla de Queso',
                descripcion: 'Tortilla de maíz rellena de queso derretido con salsa.',
                precio: '69',
                imagen: 'assets/mx/quesadillas/quesadilla-de-queso.webp'
            },
            {
                nombre: 'Quesadilla de Tinga',
                descripcion: 'Tinga de pollo deshebrada con queso fundido y crema.',
                precio: '79',
                imagen: 'assets/mx/quesadillas/quesadilla-de-tinga-de-pollo.webp'
            },
            {
                nombre: 'Quesadilla de Chicharrón',
                descripcion: 'Chicharrón prensado con queso y salsa verde.',
                precio: '79',
                imagen: 'assets/mx/quesadillas/quesadilla-de-chicharron-prensado.webp'
            },
            {
                nombre: 'Quesadilla de Papa con Chorizo',
                descripcion: 'Puré de papa con chorizo y queso gratinado.',
                precio: '79',
                imagen: 'assets/mx/quesadillas/quesadilla-de-papa-con-chorizo.webp'
            },
            {
                nombre: 'Quesadilla de Flor de Calabaza',
                descripcion: 'Flor de calabaza con queso, crema y epazote fresco.',
                precio: '85',
                imagen: 'assets/mx/quesadillas/quesadilla-de-flor-de-calabaza.webp'
            },
            {
                nombre: 'Quesadilla de Huitlacoche',
                descripcion: 'Huitlacoche con queso y cilantro en tortilla crujiente.',
                precio: '95',
                imagen: 'assets/mx/quesadillas/quesadilla-de-huitlacoche.webp'
            }
        ],
        Antojitos: [
            {
                nombre: 'Gorditas de Chicharrón',
                descripcion: 'Disco de masa de maíz relleno de chicharrón prensado.',
                precio: '59',
                imagen: 'assets/mx/antojitos/gorditas-de-Chicharrón.webp'
            },
            {
                nombre: 'Sopes',
                descripcion: 'Masa gruesa con frijoles, crema, queso y salsa.',
                precio: '55',
                imagen: 'assets/mx/antojitos/sopes (frijol, crema, queso, salsa).webp'
            },
            {
                nombre: 'Pambazos',
                descripcion: 'Pan bañado en salsa de guajillo relleno de papa con chorizo.',
                precio: '59',
                imagen: 'assets/mx/antojitos/pambazos (torta-de-papa-con-chorizo-bañada-en-salsa).webp'
            },
            {
                nombre: 'Tostadas de Tinga',
                descripcion: 'Tostada crujiente con tinga de pollo o res y crema.',
                precio: '55',
                imagen: 'assets/mx/antojitos/tostadas-de-tinga-o-pollo.webp'
            },
            {
                nombre: 'Tlacoyos',
                descripcion: 'Masa de maíz azul rellena de frijol, haba o nopales.',
                precio: '65',
                imagen: 'assets/mx/antojitos/tlacoyos-(frijol, haba, nopales).webp'
            },
            {
                nombre: 'Huaraches',
                descripcion: 'Base alargada de masa con carne y verduras frescas.',
                precio: '79',
                imagen: 'assets/mx/antojitos/huaraches-(base-alargada-con-carne).webp'
            }
        ],
        'Botanas y Compartir': [
            {
                nombre: 'Guacamole con Totopos',
                descripcion: 'Guacamole fresco acompañado de totopos crujientes.',
                precio: '99',
                imagen: 'assets/mx/botanas-y-compartir/guacamole-con-totopos.webp'
            },
            {
                nombre: 'Nachos con Carne o Pollo',
                descripcion: 'Nachos bañados en queso con carne o pollo.',
                precio: '139',
                imagen: 'assets/mx/botanas-y-compartir/nachos-con-carne-pollo.webp'
            },
            {
                nombre: 'Pico de Gallo',
                descripcion: 'Tomate, cebolla, cilantro y chile serrano fresco.',
                precio: '79',
                imagen: 'assets/mx/botanas-y-compartir/pico-de-gallo.webp'
            },
            {
                nombre: 'Papas a la Mexicana',
                descripcion: 'Papas gajo salteadas con chorizo y queso gratinado.',
                precio: '99',
                imagen: 'assets/mx/botanas-y-compartir/papas-a-la-mexicana.webp'
            },
            {
                nombre: 'Queso Fundido con Chorizo',
                descripcion: 'Queso gratinado con chorizo y tortillas de harina.',
                precio: '129',
                imagen: 'assets/mx/botanas-y-compartir/queso-fundido-con-chorizo.webp'
            },
            {
                nombre: 'Molcajete',
                descripcion: 'Salsa, queso, chorizo y nopales servidos en molcajete.',
                precio: '179',
                imagen: 'assets/mx/botanas-y-compartir/molcajete-(salsa-queso-chorizo-nopales).webp'
            }
        ],
        'Sopas y Caldos': [
            {
                nombre: 'Caldo de Res',
                descripcion: 'Caldo de res con verduras frescas y garbanzos.',
                precio: '149',
                imagen: 'assets/mx/sopas-y-caldos/caldo-de-res.webp'
            },
            {
                nombre: 'Pozole',
                descripcion: 'Pozole rojo, verde o blanco con todos los complementos.',
                precio: '159',
                imagen: 'assets/mx/sopas-y-caldos/pozole-(rojo-verde-blanco).webp'
            },
            {
                nombre: 'Consomé de Pollo',
                descripcion: 'Consomé de pollo con arroz y verduras.',
                precio: '89',
                imagen: 'assets/mx/sopas-y-caldos/consome-de-pollo-(con-arroz-y-verdura).webp'
            },
            {
                nombre: 'Sopa de Tortilla',
                descripcion: 'Sopa con tiras de tortilla, chile pasilla y crema.',
                precio: '79',
                imagen: 'assets/mx/sopas-y-caldos/sopa-de-tortilla.webp'
            },
            {
                nombre: 'Sopa de Fideo',
                descripcion: 'Fideos en caldillo de jitomate con crema.',
                precio: '69',
                imagen: 'assets/mx/sopas-y-caldos/sopa-de-fideo.webp'
            },
            {
                nombre: 'Menudo',
                descripcion: 'Pancita de res en caldo rojo con orégano y limón.',
                precio: '149',
                imagen: 'assets/mx/sopas-y-caldos/sopa-de-menudo-pancita.webp'
            }
        ],
        Guarniciones: [
            {
                nombre: 'Arroz Rojo',
                descripcion: 'Arroz rojo estilo mexicano con verduras.',
                precio: '49',
                imagen: 'assets/mx/guarniciones/arroz-rojo.webp'
            },
            {
                nombre: 'Frijoles Refritos',
                descripcion: 'Frijoles refritos con queso derretido.',
                precio: '49',
                imagen: 'assets/mx/guarniciones/frijoles-refritos.webp'
            },
            {
                nombre: 'Frijoles de la Olla',
                descripcion: 'Frijoles cocidos con epazote.',
                precio: '45',
                imagen: 'assets/mx/guarniciones/frijoles-de-la-olla.webp'
            },
            {
                nombre: 'Frijoles Charros',
                descripcion: 'Frijoles con tocino, chorizo y chile.',
                precio: '59',
                imagen: 'assets/mx/guarniciones/frijoles-charros.webp'
            },
            {
                nombre: 'Chiles Toreados',
                descripcion: 'Chiles asados con cebolla y limón.',
                precio: '55',
                imagen: 'assets/mx/guarniciones/chiles-toreados.webp'
            },
            {
                nombre: 'Nopales Asados',
                descripcion: 'Nopales asados con limón y sal.',
                precio: '49',
                imagen: 'assets/mx/guarniciones/nopales-asados.webp'
            }
        ],
        Postres: [
            {
                nombre: 'Arroz con Leche',
                descripcion: 'Arroz cremoso con canela y pasas.',
                precio: '55',
                imagen: 'assets/mx/postres/arroz-con-leche.webp'
            },
            {
                nombre: 'Buñuelos',
                descripcion: 'Masa frita crujiente espolvoreada con azúcar.',
                precio: '55',
                imagen: 'assets/mx/postres/buñuelos.webp'
            },
            {
                nombre: 'Churros con Cajeta',
                descripcion: 'Churros dorados bañados en cajeta.',
                precio: '65',
                imagen: 'assets/mx/postres/churros-con-cajeta-o-chocolate-.webp'
            },
            {
                nombre: 'Flan Napolitano',
                descripcion: 'Flan cremoso bañado en caramelo.',
                precio: '69',
                imagen: 'assets/mx/postres/flan-napolitano.webp'
            },
            {
                nombre: 'Jericalla',
                descripcion: 'Postre horneado de leche, canela y vainilla.',
                precio: '65',
                imagen: 'assets/mx/postres/jericalla.webp'
            },
            {
                nombre: 'Pastel de Tres Leches',
                descripcion: 'Bizcocho bañado en tres leches con crema batida.',
                precio: '79',
                imagen: 'assets/mx/postres/pastel-de-tres-leches.webp'
            }
        ],
        'Bebidas sin Alcohol': [
            {
                nombre: 'Agua de Horchata',
                descripcion: 'Agua de arroz con canela y vainilla.',
                precio: '35',
                imagen: 'assets/mx/bebidas-sin-alcohol/aggua-de-horchata.webp'
            },
            {
                nombre: 'Agua de Jamaica',
                descripcion: 'Agua de flor de jamaica, refrescante.',
                precio: '35',
                imagen: 'assets/mx/bebidas-sin-alcohol/agua-de-jamaica.webp'
            },
            {
                nombre: 'Agua de Tamarindo',
                descripcion: 'Agua fresca de tamarindo natural.',
                precio: '35',
                imagen: 'assets/mx/bebidas-sin-alcohol/agua-de-tamarindo.webp'
            },
            {
                nombre: 'Coca-Cola',
                descripcion: 'Coca-Cola clásica en vidrio o lata.',
                precio: '35',
                imagen: 'assets/mx/bebidas-sin-alcohol/coca-cola(vidrio-lata).webp'
            },
            {
                nombre: 'Sidral Mundet',
                descripcion: 'Sidra de manzana burbujeante.',
                precio: '35',
                imagen: 'assets/mx/bebidas-sin-alcohol/sidral-mundet(manzana).webp'
            },
            {
                nombre: 'Sangría Sin Alcohol',
                descripcion: 'Sangría de frutas sin alcohol.',
                precio: '39',
                imagen: 'assets/mx/bebidas-sin-alcohol/sangria(sin-alcohol).webp'
            }
        ],
        'Bebidas con Alcohol': [
            {
                nombre: 'Cerveza Corona',
                descripcion: 'Cerveza clara, ligera y refrescante.',
                precio: '59',
                imagen: 'assets/mx/bebidas-con-alcohol/cerveza-corona.webp'
            },
            {
                nombre: 'Cerveza Victoria',
                descripcion: 'Cerveza oscura estilo Viena.',
                precio: '59',
                imagen: 'assets/mx/bebidas-con-alcohol/cerveza-victoria.webp'
            },
            {
                nombre: 'Cerveza Modelo Especial',
                descripcion: 'Lager premium dorada y suave.',
                precio: '59',
                imagen: 'assets/mx/bebidas-con-alcohol/cerveza-modelo-especial.webp'
            },
            {
                nombre: 'Cerveza Indio',
                descripcion: 'Cerveza oscura con sabor a caramelo.',
                precio: '59',
                imagen: 'assets/mx/bebidas-con-alcohol/cerveza-indio-dos-equis(xx).webp'
            },
            {
                nombre: 'Chelada',
                descripcion: 'Cerveza preparada con limón y sal.',
                precio: '69',
                imagen: 'assets/mx/bebidas-con-alcohol/chelada(cerveza-limon-sal).webp'
            },
            {
                nombre: 'Michelada Clásica',
                descripcion: 'Cerveza con clamato, limón y especias.',
                precio: '79',
                imagen: 'assets/mx/bebidas-con-alcohol/michelada-clasica.webp'
            },
            {
                nombre: 'Paloma',
                descripcion: 'Tequila con refresco de toronja y limón.',
                precio: '99',
                imagen: 'assets/mx/bebidas-con-alcohol/paloma-(tequila-+-toronja-+-limón).webp'
            },
            {
                nombre: 'Margarita Clásica',
                descripcion: 'Margarita frozen o clásica con sal.',
                precio: '119',
                imagen: 'assets/mx/bebidas-con-alcohol/margarita-clasica-Frozen.webp'
            },
            {
                nombre: 'Cantarito',
                descripcion: 'Tequila con cítricos en vaso de barro.',
                precio: '109',
                imagen: 'assets/mx/bebidas-con-alcohol/cantarito-(tequila+citricos-en-vaso-de-barro).webp'
            },
            {
                nombre: 'Charro Negro',
                descripcion: 'Cerveza oscura con tequila.',
                precio: '89',
                imagen: 'assets/mx/bebidas-con-alcohol/charro-negro-(cerveza-oscura + tequila).webp'
            },
            {
                nombre: 'Tequila',
                descripcion: 'Tequila blanco, reposado o añejo.',
                precio: '99',
                imagen: 'assets/mx/bebidas-con-alcohol/tequila-blanco-reposado-añejo.webp'
            },
            {
                nombre: 'Mezcal',
                descripcion: 'Mezcal joven o reposado ahumado.',
                precio: '119',
                imagen: 'assets/mx/bebidas-con-alcohol/mezcal-joven-reposado.webp'
            }
        ]
    }
};



/* ===== REFERENCIAS DOM ===== */
var listaCategorias = document.getElementById('listaCategorias');
var contenedorMenu = document.getElementById('contenedorMenu');
var scrollBloqueado = false;

/* ===== SCROLL SOLO HORIZONTAL PARA CATEGORIAS ===== */
function centrarBtnCategoria(btn) {
    var container = document.getElementById('listaCategorias');
    var btnOffset = btn.offsetLeft;
    var center = btnOffset - (container.clientWidth / 2) + (btn.offsetWidth / 2);
    container.scrollTo({ left: center, behavior: 'smooth' });
}

/* ===== RENDERIZAR CATEGORIAS ===== */
function renderCategorias() {
    listaCategorias.innerHTML = '';
    menuData.categorias.forEach(function (cat, index) {
        var btn = document.createElement('button');
        btn.className = 'categorias__btn' + (index === 0 ? ' categorias__btnActivo' : '');
        btn.textContent = cat;
        btn.setAttribute('data-cat', cat);
        btn.setAttribute('role', 'tab');
        btn.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
        btn.addEventListener('click', function () {
            seleccionarCategoria(cat);
        });
        listaCategorias.appendChild(btn);
    });
}

/* ===== SELECCIONAR CATEGORIA ===== */
function seleccionarCategoria(cat) {
    scrollBloqueado = true;

    /* Actualizar estado visual de botones */
    var botones = listaCategorias.querySelectorAll('.categorias__btn');
    for (var i = 0; i < botones.length; i++) {
        var btn = botones[i];
        if (btn.getAttribute('data-cat') === cat) {
            btn.classList.add('categorias__btnActivo');
            btn.setAttribute('aria-selected', 'true');
            centrarBtnCategoria(btn);
        } else {
            btn.classList.remove('categorias__btnActivo');
            btn.setAttribute('aria-selected', 'false');
        }
    }

    /* Scroll vertical a la seccion correspondiente */
    var seccion = document.getElementById('grupo_' + cat);
    if (seccion) {
        var catAltura = document.querySelector('.categorias').offsetHeight;
        var destino = seccion.offsetTop - catAltura - 6;
        window.scrollTo({ top: destino, behavior: 'smooth' });
    }

    /* Desbloquear el scroll spy despues de un momento */
    setTimeout(function () {
        scrollBloqueado = false;
    }, 800);
}

/* ===== RENDERIZAR MENU ===== */
function renderMenu() {
    contenedorMenu.innerHTML = '';

    menuData.categorias.forEach(function (cat) {
        var grupo = document.createElement('div');
        grupo.className = 'menu__grupo';
        grupo.id = 'grupo_' + cat;

        /* Encabezado de categoria */
        var encabezado = document.createElement('div');
        encabezado.className = 'menu__encabezado';

        var icono = document.createElement('img');
        icono.className = 'menu__icono';

        var mapaIconos = {
            'promociones': 'promociones',
            'tacos': 'tacos',
            'tortas': 'tortas',
            'quesadillas': 'quesadillas',
            'antojitos': 'antojitos',
            'botanas y compartir': 'botanas',
            'sopas y caldos': 'sopas',
            'guarniciones': 'guarniciones',
            'postres': 'postres',
            'bebidas sin alcohol': 'bebidas-sin-alcohol',
            'bebidas con alcohol': 'bebidas-con-alcohol'
        };
        var nombreIcono = mapaIconos[cat.toLowerCase()] || 'promociones';
        icono.src = 'assets/iconos/' + nombreIcono + '.webp';
        icono.alt = cat;

        var titulo = document.createElement('h2');
        titulo.className = 'menu__titulo';
        titulo.textContent = cat;

        var linea = document.createElement('div');
        linea.className = 'menu__linea';

        var puntos = document.createElement('div');
        puntos.className = 'menu__puntos';
        puntos.setAttribute('aria-hidden', 'true');
        for (var p = 0; p < 3; p++) {
            var punto = document.createElement('span');
            punto.className = 'menu__punto';
            puntos.appendChild(punto);
        }

        encabezado.appendChild(icono);
        encabezado.appendChild(titulo);
        encabezado.appendChild(linea);
        encabezado.appendChild(puntos);

        /* Grid de productos */
        var grid = document.createElement('div');
        grid.className = 'menu__grid';

        var productos = menuData.productos[cat];
        for (var i = 0; i < productos.length; i++) {
            var prod = productos[i];
            grid.appendChild(crearCard(prod));
        }

        grupo.appendChild(encabezado);
        grupo.appendChild(grid);
        contenedorMenu.appendChild(grupo);
    });
}

/* ===== CREAR CARD DE PRODUCTO ===== */
function crearCard(prod) {
    var card = document.createElement('article');
    card.className = 'card';
    if (prod.esPromo) {
        card.classList.add('card--promo');
    }

    /* Imagen */
    var imagen = document.createElement('div');
    imagen.className = 'card__imagen';

    var fondo = document.createElement('div');
    fondo.className = 'card__imagenFondo';
    fondo.style.backgroundImage = 'url("assets/fondo_card.webp")';
    fondo.style.backgroundSize = 'cover';
    fondo.style.backgroundPosition = 'center';

    var overlay = document.createElement('div');
    overlay.className = 'card__imagenOverlay';

    imagen.appendChild(fondo);
    imagen.appendChild(overlay);

    if (prod.imagen) {
        var imgProd = document.createElement('img');
        imgProd.src = prod.imagen;
        imgProd.className = 'card__productoImg';
        imgProd.alt = prod.nombre;
        imagen.appendChild(imgProd);
    }

    /* Contenido */
    var contenido = document.createElement('div');
    contenido.className = 'card__contenido';

    var nombre = document.createElement('h3');
    nombre.className = prod.esPromo ? 'card__nombre--promo' : 'card__nombre';
    nombre.textContent = prod.nombre;

    var descripcion = document.createElement('p');
    descripcion.className = prod.esPromo ? 'card__descripcion--promo' : 'card__descripcion';
    descripcion.textContent = prod.descripcion;

    var precio = document.createElement('span');
    precio.className = prod.esPromo ? 'card__precio--promo' : 'card__precio';
    precio.textContent = '$ ' + prod.precio;

    contenido.appendChild(nombre);
    contenido.appendChild(descripcion);
    contenido.appendChild(precio);

    card.appendChild(imagen);
    card.appendChild(contenido);

    return card;
}

/* ===== SCROLL SPY CON INTERSECTIONOBSERVER ===== */
function iniciarScrollSpy() {
    var opciones = {
        rootMargin: '-20% 0px -40% 0px',
        threshold: 0
    };

    var observer = new IntersectionObserver(function (entries) {
        /* Si el scroll foi provocado por click, não atualizar */
        if (scrollBloqueado) return;

        for (var i = 0; i < entries.length; i++) {
            var entry = entries[i];
            if (entry.isIntersecting) {
                var cat = entry.target.id.replace('grupo_', '');
                var botones = listaCategorias.querySelectorAll('.categorias__btn');
                for (var j = 0; j < botones.length; j++) {
                    var btn = botones[j];
                    if (btn.getAttribute('data-cat') === cat) {
                        btn.classList.add('categorias__btnActivo');
                        btn.setAttribute('aria-selected', 'true');
                        centrarBtnCategoria(btn);
                    } else {
                        btn.classList.remove('categorias__btnActivo');
                        btn.setAttribute('aria-selected', 'false');
                    }
                }
                break;
            }
        }
    }, opciones);

    var grupos = contenedorMenu.querySelectorAll('.menu__grupo');
    for (var i = 0; i < grupos.length; i++) {
        observer.observe(grupos[i]);
    }
}

/* ===== INICIALIZACION ===== */
renderCategorias();
renderMenu();
iniciarScrollSpy();