# 🛒 React eCommerce

## 📖 Descripción

Este proyecto consiste en una aplicación desarrollada con **React** que simula un **eCommerce**. Permite a los usuarios navegar por un catálogo de productos, filtrarlos por categorías, visualizar los detalles de cada artículo y agregarlos al carrito de compras.

La aplicación funciona como una **Single Page Application (SPA)**, por lo que la navegación entre las distintas secciones se realiza sin recargar la página, ofreciendo una experiencia de usuario más fluida.

## 🚀 Funcionalidades

- Visualización del catálogo de productos.
- Filtrado de productos por categorías.
- Vista detallada de cada producto.
- Agregar productos al carrito de compras.
- Modificar la cantidad de productos desde el carrito.
- Eliminar productos del carrito.
- Visualización del total de la compra.
- Finalización de la compra mediante un formulario con datos obligatorios.
- Al confirmar la compra, la orden se almacena en **Firebase Firestore**.
- Navegación SPA utilizando **React Router**.

## 🛠️ Tecnologías utilizadas

- React
- React Router DOM
- Firebase (Firestore)
- Tailwind CSS
- DaisyUI

## 📦 Dependencias

- react
- react-router-dom
- firebase
- tailwindcss
- daisyui

## ⚙️ Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
```

2. Acceder a la carpeta del proyecto:

```bash
cd tu-repositorio
```

3. Instalar las dependencias:

```bash
npm install
```

4. Ejecutar el proyecto:

```bash
npm run dev
```

La aplicación estará disponible en:

```
http://localhost:5173
```

## 📂 Funcionalidad del carrito

Desde el ícono del carrito ubicado en la barra de navegación es posible:

- Visualizar los productos agregados.
- Incrementar o disminuir la cantidad de cada producto.
- Eliminar productos del carrito.
- Acceder a la pantalla de checkout.

En el **Checkout**, el usuario deberá completar los datos solicitados para generar la compra. Una vez confirmada, la orden se almacena en **Firebase Firestore**, generando el registro correspondiente.

## 👨‍💻 Autor

**Fabrizio Alejo Palavecino**

📧 fabriziopalavecino@gmail.com