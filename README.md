# Analizador de Texto

![Una lupa sobre texto de libro](https://github.com/Laboratoria/curriculum/assets/92090/2b45f653-69a5-4282-a65c-d34125c36113)

_Credito: Foto de [ethan](https://unsplash.com/fr/@andallthings?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_
_en [Unsplash](https://unsplash.com/es/fotos/72NpWZJOskU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_

## Descripción del Proyecto

El **Analizador de Texto** es una aplicación web que permite a los usuarios ingresar un texto y obtener diversas métricas y análisis en tiempo real. La aplicación es intuitiva y está diseñada para proporcionar información precisa sobre el contenido del texto, como el conteo de palabras, caracteres, números y más.

## Características

- **Recuento de palabras**: Cuenta el número total de palabras en el texto.
- **Recuento de caracteres**: Incluye el número total de caracteres, incluyendo espacios y signos de puntuación.
- **Recuento de caracteres (sin espacios)**: Excluye espacios y signos de puntuación.
- **Recuento de números**: Cuenta la cantidad de números en el texto.
- **Suma de números**: Suma todos los números presentes en el texto.
- **Longitud media de palabras**: Calcula la longitud media de las palabras en el texto.

## Tecnologías Utilizadas

- **JavaScript**: Toda la lógica de la aplicación está implementada en JavaScript puro (Vanilla JS).
- **HTML5**: Para la estructura de la página web.
- **CSS3**: Para el diseño y estilo de la aplicación.

## Estructura del Proyecto

```text
./
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── analyzer.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── .eslintrc
    └── analyzer.spec.js
```

### Descripción de Archivos Clave

- **README.md**: Documentación del proyecto.
- **src/index.html**: Punto de entrada de la aplicación.
- **src/style.css**: Reglas de estilo de la aplicación.
- **src/analyzer.js**: Contiene la lógica del analizador de texto.
- **src/index.js**: Maneja eventos del DOM y actualiza la interfaz de usuario.
- **test/analyzer.spec.js**: Pruebas unitarias para las funciones del analizador.

## Cómo Empezar

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tuusuario/analizador-de-texto.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd analizador-de-texto
    ```

3. Abre `index.html` en tu navegador favorito.

## Pruebas

Para ejecutar las pruebas unitarias, utiliza el siguiente comando:
```bash
npm run test
```

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar esta aplicación, por favor, abre un _pull request_ o crea un _issue_ en GitHub.

---

