import BookCard from "./BookCard"
import "../styles/SearchResults.css"
import { useNavigate } from "react-router-dom"
import { useRef } from "react"

function SearchResults({ books }){
    const navigate = useNavigate()
    const carouselRef = useRef()

    const scrollLeft = () => {
        carouselRef.current.scrollBy({
            left: -900,
            behavior: "smooth",
        })
    }

    const scrollRight = () => {
        carouselRef.current.scrollBy({
            left: 900,
            behavior: "smooth",
        })
    }

    if(!books.length){
        return null
    }

    return(
        <section id="search-results" className="search-results">
            <div className="search-results-header">

            <h2>🔍 Resultado da pesquisa</h2>
            <p>Encontramos {books.length} livro(s).</p>
            </div>

            <div className="carousel-wrapper">
                               
            <button className="carousel-btn left" onClick={scrollLeft}>
                ⇠
            </button>

            <div className="search-results-grid" ref={carouselRef}>
                {books.map((book) => (
                    <BookCard 
                    key={book.id}
                    image={book.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/160x230?text=Sem+Capa"}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors?.[0] || "Autor desconhecido"}
                    rating="⭐"
                    onView={() => navigate(`/book/${book.id}`)}/>
                ))}
            </div>

            <button className="carousel-btn right" onClick={scrollRight}>
                ⇢
            </button>

            </div>

        </section>
    )
}

export default SearchResults