# 3D Box Generator

This project is a simple web application that allows users to generate a 3D box with specified dimensions, which can be rotated to view from different angles using mouse controls.

## Features

- Create a 3D box with customizable dimensions (height, width, length).
- Change the color of the box by clicking on color circles representing various colors.
- Rotate the box to view it from different angles using OrbitControls.

## [Demo](https://anicricket.github.io/mmff/)

## Technologies Used

- HTML
- CSS
- JavaScript
- [Three.js](https://threejs.org/) - a JavaScript library for creating 3D graphics in the browser.


### Files

- `index.html`: The main HTML file that contains the structure of the web page.
- `style.css`: The CSS file that contains the styles for the web page.
- `script.js`: The JavaScript file that contains the logic for creating and interacting with the 3D box.

### Code Overview

- **HTML**: Contains input fields for dimensions, color circles for selecting the box color, and a container for rendering the 3D scene.
- **CSS**: Styles the web page, including the color circles and layout.
- **JavaScript**: 
  - Initializes the Three.js scene, camera, renderer, and controls.
  - Defines functions for drawing the box and changing its color.
  - Animates the scene to allow interactive rotation.


## Acknowledgements

- [Three.js](https://threejs.org/) for the awesome 3D library.
- [OrbitControls](https://threejs.org/docs/#examples/en/controls/OrbitControls) for enabling easy camera control.
