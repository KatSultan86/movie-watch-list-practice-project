import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className='d-flex justify-content-center'>
        <MovieForm />
      </div>
      <MovieList />
    </>
  );
}

export default App;
