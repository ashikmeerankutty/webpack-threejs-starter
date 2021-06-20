import './styles/index.scss';
import * as THREE from 'three';
import { initializeEnvironment } from './common/base';

const { scene, renderer, camera } = initializeEnvironment();

const cubeGeometry = new THREE.BoxBufferGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshNormalMaterial();

const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

scene.add(cube);

/**
 * Update scene on every frams
 */
const loop = () => {
  // Update
  cube.rotation.y += 0.01;

  // Render
  renderer.render(scene, camera);

  // Keep looping
  window.requestAnimationFrame(loop);
};
loop();
