// create scene
const scene = new THREE.Scene();
// create perspective camera, with 75 vertical fov, aspect ratio equal to window size, near plane .1, far plane 100
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// creat webGL renderer and set size to window, then hook up the renderer to the scene
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0xffffff, .1 );
document.body.appendChild( renderer.domElement );

// when the page resizes, update the renderer and aspect ratio to reflect new size
window.addEventListener( 'resize', function( )
			 {
			     var width = window.innerWidth;
			     var height = window.innerHeight;
			     renderer.setSize( width, height );
			     camera.aspect = width / height;
			     camera.updateProjectionMatrix( );
			 } );

// create box geometry
const geometry = new THREE.BoxGeometry();
// create material for geometry, just green
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// creates cube using geometry and material
const cube = new THREE.Mesh( geometry, material );
// add cube to scene
scene.add( cube );
// set camera position so it can see the cube
camera.position.z = 5;

// animation function that runs every frame
const animate = function () {
  requestAnimationFrame( animate );

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render( scene, camera );
};

// run animate
animate();
