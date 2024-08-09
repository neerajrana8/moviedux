import React from "react";
import '../styles.css'
import MovieCard from "./MovieCard";


function WatchList({movies, toggleWatchlist, watchlist}) {
    return(
        <div>
            <h1>WatchList</h1>
            <div className="watchlist">
                { watchlist.map(id => {
                const movie = movies.find(movie => movie.id === id);
                return <MovieCard key={id} movie={movie} toggleWatchlist={toggleWatchlist} isWatchListed={true} />
            })
            }
            </div>
        </div>
    )
}
export default WatchList;