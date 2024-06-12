let scene, camera, renderer, box;

function init() {
    // Create the scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    // Create a camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 200;

    // Create a renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('container').appendChild(renderer.domElement);

    // Add lights
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);

    // Draw initial box
    drawBox();
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
    const material = new THREE.MeshPhongMaterial({ color: 0x00ff00, wireframe: false });
    box = new THREE.Mesh(geometry, material);
    scene.add(box);

    // Render the scene
    renderer.render(scene, camera);
}

window.onload = init;
