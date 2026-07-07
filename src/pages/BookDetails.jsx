import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBookByld } from "../services/googleBooks";
import BookInfoCard from "../components/BookInfoCard";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaBuilding, FaGlobe, FaBook } from "react-icons/fa";
import RelatedBooks from "../components/RelatedBooks";
import "../styles/BookDetails.css"

function BookDeatails(){
    const { id } = useParams();
    const [book, setBooks] = useState(null)
    const [favorite, setFavorite] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        const favorites = JSON.parse(
            localStorage.getItem("favorites")
        ) || [];

        const isFavorite = favorites.some(
            (favoriteBook) => favoriteBook.id === book?.id
        )

        setFavorite(isFavorite)
    }, [book])

    useEffect(() => {
        async function loadBook() {
            const data = await getBookByld(id)
            setBooks(data)
        }

        loadBook()
    }, [id])

    const handleFavorite = () => {
        const favorites = JSON.parse(
            localStorage.getItem("favorites")
        ) || []

        if(favorite){
            const updatedFavorites = favorites.filter(
                (favoriteBook) => favoriteBook.id !== book.id
            )

            localStorage.setItem(
                "favorites",
                JSON.stringify(updatedFavorites)
            )
            setFavorite(false)
        }else{
            favorites.push(book)
            localStorage.setItem(
                "favorites",
                JSON.stringify(favorites)
            )
            setFavorite(true)
        }
    }

    if(!book){
        return <h2>Carregando...</h2>
    }

    return(
        <section className="book-details">
        <button className="back-button" onClick={() => navigate("/")}>
           ⇦ Voltar
        </button>

        <div className="book-container">
            <img className="book-cover" src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
            <div className="book-content">
            <h1>{book.volumeInfo.title}</h1>
            <h3>
                {book.volumeInfo.authors?.join(", ")}
            </h3>

            <div className="book-actions">
                <button className="favorite-btn" onClick={handleFavorite}>
                    {favorite ? "⭐ Favoritado" : "❤️ Favoritar"}
                </button>

                <a href={book.volumeInfo.previewLink}
                target="_blank"
                rel="noreferrer"
                className="preview-btn">
                    📖 Ler Amostra
                </a>
            </div>

            <div className="book-info-grid">

            <BookInfoCard 
            icon={<FaCalendarAlt />}
            title="Publicado"
            value={book.volumeInfo.publishedDate || "Não informado"}/>
            
            <BookInfoCard 
            icon={<FaBuilding />}
            title="Editora"
            value={book.volumeInfo.publisher || "Não informado"}/>
            
            <BookInfoCard 
            icon={<FaBook />}
            title="Páginas"
            value={book.volumeInfo.pageCount || "-"}/>

            <BookInfoCard 
            icon={<FaGlobe />}
            title="Idioma"
            value={book.volumeInfo.language?.toUpperCase() || "-"}/>

            </div>


            <h2>Descrição</h2>

            <p>
                {book.volumeInfo.description || 
                "Este livro não possui descrição"}
            </p>
            </div>

        </div>

        <RelatedBooks 
        category={book.volumeInfo.categories?.[0]}
        currentBookId={book.id}/>
        </section>
    )
}

export default BookDeatails;