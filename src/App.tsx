import { useEffect, useState } from 'react'
import './App.css'
import Clock from './Clock'
import React from 'react';

function App() {
  const [second, setSecond] = useState(10);
  const [minute, setMinute] = useState(2);
  const [hour, setHours] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date();
      setSecond(time.getSeconds());
      setMinute(time.getMinutes());
      setHours(time.getHours());
      // console.log(`From App: ${second}:${minute}:${hour}`, time);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [second, minute, hour]);

  return (
    <>
      <div className="clock-container">
        {Array.from({ length: 20 * 8 }).map((_, i) => (
          <Clock
            key={i}
            second={second}
            minute={minute}
            hour={hour}
          />
        ))}
      </div>
    </>
  )
}

export default App