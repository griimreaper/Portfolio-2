import React from "react";

const aboutData = {
    name: "Leonel Behnke",
    role: "Software Developer | Tech Enthusiast",
    bio: "I am a highly motivated and technology-driven developer from Argentina. Passionate about problem-solving, I thrive in collaborative environments where I can engage in discussions, exchange ideas, and contribute to achieving common goals. With a strong focus on efficiency and innovation, I continuously seek to enhance my skills and stay updated with the latest industry trends.",
    socialLinks: [
        { name: "LinkedIn", url: "https://linkedin.com/in/your-profile" },
        { name: "GitHub", url: "https://github.com/your-username" },
    ],
};

const AboutMe = () => {
    return (
        <section className="flex flex-col items-center justify-center py-16 text-center">
            <div className="max-w-2xl">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">About Me</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">{aboutData.role}</p>
                <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">{aboutData.bio}</p>
            </div>
        </section>
    );
};

export default AboutMe;
