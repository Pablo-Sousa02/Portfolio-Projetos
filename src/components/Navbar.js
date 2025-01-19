import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Ícones atualizados
import { FiMenu, FiX } from 'react-icons/fi'; 
import { motion } from 'framer-motion'; 

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen); 
    return (
        <nav className="fixed top-0 w-full bg-gray-900 text-white shadow-lg z-50">
            <div className="container mx-auto flex justify-between items-center p-4">
                <h1 className="text-2xl font-bold">Meu Portfólio</h1>

                {/* Botão do menu hambúrguer (aparece em telas pequenas) */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white">
                        {isMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
                    </button>
                </div>

                {/* Links de navegação (visíveis em telas grandes) */}
                <ul className="hidden md:flex space-x-6">
                    {['Home', 'Sobre', 'Projetos', 'Contato'].map((item) => (
                        <li key={item}>
                            <Link
                                to={item.toLowerCase()}
                                smooth={true}
                                duration={500}
                                className="hover:text-blue-400 cursor-pointer"
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="hidden md:flex space-x-4">
                    <a href="https://github.com" target="_blank" rel="noreferrer">
                        <FaGithub size={24} className="text-gray-300 hover:text-black transition-colors" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                        <FaLinkedin size={24} className="text-blue-700 hover:text-blue-900 transition-colors" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        <FaInstagram size={24} className="text-pink-500 hover:text-pink-700 transition-colors" />
                    </a>
                    <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer">
                        <FaWhatsapp size={24} className="text-green-500 hover:text-green-700 transition-colors" />
                    </a>
                </div>
            </div>

            {/* Menu hambúrguer (aparece em telas pequenas com animação deslizante) */}
            {isMenuOpen && (
                <motion.div
                    className="md:hidden bg-gray-900 absolute top-0 left-0 w-full h-screen"
                    initial={{ x: '100%' }} // Começa fora da tela, à direita
                    animate={{ x: 0 }} // Desliza para a posição original
                    exit={{ x: '100%' }} // Sai da tela, à direita
                    transition={{ type: 'tween', duration: 0.3 }} // Animação com transição suave
                >
                    <ul className="space-y-4 p-6">
                        {['Home', 'Sobre', 'Projetos', 'Contato'].map((item) => (
                            <li key={item}>
                                <Link
                                    to={item.toLowerCase()}
                                    smooth={true}
                                    duration={500}
                                    className="hover:text-blue-400 cursor-pointer text-lg"
                                    onClick={() => setIsMenuOpen(false)} // Fecha o menu após clicar em um link
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                        <div className="flex justify-center space-x-6 mt-6">
                            <a href="https://github.com/Pablo-Sousa02" target="_blank" rel="noreferrer">
                                <FaGithub size={30} className="text-gray-300 hover:text-black transition-colors" />
                            </a>
                            <a href="https://linkedin.com/pablosousa22/" target="_blank" rel="noreferrer">
                                <FaLinkedin size={30} className="text-blue-700 hover:text-blue-900 transition-colors" />
                            </a>
                            <a href="https://instagram.com/pablosousa.code" target="_blank" rel="noreferrer">
                                <FaInstagram size={30} className="text-pink-500 hover:text-pink-700 transition-colors" />
                            </a>
                            <a href="https://wa.me/+5537998351186" target="_blank" rel="noreferrer">
                                <FaWhatsapp size={30} className="text-green-500 hover:text-green-700 transition-colors" />
                            </a>
                        </div>
                    </ul>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
