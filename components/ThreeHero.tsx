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
    
    // Enable pointer events on the canvas itself
    renderer.domElement.style.pointerEvents = 'auto';
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    
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

    // Mouse interaction for camera and lighting
    let mouseX = 0, mouseY = 0;
    let targetCameraX = 0, targetCameraY = 0;
    let currentCameraX = 0, currentCameraY = 0;
    const cameraStiffness = 0.05;
    
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

      // Update mouse position for camera interaction
      const rect = container.getBoundingClientRect();
      mouseX = (clientX - rect.left) / rect.width;
      mouseY = (clientY - rect.top) / rect.height;

      // Subtle camera movement based on mouse position
      targetCameraX = (mouseX - 0.5) * 0.1;
      targetCameraY = (mouseY - 0.5) * 0.1;

      if (isDragging) {
        if (isDraggingPosition) {
          // Drag sphere position across viewport
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
        const x = mouseX;
        const y = mouseY;

        // Check if hovering near sphere
        const mouseXPos = (x * 2 - 1);
        const mouseYPos = -(y * 2 - 1);
        const distance = Math.sqrt(
          Math.pow(mouseXPos - spherePosition.x, 2) + Math.pow(mouseYPos - spherePosition.y, 2)
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

    // Attach event listeners only to the canvas element, not the entire document
    const canvas = renderer.domElement;
    canvas.addEventListener('mousedown', onPointerDown);
    canvas.addEventListener('mousemove', onPointerMove);
    canvas.addEventListener('mouseup', onPointerUp);
    
    // Touch events - only on canvas
    canvas.addEventListener('touchstart', onPointerDown, { passive: false });
    canvas.addEventListener('touchmove', onPointerMove, { passive: false });
    canvas.addEventListener('touchend', onPointerUp);

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

    let lastTime = 0;
    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime: number) => {
      // Pause animation if page is not visible
      if (document.hidden) {
        raf = requestAnimationFrame(animate);
        return;
      }

      if (currentTime - lastTime >= frameInterval) {
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

        // Spring physics for camera movement
        const velCamX = (targetCameraX - currentCameraX) * cameraStiffness;
        const velCamY = (targetCameraY - currentCameraY) * cameraStiffness;
        currentCameraX += velCamX;
        currentCameraY += velCamY;

        // Apply camera movement
        camera.position.x = currentCameraX;
        camera.position.y = currentCameraY;
        camera.lookAt(0, 0, 0);

        // Dynamic lighting based on mouse position
        const lightIntensity1 = 1.2 + (mouseX - 0.5) * 0.3;
        const lightIntensity2 = 0.8 + (mouseY - 0.5) * 0.2;
        light1.intensity = Math.max(0.5, Math.min(2.0, lightIntensity1));
        light2.intensity = Math.max(0.3, Math.min(1.5, lightIntensity2));

        // Move lights slightly based on mouse
        light1.position.x = 5 + (mouseX - 0.5) * 2;
        light1.position.y = 5 + (mouseY - 0.5) * 2;
        light2.position.x = -5 + (mouseX - 0.5) * 1.5;
        light2.position.z = 2 + (mouseY - 0.5) * 1;

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
        lastTime = currentTime;
      }

      raf = requestAnimationFrame(animate);
    };

    onResize();
    raf = requestAnimationFrame(animate);
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      
      // Remove event listeners from canvas
      const canvas = renderer.domElement;
      if (canvas) {
        canvas.removeEventListener('mousedown', onPointerDown);
        canvas.removeEventListener('mousemove', onPointerMove);
        canvas.removeEventListener('mouseup', onPointerUp);
        canvas.removeEventListener('touchstart', onPointerDown);
        canvas.removeEventListener('touchmove', onPointerMove);
        canvas.removeEventListener('touchend', onPointerUp);
      }
      
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
        pointerEvents: 'none' // Back to 'none' - canvas will handle its own events
      }}
      aria-hidden
    />
  );
}
