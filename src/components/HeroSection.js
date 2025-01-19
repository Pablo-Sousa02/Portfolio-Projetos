import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
    const canvasRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);

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

    useEffect(() => {
        let lastScrollY = 0;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsVisible(currentScrollY < lastScrollY || currentScrollY === 0);
            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            id="home"
            className="h-screen flex items-center justify-center bg-black text-white relative overflow-hidden"
        >
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0"
                style={{ pointerEvents: 'none' }}
            ></canvas>
            <motion.div
                className="text-center relative z-10"
                initial={{ opacity: 1, y: 0 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-5xl font-extrabold mb-4"
                >
                    Olá, eu sou <span className="text-blue-200">Pablo Sousa</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-xl mb-6 opacity-80"
                >
                    Desenvolvedor Web Full-Stack
                </motion.p>
                <motion.a
                    href="#projetos"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="bg-blue-400 text-gray-900 px-8 py-4 rounded-xl shadow-lg font-bold transition-all duration-300 ease-in-out hover:bg-blue-500 hover:shadow-2xl transform"
                >
                    Veja Meus Projetos
                </motion.a>
            </motion.div>
        </section>
    );
};

export default HeroSection;
