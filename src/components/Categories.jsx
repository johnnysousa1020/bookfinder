import "../styles/Categories.css"
import { useRef, useState } from "react"
import { FaCompass, FaHeart, FaFlask, FaBook, FaBriefcase, FaLandmark, FaGhost } from "react-icons/fa"
import { GiMagicSwirl } from "react-icons/gi"

function Categories({ onCategorySelect }){
    const [selectedCategory, setSelectedCategory] = useState("")

    const categories = [
        {
            id: 1,
            icon: <FaCompass />,
            name: "Aventura",
            books: "1.200 livros"
        },
        {
            id: 2,
            icon: <GiMagicSwirl />,
            name: "Fantasia",
            books: "850 livros"
        },
        {
            id: 3,
            icon: <FaHeart />,
            name: "Romance",
            books: "920 livros"
        },
        {
            id: 4,
            icon: <FaGhost />,
            name: "Terror",
            books: "410 livros"
        },
        {
            id: 5,
            icon: <FaFlask />,
            name: "Ciência",
            books: "530 livros"
        },
        {
            id: 6,
            icon: <FaLandmark />,
            name: "História",
            books: "760 livros"
        },
        {
            id: 7,
            icon: <FaBook />,
            name: "Clássicos",
            books: "680 livros"
        },
        {
            id: 8,
            icon: <FaBriefcase />,
            name: "Negócios",
            books: "340 livros"
        },
    ]

    const carouselReff = useRef()

    const scrollLeft = () => {
        carouselReff.current.scrollBy({
            left: -900,
            behavior: "smooth",
        })
    }

    const scrollRight = ()  => {
        carouselReff.current.scrollBy({
            left: 900,
            behavior: "smooth",
        })
    }

    return(
        <section className="categories" id="categorias">
            <div className="categories-header">
                <h2>📂 Categorias</h2>
            </div>

            <div className="categories-wrapper">

                <button className="carousle-btn left" onClick={scrollLeft}>
                    ⇦
                </button>

            <div className="categories-grid" ref={carouselReff}>
                {categories.map((category) => (
                    <div 
                    className={`category-card ${selectedCategory === category.name ? "active" : ""}`} 
                    key={category.id} onClick={() => {setSelectedCategory(category.name); onCategorySelect(category.name)}}>
                        <span className="category-icon">
                            {category.icon}
                        </span>

                        <h3>
                            {category.name}
                        </h3>

                        <p>
                            {category.books}
                        </p>
                    </div>
                ))}
            </div>

            <button className="carousle-btn right" onClick={scrollRight}>
                ⇨
            </button>

            </div>
        </section>
    )
}

export default Categories;