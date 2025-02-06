import { useState, useEffect } from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        // Comprobar si el tema está guardado en localStorage o si el usuario tiene una preferencia predeterminada
        if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            document.documentElement.classList.add("dark");
            setTheme("dark");
        } else {
            document.documentElement.classList.remove("dark");
            setTheme("light");
        }
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.theme = newTheme;
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    return (
        <label htmlFor="theme-toggle" className="flex items-center cursor-pointer">
            {/* Contenedor del interruptor */}
            <div className="relative">
                {/* El interruptor (circle) */}
                <input
                    id="theme-toggle"
                    type="checkbox"
                    className="sr-only"
                    checked={theme === "dark"}
                    onChange={toggleTheme}
                />
                <div className="w-14 h-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                {/* Palanca del interruptor */}
                <div
                    className={`absolute top-1 left-1 w-6 h-6 bg-white dark:bg-gray-800 rounded-full transition-all duration-300 transform dark:translate-x-6 translate-x-0"
                        }`}
                ></div>
            </div>
        </label>
    );
}
