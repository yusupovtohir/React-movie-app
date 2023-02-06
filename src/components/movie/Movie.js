
const Movie = (props) => {
  const {Poster, Title, Year, Type, imdbID} = props;
  return (
    <>
      <div key={imdbID} className="card" >
        <img src={Poster} className="card-img-top" alt="Poster" style={{width: 'auto', height: '380px'}}/>
        <div className="card-body">
          <h3 className="card-title">{Title}</h3>
          <p>
          <span className="me-5">
            {Year} 
          </span>
          <span className="ms-5">{Type}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Movie;
