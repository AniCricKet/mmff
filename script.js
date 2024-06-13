let scene, camera, renderer, box, controls;
let currentColor = '#00ff00'; // Default color

function init() {
    // Create the scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    // Create a camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(200, 200, 200);

    // Create a renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('container').appendChild(renderer.domElement);

    // Add multiple lights
    const ambientLight = new THREE.AmbientLight(0x404040, 1.5); // Stronger ambient light
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight1.position.set(1, 1, 1).normalize();
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight2.position.set(-1, -1, -1).normalize();
    scene.add(directionalLight2);

    const pointLight = new THREE.PointLight(0xffffff, 1, 500);
    pointLight.position.set(0, 200, 200);
    scene.add(pointLight);

    // Add OrbitControls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI; // Allow full vertical rotation

    // Draw initial box
    drawBox();

    // Animation loop
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

    // Create a box geometry
    const geometry = new THREE.BoxGeometry(width, height, length);
    const material = new THREE.MeshPhongMaterial({ color: currentColor, flatShading: true });
    box = new THREE.Mesh(geometry, material);
    scene.add(box);

    // Render the scene
    renderer.render(scene, camera);
}

function setColor(color) {
    currentColor = color;
    if (box) {
        box.material.color.set(color);
    }
}

function animate() {
    requestAnimationFrame(animate);

    // Update controls
    controls.update();

    // Render the scene
    renderer.render(scene, camera);
}

window.onload = init;