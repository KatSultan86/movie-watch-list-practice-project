import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);

  // set up the state for the editingMovie
  const [editingMovie, setEditingMovie] = useState(null);

  const addMovie = (newMovie) => {
    // We cannot mutate - the actual state (it is always immutable)
    // movies.push(newMovie);
    console.log('Adding the new movie.', newMovie);
    setMovies((prev) => [...prev, newMovie]);
  };

  const removeMovie = (id) => {
    // we are accessing movies directly
    // const filteredArray = movies.filter((movie) => {movie.id !== id});
    setMovies((prev) => prev.filter((movie) => movie.id !== id));
  };

  const editMovie = (movieToEdit) => {
    setEditingMovie(movieToEdit);
  };

  const updateMovie = (updatedMovie) => {
    setMovies((prev) =>
      prev.map((movie) => (movie.id === updateMovie.id ? updateMovie : movie))
    );
  };

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center">
        <MovieForm addMovie={addMovie} />
      </div>
      <MovieList movies={movies} removeMovie={removeMovie} />
    </>
  );
}

export default App;
