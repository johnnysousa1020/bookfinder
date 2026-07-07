import "../styles/BookInfoCard.css"

function BookInfoCard({ icon, title, value }){
    return(
        <div className="book-info-card">
            <div className="book-info-icon">
                {icon}
            </div>

            <div className="book-info-text">
                <h4>{title}</h4>
                <p>{value}</p>
            </div>
        </div>
    )
}

export default BookInfoCard