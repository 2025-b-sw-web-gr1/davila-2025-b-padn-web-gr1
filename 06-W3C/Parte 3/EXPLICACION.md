# Parte 3 — Implementación: Estructura Semántica con HTML5

## Objetivo
Construir una página de ejemplo que use elementos semánticos HTML5 para organizar contenido de forma clara y accesible.

## Qué se implementó
- Estructura principal:
  - `<header>` con `<nav>` para la navegación principal (con `role="navigation"` y `aria-label`).
  - `<main>` como contenedor principal del contenido (con `role="main"`).
  - `<article>` para el contenido principal (hero-article) y artículos de noticias.
  - `<section>` para secciones temáticas dentro del artículo.
  - `<aside>` para contenido complementario (enlaces útiles).
  - `<figure>` y `<figcaption>` para la imagen ilustrativa.
  - `<footer>` y `<address>` para la información del autor y enlaces de pie de página.

- Accesibilidad:
  - Enlace de salto ("Saltar al contenido") visible al enfocarlo, para usuarios de teclado.
  - Uso de elementos de tiempo `<time datetime="...">` para marcar fechas.
  - Atributos ARIA mínimos (`role`, `aria-label`, `aria-labelledby`) para reforzar la semántica en navegadores/lectores.

- Presentación:
  - CSS con Grid para layout (contenido principal + sidebar) y estilos responsivos para móviles.

## Por qué es útil aplicar HTML5 semántico
- Mejora la legibilidad del marcado para desarrolladores.
- Facilita la navegación a usuarios que usan lectores de pantalla o navegación por teclado.
- Mejora el SEO: motores de búsqueda entienden mejor la estructura del contenido.
- Facilita mantenimiento y escalabilidad del proyecto.

## Lecciones aprendidas
- Elegir la etiqueta semántica correcta ayuda tanto a accesibilidad como a la estructura lógica.
- Añadir pequeñas mejoras de accesibilidad (skip links, roles, atributos `aria-`) tiene un gran impacto para usuarios con necesidades especiales.
- El diseño y la semántica se complementan: un buen CSS hace más evidente la estructura semántica.

## Cómo probar
1. Abrir `06-w3c/Parte 3/index.html` en el navegador.
2. Pulsar Tab varias veces para ver el enlace "Saltar al contenido".
3. Reducir el ancho de la ventana para comprobar el comportamiento responsive.
4. Revisar el código HTML para ver el uso de elementos semánticos y ARIA.

---

Fin del ejercicio — puedes copiar/ajustar los textos y las imágenes para adaptar el ejemplo a tus contenidos reales.
