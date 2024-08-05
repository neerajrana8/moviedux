import React from "react";
import '../styles.css';
function MovieCard({movie}){
    const getRatingClass = (rating) => {
        if (rating >= 8){
            return "rating-good";
        }else if (rating >=5 && rating < 8){
                return "rating-ok";
        }else {
            return "rating-bad";
        }

    };
    const handleMissingImage = e => e.target.src = "images/default.jpg";
    return( <div key={movie.id} className="movie-card">
            <img src={`images/${movie.image}`} alt={movie.title} onError={handleMissingImage}/>
            <div className="movie-card-info">
                <h3 className="movie-card-title">{movie.title}</h3>
                <p className="movie-card-genre">{movie.genre}</p>
                <p className={`movie-card-rating ${getRatingClass(movie.rating)}`}>{movie.rating}</p>
            </div>
    </div>
    );
}

export default MovieCard;