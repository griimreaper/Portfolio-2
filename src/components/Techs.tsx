import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import {
    SiNextdotjs,
    SiNestjs,
    SiPostgresql,
    SiSequelize,
    SiReact,
    SiRedux,
    SiVercel,
    SiNodedotjs,
    SiExpress,
    SiTailwindcss,
    SiTypescript,
    SiJest,
} from "react-icons/si"; // I

const techIcons = [
    { icon: <SiNextdotjs className="w-10 h-10 text-gray-700 dark:text-white" />, name: "Next.js" },
    { icon: <SiTailwindcss className="w-10 h-10 text-blue-400" />, name: "Tailwind CSS" },
    { icon: <SiReact className="w-10 h-10 text-blue-400" />, name: "React" },
    { icon: <SiRedux className="w-10 h-10 text-purple-500" />, name: "Redux" },
    { icon: <SiNestjs className="w-10 h-10 text-red-600" />, name: "NestJS" },
    { icon: <SiPostgresql className="w-10 h-10 text-blue-500" />, name: "PostgreSQL" },
    { icon: <SiSequelize className="w-10 h-10 text-indigo-500" />, name: "Sequelize" },
    { icon: <SiVercel className="w-10 h-10 text-black dark:text-white" />, name: "Vercel" },
    { icon: <SiNodedotjs className="w-10 h-10 text-green-600" />, name: "Node.js" },
    { icon: <SiExpress className="w-10 h-10 text-gray-500" />, name: "Express" },
    { icon: <SiTailwindcss className="w-10 h-10 text-blue-400" />, name: "Tailwind CSS" },
    { icon: <SiTypescript className="w-10 h-10 text-blue-600" />, name: "TypeScript" },
    { icon: <SiJest className="w-10 h-10 text-red-500" />, name: "Jest" },
];

export default function Techs() {
    const [isMobile, setIsMobile] = useState(false);


    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <div className="py-6 w-full relative overflow-hidden">
            {isMobile ? (
                <motion.div
                    className="flex space-x-8"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                >
                    {techIcons.concat(techIcons).map((tech, index) => (
                        <div key={index} className="flex flex-col items-center">
                            {tech.icon}
                        </div>
                    ))}
                </motion.div>
            ) : (
                <div className="flex justify-center space-x-8">
                    {techIcons.map((tech, index) => (
                        <div key={index} className="flex flex-col items-center">
                            {tech.icon}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
