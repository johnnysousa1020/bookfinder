import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BookDeatails from './pages/BookDetails'
import { useEffect, useState } from 'react'
import { searchBooks } from './services/googleBooks'
import Header from './components/Header'
import Favorites from './components/Favorites'
import './App.css'

function App() {
 // const [books, setBooks] = useState([])
  const [popularBooks, setPopularBooks] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [aboutOpen, setAboutOpen] = useState(false)

  const loadPopularBooks = async () => {
    const popularSearches = [
      "Harry Potter",
      "O Senhor dos Anéis",
      "Duna",
      "Sherlock Holmes",
      "Dom Casmurro",
      "Orgulho e Preconceito",
      "Parcy Jackson",
      "Inteligência Artificial"
    ]

    const responses = await Promise.all(
      popularSearches.map((query) => 
      searchBooks(query))
    )

    const books = responses.flatMap((response) => 
    response.items || [])

    const uniqueBooks = books.filter(
      (book, index, self) => 
        index === self.findIndex((b) => b.id === book.id)
    )

    setPopularBooks(uniqueBooks)

//    const data = await searchBooks("Harry Potter")

//    setPopularBooks(data.items || [])
  }

  const handleSearch = async (query) => {
    if(query.trim() === ""){
      setSearchResults([])
      return
    }

    const data = await searchBooks(query)

    setSearchResults(data.items || [])

    setTimeout(() => {
      document.getElementById("search-results")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }, 100)
  }

  useEffect(() => {
    loadPopularBooks()
  }, [])


  return (
     <HashRouter>
      <Header onOpenAbout={() => setAboutOpen(true)}/>

      <Routes>
        <Route path='/' element={<Home popularBooks={popularBooks} searchResults={searchResults} onSearch={handleSearch} onOpenAbout={() => setAboutOpen(true)}/>}/>
        <Route path='/book/:id' element={<BookDeatails />}/>
        <Route path='/favorites' element={<Favorites />}/>
      </Routes>

      {aboutOpen && (
        <div className="modal-overlay" onClick={() => setAboutOpen(false)}>
                    <div className="abount-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal" onClick={() => setAboutOpen(false)}>
                            X
                        </button>

                        <h2>📚 Sobre o BookFinder</h2>

                        <p>O BookFinder é um projeto desenvolvido em React. utilizando a API Google Books</p>
                        <p>
                            O objetivo do projeto é permitir que os usuários pesquisem livros, explorem categorias,
                            visualizem detalhes, adicionem favoritos e tenham uma experiência 
                            moderna com tema claro e escuro.
                        </p>

                        <h3>🛠️ Tecnologias utilizadas</h3>

                        <ul>
                            <li>React</li>
                            <li>React Router</li>
                            <li>JavaScript</li>
                            <li>CSS</li>
                            <li>Google Books API</li>
                        </ul>

                        <p className="developer">
                            Desenvolvido por <strong>Johnny Sousa</strong>
                        </p>
                    </div>
                </div>
      )}
     </HashRouter>
  )
}

export default App
