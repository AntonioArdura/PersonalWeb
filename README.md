# Ardura · Web editable (versión concierto)

Esta es la **web completa de Ardura con la foto del concierto en la portada**. Tiene 5 páginas, funciona sin instalar nada y NO está publicada.

## 1) Verla en tu ordenador

1. Descomprime el ZIP.
2. Abre la carpeta `ardura-web-editable`.
3. Haz doble clic en **`index.html`**: se abrirá en Chrome, Edge o Safari.
4. Navega por Inicio, Música, Mi historia, Directo y Contacto.

También puedes abrir la carpeta en **Visual Studio Code** para cambiar los archivos (es gratuito). Si quieres previsualización que se recargue automáticamente, usa la extensión «Live Server» de VS Code o ejecuta `python -m http.server 8000` desde la carpeta.

## 2) Qué archivo cambiar para cada cosa

| Quiero cambiar… | Archivo |
|---|---|
| Textos de la portada | `index.html` |
| Logo blanco manuscrito | `assets/img/ardura-firma.png` |
| Foto principal | `assets/img/hero.jpg` (imagen horizontal preparada) |
| Foto original sin composición | `assets/img/foto-original-concierto.jpg` |
| Oscurecimiento, color rojo, tamaños y posición de foto | `assets/css/custom.css` |
| Todas mis canciones, enlaces a Spotify, Instagram y correo | `assets/js/config.js` |
| Música y orden de secciones | `musica.html` |
| Biografía e historia | `historia.html` |
| Fechas de conciertos y textos de directo | `directo.html` |
| Textos de contacto | `contacto.html` |
| Estructura del menú y generación de tarjetas | `assets/js/main.js` |

**Consejo:** personaliza primero `assets/css/custom.css` y `assets/js/config.js`. No necesitas tocar el resto del código.

## 3) Cómo cambiar la foto

Sustituye `assets/img/hero.jpg` por una imagen horizontal **con el mismo nombre**. Puedes usar una foto vertical, pero quizá necesites ajustar `background-position` en `assets/css/custom.css`. La versión actual usa una composición hecha a partir de la foto original que enviaste, manteniendo al cantante a la derecha y oscureciendo los laterales. Para cambiar cuánto se ve, modifica estos valores de CSS:

```css
--foto-brillo: 1;    /* 0.7 es más oscuro; 1.2 es más claro */
--foto-opacidad: 1; /* 0.6 es más tenue */
--accent: #a9343e; /* rojo vino actual */
```

En móvil, el fondo usa `foto-original-concierto.jpg` con un oscurecimiento específico para que el logo siga legible.

## 4) Enlaces reales

Dentro de `assets/js/config.js`, pega las **URLs oficiales** de Spotify, YouTube, Instagram, TikTok, Apple Music y las URLs de tus canciones. También puedes añadir portada individual mediante `cover:'assets/img/nombre-de-portada.jpg'`. Por ahora no he inventado ningún enlace ni anunciado conciertos ficticios.

## 5) Una carpeta, todo dentro

```
ardura-web-editable/
  index.html
  musica.html
  historia.html
  directo.html
  contacto.html
  assets/
    css/style.css          (estilos de base)
    css/custom.css         (ESTILOS EDITABLES)
    js/config.js           (CANCIONES Y ENLACES)
    js/main.js
    img/ardura-firma.png   (LOGO)
    img/hero.jpg           (PORTADA HORIZONTAL)
    img/foto-original-concierto.jpg
    img/directo.jpg
    img/retrato.jpg
    img/favicon.svg
  README.md
```

No hace falta pagar ni subir nada a Internet para probarla. Si más adelante quieres publicarla, esta carpeta es compatible con alojamiento estático (por ejemplo, Netlify o GitHub Pages).
