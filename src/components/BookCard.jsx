import "../styles/BookCard.css"

function BookCard({ title, author, image, rating, onView, recommended }){
    return(
        <div className="book-card">
            <div className="book-image-container">
                {recommended && (
                    <span className="recommended-badge">
                         ⭐ Recomendado
                    </span>
                )}
                <img src={image} alt={title} className="book-image" />

                <div className="book-overlay">
                    <button className="view-button" onClick={onView}>Ver detalhes</button>
                </div>
            </div>

            <div className="book-infos">
                <h3 className="book-title">{title}</h3>
                <p className="book-author">{author}</p>
                <div className="book-rating">
                    ⭐ {rating}
                </div>
            </div>
        </div>
    )
}

export default BookCard;