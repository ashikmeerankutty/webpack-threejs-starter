import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const sizes = {};
sizes.width = window.innerWidth;
sizes.height = window.innerHeight;

/**
 * Initializes a basic environment with a scene and a camera
 * @returns scene, camera
 */
export const initializeEnvironment = () => {
  const canvas = document.querySelector('canvas.webgl');

  // Scene
  const scene = new Scene();

  // Camera
  const camera = new PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    100
  );
  camera.position.z = 3;
  scene.add(camera);

  // Renderer
  const renderer = new WebGLRenderer({
    canvas,
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(sizes.width, sizes.height);

  window.addEventListener('resize', () => {
    // Save sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
  });

  return {
    scene,
    camera,
    renderer,
    canvas,
  };
};

/**
 * Enable orbit control for canvas
 * @param {*} camera
 * @param {*} canvas
 */
export const enableOrbitControls = (camera, canvas) => {
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  return controls;
};
