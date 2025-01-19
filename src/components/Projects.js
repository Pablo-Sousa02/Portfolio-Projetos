import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image1 from '../assets/img/psprojects.svg';
import Image2 from '../assets/img/portal-rh.svg';

const projects = [
    {
        title: 'Projeto pessoal para trabalhar como freelancer',
        description: 'Um projeto incrível usando React.',
        image: Image1,  
        link: 'https://psprojects.tech/',
    },
    {
        title: 'Projeto 2',
        description: 'Outro projeto fantástico com Node.js.',
        image: Image2,
        link: 'https://github.com/seuusuario/projeto2',
    },
];

const Projects = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const stars = [];
        const numStars = 100;

        const createStars = () => {
            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 2,
                    speed: Math.random() * 0.5 + 0.2,
                });
            }
        };

        const drawStars = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach((star) => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'white';
                ctx.fill();
            });
        };

        const animateStars = () => {
            stars.forEach((star) => {
                star.y += star.speed;
                if (star.y > canvas.height) {
                    star.y = 0;
                    star.x = Math.random() * canvas.width;
                }
            });
            drawStars();
            requestAnimationFrame(animateStars);
        };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            stars.length = 0; // Reset stars
            createStars();
        };

        resizeCanvas();
        createStars();
        animateStars();

        window.addEventListener('resize', resizeCanvas);
        return () => window.removeEventListener('resize', resizeCanvas);
    }, []);

    return (
        <section id="projetos" className="relative py-16 bg-black text-white overflow-hidden">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0"
                style={{ pointerEvents: 'none' }}
            ></canvas>
            <div className="container mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl font-extrabold mb-10"
                >
                    Meus Projetos
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05, y: -10 }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-white shadow-xl rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-56 object-cover transform transition-all duration-500 hover:scale-105"
                            />
                            <div className="p-6">
                                <motion.h3
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    className="text-2xl font-semibold mb-2"
                                >
                                    {project.title}
                                </motion.h3>
                                <p className="text-gray-700 mb-4">{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 font-bold hover:underline transition-all duration-300"
                                >
                                    Ver Projeto
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
