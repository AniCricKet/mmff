// Declaring global variables
let scene, camera, renderer, box, controls;
let currentColor = '#524b4b'; // Default color for the box

function init() {
    // Create a new Three.js scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    // Create a perspective camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(200, 200, 200); // Set initial camera position

    // Create a WebGL renderer and attach it to the DOM
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight); // Set the renderer size to full window
    document.getElementById('container').appendChild(renderer.domElement); // Add the renderer to the container element

    // Add ambient light for overall illumination
    const ambientLight = new THREE.AmbientLight(0x404040, 1.5); // Ambient light with a soft intensity
    scene.add(ambientLight);

    // Add directional light 1
    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1); // Directional light with full intensity
    directionalLight1.position.set(1, 1, 1).normalize(); // Position the light source
    scene.add(directionalLight1);

    // Add directional light 2
    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1); // Another directional light for better shading
    directionalLight2.position.set(-1, -1, -1).normalize(); // Position the light source
    scene.add(directionalLight2);

    // Add point light for localized lighting
    const pointLight = new THREE.PointLight(0xffffff, 1, 500); // Point light with a radius of 500
    pointLight.position.set(0, 200, 200); // Position the point light
    scene.add(pointLight);

    // Add OrbitControls for interactive camera control
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Enable damping (inertia) for smoother controls
    controls.dampingFactor = 0.25; // Set damping factor
    controls.screenSpacePanning = false; // Disable panning in screen space
    controls.maxPolarAngle = Math.PI; // Allow full vertical rotation

    // Draw the initial box
    drawBox();

    // Start the animation loop
    animate();
}

function drawBox() {
    // Get dimensions from input fields
    const height = document.getElementById('height').value;
    const width = document.getElementById('width').value;
    const length = document.getElementById('length').value;

    // Remove existing box if any
    if (box) {
        scene.remove(box);
    }

    // Create a box geometry with specified dimensions
    const geometry = new THREE.BoxGeometry(width, height, length);
    // Create a material with the current color
    const material = new THREE.MeshPhongMaterial({ color: currentColor, flatShading: true });
    // Create a mesh with the geometry and material
    box = new THREE.Mesh(geometry, material);
    // Add the box to the scene
    scene.add(box);

    // Render the scene from the perspective of the camera
    renderer.render(scene, camera);
}

function setColor(color) {
    // Update the current color
    currentColor = color;
    // If the box exists, update its material color
    if (box) {
        box.material.color.set(color);
    }
}

function animate() {
    // Request the next frame
    requestAnimationFrame(animate);

    // Update the controls for smooth interaction
    controls.update();

    // Render the scene from the perspective of the camera
    renderer.render(scene, camera);
}

// Initialize the scene when the window loads
window.onload = init;