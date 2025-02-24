"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

interface TextHoverEffectProps {
  text: string;
  duration?: number;
}

const TextHoverEffect: React.FC<TextHoverEffectProps> = ({
  text,
  duration = 0.3,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const svgRectRef = useRef<DOMRect | null>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    const updateSvgRect = () => {
      if (svgRef.current) {
        svgRectRef.current = svgRef.current.getBoundingClientRect();
      }
    };

    updateSvgRect();
    window.addEventListener("resize", updateSvgRect);
    return () => window.removeEventListener("resize", updateSvgRect);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    setCursor({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    if (svgRectRef.current) {
      const { left, top, width, height } = svgRectRef.current;
      const cxPercentage = ((cursor.x - left) / width) * 100;
      const cyPercentage = ((cursor.y - top) / height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className="select-none"
    >
      <defs>
        <radialGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          r="15%"
        >
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="40%" stopColor="#FF4500" />
          <stop offset="80%" stopColor="#FF1493" />
          <stop offset="100%" stopColor="#8A2BE2" />
        </radialGradient>

        <mask id="textMask">
          <motion.rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
            initial={{ cx: "50%", cy: "50%" }}
            animate={{ cx: maskPosition.cx, cy: maskPosition.cy }}
            transition={{ duration, ease: "easeOut" }}
          />
        </mask>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="12%"
          cx={maskPosition.cx}
          cy={maskPosition.cy}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
      </defs>

      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.5"
        className="font-[helvetica] font-bold stroke-neutral-200 dark:stroke-neutral-800 fill-transparent text-6xl"
        style={{ opacity: hovered ? 0.9 : 0 }}
      >
        {text}
      </text>

      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.5"
        className="font-[helvetica] font-bold fill-transparent text-6xl stroke-neutral-200 dark:stroke-neutral-800"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{ strokeDashoffset: 0, strokeDasharray: 1000 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      >
        {text}
      </motion.text>

      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.5"
        mask="url(#textMask)"
        className="font-[helvetica] font-bold fill-transparent text-6xl"
      >
        {text}
      </text>
    </svg>
  );
};

export default TextHoverEffect;
