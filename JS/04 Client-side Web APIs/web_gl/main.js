let scene = new THREE.Scene();

let cam = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
cam.position.z = 5;

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let cube;
let loader = new THREE.TextureLoader();

loader.load('metal003.png', (texture) => {
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2, 2);

  let geometry = new THREE.BoxGeometry(2.4, 2.4, 2.4);
  let material = new THREE.MeshLambertMaterial({
    map: texture, 
    shading: THREE.FlatShading
  });

  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  draw();
});

let light = new THREE.AmbientLight('rgb(255, 255, 255)');
scene.add(light);

let spotLight = new THREE.SpotLight('rgb(255, 255, 255)');
spotLight.position.set(100, 1000, 1000);
spotLight.castShadow = true;
scene.add(spotLight);

function draw() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, cam);

  requestAnimationFrame(draw);
}