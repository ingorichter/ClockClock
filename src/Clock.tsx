import React from "react";
import { ReactNode } from "react";

export type ClockProps = {
    second: number;
    minute: number;
    hour: number;
};

export default function Clock(clockProps: ClockProps) {
    const { second, minute, hour } = clockProps;
  const renderTicks = () => {
    const lines: ReactNode[] = [];

    // hours
    for (let minute = 0; minute <= 55; minute += 5) {
      lines.push(
        <line
          key={minute}
          className="major"
          y1="35"
          y2="45"
          transform={`rotate(${30 * minute})`}
        />
      );

      for (let offset = 1; offset <= 4; offset++) {
        lines.push(
          <line
            key={minute-offset}
            className="minor"
            y1="42"
            y2="45"
            transform={`rotate(${6 * (minute + offset)})`}
          />
        );
      }
    }

    return lines;
  };

  return (
    <svg viewBox="-50 -50 100 100">
      <circle className="clock-face" r="48" />
      {/* render all the ticks */}
      {renderTicks().map((line: ReactNode) => line)}

      {/* hour hand */}
      <line
        className="hour"
        y1="2"
        y2="-20"
        transform={`rotate(${30 * (hour % 12) + (minute / 2)})`}
      />
      {/* minute hand */}
      <line
        className="minute"
        y1="4"
        y2="-30"
        transform={`rotate(${6 * minute + second / 10})`}
      />

      {/* second hand */}
      <g transform={`rotate(${6 * second})`}>
        <line className="second" y1="10" y2="-38" />
        <line className="second-counterweight" y1="10" y2="2" />
      </g>
    </svg>
  );
}
