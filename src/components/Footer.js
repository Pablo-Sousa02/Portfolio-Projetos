import React from 'react';
import { Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-6">
            <Container className="text-center">
                <div className="mb-4">
                    <h5 className="font-bold text-lg">DEV Pablo Sousa</h5>
                    <p className="opacity-75">
                        Criando soluções web inovadoras. Entre em contato comigo nas redes sociais.
                    </p>
                </div>
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="https://github.com" target="_blank" rel="noreferrer">
                        <FaGithub size={24} className="text-gray-300 hover:text-white transition-colors" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                        <FaLinkedin size={24} className="text-blue-500 hover:text-blue-700 transition-colors" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        <FaInstagram size={24} className="text-pink-500 hover:text-pink-700 transition-colors" />
                    </a>
                    <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer">
                        <FaWhatsapp size={24} className="text-green-500 hover:text-green-700 transition-colors" />
                    </a>
                </div>
                <p className="text-sm opacity-75">
                    © {new Date().getFullYear()} Pablo Sousa. Todos os direitos reservados.
                </p>
            </Container>
        </footer>
    );
};

export default Footer;
