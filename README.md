# Invitación XV Años - Airam Kamila

Una hermosa invitación digital para XV años creada con Astro y Tailwind CSS.

## 🎀 Características

- Diseño elegante con colores sage y cream
- Animación de apertura de sobre
- Totalmente responsive (mobile-first)
- Scroll suave entre secciones
- Decoraciones florales SVG personalizadas
- Tipografías elegantes (Cormorant Garamond, Great Vibes, Playfair Display)

## 🚀 Instalación

### Prerrequisitos

- Node.js 18+ instalado
- npm o yarn

### Pasos

1. Navega a la carpeta del proyecto:
```bash
cd xv-anos-invitation
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:4321`

## 📦 Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye el proyecto para producción
- `npm run preview` - Previsualiza la versión de producción

## 🎨 Estructura del proyecto

```
/
├── public/
├── src/
│   ├── components/
│   │   ├── CoverPage.astro       # Página de portada con sobre
│   │   └── InvitationContent.astro # Contenido de la invitación
│   ├── layouts/
│   │   └── Layout.astro           # Layout base
│   └── pages/
│       └── index.astro            # Página principal
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🎭 Personalización

### Colores

Los colores están definidos en `tailwind.config.mjs`:
- **sage**: Tonos verdes salvia (#8FAA8F y variantes)
- **cream**: Tonos crema (#E8DDBF y variantes)

### Fuentes

Las fuentes de Google Fonts se cargan en `Layout.astro`:
- **Cormorant Garamond**: Texto elegante
- **Great Vibes**: Script decorativo
- **Playfair Display**: Títulos

### Contenido

Modifica el contenido directamente en:
- `CoverPage.astro`: Texto de la portada
- `InvitationContent.astro`: Información del evento, horarios, ubicaciones

## 📱 Responsive

El diseño está optimizado para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)

## 🛠️ Tecnologías utilizadas

- [Astro](https://astro.build) - Framework web
- [Tailwind CSS](https://tailwindcss.com) - Estilos
- SVG - Decoraciones y gráficos
- Google Fonts - Tipografías

## 📝 Notas

- Los enlaces de ubicación y confirmación necesitan ser actualizados con URLs reales
- Las decoraciones florales son SVG inline para mejor rendimiento
- El diseño sigue fielmente la invitación PDF original

## 🎉 Uso

1. Haz clic en el sobre de la portada para ver el contenido completo
2. Scroll suave entre secciones
3. Botones de acción para ubicaciones y confirmación (requieren enlaces reales)

## 📄 Licencia

Proyecto personal - Invitación XV Años Airam Kamila
