import { useState, useEffect } from "react"
import "../styles/Header.css"
import { Link, useNavigate } from "react-router-dom"

function Header({ onOpenAbout }){
    const [menuOpen, setMenuOpen] = useState(false)
    const [profileOpen, setProfileOpen] = useState(false)
    const navigate = useNavigate()
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme")

        return savedTheme ? savedTheme === "dark" : true
    })

    useEffect(() => {
        if(darkMode){
            document.body.classList.remove("light-theme")
            localStorage.setItem("theme", "dark")
        }else{
            document.body.classList.add("light-theme")
            localStorage.setItem("theme", "light")
        }
    }, [darkMode])

    const scrollToSection = (sectionId) => {
        setMenuOpen(false)
        setProfileOpen(false)
        navigate("/")

        setTimeout(() => {
            document.getElementById(sectionId)?.scrollIntoView({
                behavior: "smooth"
            })
        }, 100)
    }

    return(
        <header className="header">
            <div className="logo">
               📚 Book<span>Finder</span>
            </div>

            <nav className="desktop-nav">
                <ul>
                    <Link to="/">Inicio</Link>
                    <button onClick={() => scrollToSection("explorar")}>Explorar</button>
                    <button onClick={() => scrollToSection("categorias")}>Categorias</button>
                    <Link to="/favorites">Favoritos</Link>
                    <button onClick={() => scrollToSection("footer")}>Sobre</button>
                </ul>
            </nav>

            <div className="actions">
                <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>{darkMode ? "🌙" : "☀️"}</button>

                <div className="profile-menu">
                <button className="profile" onClick={() => setProfileOpen(!profileOpen)}>👤</button>

                {profileOpen && (
                    <div className="profile-dropdown">
                        <div className="profile-header">
                            <div className="avatar">👤</div>
                            <div>
                                <h4>Johnny Sousa</h4>
                                <p>Front-End Developer</p>
                            </div>
                        </div>

                        <hr />

                        <Link to="/favorites">
                           ❤️ Favoritos
                        </Link>

                        <button className="about-btn" onClick={onOpenAbout}>
                            ℹ️ Sobre o BookFinder
                        </button>

                        <a 
                        href="https://github.com/johnnysousa1020"
                        target="_blank"
                        rel="noreferrer">
                            💻 GitHub
                        </a>

                        <a 
                        href="https://www.linkedin.com/in/johnny-sousa"
                        target="_blank"
                        rel="noreferrer">
                            💼 Linkedin
                        </a>
                    </div>
                )}
                </div>

                <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
            </div>

            <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
                <button className="close-btn" onClick={() => setMenuOpen(false)}>
                    x
                </button>

                <ul>
                    <Link to="/">Inicio</Link>
                    <button onClick={() => scrollToSection("explorar")}>Explorar</button>
                    <button onClick={() => scrollToSection("categorias")}>Categorias</button>
                    <Link to="/favorites">Favoritos</Link>
                    <button onClick={() => scrollToSection("footer")}>Sobre</button>
                </ul>
            </div>

        </header>
    )
}

export default Header

