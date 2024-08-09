import logo from './logo.svg';
import './styles.css'
import Header from './components/Header'
import Footer from "./components/Footer";
import MovieGrid from "./components/MovieGrid";
import WatchList from "./components/WatchList";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {useState, useEffect} from "react";

function App() {
    //all the states are listed here
    const [movies, setMovies] = useState([]);
    const [watchlist, setWatchlist] = useState([])

    //functionality
    useEffect( function (){
        fetch("movies.json")
            .then( response => response.json())
            .then(data => setMovies(data))
    },[] );

    const toggleWatchlist = (movieId) => {
        setWatchlist(prev => prev.includes(movieId) ? prev.filter( id => id !== movieId ) : [...prev, movieId]
        )
    }


    //View part (JSX)
  return (
    <div className="App">
      <div className="container">
          <Header></Header>
          <Router>
              <nav>
                <ul>
                    <li>
                        <Link to={"/"} >Home</Link>
                    </li>
                    <li>
                        <Link to={"/watchlist"} >Watchlist</Link>
                    </li>
                </ul>
              </nav>
              <Routes>
                  <Route path="/" element={<MovieGrid movies={movies} watchlist={watchlist} toggleWatchlist={toggleWatchlist}/>}></Route>
                  <Route path="/watchlist" element={<WatchList movies={movies} watchlist={watchlist} toggleWatchlist={toggleWatchlist} />}></Route>
              </Routes>
          </Router>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
