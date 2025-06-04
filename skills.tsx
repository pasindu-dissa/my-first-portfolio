'use client';

import React, { useEffect, useState, useMemo, useRef } from "react";

// Define the interface for each progress bar's configuration
interface ProgressBarConfig {
  percentage: number;
  gradientColors?: string[];
  customText?: string;
}

// Define the props interface for TypeScript
interface CircularProgressBarProps {
  id: string;
  progressBars?: ProgressBarConfig[];
  size?: number;
  strokeWidth?: number;
  animationDuration?: number;
  clockwise?: boolean;
  backgroundTrackColor?: string;
  staggerDelay?: number; // New prop for staggering animations
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  id,
  progressBars = [{ percentage: 65 }],
  size = 200,
  strokeWidth = 15,
  animationDuration = 1000,
  clockwise = true,
  backgroundTrackColor = "#E5E7EB",
  staggerDelay = 200 // Default stagger delay of 200ms between progress bars
}) => {
  const [currentPercentages, setCurrentPercentages] = useState<number[]>(
    progressBars.map(() => 0)
  );
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  // Validate percentage inputs
  const validatedPercentages = useMemo(() => {
    return progressBars.map((bar) => Math.min(Math.max(bar.percentage, 0), 100));
  }, [progressBars]);

  // Calculate SVG parameters
  const center = size / 2;
  const baseRadius = (size - strokeWidth) / 2;
  const radiusStep = strokeWidth + 5;

  // Generate unique gradient IDs for each progress bar
  const gradientIds = useMemo(
    () => progressBars.map((_, index) => `gradient-${id}-${index}`),
    [id, progressBars.length]
  );

  useEffect(() => {
    if (hasAnimated.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hasAnimated.current = true;
          progressBars.forEach((_, index) => {
            setTimeout(() => {
              setCurrentPercentages((prev) => {
                const newPercentages = [...prev];
                newPercentages[index] = validatedPercentages[index];
                return newPercentages;
              });
            }, index * staggerDelay);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [validatedPercentages, staggerDelay, progressBars.length]);

  return (
    <div ref={ref} className="relative inline-flex mr-10 mb-10 items-center justify-center">
      <svg
        width={size}
        height={size}
        className="transform transition-transform duration-300 hover:scale-105"
      >
        <defs>
          {progressBars.map((bar, index) => (
            <linearGradient
              key={gradientIds[index]}
              id={gradientIds[index]}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              {(bar.gradientColors || ["#3B82F6", "#10B981"]).map(
                (color, colorIndex) => (
                  <stop
                    key={colorIndex}
                    offset={`${
                      (colorIndex / ((bar.gradientColors?.length || 2) - 1)) * 100
                    }%`}
                    stopColor={color}
                  />
                )
              )}
            </linearGradient>
          ))}
        </defs>

        {/* Background Tracks */}
        {progressBars.map((_, index) => {
          const radius = baseRadius - index * radiusStep;
          return (
            <circle
              key={`bg-${index}`}
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke={backgroundTrackColor}
              strokeWidth={strokeWidth}
              className="dark:opacity-20"
            />
          );
        })}

        {/* Progress Circles */}
        {progressBars.map((bar, index) => {
          const radius = baseRadius - index * radiusStep;
          const circumference = 2 * Math.PI * radius;
          const strokeDashoffset =
            circumference - (currentPercentages[index] / 100) * circumference;

          const progressStyle: React.CSSProperties = {
            strokeDasharray: circumference,
            strokeDashoffset: strokeDashoffset,
            transition: `stroke-dashoffset ${animationDuration}ms ease-in-out`,
            transform: clockwise ? "rotate(-90deg)" : "rotate(90deg)",
            transformOrigin: "center"
          };

          return (
            <circle
              key={`progress-${index}`}
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke={`url(#${gradientIds[index]})`}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              style={progressStyle}
              role="progressbar"
              aria-valuenow={currentPercentages[index]}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          );
        })}
      </svg>

      {/* Centered Text (shows text for the innermost progress bar) */}
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-gray-700 dark:text-gray-300">
          {progressBars[0]?.customText || `${currentPercentages[0]}%`}
        </span>
      </div>
    </div>
  );
};

export default CircularProgressBar;