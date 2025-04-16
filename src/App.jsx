import React, { useEffect,useState } from 'react';
import Search from './components/Search.jsx';
import Spinner from './components/Spinner.jsx';
import MovieCard from './components/MovieCard.jsx';
import { useDebounce } from 'react-use';
import { updateSearchCount,getTrendingMovies } from './appwrite.js';


const API_BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

const App = () => {
  const [searchTerm,setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [movieList, setMovieList]= useState([]) ;
  const [isLoading, setIsLoading] = useState(false);  
  const [debouncedSearchTerm,setDebouncedSearchTerm] = useState('');
  const [trendingMovies, setTrendingMovies] = useState([]);

  const [isTrendingLoading, setIsTrendingLoading] = useState(false);
  const [trendingErrorMessage, setTrendingErrorMessage] = useState('');




  const [flippedCardId, setFlippedCardId] = useState(null);



 



  // Debounce the search term to avoid too many API calls
  // until after a specified delay (in this case, 500ms)
  useDebounce(() => setDebouncedSearchTerm(searchTerm),500,[searchTerm]);
   


  const fetchMovies = async (query = '') => {
    setIsLoading(true);
    setErrorMessage('');
    try{
      const endpoint = query
       ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
      :`${API_BASE_URL}/discover/movie?sort_by=popularity.desc` ;

      const response = await fetch(endpoint, API_OPTIONS);

      
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      if(data.response === 'False'){
        setErrorMessage(data.Error || 'Something went wrong');
        setMovieList([]);
        return
      } 

      setMovieList(data.results || []);
      if(query && data.results.length > 0){
        await updateSearchCount(query, data.results[0]);
      }

    }catch(error){
        console.error(`Error fetching movies: ${error}`);
        setErrorMessage('Failed to fetch movies. Please try again later.');
    }finally{
      setIsLoading(false);
    }
  }

  const loadTrendingMovies = async () => {
    setIsTrendingLoading(true);
    setTrendingErrorMessage('');
    try {
      const movies = await getTrendingMovies();
      setTrendingMovies(movies);
    }catch(error){
      console.error(`Error fetching trending movies: ${error}`);
      setTrendingErrorMessage('Failed to fetch trending movies. Please try again later.');
    }finally{
      setIsTrendingLoading(false);
    }
  }

  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }
  , [debouncedSearchTerm]);


  useEffect(() => {
    loadTrendingMovies();
  }
  , []);
 

  return (
    <main>







      <div className = "pattern"/> 
      <div className="wrapper">
        <header>
        <h1 className="mb-20">
        🎬 <span className="bg-gradient-to-r from-[#D6C7FF] to-[#8d69e9] bg-clip-text text-transparent">BingeFlix</span></h1>

          <img src="./hero.png" alt="Hero Banner" className="mb-5"/>
          
          <h1> 
            Find <span className="text-gradient">Movies</span> <span>You'll Enjoy Without The Hassle</span>
            </h1>


          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>


          </header>

            
            <section className="trending">
              <h2>Trending Movies</h2>
              {isTrendingLoading ? (
                <Spinner />
              ) : trendingErrorMessage ? (
                <p className="text-red-500">{trendingErrorMessage}</p>
              ) : trendingMovies.length > 0 ? (
              <ul>
                {trendingMovies.map((movie, index) => (
                  <li key={movie.$id}>
                    <p>{index+1}</p>
                    <img src={movie.poster_url} alt={movie.title} />
                  </li>
                ))}
              </ul>
              ) : (
                <p>No trending movies available.</p>
              )}
            </section>
          
 
          <section className="all-movies">
            <h2>All Movies</h2>

            {isLoading ? (
            <Spinner />
            ) : errorMessage ? (
              <p className="text-red-500">{errorMessage}</p>
            ) : (
              <ul>
                {movieList.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} flippedCardId={flippedCardId}
                  setFlippedCardId={setFlippedCardId}/>
                ))}
              </ul>
            )}  
          </section>


      </div> 
      
     
      <h1 className="text-white">{searchTerm}</h1>
    </main>
  )
}

export default App
