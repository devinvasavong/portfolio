"use client"
// components/MovieTracker.tsx
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
const { StarIcon, TrashIcon } = require('@heroicons/react/20/solid');

// types/types.ts
export interface Movie {
  id: number;
  title: string;
  liked: boolean;
  rating: number;
}

const MovieTracker: React.FC = () => {
  // Initialize movies as empty array
  const [movies, setMovies] = useState<Movie[]>([]);
  const [newMovieTitle, setNewMovieTitle] = useState<string>('');

  // Load movies from localStorage on client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedMovies = localStorage.getItem('movies');
      if (savedMovies) {
        setMovies(JSON.parse(savedMovies));
      }
    }
  }, []);

  // Save movies to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  // Handler to add a new movie
  const handleAddMovie = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newMovieTitle.trim() === '') return;

    const newMovie: Movie = {
      id: Date.now(),
      title: newMovieTitle.trim(),
      liked: false,
      rating: 0,
    };

    setMovies([...movies, newMovie]);
    setNewMovieTitle('');
  };

  // Handler to toggle liked status
  const toggleLiked = (id: number) => {
    setMovies(
      movies.map((movie) =>
        movie.id === id ? { ...movie, liked: !movie.liked } : movie
      )
    );
  };

  // Handler to set rating
  const setRating = (id: number, rating: number) => {
    setMovies(
      movies.map((movie) =>
        movie.id === id ? { ...movie, rating } : movie
      )
    );
  };

  // Handler to delete a movie
  const deleteMovie = (id: number) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  // Generate star ratings
  const renderStars = (movie: Movie) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <StarIcon
          key={i}
          className={`h-5 w-5 cursor-pointer ${
            i <= movie.rating ? 'text-yellow-400' : 'text-gray-300'
          } hover:text-yellow-500 transition-colors duration-200`}
          onClick={() => setRating(movie.id, i)}
          aria-label={`${i} Star`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Header */}
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900">
        🎬 Movie Suggestion Tracker
      </h1>

      {/* Add Movie Form */}
      <form
        onSubmit={handleAddMovie}
        className="flex flex-col sm:flex-row items-center mb-8 space-y-4 sm:space-y-0 sm:space-x-4"
      >
        <input
          type="text"
          value={newMovieTitle}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setNewMovieTitle(e.target.value)}
          placeholder="Enter movie title"
          className="w-full sm:w-2/3 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Movie Title"
        />
        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          Add Movie
        </button>
      </form>

      {/* Movies Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b bg-gray-200 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 border-b bg-gray-200 text-center text-sm font-medium text-gray-700 uppercase tracking-wider">
                Liked
              </th>
              <th className="px-6 py-3 border-b bg-gray-200 text-center text-sm font-medium text-gray-700 uppercase tracking-wider">
                Rating
              </th>
              <th className="px-6 py-3 border-b bg-gray-200 text-center text-sm font-medium text-gray-700 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {movies.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="px-6 py-4 text-center text-gray-500"
                >
                  No movie suggestions yet. Add some movies!
                </td>
              </tr>
            ) : (
              movies.map((movie) => (
                <tr
                  key={movie.id}
                  className="hover:bg-gray-100 transition duration-150"
                >
                  {/* Title */}
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                    {movie.title}
                  </td>

                  {/* Liked */}
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <input
                      type="checkbox"
                      checked={movie.liked}
                      onChange={() => toggleLiked(movie.id)}
                      className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      aria-label={`Mark ${movie.title} as liked`}
                    />
                  </td>

                  {/* Rating */}
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <div className="flex justify-center">
                      {renderStars(movie)}
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <button
                      onClick={() => deleteMovie(movie.id)}
                      className="text-red-600 hover:text-red-800 focus:outline-none"
                      title={`Delete ${movie.title}`}
                      aria-label={`Delete ${movie.title}`}
                    >
                      <TrashIcon className="h-5 w-5 inline" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MovieTracker;