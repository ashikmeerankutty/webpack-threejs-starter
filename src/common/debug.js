import * as dat from 'dat.gui';

const gui = new dat.GUI();

/**
 * Add keys in an object to debug UI. If min, max and step is provided it will render slide controller
 * @param {*} debugObject
 * @param {*} min
 * @param {*} max
 * @param {*} step
 */
export const addDebugUI = (debugObject, key, min, max, step, folder = gui) => {
  folder.add(debugObject, key, min, max, step);
};

/**
 * Add all keys in an object to debug UI. If min, max and step is provided it will render slide controller
 * @param {*} debugObject
 * @param {*} min
 * @param {*} max
 * @param {*} step
 * @param {*} folderName
 */
export const addObjectDebugUI = (debugObject, min, max, step, folderName) => {
  let folder = gui;
  if (folderName) {
    folder = gui.addFolder(folderName);
  }
  Object.keys(debugObject).forEach((key) => {
    addDebugUI(debugObject, key, min, max, step, folder);
  });
};
