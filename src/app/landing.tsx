'use client';

import AboutMe from "@/components/AboutMe";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";
import Highlights from "@/components/Highlights";
import Lead from "@/components/Lead";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Techs from "@/components/Techs";
export default function Landing() {
    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
            {/* Navegación */}
            <Navbar />
            {/* Sección Home */}
            <section id="home" className="py-16">
                <Lead />
            </section>
            {/* Sección Proyectos */}
            <section id="projects" className="py-10 md:px-16 px-10 bg-gray-200 dark:bg-secondary-light">
                <Projects />
            </section>
            {/* Sección Hightlights */}
            <section id="highlights" className="py-16 px-8 bg-gray-100 dark:bg-gray-900">
                <Highlights />
            </section>
            {/* Sección Techs */}
            <section id="Techs" className="py-8 px-8 bg-gray-200 dark:bg-secondary-light">
                <Techs />
            </section>
            {/* Sección AboutMe */}
            <section id="about-me" className="py-8 px-8 bg-gray-100 dark:bg-gray-900">
                <AboutMe />
            </section>
            {/* Sección Contact */}
            <section id="contact" className="py-8 px-8 bg-gray-200 dark:bg-gray-800">
                <ContactSection />
            </section>
            {/* Footer */}
            <Footer />
        </div>
    );
}
