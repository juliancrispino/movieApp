import React from 'react'


const Card = ({res}) => {
    let img_path = "https://image.tmdb.org/t/p/w500"

    return (
        <div>
            <div className="movie">
                <img src={img_path+res.poster_path} className='poster' alt={res.title} />
                <div className="movie-details">
                    <div className="box">
                        <div className="title">{res.title}</div>
                        <p className="rating">{res.vote_average}</p>
                    </div>
                    <div className="overview">
                        <h1>Resumen</h1>
                        <p>{res.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card