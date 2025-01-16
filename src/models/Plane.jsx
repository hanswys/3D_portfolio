import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import planeScene from "../assets/3d/drifter.glb";

// 3D Model from: https://sketchfab.com/3d-models/stylized-ww1-plane-c4edeb0e410f46e8a4db320879f0a1db
export function Plane({ isRotating, ...props }) {
  const ref = useRef();
  // Load the 3D model and its animations
  const { scene, animations } = useGLTF(planeScene);
  // Get animation actions associated with the plane
  const { actions } = useAnimations(animations, ref);

  // Use an effect to control the plane's animation based on 'isRotating'
  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  useEffect(() => {
    if (isRotating) {
      const animation = actions["Car engine"]; // Access the getter directly
      if (animation) {
        animation.play();
      } else {
        console.error("Animation 'floating' not found.");
      }
    } else {
      const animation = actions["Car engine"]; // Access the getter directly
      if (animation) {
        animation.stop();
      } else {
        console.error("Animation 'floating' not found.");
      }
      

    }
    console.log(actions);
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={ref}>
      // use the primitive element when you want to directly embed a complex 3D
      model or scene
      <primitive object={scene} />
    </mesh>
  );
}
