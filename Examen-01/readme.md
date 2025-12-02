# Examen 001 - Documentación de APIs con Swagger

## Información del Estudiante

**Nombre:** Paul Dávila  
**Clase:** 008-009  
**Fecha:** Diciembre 2024

---

## Descripción del Proyecto

Este proyecto documenta la API de **JSONPlaceholder** usando **OpenAPI 3.0 (Swagger)**. JSONPlaceholder es una API REST gratuita que sirve para hacer pruebas y aprender a consumir APIs.

La documentación incluye todos los endpoints principales con sus operaciones CRUD completas.

---

## ¿Por qué Documentar APIs?

La documentación de APIs es fundamental porque:

- **Facilita el entendimiento:** Permite que otros desarrolladores comprendan cómo consumir la API
- **Mejora la colaboración:** Equipos de frontend, backend y QA pueden trabajar con mayor sincronía
- **Reduce errores:** Una documentación clara evita malentendidos en los parámetros, rutas y respuestas
- **Permite testing:** Herramientas como Swagger UI permiten probar directamente desde la documentación

## ¿Qué es Swagger?

Swagger es un conjunto de herramientas que permite definir, visualizar y probar APIs REST. Usa el estándar **OpenAPI Specification (OAS)**.

### Componentes principales:

- **Swagger Editor:** Para escribir la documentación
- **Swagger UI:** Para visualizarla y probarla interactivamente
- **Swagger Codegen:** Para generar código cliente o servidor

Swagger es compatible con múltiples lenguajes y frameworks (Node.js, Java, Python, etc.)

---

## Recursos Documentados

- **Posts** - Publicaciones (100 disponibles)
- **Comments** - Comentarios (500 disponibles)
- **Albums** - Álbumes de fotos (100 disponibles)
- **Photos** - Fotografías (5000 disponibles)
- **Todos** - Lista de tareas (200 disponibles)
- **Users** - Usuarios (10 disponibles)

Cada recurso incluye operaciones: GET, POST, PUT, PATCH y DELETE

---

## Cómo Ver la Documentación

### Opción 1: Swagger Editor Online

1. Ir a https://editor.swagger.io/
2. Copiar el contenido de `swagger.yaml`
3. Pegar en el editor
4. Ver la documentación interactiva y probar los endpoints

### Opción 2: Visual Studio Code

1. Instalar extensión "OpenAPI (Swagger) Editor"
2. Abrir el archivo `swagger.yaml`
3. Click derecho → "Preview Swagger"

---

## Estructura del Proyecto

```
Examen-01/
├── swagger.yaml    # 
└── README.md                    # Este archivo
```

---

## Ejemplo de Uso

**Obtener todos los posts:**
```
GET https://jsonplaceholder.typicode.com/posts
```

**Crear un post:**
```
POST https://jsonplaceholder.typicode.com/posts
{
  "title": "Mi post",
  "body": "Contenido",
  "userId": 1
}
```

**Obtener comentarios de un post:**
```
GET https://jsonplaceholder.typicode.com/posts/1/comments
```

---

## Tecnologías Utilizadas

- OpenAPI 3.0
- Swagger Editor
- JSONPlaceholder API

---