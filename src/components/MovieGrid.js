import React, {useState, useEffect} from "react";
import '../styles.css'
import MovieCard from "./MovieCard";

function MovieGrid(){
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [genre, setGenre] = useState("All");
    const [rating, setRating] = useState("All")

    useEffect( function (){
        fetch("movies.json")
            .then( response => response.json())
            .then(data => setMovies(data))
    },[] );
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleGenreChange = (e) => {
        setGenre(e.target.value);
    }
    const handleRatingChange = (e) => {
        setRating(e.target.value)
    }

    const matchesRating = (movie, rating) => {
        switch (rating){
            case "All":
                return true;
            case "Good":
                return movie.rating >= 8;
            case "Ok":
                return movie.rating >= 5 && movie.rating < 8;
            case "Bad":
                return movie.rating < 5;
            default:
                return false;
        }
    }
    const matchesGenre = (movie, genre) =>{
        return genre === "All" || movie.genre.toLowerCase() === genre.toLowerCase()
    }
    const matchesSearchTerm = (movie, searchTerm) => {
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    }

    const filteredMovies = movies.filter((movie) =>
        matchesSearchTerm(movie, searchTerm) &&
        matchesGenre(movie, genre) &&
        matchesRating(movie, rating)
    )


    return(
        <div>
            <input type="text" placeholder="Search Movies" className="search-input"
            value={searchTerm} onChange={handleSearchChange}
            />
            <div className="filter-bar">
                <div className="filter-slot"><label >Genre</label>
                    <select className="filter-dropdown" value={genre} onChange={handleGenreChange} >
                        <option >All</option>
                        <option >Action</option>
                        <option >Drama</option>
                        <option >Fantasy</option>
                        <option >Horror</option>
                    </select>
                </div>
                <div className="filter-slot"><label >Rating</label>
                    <select className="filter-dropdown" value={rating} onChange={handleRatingChange}>
                        <option>All</option>
                        <option >Good</option>
                        <option >Ok</option>
                        <option>Bad</option>
                    </select>
                </div>
            </div>
            <div className='movies-grid'>
                { filteredMovies.map(movie => (
                        <MovieCard movie={movie} key={movie.id}></MovieCard>
                    ))}
            </div>
        </div>

    );

}
export default MovieGrid;