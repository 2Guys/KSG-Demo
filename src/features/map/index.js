import React from 'react';
import * as THREE from 'three'

class Map extends React.Component {

  componentDidMount() {


    var camera, scene, renderer, geometry, 
material, mesh, texture, light, controls;

init();
animate();

function init() {

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 2, 10000);
    camera.position.z = 975;
    camera.position.x = 70;
    camera.position.y = 100;
    camera.lookAt(scene.position);
    scene.add(camera);

     
    
    light = new THREE.DirectionalLight(0xE0E0FF, 1.5);
    light.position.set(10, 100, 100);
    scene.add(light);


    geometry = new THREE.PlaneGeometry(10000, 10000, 1000, 1);
    geometry.rotateX(-Math.PI / 2);

    THREE.ImageUtils.crossOrigin = '';
    texture = THREE.ImageUtils.loadTexture('https://errvald.github.io/images/post/floor-texture.png');
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(45, 45);

    material = new THREE.MeshLambertMaterial({
      map: texture
    });


    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}

function animate() {
    requestAnimationFrame(animate);
    render();
}

function render() {
    texture.offset.y += .01;
    renderer.render(scene, camera);
}
  }

  render() {
    return ( 
      <div/>
    );
  }

}

export default Map;