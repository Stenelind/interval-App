import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import TimerContext from '../timecontext/TimeContext';
import { motion } from 'framer-motion';
import './digitalclock.css'
import Menu from '../menu/Menu';

const DigitalClock = () => {
  const { secondsLeft, setTimer } = useContext(TimerContext);
  const navigate = useNavigate();

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

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
        <section className="digitalClock_container">
          <h1 className='digitalClock_header'>interval</h1>
          <h2 className="digitalClock">
            {minutes < 10 ? minutes : String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </h2>
          <motion.button
            onClick={abortTime}
            className="digital_button"
            whileHover={{ scale: 1.1, boxShadow: "10px 10px 20px 0px rgba(0,0,0,0.5)" }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2, type: 'spring', stiffness: 200 }}
          >
            ABORT TIMER
          </motion.button>
        </section>
      </motion.section >
    </>
  );
};

export default DigitalClock;
