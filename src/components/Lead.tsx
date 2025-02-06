import Image from 'next/image'
import React from 'react'

export default function Lead() {
    return (
        <div className="py-16 -mt-20 md:px-16 px-5 rounded-lg overflow-hidden
            bg-gradient-to-t from-background-light to-gray-200 dark:from-gray-900 dark:to-secondary-light">
            <div className='flex flex-col items-center md:flex-row align-items mt-20'>
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-5xl md:text-6xl font-extrabold">
                        Hi, I am
                    </h1>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-accent-light dark:text-accent-dark mb-6">Leonel Behnke</h1>
                    <p className="text-2xl text-text-light dark:text-text-dark">
                        Full Stack Developer & Software Engineer
                    </p>
                    <p className="mt-4 text-lg text-text-light dark:text-text-dark opacity-80">
                        Passionate about technology, problem-solving, and continuous learning. Focused on creating seamless user experiences and scalable applications.
                    </p>
                </div>
                <div className="md:w-1/2">
                    <div className="relative w-64 h-64 md:mr-12 md:w-96 md:h-96 mx-auto rounded-full border-4 border-background-light dark:border-background-dark shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105">
                        <Image
                            src="/profile.jpg" // Replace with your image
                            alt="Profile"
                            layout="fill"
                            className="object-cover rounded-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
