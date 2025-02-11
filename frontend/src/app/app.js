export class App {
scene = new THREE.Scene();
camera = Camera();
renderer = Renderer();
helpers = Helpers(camera, renderer);
guitar = new Guitar(scene, camera);
uiControler = new UiController(guitar);
isLoading = false;

 textureLoader = new THREE.TextureLoader();
 lightPositions = [
  [0, 0, 8],
  [0, 0, -8],
  [-9.947420066907123, -1.019879765564146, -0.09316263352782056],
  [9.981306658855566, -0.4765927811330809, 0.3825920841538427],
  [-0.1268484876457273, -5.6404379973057175, 0.7229959592571308],
];

constructor(){
	this.initLight()
}

initLight(){
	this.lightPositions.forEach(([x, y, z]) => {
		light = new Light().initDirectionalLight(x, y, z);
	   scene.add(light);
	 });
}


cameraControls(camera);
// windowResizeHandler(renderer);
window.addEventListener(
  "resize",
  () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
  },
  false
);

export function render() {
  renderer.setClearColor(0x2b2b2b, 1);
  renderer.render(scene, camera);
}

// scene.add(helpers.axesHelper);

// my first shader

 vertexShader = `
`;

 fragmentShader = `
`;

 uniforms = {
  time: { value: 0 },
  resolution: {
    value: new THREE.Vector2(window.innerWidth, window.innerHeight),
  },
};

 material = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,
  uniforms,
  side: THREE.DoubleSide,
  depthWrite: false,
});

 geometry = new THREE.PlaneGeometry(30, 30);
 mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

function animate() {
  requestAnimationFrame(animate);
  console.log(`Camera Position:
    x: ${camera.position.x}
    y: ${camera.position.y}
    z: ${camera.position.z}`);
  helpers.controls.update();
  uniforms.time.value = performance.now() * 0.001; // Przekazuje czas w sekundach
  render();
}
animate();

}
