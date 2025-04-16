import React from 'react';

const MovieCard = ({
  movie: { id, title, vote_average, poster_path, release_date, original_language, overview },
  flippedCardId,
  setFlippedCardId
}) => {
  // 🔹 Determine if this card is currently flipped
  const isFlipped = flippedCardId === id;

  // 🔹 Toggle flip — if this is already flipped, unflip it; else flip this and unflip others
  const handleCardClick = () => {
    setFlippedCardId(prev => (prev === id ? null : id));
  };

  return (
    <div
      className="movie-card group w-full aspect-[2/3] [perspective:1000px] cursor-pointer"
      onClick={handleCardClick}
    >
      <div
        className={`card-inner relative w-full h-full transition-transform duration-700 ease-in-out 
        ${isFlipped ? 'rotate-y-180' : ''} 
        [transform-style:preserve-3d]`}
      >
        {/* ---------- FRONT ---------- */}
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

        {/* ---------- BACK ---------- */}
        <div className="card-back absolute w-full h-full top-0 left-0 rounded-2xl bg-gray-800 p-4 text-white transform rotate-y-180 [backface-visibility:hidden] overflow-y-auto">
          <h3 className="font-bold mb-2 text-lg">{title}</h3>
          <p className="text-sm">{overview || 'No description available.'}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
