import React from "react";
import styles from "../../../styles/comps/AnimatedCubes.module.scss";

const AnimatedCubes = () => {
  // Definim dimensiunile SVG-ului
  const width = 1920;
  const height = 1080;

  // Generăm 7 cuburi cu poziții și culori aleatorii
  const cubes = Array.from({ length: 7 }, (_, i) => ({
    id: i,
    size: 100,
    x: Math.random() * (width - 100),
    y: Math.random() * (height - 100),
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
  }));

  return (
    <svg
      className={styles.svg}
      width={width}
      height={height}
    >
      {cubes.map((cube) => (
        <rect
          key={cube.id}
          x={cube.x}
          y={cube.y}
          width={cube.size}
          height={cube.size}
          fill={cube.color}
          // className={`cube cube-${cube.id}`} // Adăugăm clase dinamice pentru animare
          // className={styles.cube + " " + `styles.cube-${cube.id}` }
          className={styles.cube + " " + styles.cube + `-${cube.id}`}
        />
      ))}
    </svg>
  );
};

export default AnimatedCubes;
