import React from 'react';

// This component displays a movie card that flips when you hover over it
const MovieCard = ({
  movie: { title, vote_average, poster_path, release_date, original_language, overview },
}) => {
  return (
    // This is the outermost container for the card
    // `group` lets us detect hover effects from inside
    // `perspective` gives it a 3D feel, so the flip looks real
    <div className="movie-card group w-full aspect-[2/3] [perspective:1000px]">

      {/* This is the main wrapper that will FLIP on hover */}
      {/* It rotates when the outer box is hovered (`group-hover:rotate-y-180`) */}
      {/* `preserve-3d` keeps both front and back layers visible in 3D */}
      <div className="card-inner relative w-full h-full transition-transform duration-700 ease-in-out group-hover:rotate-y-180 [transform-style:preserve-3d]">

        {/* ---------- FRONT SIDE OF THE CARD ---------- */}
        <div className="card-front absolute w-full h-full top-0 left-0 rounded-2xl overflow-hidden [backface-visibility:hidden]">
          
          {/* Movie Poster */}
          <img
            src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-movie.png'}
            alt={title}
            className="rounded-lg h-full w-full object-cover"
          />

          {/* Title and movie info shown on the front */}
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4">
            <h3 className="text-white font-bold text-base line-clamp-1">{title}</h3>

            <div className="content mt-2 flex flex-row items-center flex-wrap gap-2 text-white">
              {/* Star rating */}
              <div className="rating flex flex-row items-center gap-1">
                <img src="star.svg" alt="Star Icon" className="size-4 object-contain" />
                <p className="font-bold text-base">{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
              </div>

              {/* Language and year */}
              <span>.</span>
              <p className="capitalize font-medium text-base">{original_language}</p>

              <span>.</span>
              <p className="font-medium text-base">
                {release_date ? release_date.split('-')[0] : 'N/A'}
              </p>
            </div>
          </div>
        </div>

        {/* ---------- BACK SIDE OF THE CARD ---------- */}
        {/* This is hidden by default and shown when flipped */}
        <div className="card-back absolute w-full h-full top-0 left-0 rounded-2xl bg-gray-800 p-4 text-white transform rotate-y-180 [backface-visibility:hidden] overflow-y-auto">
          {/* Title again (optional) */}
          <h3 className="font-bold mb-2 text-lg">{title}</h3>

          <p className="text-sm line-clamp-6">
            {overview || 'No description available.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;