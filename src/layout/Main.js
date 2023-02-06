import { useState, useEffect } from "react";
import Movies from "../components/movies/Movies";
import Loader from "../components/loader/Loader";
import Search from "../components/search/Search";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=panda&apikey=64b27b46`)
      .then((response) => response.json())
      .then((date) => (
        setMovies(date.Search), 
        setLoading(false)
      ));
  }, []);

  const searchMovie = (str, type = "all") => {
    setLoading(true);
    fetch(
      `http://www.omdbapi.com/?s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }&apikey=64b27b46`
    )
      .then((response) => response.json())
      .then((date) => (
        setMovies(date.Search), setLoading(false)
      ));
  };

  return (
    <div className="container">
      <Search searchMovie={searchMovie} />
      {loading ? <Loader /> : <Movies movies={movies} />}
    </div>
  );
};

export default Main;
