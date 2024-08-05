import React, {useState, useEffect} from "react";
import '../styles.css'
import MovieCard from "./MovieCard";

function MovieGrid(){
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    useEffect( function (){
        fetch("movies.json")
            .then( response => response.json())
            .then(data => setMovies(data))
    },[] );
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const filteredMovies = movies.filter( movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    )


    return(
        <div>
            <input type="text" placeholder="Search Movies" className="search-input"
            value={searchTerm} onChange={handleSearchChange}
            />
            <div className='movies-grid'>
                { filteredMovies.map(movie => (
                        <MovieCard movie={movie} key={movie.id}></MovieCard>
                    ))}
            </div>
        </div>

    );

}
export default MovieGrid;