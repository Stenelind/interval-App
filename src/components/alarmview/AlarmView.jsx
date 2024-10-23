import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './alarmview.css';

function AlarmView() {
    const navigate = useNavigate();

    const clearTime = () => {
        navigate('/set-timer');
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8 }}
        >
            <section className="alarmView_container">
                <section className="alarmView">
                    <motion.img
                        src="src/assets/alarm-icon.svg"
                        className="alarmView_img"
                        animate={{
                            x: [0, 10, -10, 10, -10, 0],
                            y: [0, 10, -10, 10, -10, 0],
                            transition: { repeat: Infinity, duration: 0.5 }
                        }}
                    />
                </section>
                <motion.h2
                    className="alarmView_header"
                    initial={{ scale: 1 }} 
                    animate={{ scale: 2 }} 
                    transition={{
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 1
                    }}
                >
                    Times up!
                </motion.h2>
                <motion.button
                    className="alarmView_button"
                    onClick={clearTime}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2, type: 'spring', stiffness: 200 }}
                >
                    SET NEW TIMER
                </motion.button>
            </section>
        </motion.section>
    );
};

export default AlarmView;


