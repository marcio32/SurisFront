# 🌐 SurisFront - Sistema de Reservas

**SurisFront** es una aplicación web desarrollada con **React** y **TypeScript** que funciona como el frontend para el sistema de reservas. Está diseñada para interactuar con la [API de Suris]([https://github.com/marcio32/SurisAPI]) y proporcionar una interfaz amigable para la gestión de reservas de servicios.

## 📌 Características

- ✅ **Interfaz de usuario intuitiva** para la gestión de reservas.
- ✅ **Integración con la API de Suris** para autenticación y operaciones CRUD.
- ✅ **Desarrollado con React, TypeScript y Vite** para un rendimiento óptimo.
- ✅ **Estilizado moderno** utilizando material UI.

## 📌 Requisitos previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- [✔ Node.js](https://nodejs.org/) (versión 14 o superior)

---

## 📌 Configuración del entorno

**Clona el repositorio**

```bash
git clone https://github.com/marcio32/SurisFront.git
```

**Instala las dependencias**

Navega al directorio del proyecto y ejecuta:

```bash
npm install
```

**Configura las variables de entorno**

Crea un archivo `.env` en la raíz del proyecto y añade la URL de la API de Suris:

```
VITE_API_URL=http://localhost:7163/api
```

## 📌 Ejecutar la aplicación

Inicia el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en:

```
http://localhost:5173
```

## 📌 Autenticación y uso

Para acceder a las funcionalidades protegidas, primero debes iniciar sesión. La aplicación proporciona un formulario de inicio de sesión donde puedes ingresar tus credenciales. Una vez autenticado, el token JWT se almacena y se utiliza para las solicitudes subsiguientes a la API.

## 📌 Tecnologías utilizadas

- **React**: Biblioteca para construir interfaces de usuario.
- **TypeScript**: Superset de JavaScript que añade tipado estático.
- **Vite**: Herramienta de construcción y servidor de desarrollo rápido.
- **React Router**: Para la gestión de rutas en la aplicación.
- **Axios**: Cliente HTTP para realizar solicitudes a la API.
- **Material UI**: Para el estilizado de componentes.

## 📌 Notas adicionales

- Asegúrate de que la API de Suris esté en funcionamiento y accesible en la URL configurada en el archivo `.env`.
