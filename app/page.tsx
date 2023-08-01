'use client';
import { useEffect, useState } from 'react';
import { options } from '@/utils/utils';
import MoviesCard from '@/components/MoviesCard';

const Home = () => {
  const url = 'https://api.themoviedb.org/3/discover/movie';
  const [movies, setMovies]: any = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url, options);
      const data = await res.json();
      if (!data) return;
      const { results } = data;
      setMovies(results);
      console.log(results);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  return (
    <div className="px-20 flex flex-wrap text-white text-sm p-20 gap-10">
      {movies &&
        movies.map((movie: any) => (
          <MoviesCard
            key={movie.id}
            title={movie.original_title}
            releaseDate={movie.release_date}
            overview={movie.overview}
            posterUrl={movie.poster_path}
            rating={movie.vote_average}
          />
        ))}
    </div>
  );
};

export default Home;
