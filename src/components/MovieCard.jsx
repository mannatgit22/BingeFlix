import React, { useState } from 'react'; // 🔹 Imported useState to track flip state

const MovieCard = ({
  movie: { title, vote_average, poster_path, release_date, original_language, overview },
}) => {
  // 🔹 State to track whether the card is flipped or not
  const [isFlipped, setIsFlipped] = useState(false);

  // 🔹 This function toggles the flip state when the card is clicked
  const handleCardClick = () => {
    setIsFlipped(prev => !prev);
  };

  return (
    // 🔹 Added cursor-pointer for clickability, and onClick to toggle the flip state
    <div
      className="movie-card group w-full aspect-[2/3] [perspective:1000px] cursor-pointer"
      onClick={handleCardClick}
    >
      {/* 
        🔹 `rotate-y-180` is applied only when `isFlipped` is true
        🔹 This allows manual control of the flip on click
        🔹 Transition and 3D effect are preserved
      */}
      <div
        className={`card-inner relative w-full h-full transition-transform duration-700 ease-in-out 
        ${isFlipped ? 'rotate-y-180' : ''} 
        [transform-style:preserve-3d]`}
      >

        {/* ---------- FRONT SIDE OF THE CARD ---------- */}
        <div className="card-front absolute w-full h-full top-0 left-0 rounded-2xl overflow-hidden [backface-visibility:hidden]">
          <img
            src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-movie.png'}
            alt={title}
            className="rounded-lg h-full w-full object-cover"
          />
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4">
            <h3 className="text-white font-bold text-base line-clamp-1">{title}</h3>
            <div className="content mt-2 flex flex-row items-center flex-wrap gap-2 text-white">
              <div className="rating flex flex-row items-center gap-1">
                <img src="star.svg" alt="Star Icon" className="size-4 object-contain" />
                <p className="font-bold text-base">{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
              </div>
              <span>.</span>
              <p className="capitalize font-medium text-base">{original_language}</p>
              <span>.</span>
              <p className="font-medium text-base">{release_date ? release_date.split('-')[0] : 'N/A'}</p>
            </div>
          </div>
        </div>

        {/* ---------- BACK SIDE OF THE CARD ---------- */}
        {/* 🔹 This is shown only when card is flipped */}
        <div className="card-back absolute w-full h-full top-0 left-0 rounded-2xl bg-gray-800 p-4 text-white transform rotate-y-180 [backface-visibility:hidden] overflow-y-auto">
          <h3 className="font-bold mb-2 text-lg">{title}</h3>
          <p className="text-sm">{overview || 'No description available.'}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
