"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Database,
    Code,
    Server,
    Search,
    Atom,
    Network,
    Layers,
    Globe,
    Smartphone,
} from "lucide-react"; // Importing icons

const highlights = [
    {
        title: "Advanced Caching & Cost Reduction",
        description:
            "Implementing Redis caching reduces database queries, lowering costs and improving response times. This ensures a faster, more efficient user experience with minimal backend load.",
        icon: <Database className="w-6 h-6 text-primary-light dark:text-primary-dark" />,
    },
    {
        title: "Optimized Entity-Object Structuring",
        description:
            "Designing entities and objects efficiently minimizes redundant data, streamlining API responses. This results in a more scalable system with improved performance for both server and client.",
        icon: <Server className="w-6 h-6 text-primary-light dark:text-primary-dark" />,
    },
    {
        title: "Full Stack Performance Optimization",
        description:
            "Enhancing server and client efficiency through smart data handling, lazy loading, and optimized API requests, reducing latency and improving scalability.",
        icon: <Code className="w-6 h-6 text-primary-light dark:text-primary-dark" />,
    },
    {
        title: "SEO & Web Performance",
        description:
            "Leveraging Next.js, dynamic metadata, and structured data ensures top-tier SEO rankings while maintaining high-speed page loads for better UX.",
        icon: <Search className="w-6 h-6 text-primary-light dark:text-primary-dark" />,
    },
    {
        title: "React & Modern UI Development",
        description:
            "Expert in React and all its hooks, including useState, useEffect, useContext, useMemo, useReducer, and custom hooks. Crafting highly interactive, state-managed UIs with best practices.",
        icon: <Atom className="w-6 h-6 text-primary-light dark:text-primary-dark" />,
    },
    {
        title: "Data Fetching with React Query",
        description:
            "Using React Query for data synchronization, caching, and background updates. Improves performance by reducing unnecessary API calls and ensures real-time data consistency.",
        icon: <Network className="w-6 h-6 text-primary-light dark:text-primary-dark" />,
    },
    {
        title: "Scalable Component Architecture",
        description:
            "Building modular, reusable, and scalable React components using Atomic Design principles, reducing redundancy and improving maintainability.",
        icon: <Layers className="w-6 h-6 text-primary-light dark:text-primary-dark" />,
    },
    {
        title: "Server-Side Rendering & Static Generation",
        description:
            "Optimizing performance with Next.js features like SSR, ISR, and SSG to deliver faster load times and SEO-friendly applications.",
        icon: <Globe className="w-6 h-6 text-primary-light dark:text-primary-dark" />,
    },
    {
        title: "Responsive Design & Mobile Optimization",
        description:
            "Ensuring a seamless experience across all devices using Tailwind CSS and media queries. Optimizing layouts for mobile, tablet, and desktop for maximum usability and performance.",
        icon: <Smartphone className="w-6 h-6 text-primary-light dark:text-primary-dark" />,
    }
];

export default function Highlights() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    return (
        <section className="pt-10">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                    Highlights
                </h2>
                <div className="space-y-4">
                    {highlights.map((item, index) => (
                        <div key={index} className="border-b border-gray-300 dark:border-gray-700">
                            <button
                                className="w-full flex justify-between items-center py-4 text-lg font-medium text-gray-800 dark:text-white hover:text-primary-light dark:hover:text-primary-dark transition-all"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <div className="flex items-center space-x-3">
                                    {item.icon}
                                    <span>{item.title}</span>
                                </div>
                                <motion.span
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    ▼
                                </motion.span>
                            </button>
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <p className="text-gray-600 dark:text-gray-300 pb-4 pl-9">
                                    {item.description}
                                </p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
