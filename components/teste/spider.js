import React from 'react';

const SpiderWeb = () => {
  const width = 500;
  const height = 500;
  const centerX = width / 2;
  const centerY = height / 2;
  const numRadialLines = 12;
  const numConcentricCircles = 3;
  const maxRadius = Math.min(centerX, centerY) - 20; // Lasă puțin spațiu la margini
  const circleRadius = 5; // Dimensiunea cercurilor la intersecții

  // Generăm punctele pentru liniile radiale
  const radialLines = Array.from({ length: numRadialLines }, (_, i) => {
    const angle = (i / numRadialLines) * 2 * Math.PI;
    const x = centerX + maxRadius * Math.cos(angle);
    const y = centerY + maxRadius * Math.sin(angle);
    return { x, y };
  });

  // Generăm punctele pentru liniile concentrice
  const concentricCircles = Array.from({ length: numConcentricCircles }, (_, i) => {
    const radius = ((i + 1) / numConcentricCircles) * maxRadius;
    return radius;
  });

  return (
    <svg width={width} height={height} style={{ border: '1px solid #ddd' }}>
      {/* Linii radiale */}
      {radialLines.map((point, index) => (
        <line
          key={`radial-${index}`}
          x1={centerX}
          y1={centerY}
          x2={point.x}
          y2={point.y}
          stroke="black"
        />
      ))}

      {/* Cercuri concentrice */}
      {concentricCircles.map((radius, index) => (
        <circle
          key={`concentric-${index}`}
          cx={centerX}
          cy={centerY}
          r={radius}
          fill="none"
          stroke="black"
        />
      ))}

      {/* Cercuri la intersecții */}
      {concentricCircles.flatMap((radius, i) => 
        radialLines.map((line, j) => {
          const angle = (j / numRadialLines) * 2 * Math.PI;
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);
          return (
            <circle
              key={`intersection-${i}-${j}`}
              cx={x}
              cy={y}
              r={circleRadius}
              fill="black"
            />
          );
        })
      )}
    </svg>
  );
};

export default SpiderWeb;
