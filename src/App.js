import { useEffect, useState } from "react";
import './App.css';

const App = () => {
  const [dateTime, setDateTime] = useState({
    time: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString(),
    day: new Date().toLocaleDateString('en-US', { weekday: 'long' })
  });

  useEffect(() => {
    const timerId = setInterval(() => {
      const now = new Date();
      setDateTime({
        time: now.toLocaleTimeString(),
        date: now.toLocaleDateString(),
        day: now.toLocaleDateString('en-US', { weekday: 'long' })
      });
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
  
    <div className="main-container">
      <div className="clock-container">
        <div className="digital-clock">{dateTime.time}</div>
        <div className="date-day">
          <div className="date">
            <i className="fas fa-calendar-day icon"></i> {dateTime.date}
          </div>
          <div className="day">
            <i className="fas fa-sun icon"></i> {dateTime.day}
            <div>digital clock</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;