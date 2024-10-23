import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TimerContext } from '../timecontext/TimeContext';
import { motion } from 'framer-motion';
import './analogclock.css';
import Menu from '../menu/Menu';

const AnalogClock = () => {
  const { secondsLeft, totalTime, setTimer } = useContext(TimerContext);
  const [secondDegrees, setSecondDegrees] = useState(0);
  const [minuteDegrees, setMinuteDegrees] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const seconds = secondsLeft % 60;
      setSecondDegrees(360 - (seconds / 60) * 360);

      if (seconds === 0 && secondsLeft !== totalTime) {
        setMinuteDegrees((prevDegrees) => (prevDegrees + 6) % 360);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [secondsLeft, totalTime]);

  const abortTime = () => {
    setTimer(false);
    navigate('/set-timer');
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8 }}
      >
        <Menu />

        <section className="analogClock_container">
          <h1 className='analogClock_header'>interval</h1>
          <section className="analogClock">
            <svg width="278" height="278">
              <g transform="translate(139, 139)">
                {Array.from({ length: 60 }, (_, i) => (
                  <line key={i} x1="0" y1="-95" x2="0" y2="-85" stroke="#222222" strokeWidth="2" transform={`rotate(${i * 6})`} />
                ))}
                <line className="ms" x1="0" y1="0" x2="0" y2="-75" stroke="#555555" strokeWidth="3" transform={`rotate(${minuteDegrees})`} />
                <line className="s" x1="0" y1="0" x2="0" y2="-85" stroke="#555555" strokeWidth="3" transform={`rotate(${secondDegrees})`} />
                <circle cx="0" cy="0" r="5" fill="#555555" />
              </g>
            </svg>
          </section>
          <motion.button
            onClick={abortTime}
            className="analog_button"
            whileHover={{ scale: 1.1, boxShadow: "10px 10px 20px 0px rgba(0,0,0,0.5)" }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2, type: 'spring', stiffness: 200 }}
          >
            ABORT TIMER
          </motion.button>
        </section>
      </motion.section>
    </>
  );
};
export default AnalogClock;
