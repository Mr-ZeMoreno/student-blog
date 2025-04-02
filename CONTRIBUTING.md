# 🌟 ¡Gracias por tu interés en contribuir a student-blog!

Me alegra muchísimo que quieras aportar a este proyecto. **student-blog** es un esfuerzo comunitario para compartir apuntes universitarios de manera organizada y accesible. Mantenerlo actualizado no es fácil, y cualquier ayuda es más que bienvenida.

_Por el momento_, **todas las contribuciones se realizan a través de pull requests en GitHub**, sin importar si contribuyes con apuntes, diseño o código. Si no sabes cómo hacerlo, revisa esta guía y, si tienes dudas, abre un `issue`.

---

## 🚀 ¿Cómo puedo contribuir?

Existen tres formas principales de aportar al proyecto, aunque por regla general recomendamos leer el punto tres, ya que, ahí podrá aliviar dudas de como llevar el repositorio a su computadora:

1. **📚 Subiendo apuntes** – Si tienes buenos apuntes y quieres compartirlos, esta es tu sección.
2. **🎨 Diseñando banners** – Si te gusta el diseño y quieres aportar imágenes para las publicaciones.
3. **💻 Contribuyendo con código** – Si te interesa mejorar el proyecto a nivel técnico.

**📌 Importante:** Todas las contribuciones se hacen mediante **pull requests en GitHub**.

---

## 📚 ¡Quiero subir mis apuntes porque soy un crack!

### ✅ Antes de subir tus apuntes...

- 🔹 **Verifica si ya existen.** Si el apunte ya está en el repositorio pero crees que puede mejorarse, edítalo y envía un `pull request`.
- 🔹 **Si no existe, agrégalo.** Crea un nuevo archivo dentro de la asignatura o libro correspondiente.
- 🔹 **Formato requerido:** Todos los apuntes deben estar en **.md** o **.mdx**.

**📌 Nota**: Actualmente, las ecuaciones en **LaTeX** no funcionan en archivos **.mdx** (¡estamos trabajando en ello!).

### 📂 ¿Cómo organizar los apuntes?

El contenido del proyecto se organiza en **colecciones**, que agrupan los apuntes en grandes categorías. Actualmente, existen dos colecciones:

- **📖 Biblioteca** – Resúmenes y apuntes basados en libros académicos.
- **🏫 Asignaturas** – Apuntes organizados por materia universitaria.

Cada asignatura o libro tiene su propia carpeta dentro de `content/`.

#### 📌 Reglas importantes:

- ✔️ Cada asignatura o libro debe tener un archivo **main.md** o **main.mdx** que sirva como introducción o resumen.
- ✔️ **No crees subcarpetas dentro de una asignatura/libro**, ya que esto puede causar problemas con el renderizado.
- ✔️ Cada archivo debe tener un encabezado como el siguiente ejemplo:

```md
---
title: 'Matrices - Clase 1'
description: 'Una colección de asignaturas'
pubDate: 'Marzo 30 2025'
updatedDate: 'Abril 01 2025'
heroImage: '/blog-placeholder-3.jpg'
nav: { back: 'main', next: 'Matrices - Clase 2' }
construccion: true
isMath: true
---
```

📍 Ejemplo de estructura correcta:

```css
Copiar
Editar
content/
│── asignaturas/
│ ├── matematicas/
│ │ ├── main.md (Resumen de la asignatura)
│ │ ├── limites.md
│ │ ├── derivadas.md
│ │ ├── integrales.md
│
│── Biblioteca/
│ ├── algebra_lineal/
│ │ ├── main.md (Resumen del libro)
│ │ ├── capitulo1.md
│ │ ├── capitulo2.md
```

# 🎨 ¡Quiero contribuir con banners y diseño!

Si te gusta el diseño gráfico y quieres aportar banners o imágenes para los apuntes, sigue estos pasos:

1. Crea tu diseño respetando los tamaños usados en el proyecto.

2. Guárdalo en formato .jpg o .png con buena resolución.

3. Añádelo a la carpeta de imágenes correspondiente.

4. Envía un pull request con una breve descripción del diseño.

## 📌 Sugerencias:

- ✔️ Usa colores y tipografía que mantengan la estética del proyecto.
- ✔️ Evita imágenes con derechos de autor.
- ✔️ Si tienes dudas sobre el estilo, revisa los banners existentes.

# 💻 ¡Quiero contribuir con código porque soy un ultra crack!

Si te interesa mejorar el código del proyecto, agregar nuevas funcionalidades o corregir errores, sigue estos pasos:

## 🔧 Pasos para contribuir con código

1. Haz un fork del repositorio y clona tu copia localmente.

2. Crea una nueva rama para tu contribución.

3. Realiza tus cambios siguiendo las buenas prácticas de desarrollo.

4. Arranca el proyecto con npm run dev desde una terminal.

5. Asegúrate de que todo funciona correctamente.

6. Envía un pull request (PR) describiendo los cambios que hiciste.

## 📌 Reglas para código

- ✔️ Sigue el estilo de código del proyecto.
- ✔️ Documenta bien tus cambios.
- ✔️ Si agregas una nueva funcionalidad, explica cómo funciona.

---

# ❓ ¿Dudas o sugerencias?

Si tienes alguna pregunta o sugerencia, puedes abrir un issue en el repositorio. ¡Toda ayuda es bienvenida!

📩 ¡Gracias por hacer de student-blog un mejor recurso para todos! 🚀
