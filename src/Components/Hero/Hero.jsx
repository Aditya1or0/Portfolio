import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Model = ({ onLoaded }) => {
  const { scene, isLoading } = useGLTF("/gaming_laptop.glb");
  useEffect(() => {
    if (!isLoading) {
      onLoaded(); // Notify that loading is complete
    }
  }, [isLoading, onLoaded]);

  const [scale, setScale] = useState(1.5);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale(0.5); // Scale down for mobile
      } else {
        setScale(1.5); // Scale up for larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  scene.scale.set(1, 1, 1);
  scene.position.set(0, -0.8, 0);
  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  return <primitive object={scene} />;
};

const Hero = () => {
  const [loading, setLoading] = useState(true);

  const handleLoaded = () => {
    setLoading(false); // Setting loading to false when the model is fully loaded
  };
  return (
    <div className="hero">
      {loading && (
        <div className="loading-screen ">
          <h2>
            Loading <span>...</span>
          </h2>
        </div>
      )}
      <Canvas
        style={{ height: "400px", width: "100%" }}
        shadows
        camera={{ position: [0, 1, 5], fov: 50 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        {/* Use a preset environment temporarily for testing */}
        <Environment preset="sunset" /> {/* This uses a built-in preset */}
        <Model onLoaded={handleLoaded} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
      <h1>
        <span>Hi, I'm Aditya Sharma</span>
      </h1>
      <p>
        I'm a Mern Stack Developer with a passion for creating dynamic and
        responsive websites.
      </p>
      <div className="hero-action">
        <AnchorLink className="anchor-link" href="#contact">
          <div className="hero-connect">Connect with me</div>
        </AnchorLink>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
