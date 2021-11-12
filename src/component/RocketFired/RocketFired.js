import React, { useEffect, useState, useRef } from "react";
import "./RocketFired.css";
const RocketFired = () => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  const iconRef = useRef(null);
  useEffect(() => {
    if (iconRef.current)
      if (offset >= 1000) iconRef.current.style.display = "block";
      else if (offset <= 1000) iconRef.current.style.display = "none";
  }, [offset]);

  return (
    <div>
      <a href="#top">
        <i ref={iconRef} className="material-icons rocket">
          rocket_launch
        </i>
      </a>
    </div>
  );
};

export default RocketFired;
