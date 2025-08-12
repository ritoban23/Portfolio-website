"use client";
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeHero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / 300, 0.1, 100);
    camera.position.z = 3;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  const DPR = Math.min(window.devicePixelRatio || 1, 2);
  renderer.setPixelRatio(DPR);
  renderer.setSize(container.clientWidth, 300, false);
    container.appendChild(renderer.domElement);

  const geometry = new THREE.IcosahedronGeometry(1.05, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0x6366f1, metalness: 0.3, roughness: 0.2, wireframe: false });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    let raf = 0;
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = 300;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    };
    let targetRX = 0, targetRY = 0;
    let currentRX = 0, currentRY = 0;
    const damping = 0.1;
    const stiffness = 0.4;
    
    const onPointerMove = (ev: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (ev.clientX - rect.left) / rect.width; // 0..1
      const y = (ev.clientY - rect.top) / rect.height; // 0..1
      targetRY = (x - 0.5) * 0.8; // yaw
      targetRX = (0.5 - y) * 0.6; // pitch
    };
    container.addEventListener('pointermove', onPointerMove);

    // Add glow effect
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.2,
      wireframe: true
    });
    const glowMesh = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.2, 1),
      glowMaterial
    );
    scene.add(glowMesh);

    const animate = () => {
      // Spring physics for smoother movement
      const velRX = (targetRX - currentRX) * stiffness;
      const velRY = (targetRY - currentRY) * stiffness;
      currentRX += velRX;
      currentRY += velRY;
      currentRX *= (1 - damping);
      currentRY *= (1 - damping);
      
      mesh.rotation.x = currentRX;
      mesh.rotation.y = currentRY;
      
      // Rotate glow mesh slightly faster for visual effect
      glowMesh.rotation.x = currentRX * 1.1;
      glowMesh.rotation.y = currentRY * 1.1;
      
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    onResize();
    animate();
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
  container.removeEventListener('pointermove', onPointerMove);
  geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={ref} style={{height:300, position:'relative'}} aria-hidden />;
}
