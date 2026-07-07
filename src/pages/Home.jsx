import Hero from "../components/Hero";
import PopularBooks from "../components/PopularBooks";
import Categories from "../components/Categories";
import Features from "../components/Features";
import Stats from "../components/Stats";
import Cta from "../components/Cta";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer"
import SearchResults from "../components/SearchResults";

function Home({ popularBooks, searchResults, onSearch, onOpenAbout }){
    return(
        <>
         <Hero onSearch={onSearch}/>
         <SearchResults books={searchResults}/>
         <PopularBooks books={popularBooks}/>
         <Categories onCategorySelect={onSearch}/>
         <Features />
         <Stats />
         <Cta onOpenAbout={onOpenAbout}/>
         <Testimonials />
         <Footer />
        </>
    )
}

export default Home