import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import ThreeGlobe from "three-globe";
import globeImage from "./../../pages/earth-blue-marble.jpg";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import bumpImage from "./../../pages/earth-topology.png";
import { CSS2DRenderer } from "three/addons/renderers/CSS2DRenderer.js";

const MailGlobe = () => {
  const mountRef = useRef(null); // reference to the div

  useEffect(() => {
    // Gen random data
    const N = 100;
    const gData = [...Array(N).keys()].map(() => ({
      lat: (Math.random() - 0.5) * 180,
      lng: (Math.random() - 0.5) * 360,
      size: 7 + Math.random() * 30,
      color: ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
    }));

    const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

    const Globe = new ThreeGlobe()
      .globeImageUrl(globeImage)
      .bumpImageUrl(bumpImage)
      .htmlElementsData(gData)
      .htmlElement((d) => {
        const el = document.createElement("div");
        el.innerHTML = markerSvg;
        el.style.color = d.color;
        el.style.width = `${d.size}px`;
        return el;
      });

    const renderer = new THREE.WebGLRenderer({});
    const twoRenderer = new CSS2DRenderer({});

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    twoRenderer.domElement.style.position = "absolute";
    twoRenderer.domElement.style.top = "0px";
    twoRenderer.domElement.style.pointerEvents = "none";
    twoRenderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(twoRenderer.domElement);

    // new OrbitControls(camera, renderer.domElement);
    const geometry = new THREE.SphereGeometry(2, 128, 128); // Create a sphere geometry for the globe
    const material = new THREE.MeshPhongMaterial({ color: "#87CEEB" }); // Use Phong material for better lighting effects

    const globe = new THREE.Mesh(geometry, material);
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    
    scene.add(Globe);
    scene.add(new THREE.AmbientLight(0xcccccc, Math.PI));
    scene.add(new THREE.DirectionalLight(0xffffff, 0.6 * Math.PI));

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    camera.position.z = 400;
    new OrbitControls(camera, renderer.domElement); // add this

    function onWindowResize() {
      camera.aspect = window.innerWidth / 2 / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth / 2, window.innerHeight);
      twoRenderer.setSize(window.innerWidth / 2, window.innerHeight);
    }
    window.addEventListener("resize", onWindowResize, false);

    function animate() {
      requestAnimationFrame(animate);
      globe.rotation.x += 0.01;
      globe.rotation.y += 0.01;
      renderer.render(scene, camera);
      twoRenderer.render(scene, camera);
    }

    animate();

    return () => {
      window.removeEventListener("resize", onWindowResize, false);
      mountRef.current.removeChild(renderer.domElement);
      mountRef.current.removeChild(twoRenderer.domElement);
      requestAnimationFrame(animate);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full"></div>;
};

export default MailGlobe;
