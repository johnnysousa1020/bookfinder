import "../styles/Features.css"
import { FaBolt, FaHeart, FaBookOpen, FaLaptopCode, FaMoon } from "react-icons/fa"

function Features(){
    const features = [
        {
            icon: <FaBolt />,
            title: "Busca rápida e inteligente",
            description: "Encontre livros e autores em segundos."
        },
        {
            icon: <FaHeart />,
            title: "Favoritos salvos",
            description: "Guarde seus livros favoritos facilmente."
        },
        {
            icon: <FaBookOpen />,
            title: "Categorias organizadas",
            description: "Explore diversos gêneros literários."
        },
        {
            icon: <FaLaptopCode />,
            title: "Interface moderna",
            description: "Experiência rápida e responsiva."
        },
        {
            icon: <FaMoon />,
            title: "Modo claro e escuro",
            description: "Escolha o tema que preferir."
        },
    ]

    return(
        <section className="features">
            <div className="features-header">
                <h2>
                    ✨ Por que usar o BookFinder?
                </h2>

                <p>
                    Tudo o que você precisa para encontrar
                    seu próximo livro favorito.
                </p>
            </div>

            <div className="features-grid">
                {features.map((feature, index) => (
                    <div key={index} className="feature-card">
                        <div className="feature-icon">
                            {feature.icon}
                        </div>

                        <h3>
                            {feature.title}
                        </h3>

                        <p>
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Features;