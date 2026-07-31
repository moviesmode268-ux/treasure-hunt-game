import * as THREE from "three";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(200, 200),
    new THREE.MeshStandardMaterial({ color: 0x228B22 })
);

ground.rotation.x = -Math.PI / 2;
scene.add(ground);

const player = new THREE.Mesh(
    new THREE.BoxGeometry(1, 2, 1),
    new THREE.MeshStandardMaterial({ color: 0x0066ff })
);

player.position.y = 1;
scene.add(player);

const light = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(10, 20, 10);
scene.add(light);

const ambient = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambient);

camera.position.set(0, 8, 12);
camera.lookAt(0,0,0);
function animate() {
    requestAnimationFrame(animate);

    camera.lookAt(player.position);

    renderer.render(scene, camera);
}

const loading = document.getElementById("loading");
if (loading) {
    loading.style.display = "none";
}

animate();
