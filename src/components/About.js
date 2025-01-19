import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Image from '../assets/img/eu.jpg'; // Importação da imagem

const About = () => {
    const canvasRef = useRef(null);
    const textRef = useRef(null);
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
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                root: null, // Usa o viewport como referência
                threshold: 0, // Ativa quando o elemento atinge o topo da tela
            }
        );

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, []);

    return (
        <section id="sobre" className="relative py-20 bg-black text-white overflow-hidden">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0"
                style={{ pointerEvents: 'none' }}
            ></canvas>
            <Container className="relative z-10">
                <Row className="justify-center text-center md:text-left">
                    <Col md={6}>
                        <motion.img
                            src={Image}
                            alt="Minha Foto"
                            initial={{ opacity: 0, rotate: -20 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="mb-6 rounded-full border-4 border-gray-600 shadow-2xl transform transition-all duration-500 hover:rotate-6 hover:scale-105"
                        />
                    </Col>
                    <Col md={6}>
                        <motion.div
                            ref={textRef}
                            initial={{ opacity: 1 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        >
                            <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-6">
                                Sobre Mim
                            </h2>
                            <p className="text-lg mb-6 opacity-90 leading-relaxed">
                                Sou um desenvolvedor apaixonado por criar soluções web interativas e funcionais. Tenho experiência com front-end, back-end, e sempre estou buscando melhorar minhas habilidades.
                            </p>
                            <a
                                href="#contact"
                                className="inline-block bg-blue-400 text-white px-8 py-4 rounded-lg shadow-xl font-semibold hover:bg-blue-500 hover:shadow-2xl transition-all duration-300 ease-in-out"
                            >
                                Entre em Contato
                            </a>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
