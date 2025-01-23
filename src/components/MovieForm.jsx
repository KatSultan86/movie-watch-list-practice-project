function MovieForm() {
  return (
    <form className="z-1 p-3 mt-5 border border-2 rounded-2 d-xl-flex gap-1 col-lg-4 col-md-6 col-11 neon-shadow">
      <div className="form-floating mb-3 col-xl-7 col-12">
        <input
          type="text"
          className="form-control"
          id="movie-title"
          placeholder="Movie Title"
        />
        <label htmlFor="movie-title">Movie Title</label>
      </div>
      <div className="form-floating mb-3 col-xl-3 col-12">
        <input
          type="number"
          className="form-control"
          id="movie-rate"
          placeholder="Movie Title"
        />
        <label htmlFor="movie-rate">Rate(1-10)</label>
      </div>
      <button type="submit" className="btn btn-warning btn-sm col-xl-2 col-12">
        Add
      </button>
    </form>
  );
}

export default MovieForm;
