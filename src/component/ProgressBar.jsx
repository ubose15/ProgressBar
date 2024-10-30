import React, { useState, useEffect } from "react";

const ProgressBar = ({ value = 0 }) => {
  const [percent, setPercent] = useState(value);
  useEffect(() => {
    setPercent(Math.min(100, Math.max(0, value)));
  }, [value]);
  return (
    <div className="progressbar" >
      <span style={{color: percent>50 ?"white":"black"}}>{percent}%</span>
      <div style={{width:`${percent.toFixed()}%`}}/>
    </div>
  );
};

export default ProgressBar;
