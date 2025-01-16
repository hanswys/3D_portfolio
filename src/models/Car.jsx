import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import flyingCarScene from "../assets/3d/car2.glb";

export function Car() {
  const carRef = useRef();

  // Load the 3D model and animations from the provided GLTF file
  const { scene, animations } = useGLTF(flyingCarScene);

//   // Get access to the animations for the bird
  const { actions } = useAnimations(animations, carRef);

//   // Play the "Take 001" animation when the component mounts
//   // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  useEffect(() => {
    actions["Take 01"].play();
  }, []);

  useFrame(({ clock, camera }) => {
    // Update the Y position to simulate bird-like motion using a sine wave
    carRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    // Check if the bird reached a certain endpoint relative to the camera
    if (carRef.current.position.x > camera.position.x + 10) {
      // Change direction to backward and rotate the bird 180 degrees on the y-axis
      carRef.current.rotation.y = Math.PI;
    } else if (carRef.current.position.x < camera.position.x - 10) {
      // Change direction to forward and reset the bird's rotation
      carRef.current.rotation.y = 0;
    }

    // Update the X and Z positions based on the direction
    if (carRef.current.rotation.y === 0) {
      // Moving forward
      carRef.current.position.x += 0.01;
      carRef.current.position.z -= 0.01;
    } else {
      // Moving backward
      carRef.current.position.x -= 0.01;
      carRef.current.position.z += 0.01;
    }
  });


  return (
    // to create and display 3D objects
    <mesh ref={carRef} position={[-5, 2, 1]} scale={[0.5, 0.5, 0.5]}>
      {/* // use the primitive element when you want to directly embed a complex 3D
      model or scene */}
      <primitive object={scene} />
    </mesh>
  );
}
