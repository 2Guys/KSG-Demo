import React from 'react';
import * as THREE from 'three'
import Boo from './boo'

class Map extends React.Component {

  componentDidMount() {


    var camera, scene, renderer, geometry, 
material, mesh, texture, light, controls, booGeometry, booMaterial, booTexture, booMesh;

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


    // booTexture = new THREE.TextureLoader().load(Boo)

    var boos = []

    function getRandom() {
      var num = Math.floor(Math.random()*10) + 1;
      num *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
      return num;
    }

    for (let i = 0; i < 200; i++) {
      booGeometry = new THREE.PlaneGeometry( 500, 500 );
      booMaterial = new THREE.MeshBasicMaterial( { map: booTexture } );
    }

    material = new THREE.MeshLambertMaterial({
      map: texture
    });

    
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    booMesh = new THREE.Mesh(booGeometry, booMaterial)
    booMesh.position.set(getRandom(), getRandom(), getRandom())
    booMesh.material.side = THREE.DoubleSide
    
    boos.push(booMesh)

    for (let j = 0 ; j < boos.length ; j++ ) {
      scene.add( boos[j] )
    }

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