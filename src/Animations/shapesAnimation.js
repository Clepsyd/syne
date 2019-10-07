const sphere1 = new Sphere(150, -500, 0, 0, scene);
const cube1 = new Cube(200, 200, 200, 0, 0, 0, scene);
const tetra1 = new Tetra(200, 500, 0, 0, scene);

let sphereScale = 1;
let cubeScale = 1;
let tetraScale = 1;
let timerThing;

function mainLoop(){
  if (analyser) {
    sphereScale = AudioTool.getBassScale(analyser);
    cubeScale = AudioTool.getMidScale(analyser);
    tetraScale = AudioTool.getTrebleScale(analyser);
  }

  sphere1.changeScale(sphereScale);
  cube1.changeScale(cubeScale);
  tetra1.changeScale(tetraScale);
  sphere1.shape.rotation.z += 0.01;
  cube1.shape.rotation.x += 0.01;
  cube1.shape.rotation.y += 0.01;
  tetra1.shape.rotation.x += 0.01;
  tetra1.shape.rotation.y += 0.01;
  if (timerThing < 1500 ) {
        camera.position.z -= 3.9;
        camera.position.x -= 3.9;
        camera.rotation.y -= 0.003;
        timerThing +=3;
        console.log(timerThing);
      } else if (timerThing >= 1500 && timerThing < 3000 ) {
        camera.position.z -= 3.9;
        camera.position.x += 3.9;
        camera.rotation.y -= 0.003;
        timerThing+=3;
        console.log(timerThing);
      } else if (timerThing >= 3000 && timerThing < 4500 ) {
        camera.position.z += 3.9;
        camera.position.x += 3.9;
        camera.rotation.y -= 0.003;
        timerThing+=3;
        console.log(timerThing);
      } else if (timerThing >= 4500 && timerThing < 6000) {
        camera.position.z += 3.9;
        camera.position.x -= 3.9;
        camera.rotation.y -= 0.003;
        timerThing+=3;
        console.log(timerThing);
      } else {
        timerThing = 0;
      }
  renderer.render(scene, camera);
  requestAnimationFrame(mainLoop);
}
mainLoop();