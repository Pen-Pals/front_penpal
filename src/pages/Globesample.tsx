import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Globesample = () => {
  const mountRef = useRef(null); // reference to the div

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff); // Set background color to white

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 2 / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({  });
    renderer.setSize(window.innerWidth / 2, window.innerHeight);
    
    mountRef.current.appendChild(renderer.domElement); // append to the div

    new OrbitControls(camera, renderer.domElement);

    const geometry = new THREE.SphereGeometry(2, 128, 128); // Create a sphere geometry for the globe
    const material = new THREE.MeshPhongMaterial({ color: '#87CEEB' }); // Use Phong material for better lighting effects

    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Add some basic lighting
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040));

    function onWindowResize() {
      camera.aspect = (window.innerWidth / 2) / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth / 2, window.innerHeight);
    }
    window.addEventListener("resize", onWindowResize, false);

    function animate() {
      requestAnimationFrame(animate);
      globe.rotation.x += 0.01;
      globe.rotation.y += 0.01;
      renderer.render(scene, camera);
    }

    animate();

    return () => {
      window.removeEventListener("resize", onWindowResize, false);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-1/2 h-full"></div>;
};

export default Globesample;
