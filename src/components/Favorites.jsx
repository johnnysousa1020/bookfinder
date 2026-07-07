import { useState, useEffect } from "react"
import "../styles/Favorites.css"
import BookCard from "./BookCard"
import { useNavigate } from "react-router-dom"

function Favorites(){
    const [favorites, setFavorites] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const savedFavorites = JSON.parse(
            localStorage.getItem("favorites")
        ) || []

        setFavorites(savedFavorites)
    }, [])

    return(
        <section className="favorites-page">
            <h1>❤️ Meus Favoritos</h1>
            <p className="favorites-paragrafo">
                Você possui {favorites.length} livro(s) favorito(s).
            </p>

            <div className="favorites-grid">
                {favorites.map((book) => (
                    <BookCard 
                    key={book.id}
                    image={book.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/160x230?text=Sem+Capa"}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors?.[0] || "Autor desconhecido"}
                    rating="⭐"
                    onView={() => navigate(`/book/${book.id}`)}/>
                ))}
            </div>
        </section>
    )
}

export default Favorites