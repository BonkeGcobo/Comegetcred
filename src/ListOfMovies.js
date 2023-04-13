import "./styles/moves.css";
import { getShows} from "./CallMoviesApi.js";
import { useState } from "react";


const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleOpenModal = (movie) => {
    console.log(movie);
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  getShows()
    .then((data) => {
      setMovies(data.slice(0, 9));
    })
    .catch((error) => {
      console.error(error);
    });

  const style = {
    color: "#61BE59",
  };

  const modalStyle = {
    content: {
      top: "20%",
      left: "25%",
      right: "25%",
      bottom: "20%",
      width: "50%",
      maxWidth: "800px",
    },
  };

  return (
    <>
      <h1 style={style}>Series Online</h1>
      <div className="movies">
        {movies.map((movie) => (
          <div className="movie" onClick={() => handleOpenModal(movie)}>
            <img src={movie.image.medium} />
            <h3>{movie.name}</h3>
          </div>
        ))}
      </div>
      {selectedMovie && (
        <div className="modal" style={modalStyle}>
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>{selectedMovie.name}</h2>
            <img src={selectedMovie.image.medium} />
            <p>{selectedMovie.summary}</p>
          </div>
        </div>
      )}
      ;
    </>
  );
};

export default Movies;
