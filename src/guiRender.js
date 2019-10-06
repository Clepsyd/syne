window.onload = function () {

  var gui = new dat.GUI();

  // Create folders
  var cubeFolder = gui.addFolder('Cube');
  var sphereFolder = gui.addFolder('Sphere');
  var tetraFolder = gui.addFolder('Tetra');
  var canvasFolder = gui.addFolder('Canvas');

  //Cube options
  cubeFolder.addColor(cube, 'color').onChange(function () {
    cube.material.color.set(cube.color);
  });










}