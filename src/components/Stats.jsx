import "../styles/Stats.css"

function Stats(){

    const stats = [
        {
            number: "10.000+",
            label: "Livros"
        },
        {
            number: "5.000+",
            label: "Autores"
        },
        {
            number: "50+",
            label: "Categorias"
        },
        {
            number: "100.000+",
            label: "Buscas Realizadas"
        }
    ]

    return(
        <section className="stats">
            <div className="stats-header">
                <h2>📈 Nossa Biblioteca em Números</h2>

                <p>Descubra o universo de livros disponível no BookFinder</p>
            </div>

            <div className="stats-grid">
                {stats.map((stat, index) => (
                    <div className="stat-card" key={index}>
                        <h3>
                            {stat.number}
                        </h3>

                        <span>
                            {stat.label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Stats;