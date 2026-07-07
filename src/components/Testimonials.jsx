import "../styles/Testimonials.css"

function Testimonials(){
    const testimonials = [
        {
            id: 1,
            name: "João Silva",
            role: "Leitor Frequente",
            text: "O BookFinder me ajudou a descobrir vários livros incríveis que eu nunca encontraria sozinho."
        },
        {
            id: 2,
            name: "Maria Santos",
            role: "Apaixonada por Fantasia",
            text: "Interface moderna, rápida e muito fácil de usar. Adorei a experiência."
        },
        {
            id: 3,
            name: "Carlos Oliveira",
            role: "Estudante",
            text: "Uso o BookFinder quase todos os dias para procurar recomendações e novos autores."
        },
    ]

    return(
        <section className="testimonials">
            <div className="testimonials-header">
                <h2>⭐ O que nossos leitores dizem</h2>

                <p>
                    Veja o que as pessoas acham da experiência com o BookFinder
                </p>
            </div>

            <div className="testimonials-grid">
                {testimonials.map((testimonial) => (
                    <div className="testimonial-card" key={testimonial.id}>
                        <div className="stars">
                            ⭐⭐⭐⭐⭐
                        </div>

                        <p className="testimonial-text">
                            "{testimonial.text}"
                        </p>

                        <div className="testimonial-user">

                        <div className="avatar">
                            👤
                        </div>

                        <div>
                            <h3>{testimonial.name}</h3>
                            <span>{testimonial.role}</span>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Testimonials;