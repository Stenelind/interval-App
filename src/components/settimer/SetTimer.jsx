import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TimerContext from '../timecontext/TimeContext';
import { motion } from 'framer-motion';
import './settimer.css';
import Menu from '../menu/Menu';

const SetTimer = () => {
    const [minutes, setMinutes] = useState(1);
    const navigate = useNavigate();
    const { startTimer } = useContext(TimerContext);

    const increaseMinutes = () => {
        setMinutes(prevMinutes => prevMinutes + 1);
    };

    const decreaseMinutes = () => {
        setMinutes(prevMinutes => (prevMinutes > 1 ? prevMinutes - 1 : 1));
    };

    const startTimerButton = () => {
        startTimer(minutes);
        navigate('/analog-clock');
    };

    return (
        <>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.8 }}
            >
                <Menu />
                <section className="setTimer_container">

                    <section className='setTimer_row'>
                        <section className="decrement" onClick={decreaseMinutes}>
                            <motion.img
                                src='src/assets/decrement.svg'
                                alt="Decrease"
                                className="decrement_img"
                                whileHover={{ scale: 1.3 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            />
                        </section>

                        <section className="minutes">
                            <h2 className="setTimer_number">{minutes}</h2>
                            <h3 className="setTimer_minutes">minutes</h3>
                            <motion.button
                                className="startTimer"
                                onClick={startTimerButton}
                                whileHover={{ scale: 1.1, boxShadow: "10px 10px 20px 0px rgba(0,0,0,0.5)" }} 
                                whileTap={{ scale: 0.9 }}
                                transition={{ duration: 0.2, type: 'spring', stiffness: 200 }}
                            >
                                START TIMER
                            </motion.button>
                        </section>
                        <section className="increment" onClick={increaseMinutes}>
                            <motion.img
                                src='src/assets/increment.svg'
                                alt="Increase"
                                className="increment_img"
                                whileHover={{ scale: 1.3 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            />
                        </section>
                    </section>
                </section>
            </motion.section>
        </>
    );
};

export default SetTimer;
