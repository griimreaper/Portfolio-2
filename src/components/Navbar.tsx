"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navigation = [
        { name: "Home", id: "home" },
        { name: "Projects", id: "projects" },
        { name: "Highlights", id: "highlights" },
        { name: "About Me", id: "about-me" },
        { name: "Contact", id: "contact" },
    ];

    const handleScroll = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
            ${isScrolled || isMenuOpen ? "bg-gray-100 dark:bg-gray-900 shadow-lg " : "bg-transparent dark:bg-transparent"}`}>

            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between h-16 items-center">

                    {/* LOGO / TEXTO */}
                    <div className="flex items-center">
                        <AnimatePresence mode="wait">
                            {!isScrolled ? (
                                <motion.span
                                    key="text"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-2xl font-bold text-gray-800 dark:text-white"
                                >
                                    My Portfolio
                                </motion.span>
                            ) : (
                                <motion.span
                                    key="logo"
                                    className="h-10 w-10 rounded-full whitespace-nowrap text-center items-align h-full text-2xl font-extrabold"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    Leonel Behnke
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Menú Desktop */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => handleScroll(item.id)}
                                className="text-gray-700 text-lg font-mediums hover:text-blue-500 dark:text-white dark:hover:text-blue-400 transition-colors duration-300"
                            >
                                {item.name}
                            </button>
                        ))}
                        <ThemeToggle />
                    </div>

                    {/* Botón Mobile */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 dark:text-white focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Menú Mobile con animación */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-gray-100 dark:bg-gray-900 shadow-lg flex flex-col align-items w-full px-2"
                    >
                        {navigation.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => handleScroll(item.id)}
                                className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition-all duration-200"
                            >
                                {item.name}
                            </button>
                        ))}
                        {/* Sólo renderizamos ThemeToggle en móvil si el menú está abierto */}
                        <div className="w-full text-left px-6 py-3 text-gray-700 dark:text-white">
                            <ThemeToggle />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
