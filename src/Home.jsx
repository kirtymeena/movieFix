import { useState } from "react";
import Category from "./components/categories/Category"
import MovieList from "./components/movies/Movie"
import Navbar from "./components/UI/navbar/Navbar"
import useFetchUrl from "./customHook/useFetchUrl";
import "./home.css"

function Home() {
  const [data, error] = useFetchUrl("https://api.themoviedb.org/3/genre/movie/list?api_key=2dca580c2a14b55200e784d157207b4d")
  const [selectedCategory, setSelectedCategory] = useState([])


  return (
    <div>
      <header>
        <Navbar />
        <Category category={data} error={error} setSelectedCategory={setSelectedCategory} />
      </header>
      <main className="container">
        <MovieList category={data} selectedCategory={selectedCategory} />
      </main>

    </div>
  )
}

export default Home