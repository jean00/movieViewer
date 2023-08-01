import React from 'react';
import Image from 'next/image';
import { IMovie } from '@/utils/interface';
import Link from 'next/link';

interface IMovieProps {
  id: IMovie['id'];
  title: IMovie['original_title'];
  releaseDate: IMovie['release_date'];
  posterUrl: IMovie['poster_path'];
  rating: IMovie['vote_average'];
}

const MoviesCard = ({ id, title, releaseDate, posterUrl, rating }: IMovieProps) => {
  const imageUrl = 'https://image.tmdb.org/t/p/';
  const imageSize = 'w500';

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-xl h-fit hover:scale-105 ease-in duration-100">
      <Link href={`/movie/${id}`}>
        <Image className="h-2/5 cursor-pointer" src={`${imageUrl + imageSize + posterUrl}`} alt="Movie Poster" width={500} height={10} />
      </Link>
      <div className="px-6 py-4">
        <div className="font-semibold mb-2">{title}</div>
        <p>Release Date: {releaseDate}</p>
        <p>Rating: {rating}</p>
      </div>
      {/*       <div className="px-6 py-4">
        <a href="#" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Watch Trailer
        </a>
      </div> */}
    </div>
  );
};

export default MoviesCard;
