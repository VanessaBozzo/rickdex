# PROMPTS.md - Registro de uso de Inteligencia Artificial

Este archivo documenta el uso de herramientas de Inteligencia Artificial durante el desarrollo del proyecto **RickDex: Favoritos del Multiverso**, correspondiente a la Sumativa 3 de la asignatura Front End.

El uso de IA se realizó como apoyo para planificar la aplicación, mejorar el diseño, organizar el código, aplicar buenas prácticas, implementar validaciones, reforzar seguridad básica y revisar el cumplimiento de la rúbrica. Cada sugerencia fue revisada, adaptada y probada manualmente durante el desarrollo.

---

## Iteración 1: Selección de proyecto

**Prompt utilizado:**  
Solicité ayuda para elegir un proyecto entre las opciones entregadas por la actividad, considerando que debía usar React, consumir una API pública, implementar CRUD y guardar información en Local Storage.

**Resultado aplicado:**  
Se seleccionó el proyecto **Personajes de Rick and Morty**, utilizando la Rick and Morty API como fuente principal de datos.

**Mejora obtenida:**  
Permitió definir una temática clara, visualmente atractiva y adecuada para aplicar búsqueda, filtros, favoritos, edición y persistencia local.

---

## Iteración 2: Definición de la idea general

**Prompt utilizado:**  
Solicité apoyo para definir la idea inicial de la aplicación RickDex, considerando búsqueda de personajes, sección de favoritos y uso de datos personalizados.

**Resultado aplicado:**  
Se definió que la aplicación permitiría buscar personajes desde la API y administrar una colección personalizada de favoritos.

**Mejora obtenida:**  
Se estableció la entidad principal del CRUD: **personaje favorito**.

---

## Iteración 3: Diseño visual inicial

**Prompt utilizado:**  
Solicité un ejemplo de diseño para la aplicación, considerando una interfaz atractiva, con colores institucionales y una estructura clara.

**Resultado aplicado:**  
Se diseñó una página con navbar, hero, buscador, sección de personajes, sección de favoritos, sección del proyecto y footer.

**Mejora obtenida:**  
La aplicación quedó organizada visualmente y con una experiencia de usuario más clara.

---

## Iteración 4: Instalación y configuración del proyecto

**Prompt utilizado:**  
Solicité guía paso a paso para instalar Node.js, crear el proyecto con Vite, instalar Bootstrap y ejecutar la aplicación en localhost.

**Resultado aplicado:**  
Se creó el proyecto React con Vite, se instaló Bootstrap y se configuró el entorno de desarrollo.

**Comandos utilizados:**

```bash
npm create vite@latest . -- --template react
npm install
npm install bootstrap
npm run dev
```

**Mejora obtenida:**  
Se configuró correctamente la base técnica del proyecto.

---

## Iteración 5: Manejo de errores de instalación

**Prompt utilizado:**  
Solicité ayuda cuando npm no funcionaba correctamente en PowerShell por restricciones de ejecución de scripts.

**Resultado aplicado:**  
Se ajustó la política de ejecución del usuario actual en PowerShell.

**Comando utilizado:**

```bash
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

**Mejora obtenida:**  
Se logró ejecutar `npm` correctamente desde la terminal de VS Code.

---

## Iteración 6: Uso de imágenes locales

**Prompt utilizado:**  
Solicité ayuda para usar imágenes locales dentro del proyecto, indicando dónde crear la carpeta y cómo importarlas en React.

**Resultado aplicado:**  
Se creó la carpeta:

```text
src/assets/img/
```

y se agregaron las imágenes:

```text
01.jpg
02.png
03.jpg
```

**Mejora obtenida:**  
El proyecto usa recursos visuales locales para el hero, logo y tarjeta principal.

---

## Iteración 7: Navbar y navegación interna

**Prompt utilizado:**  
Solicité ayuda para que el navbar tuviera enlaces hacia las secciones Inicio, Buscar personaje, Personajes, Favoritos y Proyecto.

**Resultado aplicado:**  
Se implementó navegación interna mediante secciones con `id` y una función para desplazar correctamente considerando la altura del navbar fijo.

**Mejora obtenida:**  
La navegación quedó más ordenada y evita que el navbar tape los títulos de las secciones.

---

## Iteración 8: Consumo de Rick and Morty API

**Prompt utilizado:**  
Solicité ayuda para consumir la Rick and Morty API usando `fetch`, aplicando búsqueda por nombre, estado y género.

**Resultado aplicado:**  
Se implementó el consumo de API con filtros y manejo de errores.

**Mejora obtenida:**  
La aplicación obtiene datos reales desde una API pública, cumpliendo el requisito principal de la actividad.

---

## Iteración 9: Buscador con sugerencias

**Prompt utilizado:**  
Solicité que el campo de nombre mostrara sugerencias con todos los personajes disponibles en la API.

**Resultado aplicado:**  
Se cargaron los nombres de personajes desde la API y se mostraron mediante un `datalist`.

**Mejora obtenida:**  
El usuario puede escribir o seleccionar personajes sugeridos, mejorando la experiencia de búsqueda.

---

## Iteración 10: Manejo de loading, errores y resultados vacíos

**Prompt utilizado:**  
Solicité ayuda para que la aplicación no se rompiera si la API no encontraba resultados o si ocurría un error.

**Resultado aplicado:**  
Se agregaron estados de carga, mensajes de error y mensajes cuando no hay resultados.

**Mejora obtenida:**  
La interfaz entrega retroalimentación clara al usuario durante la búsqueda.

---

## Iteración 11: CRUD de favoritos

**Prompt utilizado:**  
Solicité implementar favoritos con opción de agregar, editar y eliminar personajes, guardando información personalizada.

**Resultado aplicado:**  
Se implementó un CRUD local sobre la entidad **personaje favorito**.

**Operaciones implementadas:**

- Crear favorito.
- Leer favoritos guardados.
- Actualizar categoría, calificación y nota.
- Eliminar favorito con confirmación.

**Mejora obtenida:**  
El proyecto cumple con el requisito de CRUD sobre una entidad principal.

---

## Iteración 12: Modal para agregar y editar favoritos

**Prompt utilizado:**  
Solicité que al agregar un favorito se abriera un modal para ingresar datos opcionales como categoría, calificación con estrellas y nota personal.

**Resultado aplicado:**  
Se creó un modal reutilizable para agregar y editar favoritos.

**Mejora obtenida:**  
La gestión de favoritos quedó más ordenada y fácil de usar.

---

## Iteración 13: Prevención de duplicados

**Prompt utilizado:**  
Solicité agregar una regla para que no se pudiera agregar dos veces el mismo personaje a favoritos.

**Resultado aplicado:**  
Se validó si el personaje ya estaba en favoritos antes de abrir el modal y el botón cambia a “Ya agregado”.

**Mejora obtenida:**  
Se mantiene la integridad de los datos y se evita duplicar registros.

---

## Iteración 14: Persistencia con Local Storage

**Prompt utilizado:**  
Solicité guardar los favoritos en Local Storage para que no se perdieran al recargar la página.

**Resultado aplicado:**  
Se implementó lectura y escritura en Local Storage para favoritos y categorías.

**Mejora obtenida:**  
Los datos personalizados se mantienen aunque el usuario cierre o recargue la aplicación.

---

## Iteración 15: Paginación de personajes

**Prompt utilizado:**  
Solicité que los personajes encontrados no siguieran creciendo hacia abajo, sino que se mostraran de 12 en 12 con botones de navegación.

**Resultado aplicado:**  
Se creó un sistema de paginación con botones:

- Primera.
- Anterior.
- Siguiente.
- Última.

**Mejora obtenida:**  
La interfaz queda más ordenada cuando la búsqueda devuelve muchos personajes.

---

## Iteración 16: Paginación de favoritos

**Prompt utilizado:**  
Solicité replicar la paginación en la sección de favoritos para que, si se agregaban más de 12 favoritos, no siguieran creciendo hacia abajo.

**Resultado aplicado:**  
Se reutilizó el componente de paginación para mostrar favoritos por páginas.

**Mejora obtenida:**  
La sección de favoritos mantiene una estructura limpia incluso con muchos registros.

---

## Iteración 17: Botón flotante para volver al inicio

**Prompt utilizado:**  
Solicité agregar un botón para volver rápidamente al inicio de la página.

**Resultado aplicado:**  
Se implementó un botón flotante “↑ Inicio”.

**Mejora obtenida:**  
Se mejora la navegación del usuario, especialmente cuando hay muchos resultados.

---

## Iteración 18: Separación de componentes

**Prompt utilizado:**  
Solicité revisar si era correcto que todo el código estuviera en `App.jsx` y luego separar el proyecto por componentes.

**Resultado aplicado:**  
Se separó la interfaz en componentes dentro de la carpeta `components`.

**Componentes creados:**

```text
Navbar.jsx
Hero.jsx
SearchForm.jsx
CharacterSection.jsx
CharacterCard.jsx
Pagination.jsx
FavoritesSection.jsx
FavoriteCard.jsx
FavoriteModal.jsx
EmptyState.jsx
ProjectSection.jsx
FloatingTopButton.jsx
Footer.jsx
```

**Mejora obtenida:**  
El proyecto quedó más ordenado, reutilizable y alineado con buenas prácticas de React.

---

## Iteración 19: Separación del consumo de API

**Prompt utilizado:**  
Solicité separar las funciones relacionadas con la API en un archivo independiente.

**Resultado aplicado:**  
Se creó:

```text
src/services/rickMortyApi.js
```

**Mejora obtenida:**  
La lógica de conexión con la API quedó separada de la interfaz visual.

---

## Iteración 20: Separación de Local Storage

**Prompt utilizado:**  
Solicité separar las funciones de Local Storage para que `App.jsx` quedara más limpio.

**Resultado aplicado:**  
Se creó:

```text
src/utils/localStorage.js
```

**Mejora obtenida:**  
La lectura y escritura de datos locales quedó organizada en una utilidad reutilizable.

---

## Iteración 21: Sanitización de inputs

**Prompt utilizado:**  
Solicité revisar si el proyecto cumplía con seguridad, sanitización de inputs y prevención de XSS.

**Resultado aplicado:**  
Se creó la función:

```text
src/utils/sanitizeText.js
```

Esta función limpia textos ingresados por el usuario antes de guardarlos.

**Medidas aplicadas:**

- Limpieza de espacios innecesarios.
- Eliminación de caracteres `<` y `>`.
- Eliminación de patrones básicos como `javascript:`.
- Eliminación de eventos HTML sospechosos como `onclick=`.
- Límite de longitud en categoría y nota.

**Mejora obtenida:**  
Se reforzó la seguridad básica de la aplicación y la prevención de XSS.

---

## Iteración 22: Revisión de XSS básico

**Prompt utilizado:**  
Solicité probar la sanitización ingresando texto con etiquetas tipo `<script>`.

**Resultado aplicado:**  
Se comprobó que los signos `<` y `>` fueron eliminados y el texto se mostró como contenido normal.

**Mejora obtenida:**  
Se verificó que los datos ingresados no se interpretan como HTML ejecutable.

---

## Iteración 23: Manejo de imágenes fallidas

**Prompt utilizado:**  
Solicité revisar por qué algunas imágenes de personajes no cargaban correctamente.

**Resultado aplicado:**  
Se implementó un respaldo visual para las imágenes que fallan.

**Mejora obtenida:**  
La interfaz no queda rota cuando una imagen de la API no carga.

---

## Iteración 24: Sección “Acerca del proyecto”

**Prompt utilizado:**  
Solicité agregar una sección para explicar el objetivo, funcionalidades y tecnologías del proyecto.

**Resultado aplicado:**  
Se creó el componente:

```text
ProjectSection.jsx
```

**Mejora obtenida:**  
La aplicación muestra claramente qué hace el proyecto y qué tecnologías utiliza.

---

## Iteración 25: Footer dinámico

**Prompt utilizado:**  
Solicité revisar el footer y corregir detalles de React.

**Resultado aplicado:**  
Se corrigió el uso de `className` y se agregó el año dinámico mediante JavaScript.

**Mejora obtenida:**  
El footer quedó correctamente adaptado a React.

---

## Iteración 26: Revisión de estructura del proyecto

**Prompt utilizado:**  
Solicité revisar la organización final de carpetas y archivos.

**Resultado aplicado:**  
Se validó la estructura:

```text
src/
├── assets/
├── components/
├── services/
├── utils/
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

**Mejora obtenida:**  
La estructura quedó clara y alineada con buenas prácticas.

---

## Iteración 27: Revisión con rúbrica

**Prompt utilizado:**  
Solicité revisar el proyecto en relación con los criterios de la pauta de evaluación.

**Resultado aplicado:**  
Se revisaron los criterios:

- 3.1.1 Elementos de React.
- 3.1.2 Buenas prácticas y seguridad.
- 3.1.3 CRUD con Local Storage.
- 3.1.4 Consumo de API y manejo de errores.

**Mejora obtenida:**  
Se confirmó que el proyecto cumple los criterios principales en nivel logrado.

---

## Iteración 28: Build de producción

**Prompt utilizado:**  
Solicité verificar si el proyecto compilaba correctamente.

**Resultado aplicado:**  
Se ejecutó:

```bash
npm run build
```

**Resultado obtenido:**  
El proyecto compiló correctamente sin errores.

**Mejora obtenida:**  
Se confirmó que el proyecto está técnicamente preparado para entrega.

---

## Resumen del aporte de la IA

La Inteligencia Artificial fue utilizada como apoyo en:

- Planificación inicial del proyecto.
- Elección de API.
- Diseño visual.
- Organización de componentes.
- Implementación de búsqueda.
- Implementación de CRUD.
- Manejo de Local Storage.
- Paginación.
- Validaciones.
- Sanitización de inputs.
- Prevención básica de XSS.
- Revisión de estructura.
- Revisión con rúbrica.
- Redacción de documentación.

Todas las sugerencias fueron revisadas, ajustadas y probadas manualmente durante el desarrollo del proyecto.