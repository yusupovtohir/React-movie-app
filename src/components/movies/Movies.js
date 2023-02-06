import Movie from "../movie/Movie";
import './Movies.css'
import Error from "../error/Error";


const Movies = ({movies = []}) => {
  return (
    <div className="movies ">
      {movies.length ? movies.map(movie => (
      <Movie key={movie.imdbID} {...movie}/>
      )) : <Error />}
    </div>
  );
};


export default Movies;
