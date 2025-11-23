# Clase 007 — Motor de renderizado: Pug (ejemplo)

Qué contiene
- app.js: servidor Express que usa Pug.
- views/: templates Pug (layout + index).
- public/styles.css: estilos estáticos.
- package.json: dependencias y scripts.

Por qué Pug
- Sintaxis indentada y concisa (menos "markup noise").
- Rápido para escribir vistas simples y parciales.
- Buena opción dentro del ecosistema Node/Express si prefieres menos HTML repetitivo.

Diferencias frente a EJS
- Sintaxis: Pug usa indentación y abrevia la estructura; EJS es HTML con etiquetas <% %>.
- Legibilidad: Pug reduce el tamaño de plantillas; EJS resulta más explícito si se necesita HTML literal.
- Curva: Pug tiene pequeña curva por su sintaxis; EJS es inmediato si ya conoces HTML.

Ventajas de Pug
- Menos código: plantillas más cortas.
- Facilita layouts y mixins (componentes).
- Integración sencilla con Express.

Desventajas de Pug
- Sintaxis distinta: los diseñadores que esperan HTML puro necesitan adaptarse.
- Menor compatibilidad directa con snippets de HTML existentes.

Cómo ejecutar (local)
1. Abrir terminal en:
   `c:\Users\ASUS\Documents\6to\SWGR1Web\davila-2025-b-padn-web-gr1\07-Motores de Renderizado Web`
2. Instalar dependencias:
   `npm install`
3. Arrancar servidor:
   `npm run dev`
4. Abrir en el navegador: http://localhost:3001

Sugerencia para la presentación
- Explica por qué elegiste Pug y muestra en vivo la diferencia entre index.pug y el equivalente en EJS (puedes convertir la plantilla a EJS para comparar).
- Menciona ventajas/desventajas y cuándo usarías Pug en un proyecto real.

Prompts reutilizables para IA
- "Genera una plantilla Pug que muestre título, autor y una lista de items."
- "Convierte esta plantilla Pug a EJS (HTML con <% %>) y explícame las diferencias."
