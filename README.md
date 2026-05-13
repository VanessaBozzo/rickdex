# RickDex: Favoritos del Multiverso

RickDex es una aplicación web tipo SPA desarrollada con React, Vite y Bootstrap 5. Su objetivo es permitir la búsqueda de personajes de Rick and Morty mediante una API pública y administrar una colección personalizada de personajes favoritos.

La aplicación permite buscar personajes, filtrar resultados, agregar favoritos, editar información personalizada, eliminar registros y guardar los datos localmente mediante Local Storage.

---

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- Bootstrap 5
- HTML5 / JSX
- CSS3
- Local Storage
- Rick and Morty API
- Inteligencia Artificial como apoyo documentado

---

## API utilizada

El proyecto consume datos desde la API pública de Rick and Morty:

https://rickandmortyapi.com/api/character

La API fue elegida porque entrega información clara y visual de personajes, permitiendo trabajar con datos como nombre, estado, especie, género, origen, ubicación e imagen. Además, permite realizar búsquedas y filtros, lo que se ajusta a los requerimientos de la actividad.

---

## Funcionalidades principales

- Búsqueda de personajes desde una API pública.
- Filtro por nombre, estado y género.
- Lista de sugerencias de nombres de personajes.
- Visualización de resultados en tarjetas.
- Paginación de personajes, mostrando 12 por página.
- Agregar personajes a favoritos.
- Prevención de favoritos duplicados.
- Modal para agregar o editar información personalizada.
- Categoría opcional con sugerencias de categorías anteriores.
- Calificación con estrellas.
- Nota personal opcional con máximo de 60 caracteres.
- Edición de favoritos.
- Eliminación de favoritos con confirmación.
- Persistencia de favoritos mediante Local Storage.
- Paginación de favoritos cuando existen más de 12 registros.
- Manejo de imágenes fallidas con imagen de respaldo.
- Botón flotante para volver al inicio.
- Diseño responsive con Bootstrap 5.
- Manejo de estados de carga, errores y resultados vacíos.
- Sanitización básica de textos ingresados por el usuario.

---

## CRUD implementado

La entidad principal del CRUD es el **personaje favorito**.

### Crear

El usuario puede agregar un personaje desde los resultados de búsqueda a la sección de favoritos. Al hacerlo, se abre un modal donde puede ingresar datos opcionales como categoría, calificación y nota personal.

### Leer

Los personajes favoritos se muestran en la sección “Mis personajes favoritos”. La información se mantiene guardada aunque se recargue la página, gracias al uso de Local Storage.

### Actualizar

El usuario puede editar un personaje favorito mediante el botón “Editar”. El mismo modal utilizado para agregar favoritos permite modificar la categoría, calificación y nota personal.

### Eliminar

El usuario puede eliminar un personaje favorito mediante el botón “Eliminar”. Antes de eliminar, se muestra una confirmación para evitar borrados accidentales.

---

## Buenas prácticas y seguridad

El proyecto incorpora medidas básicas de seguridad y validación:

- Validación para evitar personajes favoritos duplicados.
- Nota personal limitada a 60 caracteres.
- Sanitización de textos ingresados por el usuario antes de guardarlos.
- Limpieza de espacios innecesarios en categoría y nota.
- Eliminación de caracteres asociados a etiquetas HTML como `<` y `>`.
- Eliminación de patrones básicos como `javascript:`.
- Renderizado de datos mediante JSX, sin utilizar `dangerouslySetInnerHTML`.
- Manejo de errores en el consumo de API mediante `try/catch`.
- Mensajes para resultados vacíos o errores de búsqueda.
- Botones deshabilitados cuando corresponde, por ejemplo en favoritos ya agregados o paginación.

---

## Estructura del proyecto

```text
src/
├── assets/
│   └── img/
│       ├── 01.jpg
│       ├── 02.png
│       └── 03.jpg
│
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── SearchForm.jsx
│   ├── CharacterSection.jsx
│   ├── CharacterCard.jsx
│   ├── Pagination.jsx
│   ├── FavoritesSection.jsx
│   ├── FavoriteCard.jsx
│   ├── FavoriteModal.jsx
│   ├── EmptyState.jsx
│   ├── ProjectSection.jsx
│   ├── FloatingTopButton.jsx
│   └── Footer.jsx
│
├── services/
│   └── rickMortyApi.js
│
├── utils/
│   ├── localStorage.js
│   └── sanitizeText.js
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

---

## Organización del código

El proyecto fue organizado separando responsabilidades:

### `components/`

Contiene los componentes visuales reutilizables de la aplicación, como el navbar, hero, buscador, tarjetas de personajes, sección de favoritos, modal, paginación, sección del proyecto y footer.

### `services/`

Contiene la lógica relacionada con el consumo de la API. En este caso, el archivo `rickMortyApi.js` centraliza las funciones que consultan la Rick and Morty API.

### `utils/`

Contiene funciones auxiliares utilizadas en distintas partes del proyecto. Se incluyen funciones para trabajar con Local Storage y para sanitizar textos ingresados por el usuario.

### `App.jsx`

Funciona como componente principal de la aplicación. Desde este archivo se coordinan los estados principales, las funciones de búsqueda, favoritos, modal, paginación y comunicación entre componentes mediante props.

---

## Instalación y ejecución del proyecto

Para ejecutar el proyecto localmente, se deben seguir los siguientes pasos.

### 1. Clonar o descargar el proyecto

Si el proyecto se entrega en archivo ZIP, se debe descomprimir la carpeta.

Si se encuentra en un repositorio, se puede clonar con:

```bash
git clone URL_DEL_REPOSITORIO
```

Luego ingresar a la carpeta del proyecto:

```bash
cd RickDex
```

---

### 2. Instalar dependencias

Ejecutar el siguiente comando:

```bash
npm install
```

Este comando instala las dependencias necesarias del proyecto, incluyendo React, Vite y Bootstrap.

---

### 3. Ejecutar el servidor de desarrollo

Para iniciar la aplicación en modo desarrollo:

```bash
npm run dev
```

La terminal mostrará una URL local similar a:

```text
http://localhost:5173/
```

Esa dirección debe abrirse en el navegador para visualizar la aplicación.

---

### 4. Generar versión de producción

Para comprobar que el proyecto compila correctamente, se puede ejecutar:

```bash
npm run build
```

Este comando genera la carpeta `dist/`, que contiene la versión compilada del proyecto.

---

## Scripts disponibles

En el proyecto se pueden utilizar los siguientes comandos:

```bash
npm install
```

Instala las dependencias del proyecto.

```bash
npm run dev
```

Ejecuta el proyecto en modo desarrollo.

```bash
npm run build
```

Genera una versión de producción del proyecto.

```bash
npm run preview
```

Permite previsualizar localmente la versión compilada, si se requiere revisar el contenido generado en `dist/`.

---

## Uso de Inteligencia Artificial

Durante el desarrollo del proyecto se utilizó apoyo de Inteligencia Artificial como herramienta de orientación y mejora. Su uso fue documentado en el archivo `PROMPTS.md`, tal como solicita la evaluación.

La IA se utilizó principalmente para:

- Seleccionar y definir la idea del proyecto.
- Diseñar la estructura inicial de la aplicación.
- Organizar el proyecto en componentes de React.
- Implementar el consumo de API.
- Crear el CRUD de favoritos.
- Incorporar Local Storage.
- Agregar paginación en personajes y favoritos.
- Revisar validaciones y buenas prácticas.
- Reforzar sanitización de inputs y prevención básica de XSS.
- Revisar el cumplimiento de la rúbrica.
- Apoyar la redacción de documentación.

Todas las sugerencias fueron revisadas, adaptadas y probadas manualmente durante el desarrollo.

---

## Archivo PROMPTS.md

El archivo `PROMPTS.md` contiene el registro de uso de IA durante el desarrollo del proyecto. En él se documentan las principales iteraciones, los prompts utilizados, los cambios aplicados y las mejoras obtenidas.

Este archivo forma parte de la entrega del proyecto y permite evidenciar cómo se utilizó la IA como apoyo en el proceso de desarrollo.

---

## Referencias

- Rick and Morty API. https://rickandmortyapi.com/
- React. https://react.dev/
- Vite. https://vite.dev/
- Bootstrap. https://getbootstrap.com/
- Documentación generada y adaptada con apoyo de Inteligencia Artificial, registrada en `PROMPTS.md`.

---

## Autora

Proyecto desarrollado por **Vanessa Bozzo** para la asignatura **Front End**, Sumativa 3, carrera **Analista Programador**, INACAP.
