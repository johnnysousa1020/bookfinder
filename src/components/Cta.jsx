import "../styles/Cta.css"
               
function Cta({ onOpenAbout }){
    return(
        <section className="cta">
            <div className="cta-container">
                <h2>
                    Pronto para descobrir seu próximo livro favorito?
                </h2>

                <p>
                    Explore milhares de livros, encontre novos autores
                    e monte sua biblioteca pessoal com o BookFinder
                </p>

                <div className="cta-buttons">
                    <button className="cta-primary" 
                    onClick={() => document.getElementById("explorar")
                        ?.scrollIntoView({
                            behavior: "smooth"
                        })
                    }>
                        Explorar Livros
                    </button>

                    <button className="cta-secondary" onClick={onOpenAbout}>
                        Saiba Mais
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Cta;