// Importing Three.js and GLTFLoader using full URLs from jsDelivr
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.145.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.145.0/examples/jsm/loaders/GLTFLoader.js';

let camera, scene, renderer, joystick;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('joystick-container').appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    loader.load('joystick3D.glb', function (gltf) {
        joystick = gltf.scene;
        joystick.position.set(0, 0, 0);
        scene.add(joystick);
        render();
    });

    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}

init();
