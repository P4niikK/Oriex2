# Oriex2

Sitio web estático de ejemplo para OriEx. Contiene páginas HTML básicas con un pequeño cotizador y formularios de ejemplo.

Ahora incluye un backend mínimo con Node.js y PostgreSQL para registro e inicio de sesión.

## Requisitos
- Node.js 18+
- Una base de datos PostgreSQL accesible y las siguientes variables de entorno:
  - `PGHOST`
  - `PGPORT`
  - `PGUSER`
  - `PGPASSWORD`
  - `PGDATABASE`
  - `JWT_SECRET` (opcional, para firmar los tokens)

## Uso
1. Instala las dependencias con `npm install`.
2. Ejecuta `npm start` para iniciar el servidor en `http://localhost:5000`.
3. Accede a `login.html` o `register.html` para autenticarte.

Al iniciarse, el servidor crea automáticamente una tabla `users` si no existe.
