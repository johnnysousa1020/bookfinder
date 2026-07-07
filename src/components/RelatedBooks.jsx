import "../styles/RelatedBooks.css"
import { useEffect, useRef, useState } from "react";
import { searchBooks } from "../services/googleBooks";
import { useNavigate } from "react-router-dom";
import BookCard from "./BookCard";

function RelatedBooks({ category, currentBookId }){
    const [books, setBooks] = useState([]);
    const carouselRef = useRef();
    const navigate = useNavigate()

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

    useEffect(() => {
        async function loadRelatedBooks() {
            if(!category) return;

            const data = await searchBooks(category)

            const filteredBooks = (data.items || []).filter(
                (book) => book.id !== currentBookId
            )

            setBooks(filteredBooks)
        }

        loadRelatedBooks()
    }, [category])

    return(
        <section className="related-books">
            <h2>📕 Livros Relacionados</h2>

            <div className="related-caorousel-wrapper">

            <button className="carousel-btn left" onClick={scrollLeft}>
                ⇠
            </button>

            <div className="related-books-container" ref={carouselRef}>
                {books.map((book, index) => (
                    <BookCard 
                    key={book.id}
                    image={book.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/160x230?text=Sem+Capa"}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors?.[0] || "Autor desconhecido"}
                    rating="⭐"
                    recommended={index < 2}
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

export default RelatedBooks;