import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import astronautScene from "../assets/3d/astronaut.glb";

export function Astronaut() {
  const astronautRef = useRef();

  // Load the 3D model and animations from the provided GLTF file
  const { scene, animations } = useGLTF(astronautScene);

//   // Get access to the animations for the bird
  const { actions } = useAnimations(animations, astronautRef);

useEffect(() => {
    console.log(animations);
    actions["mixamo.com"].play();
  }, [actions]);

  useFrame(({ clock, camera }) => {
    // Update the Y position to simulate bird-like motion using a sine wave
    astronautRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;
  
    // Apply continuous rotation to simulate free floating in space
    astronautRef.current.rotation.y += 0.001; // Adjust the value to control the speed of rotation
  
    // Update the X and Z positions based on the direction of movement
    if (astronautRef.current.position.x > camera.position.x + 10) {
      // Moving backward (rotation direction remains continuous)
      astronautRef.current.position.x -= 0.01;
      astronautRef.current.position.z += 0.01;
    } else if (astronautRef.current.position.x < camera.position.x - 10) {
      // Moving forward (rotation direction remains continuous)
      astronautRef.current.position.x += 0.01;
      astronautRef.current.position.z -= 0.01;
    }
  
    // You can add random rotation variations or apply other axes if you want a more complex floating effect:
    astronautRef.current.rotation.x += 0.005; // Slight rotation around X-axis
    astronautRef.current.rotation.z += 0.003; // Slight rotation around Z-axis
  });




  return (
    // to create and display 3D objects
    <mesh ref={astronautRef} position={[-5, -2, -1]} scale={[0.5, 0.5, 0.5]}>
      {/* // use the primitive element when you want to directly embed a complex 3D
      model or scene */}
      <primitive object={scene} />
    </mesh>
  );
}
