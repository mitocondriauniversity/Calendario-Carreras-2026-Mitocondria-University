// Datos de carreras
let carreras = [];
let carrerasFiltradas = [];

// Cargar datos
fetch('carreras.json')
    .then(response => response.json())
    .then(data => {
        carreras = data;
        carrerasFiltradas = [...carreras];
        inicializar();
    })
    .catch(error => {
        console.error('Error al cargar carreras:', error);
        document.getElementById('carrerasContainer').innerHTML = 
            '<div class="no-results">Error al cargar las carreras. Por favor, recarga la página.</div>';
    });

// Inicializar la aplicación
function inicializar() {
    poblarFiltros();
    actualizarStats();
    renderizarCarreras();
    configurarEventos();
}

// Poblar filtros dinámicamente
function poblarFiltros() {
    const meses = [...new Set(carreras.map(c => c.mes))].filter(m => m);
    const mesFilter = document.getElementById('mesFilter');
    
    meses.forEach(mes => {
        const option = document.createElement('option');
        option.value = mes;
        option.textContent = mes;
        mesFilter.appendChild(option);
    });
}

// Configurar eventos
function configurarEventos() {
    document.getElementById('searchInput').addEventListener('input', filtrarCarreras);
    document.getElementById('mesFilter').addEventListener('change', filtrarCarreras);
    document.getElementById('dificultadFilter').addEventListener('change', filtrarCarreras);
}

// Filtrar carreras
function filtrarCarreras() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const mesFiltro = document.getElementById('mesFilter').value;
    const dificultadFiltro = document.getElementById('dificultadFilter').value;

    carrerasFiltradas = carreras.filter(carrera => {
        const matchSearch = !searchTerm || 
            carrera.nombre.toLowerCase().includes(searchTerm) ||
            carrera.sede.toLowerCase().includes(searchTerm) ||
            carrera.distancias.toLowerCase().includes(searchTerm);
        
        const matchMes = !mesFiltro || carrera.mes === mesFiltro;
        const matchDificultad = !dificultadFiltro || carrera.dificultad === dificultadFiltro;

        return matchSearch && matchMes && matchDificultad;
    });

    renderizarCarreras();
    actualizarStats();
}

// Reset filtros
function resetFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('mesFilter').value = '';
    document.getElementById('dificultadFilter').value = '';
    filtrarCarreras();
}

// Renderizar carreras
function renderizarCarreras() {
    const container = document.getElementById('carrerasContainer');
    
    if (carrerasFiltradas.length === 0) {
        container.innerHTML = '<div class="no-results">No se encontraron carreras con los filtros seleccionados.</div>';
        return;
    }

    container.innerHTML = '';
    container.className = 'carreras-grid';

    carrerasFiltradas.forEach((carrera, index) => {
        const card = crearCarreraCard(carrera, index);
        container.appendChild(card);
    });
}

// Crear card de carrera
function crearCarreraCard(carrera, index) {
    const card = document.createElement('div');
    card.className = `carrera-card ${carrera.dificultad.toLowerCase()}`;
    card.style.animationDelay = `${index * 0.05}s`;

    const dificultadClass = `badge-${carrera.dificultad.toLowerCase()}`;
    
    card.innerHTML = `
        <div class="carrera-header">
            <div>
                <h3 class="carrera-nombre">${carrera.nombre}</h3>
            </div>
            <span class="dificultad-badge ${dificultadClass}">${carrera.dificultad}</span>
        </div>
        
        <div class="carrera-info">
            ${carrera.fecha ? `
            <div class="info-row">
                <span class="info-icon">📅</span>
                <span class="info-text">${carrera.fecha}</span>
            </div>
            ` : ''}
            
            ${carrera.sede ? `
            <div class="info-row">
                <span class="info-icon">📍</span>
                <span class="info-text">${carrera.sede}</span>
            </div>
            ` : ''}
            
            ${carrera.distancias ? `
            <div class="info-row">
                <span class="info-icon">🏃</span>
                <span class="info-text">${formatearDistancias(carrera.distancias)}</span>
            </div>
            ` : ''}
            
            ${carrera.desniveles && carrera.desniveles !== 'Sin info.' ? `
            <div class="info-row">
                <span class="info-icon">⛰️</span>
                <span class="info-text">${formatearDesniveles(carrera.desniveles)}</span>
            </div>
            ` : ''}
        </div>
        
        ${carrera.enlaces && carrera.enlaces.startsWith('http') ? `
            <a href="${carrera.enlaces}" target="_blank" rel="noopener noreferrer" class="carrera-link">
                Más información →
            </a>
        ` : carrera.enlaces ? `
            <div class="info-row" style="margin-top: 15px;">
                <span class="info-icon">📧</span>
                <span class="info-text">${carrera.enlaces}</span>
            </div>
        ` : ''}
        
        ${carrera.comentarios && carrera.comentarios !== 'nan' ? `
            <div class="comentario">
                💡 ${carrera.comentarios}
            </div>
        ` : ''}
    `;

    return card;
}

// Formatear distancias
function formatearDistancias(distancias) {
    return distancias.replace(/\\n/g, ' • ').replace(/\n/g, ' • ');
}

// Formatear desniveles
function formatearDesniveles(desniveles) {
    return desniveles.replace(/\\n/g, ' • ').replace(/\n/g, ' • ');
}

// Actualizar estadísticas
function actualizarStats() {
    document.getElementById('totalCarreras').textContent = carreras.length;
    document.getElementById('carrerasVisibles').textContent = carrerasFiltradas.length;
}

// Añadir animación al scroll
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        header.style.transform = 'translateY(-20px)';
        header.style.opacity = '0.95';
    } else {
        header.style.transform = 'translateY(0)';
        header.style.opacity = '1';
    }
    
    lastScrollTop = scrollTop;
}, false);

header.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
