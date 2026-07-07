import "../styles/Hero.css"
import { useState } from "react"

function Hero({ onSearch }){
    const [search, setSearch] = useState("")

    console.log(search)

    const suggestions = [
        "Harry Potter",
        "Dom Casmurro",
        "1984",
        "O Hobbit",
        "Sapiens"
    ]

    return(
        <section className="hero" id="explorar">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>
                        Encontre seu próximo
                        <span> livro favorito</span>
                    </h1>

                    <p>
                        Milhares de livros incríveis esperando por você.
                    </p>

                    <div className="search-container">
                        <input 
                        type="text" 
                        placeholder="Pesquisar livros, autores..." 
                        value={search} onChange={(e) => {
                            const value = e.target.value
                            setSearch(value)

                            if(value.trim() === ""){
                                onSearch("")
                            }
                        }} 
                        onKeyDown={(e) => {
                            if(e.key === "Enter"){
                                onSearch(search)
                            }
                        }}/>
                        <button onClick={() => onSearch(search)}>➜</button>
                    </div>

                    <div className="suggestions">
                        {suggestions.map((book) => (
                            <button key={book} onClick={() => {
                                setSearch(book)
                                onSearch(book)
                            }}>
                                {book}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="hero-recommendation">

                    <div className="recommendation-card">
                        <span className="recommendation-title">
                            ✨ Recomendação
                        </span>

                        <div className="recommendation-content">
                        <img src="https://covers.openlibrary.org/b/id/10523338-L.jpg" alt="O Alquimista" />

                        <div className="book-info">
                            <h3>O Alquimista</h3>
                            <p>Paulo Coelho</p>
                            <span>⭐⭐⭐⭐⭐ 4.7</span>
                            <button>Ver Livro</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero