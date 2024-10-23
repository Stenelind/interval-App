import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './menu.css';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <>
            <motion.img
                src={!isOpen ? 'src/assets/navicon-black.svg' : 'src/assets/navicon.svg'}
                alt="Menu Icon"
                className="menu_hamburger"
                onClick={toggleMenu}
                whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
            />
            <motion.section className={`menu ${isOpen ? 'open' : ''}`}
                initial={{ x: '-100vw', opacity: 0 }}  
                animate={{ x: isOpen ? 0 : '-100vw', opacity: isOpen ? 1 : 0 }}  
                transition={{ duration: 0.8 }}
            >
                <ul className="menu_links">
                    <motion.li
                        whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
                        transition={{ duration: 0.5, delay: isOpen ? 0.2 : 0 }}
                    >
                        <Link to="/digital-clock" onClick={toggleMenu}>Digital Timer</Link>
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
                        transition={{ duration: 1, delay: isOpen ? 0.6 : 0 }}
                    >
                        <Link to="/analog-clock" onClick={toggleMenu}>Analog Timer</Link>
                    </motion.li>
                </ul>
            </motion.section>

        </>
    );
};

export default Menu;
