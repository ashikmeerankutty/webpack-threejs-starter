import './styles/index.scss';
import * as THREE from 'three';
import { enableOrbitControls, initializeEnvironment } from './common/base';
import { addObjectDebugUI } from './common/debug';

// Initializes a basic environment
const { scene, renderer, camera, canvas } = initializeEnvironment();

// Enables orbit control
const controls = enableOrbitControls(camera, canvas);

// Create a geometry for cube
const cubeGeometry = new THREE.BoxBufferGeometry(1, 1, 1);

// Create a material for cube
const cubeMaterial = new THREE.MeshNormalMaterial();

// Create a cube mesh
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

// Add cube position and rotation params to debug ui
addObjectDebugUI(cube.position, -3, 3, 0.01, 'Cube Position');
addObjectDebugUI(cube.rotation, -3, 3, 0.01, 'Cube Rotation');

// Add cube to scene
scene.add(cube);

// Update scene on every frame
const updateScene = () => {
  // Update
  cube.rotation.y += 0.01;

  controls.update();

  // Render
  renderer.render(scene, camera);

  // Keep updating
  window.requestAnimationFrame(updateScene);
};
updateScene();
