import "../styles/PopularBooks.css"
import BookCard from "./BookCard";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function PopularBooks({ books }){
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

    const filteredBooks = books.filter(
        (book) => book.volumeInfo.imageLinks
    )

    return(
        <section className="popular-books">
            <div className="popular-header">
                <h2>📖 Livros Mais Populares</h2>

                <button>Ver Todos</button>
            </div>

            <div className="carousel-wrapper">

                <button className="carousel-btn left" onClick={scrollLeft}>
                    ⇠
                </button>

            <div className="books-container" ref={carouselRef}>
                {filteredBooks.map((book) => (
                    <BookCard 
                    key={book.id}
                    image={book.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/160x230?text=Sem+Capa"}
                    title={book.volumeInfo.title || "Sem título"}
                    author={book.volumeInfo.authors?.[0] || "Autor desconhecido"}
                    rating={book.volumeInfo.averageRating ? `⭐ ${book.volumeInfo.averageRating}` : "Sem avaliação"}
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

export default PopularBooks;



/*
    const books = [
        {
            id: 1,
            title: "Harry Potter",
            author: "J.K. Rowling",
            rating: "4.8",
            image: "https://covers.openlibrary.org/b/id/8231856-L.jpg"
        },
        {
            id: 2,
            title: "O Hobbit",
            author: "J.R.R. Tolkien",
            rating: "4.7",
            image: "https://covers.openlibrary.org/b/id/6979861-L.jpg"
        },
        {
            id: 3,
            title: "1984",
            author: "George Orwell",
            rating: "4.6",
            image: "https://covers.openlibrary.org/b/id/7222246-L.jpg"
        },
        {
            id: 4,
            title: "Dom Casmurro",
            author: "Machado de  Assis",
            rating: "4.5",
            image: "https://covers.openlibrary.org/b/id/8235116-L.jpg"
        },
        {
            id: 5,
            title: "Sapiens",
            author: "Yuval Noah Harari",
            rating: "4.8",
            image: "https://covers.openlibrary.org/b/id/8370221-L.jpg"
        },
        {
            id: 6,
            title: "O Pequeno Prícipe",
            author: "Antoine de Saint-Exupéry",
            rating: "4.9",
            image: "https://covers.openlibrary.org/b/id/10521270-L.jpg"
        },
        {
            id: 7,
            title: "Percy Jackson",
            author: "Rick Riordan",
            rating: "4.7",
            image: "https://covers.openlibrary.org/b/id/7984916-L.jpg"
        },
        {
            id: 8,
            title: "Sherlock Holmes",
            author: "Arthur Conan Doyle",
            rating: "4.8",
            image: "https://covers.openlibrary.org/b/id/8228691-L.jpg"
        }
    ]

    book.rating}
*/