"use client";
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeHero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(DPR);
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(1.05, 1);
    const material = new THREE.MeshStandardMaterial({
      color: 0xE91E63, // Updated accent color
      metalness: 0.4,
      roughness: 0.1,
      wireframe: false
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Enhanced lighting with new colors
    const light1 = new THREE.PointLight(0xF8EDF7, 1.2);
    light1.position.set(5, 5, 5);
    scene.add(light1);
    
    const light2 = new THREE.PointLight(0xE91E63, 0.8);
    light2.position.set(-5, -5, 2);
    scene.add(light2);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xB8A5C0, 0.3);
    scene.add(ambientLight);

    let raf = 0;
    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    };

    // Enhanced interaction variables for viewport dragging
    let spherePosition = { x: 0, y: 0 }; // Sphere position in viewport
    let targetSpherePosition = { x: 0, y: 0 };
    let targetRX = 0, targetRY = 0;
    let currentRX = 0, currentRY = 0;
    let autoRotationY = 0;
    let isDragging = false;
    let isDraggingPosition = false;
    let lastMouseX = 0, lastMouseY = 0;
    const damping = 0.08;
    const stiffness = 0.3;
    const positionStiffness = 0.15;
    const autoRotationSpeed = 0.005;
    
    // Mouse/touch interaction handlers with viewport dragging
    const onPointerDown = (ev: MouseEvent | TouchEvent) => {
      ev.preventDefault();
      isDragging = true;
      const clientX = 'touches' in ev ? ev.touches[0].clientX : ev.clientX;
      const clientY = 'touches' in ev ? ev.touches[0].clientY : ev.clientY;
      lastMouseX = clientX;
      lastMouseY = clientY;
      
      // Check if clicking near the sphere for position dragging
      const rect = container.getBoundingClientRect();
      const mouseX = ((clientX - rect.left) / rect.width) * 2 - 1;
      const mouseY = -((clientY - rect.top) / rect.height) * 2 + 1;
      
      const sphereScreenX = spherePosition.x;
      const sphereScreenY = spherePosition.y;
      const distance = Math.sqrt(
        Math.pow(mouseX - sphereScreenX, 2) + Math.pow(mouseY - sphereScreenY, 2)
      );
      
      if (distance < 0.3) { // Near sphere - drag position
        isDraggingPosition = true;
        document.body.style.cursor = 'grabbing';
      } else { // Away from sphere - rotate
        document.body.style.cursor = 'grabbing';
      }
    };

    const onPointerMove = (ev: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in ev ? ev.touches[0].clientX : ev.clientX;
      const clientY = 'touches' in ev ? ev.touches[0].clientY : ev.clientY;
      
      if (isDragging) {
        if (isDraggingPosition) {
          // Drag sphere position across viewport
          const rect = container.getBoundingClientRect();
          const mouseX = ((clientX - rect.left) / rect.width) * 2 - 1;
          const mouseY = -((clientY - rect.top) / rect.height) * 2 + 1;
          
          targetSpherePosition.x = Math.max(-1.5, Math.min(1.5, mouseX));
          targetSpherePosition.y = Math.max(-1.5, Math.min(1.5, mouseY));
        } else {
          // Rotate sphere
          const deltaX = clientX - lastMouseX;
          const deltaY = clientY - lastMouseY;
          
          targetRY += deltaX * 0.01;
          targetRX -= deltaY * 0.01;
        }
        
        lastMouseX = clientX;
        lastMouseY = clientY;
      } else {
        // Subtle hover effect when not dragging
        const rect = container.getBoundingClientRect();
        const x = (clientX - rect.left) / rect.width;
        const y = (clientY - rect.top) / rect.height;
        
        // Check if hovering near sphere
        const mouseX = (x * 2 - 1);
        const mouseY = -(y * 2 - 1);
        const distance = Math.sqrt(
          Math.pow(mouseX - spherePosition.x, 2) + Math.pow(mouseY - spherePosition.y, 2)
        );
        
        if (distance < 0.3) {
          document.body.style.cursor = 'grab';
        } else {
          document.body.style.cursor = 'default';
        }
        
        // Subtle rotation on hover
        targetRY += (x - 0.5) * 0.02;
        targetRX += (0.5 - y) * 0.02;
      }
    };

    const onPointerUp = () => {
      isDragging = false;
      isDraggingPosition = false;
      document.body.style.cursor = 'default';
    };

    // Global event listeners for viewport-wide interaction
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('mousemove', onPointerMove);
    document.addEventListener('mouseup', onPointerUp);
    
    // Touch events
    document.addEventListener('touchstart', onPointerDown, { passive: false });
    document.addEventListener('touchmove', onPointerMove, { passive: false });
    document.addEventListener('touchend', onPointerUp);

    // Enhanced glow effect with new colors
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xE91E63,
      transparent: true,
      opacity: 0.15,
      wireframe: true
    });
    const glowMesh = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.25, 1),
      glowMaterial
    );
    scene.add(glowMesh);

    const animate = () => {
      // Continuous auto-rotation when not being dragged
      if (!isDragging) {
        autoRotationY += autoRotationSpeed;
      }

      // Spring physics for position movement
      const velPosX = (targetSpherePosition.x - spherePosition.x) * positionStiffness;
      const velPosY = (targetSpherePosition.y - spherePosition.y) * positionStiffness;
      spherePosition.x += velPosX;
      spherePosition.y += velPosY;

      // Spring physics for rotation
      const velRX = (targetRX - currentRX) * stiffness;
      const velRY = (targetRY - currentRY) * stiffness;
      currentRX += velRX;
      currentRY += velRY;
      currentRX *= (1 - damping);
      currentRY *= (1 - damping);
      
      // Apply position to mesh
      mesh.position.x = spherePosition.x;
      mesh.position.y = spherePosition.y;
      
      // Apply rotations with auto-rotation
      mesh.rotation.x = currentRX;
      mesh.rotation.y = currentRY + autoRotationY;
      
      // Update glow mesh position and rotation
      glowMesh.position.x = spherePosition.x;
      glowMesh.position.y = spherePosition.y;
      glowMesh.rotation.x = currentRX * 1.1;
      glowMesh.rotation.y = (currentRY + autoRotationY) * 1.1;
      
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };

    onResize();
    animate();
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('mousemove', onPointerMove);
      document.removeEventListener('mouseup', onPointerUp);
      document.removeEventListener('touchstart', onPointerDown);
      document.removeEventListener('touchmove', onPointerMove);
      document.removeEventListener('touchend', onPointerUp);
      document.body.style.cursor = 'default';
      geometry.dispose();
      material.dispose();
      glowMaterial.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none'
      }}
      aria-hidden
    />
  );
}
