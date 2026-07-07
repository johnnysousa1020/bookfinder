import "../styles/Footer.css"
import { FaGithub, FaLinkedin, FaBookOpen } from "react-icons/fa"

function Footer(){
    return(
        <footer className="footer" id="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <div className="footer-logo">
                        <FaBookOpen />
                        <h2>BookFinder</h2>
                    </div>
                    <p>
                        Descubra livros incríveis, encontre novos autores
                        e monte sua biblioteca
                    </p>
                </div>
                <div className="footer-links">
                    <h3>Navegação</h3>

                    <a href="#">Inicio</a>
                    <a href="#">Explorar</a>
                    <a href="#">Categorias</a>
                    <a href="#">Favoritos</a>
                </div>
                <div className="footer-links">
                    <h3>Projeto</h3>

                    <a href="#">Sobre</a>
                    <a href="#">Contato</a>
                    <a href="#">Privacidade</a>
                    <a href="#">Termos</a>
                </div>
                <div className="footer-social">
                    <h3>Redes</h3>
                <div className="social-icons">
                    <a href="#">
                        <FaGithub />
                    </a>
                    <a href="#">
                        <FaLinkedin />
                    </a>
                </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>
                    © 2026 BookFinder . Desenvolvido com React
                </p>
            </div>
        </footer>
    )
}

export default Footer