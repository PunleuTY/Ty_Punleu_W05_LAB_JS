import React, { useState, useEffect } from "react";

function Time() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="block">
      <h2>The date now is:</h2>
      <p style={{ fontSize: "1.5rem", color: "#48d9f3" }}>{time}</p>
    </div>
  );
}

export default Time;
