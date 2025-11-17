import { Html, useProgress } from "@react-three/drei";

const Loder = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <p
        style={{
          color: "white",
          fontSize: 14,
          fontWeight: 800,
          fontFamily: "monospace",
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loder;
