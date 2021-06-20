import * as THREE from 'three';

export const sizes = {};
sizes.width = window.innerWidth;
sizes.height = window.innerHeight;

/**
 * Initializes a basic environment with a scene and a camera
 * @returns scene, camera
 */
export const initializeEnvironment = () => {
  // Scene
  const scene = new THREE.Scene();

  // Camera
  const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    100
  );
  camera.position.z = 3;
  scene.add(camera);

  // Renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('.webgl'),
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
  };
};
