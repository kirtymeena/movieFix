import PropTypes from 'prop-types'

import "./card.css"
import { useState } from 'react'

function Card({ movie, category }) {
    const [showOverlay, setShowOverlay] = useState(false)
    return (
        <section className="card__container" onMouseOver={() => setShowOverlay(true)} onMouseLeave={() => setShowOverlay(false)}>
            <div className="card__image">
                <img srcSet={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title} className="card__img" />
            </div>
            <div className="card__body">
                <div>
                    <p className="card__title">{movie.original_title}</p>
                </div>
                <div className="card__category">
                    {
                        category.genres && category.genres.filter(cat =>
                            movie.genre_ids.includes(cat.id)
                        ).map(cat =>
                            <p className="card__title category__chip" key={cat.id}>{cat.name}</p>
                        )
                    }

                </div>
                {
                    showOverlay &&

                    <div className='info__card'>
                        <p>{movie.overview.length > 400 ? movie.overview.slice(0, 400) + "..." : movie.overview}</p>
                    </div>
                }
            </div>
        </section>
    )
}

Card.propTypes = {
    movie: PropTypes.object,
    category: PropTypes.object
}


export default Card