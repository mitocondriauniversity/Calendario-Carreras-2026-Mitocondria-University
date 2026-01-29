# 🏃‍♂️ Calendario Trail Running 2026 - Mitocondria University ⛰️

Calendario interactivo de carreras de trail running para el año 2026.

## 🌟 Características

- ✅ **Búsqueda en tiempo real** por nombre o sede
- ✅ **Filtros dinámicos** por mes y dificultad
- ✅ **Código de colores** según nivel de dificultad
- ✅ **Diseño responsive** para móvil, tablet y desktop
- ✅ **Enlaces directos** a inscripciones
- ✅ **34 carreras** organizadas cronológicamente

## 🎨 Niveles de Dificultad

| Nivel | Distancia | Color |
|-------|-----------|-------|
| 🔴 **Extrema** | 100K+ | Rojo |
| 🟠 **Ultra** | 60-75K | Naranja |
| 🟡 **Alta** | 42-60K | Amarillo |
| 🟢 **Media** | 21-42K | Verde |
| 🟢 **Baja** | <21K | Verde claro |

## 🚀 Deployment en GitHub Pages

### Opción 1: Interfaz Web de GitHub (Más fácil)

1. **Crea un repositorio nuevo:**
   - Ve a [github.com/new](https://github.com/new)
   - Nombre: `calendario-trail-2026` (o el que prefieras)
   - Marca como "Public"
   - Click en "Create repository"

2. **Sube los archivos:**
   - Click en "uploading an existing file"
   - Arrastra estos archivos:
     - `index.html`
     - `app.js`
     - `carreras.json`
     - `logo-amarillo.png`
   - Click en "Commit changes"

3. **Activa GitHub Pages:**
   - Ve a Settings → Pages (en el menú lateral)
   - En "Source" selecciona: `main` branch
   - Click en "Save"
   - ¡Listo! Tu sitio estará en: `https://tu-usuario.github.io/calendario-trail-2026`

### Opción 2: Línea de comandos (Para usuarios avanzados)

```bash
# 1. Inicializa el repositorio
git init
git add .
git commit -m "Initial commit: Calendario Trail Running 2026"

# 2. Crea el repositorio en GitHub y conecta
git remote add origin https://github.com/TU-USUARIO/calendario-trail-2026.git
git branch -M main
git push -u origin main

# 3. GitHub Pages se activará automáticamente
```

## 📱 Cómo Compartir

Una vez desplegado, comparte el enlace:

```
🏃‍♂️ CALENDARIO TRAIL RUNNING 2026 ⛰️

📅 Consulta todas las carreras:
🔗 https://tu-usuario.github.io/calendario-trail-2026

✨ Características:
- 34 carreras organizadas
- Filtros por mes y dificultad
- Enlaces directos a inscripciones
- Funciona en cualquier dispositivo

#TrailRunning #Mitocondria
```

## 🔄 Actualizar el Calendario

Para agregar o modificar carreras:

1. Edita el archivo `carreras.json`
2. Sube los cambios a GitHub
3. GitHub Pages se actualizará automáticamente en 1-2 minutos

## 🎨 Personalización

### Cambiar colores:
Edita las variables CSS en `index.html`:
```css
:root {
    --amarillo-principal: #F4D03F;
    --negro: #1C1C1C;
    /* ... más colores */
}
```

### Cambiar logo:
Reemplaza el archivo `logo-amarillo.png` con tu nuevo logo.

## 📦 Estructura de Archivos

```
calendario-trail-2026/
├── index.html          # Página principal
├── app.js             # Lógica de la aplicación
├── carreras.json      # Datos de las carreras
├── logo-amarillo.png  # Logo de Mitocondria
└── README.md          # Este archivo
```

## 🛠️ Tecnologías

- HTML5
- CSS3 (con animaciones y gradientes)
- JavaScript Vanilla (sin frameworks)
- Google Fonts (Montserrat + Inter)

## 📄 Licencia

© 2026 Mitocondria University

## 🤝 Contribuir

Para sugerir carreras o mejoras, contacta a:
📧 mitocondria.university@gmail.com

---

**¡Nos vemos en las montañas!** 🏔️
