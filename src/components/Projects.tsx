import Image from "next/image";
import Link from "next/link";

const Projects = () => {
    const projects = [
        { id: 1, name: 'Pow Flick', description: 'Customizable sports shirts E-commerce', image: '/pow1.png', link: "https://www.powflick.com" },
        { id: 2, name: '4 The Sports', description: 'Customizable sports shirts E-commerce', image: "/4thesports.png", link: "https://4thesports.net" },
        { id: 3, name: 'Vital Store', description: 'Online store specializing in orthopedic products', image: "/vitalstore.png", link: "https://vital-store.vercel.app/" },
        { id: 4, name: 'Daily Sports', description: 'A sports magazine-style website with the latest updates', image: "/dailysports.png", link: "https://daily-sports-omega.vercel.app/" },
        { id: 5, name: 'Tony Camisetas', description: 'A single-page site linking to various sports apparel stores', image: "/tonycamisetas.png", link: "https://tony-camisetas.vercel.app/" },
        { id: 6, name: 'First Portfolio', description: 'An informal portfolio', image: "/1portfolio.png", link: "https://leonelbehnke.vercel.app/" },
    ];

    return (
        <div className="flex py-16 flex-col w-full">
            <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full sm:gap-6 gap-12">
                {projects.map((project) => (
                    <Link key={project.id} href={project.link || ""} className="block">
                        <div className="relative group bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
                            {/* Imagen */}
                            <div className="w-full h-64 relative">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </div>

                            {/* Texto debajo de la imagen en móviles */}
                            <div className="block sm:hidden text-center p-4">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.name}</h3>
                                <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
                            </div>

                            {/* Texto sobre la imagen en desktop con hover */}
                            <div className="absolute inset-0 hidden md:flex flex-col justify-end p-4 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                                <p className="text-gray-200">{project.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Projects;
