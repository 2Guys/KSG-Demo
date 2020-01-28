import React from 'react';
import * as THREE from 'three'
import Boo from './boo2.png'

class Map extends React.Component {

  componentDidMount() {

  var camera, scene, renderer, geometry, material, mesh, texture, light, controls, booTexture, boos, counter;



  init();
  animate();

  function init() {

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 2, 1000);
      camera.position.z = 975;
      camera.position.x = 70;
      camera.position.y = 100;
      // camera.position.z = 500;
      // camera.position.x = 500;
      // camera.position.y = 500;
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


      booTexture = new THREE.TextureLoader().load(Boo)

      boos = []

      function randomizer() {
        var num = Math.floor(Math.random()*600) + 1;
        num *= Math.floor(Math.random()*2.5) == 1 ? 1 : -1;
        return num;
      }

      for (let i = 0; i < 1000; i++) {
        let booGeometry = new THREE.PlaneGeometry( 50, 55);
        let booMaterial = new THREE.MeshBasicMaterial( { map: booTexture } );
        let booModel= new THREE.Mesh( booGeometry, booMaterial );
        booModel.position.set( randomizer(), randomizer(), randomizer() );
        booModel.material.side = THREE.DoubleSide;
        boos.push( booModel );
      }
      console.log(boos)
      for (let j = 0; j < boos.length; j++) {
        scene.add( boos[j] );
      }

      material = new THREE.MeshLambertMaterial({
        map: texture
      });

      
      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      // COMMENT OUT TO REMOVE CANVAS ELEMENT
      document.body.appendChild(renderer.domElement);
  }

  function animate() {

      for (let k = 0; k < boos.length; k++) {
        let boo = boos[k];
        boo.position.x += 5;
        // boo.position.z -= 0.05
        // boo.translateX(10)
      }

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