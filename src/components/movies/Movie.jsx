import { useEffect, useState } from "react";
import "./movie.css";
import PropTypes from 'prop-types'
import Card from "../UI/card/Card";

function Movie({ category, selectedCategory }) {
    const [year, setYear] = useState(2012)
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=2dca580c2a14b55200e784d157207b4d&sort_by=popularity.desc&primary_release_year=${year}&page=1&vote_count.gte=100&https://api.themoviedb.org/3/movie/50620?api_key=2dca580c2a14b55200e784d157207b4d&language=en-US&with_cast}`)
        const data = await response.json()
        console.log(data)
        setMovies([...movies, { year: year, moviesData: data.results }])

    }
    const onScroll = () => {
        setTimeout(() => {
            if (year < new Date().getFullYear()) {
                setYear(year + 1)
            }
        }, 900)
    }


    useEffect(() => {
        fetchMovies(year)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll);
    }, [year])

    return (
        <div className='movie__container' >
            {
                movies.length > 0 && movies.map(movie =>
                    <>
                        <div className="heading">
                            <h2>{movie.year}</h2>
                        </div>

                        <div className="card__outter">
                            {
                                selectedCategory.length > 0 ?
                                    movie.moviesData && movie.moviesData.filter(a => a.genre_ids.some(data =>
                                        selectedCategory.some(x => x.id === data)
                                    )).map(data =>
                                        <Card movie={data} key={data.id} category={category} />
                                    ) :

                                    movie.moviesData && movie.moviesData.map(data =>
                                        <Card movie={data} key={data.id} category={category} />

                                    )
                            }
                        </div>
                    </>
                )
            }
        </div>
    )
}

Movie.propTypes = {
    category: PropTypes.object,
    selectedCategory: PropTypes.array
}

export default Movie