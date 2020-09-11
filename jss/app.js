///SETUP///
let x = 0
let xD = 0.05
let yD = 0.05
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(65, window.innerWidth/ window.innerHeight, 0.1, 1000); 
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);  

///ACTUAL///
let geometry = new THREE.BoxGeometry();
let material = new THREE.MeshBasicMaterial( {color: "#0a6fb6"} );
let cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z=5;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.03;
    cube.rotation.y += 0.03;
    renderer.render(scene, camera);
    if (cube.position.x >=6 || cube.position.x <= -6){
        xD =- xD; 
    }    
    cube.position.x = cube.position.x + xD;
    if (cube.position.y >=2.5 || cube.position.y <= -2.5){
        yD = -yD ;      
    }
    if (cube.position.y >=2.5 || cube.position.y <= -2.5){
        cube.material.color.set("#b63e0a");     
    }
    if (cube.position.x >=6 || cube.position.x <= -6){
        cube.material.color.set("#0ab649");;

    }  
    cube.position.y = cube.position.y + yD;
}
animate();