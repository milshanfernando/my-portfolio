import { Canvas } from "@react-three/fiber";
import Particles from "./Particles";

const HeroExperience = () => {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 25 }}>
      <Particles count={1000} />
    </Canvas>
  );
};

export default HeroExperience;
