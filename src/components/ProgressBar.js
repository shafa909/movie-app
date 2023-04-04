import React, { useEffect, useState } from "react";
import "./progressBar.css";

const ProgressBar = ({
  label,
  backgroundColor = "#394b61",
  visualParts = [
    {
      percentage: "0%",
      color: "white",
    },
  ],
}) => {
  const [widths, setWidths] = useState(
    visualParts.map(() => {
      return 0;
    })
  );

  useEffect(() => {
    requestAnimationFrame(() => {
      setWidths(
        visualParts.map((item) => {
          return item.percentage;
        })
      );
    });
  }, [visualParts]);

  return (
    <div className="progress-main">
      <div
        className="progressVisualFull"
        // to change the background color dynamically
        style={{
          borderRadius: 2,
          backgroundColor,
        }}
      >
        {visualParts.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                width: widths[index],
                borderRadius: 2,
                backgroundColor: item.color,
              }}
              className="progressVisualPart"
            />
          );
        })}
      </div>
      <div className="progressLabel">{label}</div>
    </div>
  );
};

export default ProgressBar;
