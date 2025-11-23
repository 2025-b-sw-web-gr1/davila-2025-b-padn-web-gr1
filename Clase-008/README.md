# Clase-008 — Taller Bruno + JSONPlaceholder

Qué contiene
- Una colección de archivos `.bru` (uno por petición) listos para abrir en Bruno.
- Peticiones cubren posts, comments, albums, photos, todos y users (GET/POST/PUT/PATCH/DELETE).

Cómo usar con Bruno (desktop)
1. Instala la app Bruno desde https://www.usebruno.com (descarga e instala).
2. Abre Bruno y arrastra la carpeta `Clase-008` dentro de la app (File → Open Folder / Drag & Drop).
3. Verás la lista de peticiones (.bru). Selecciona una y pulsa "Run" para ejecutar.
4. Revisa en la UI el método HTTP, URL, headers, body y el código de respuesta.

Probar sin Bruno (curl)
- GET /posts:
  curl -i https://jsonplaceholder.typicode.com/posts
- GET /posts/1:
  curl -i https://jsonplaceholder.typicode.com/posts/1
- POST /posts:
  curl -i -X POST https://jsonplaceholder.typicode.com/posts -H "Content-Type: application/json" -d '{"title":"foo","body":"bar","userId":1}'
- PUT /posts/1:
  curl -i -X PUT https://jsonplaceholder.typicode.com/posts/1 -H "Content-Type: application/json" -d '{"id":1,"title":"foo","body":"bar","userId":1}'
- PATCH /posts/1:
  curl -i -X PATCH https://jsonplaceholder.typicode.com/posts/1 -H "Content-Type: application/json" -d '{"title":"updated title"}'
- DELETE /posts/1:
  curl -i -X DELETE https://jsonplaceholder.typicode.com/posts/1

Pruebas recomendadas
- Ejecuta cada .bru desde Bruno y anota:
  - Método HTTP que se ejecutó
  - Código de respuesta (200/201/204/404/etc.)
  - Body de respuesta y headers relevantes
- Observa que JSONPlaceholder devuelve códigos fijos y objetos de ejemplo (es un servidor de prueba).

Notas
- Si prefieres usar la CLI de Bruno (si la instalas), abre terminal en la carpeta y explora la documentación oficial de Bruno para comandos CLI.
- Si quieres, genero también una colección en formato Postman/Insomnia o un simple script bash que llame todas las peticiones en orden.
