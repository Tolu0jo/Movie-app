import { useSelector } from "react-redux"
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice"
import MovieCard from "../MovieCard/MovieCard";
import { Imovie } from "../../common/interface";
import "./movielisting.scss"

const Movielisting = () => {
  const movies = useSelector(getAllMovies)
  const shows = useSelector(getAllShows)

 const renderMovies = movies.Response === "True"?(
    movies.Search.map((movie:Imovie,index:number)=>
    <MovieCard key={index} movie={movie}/>
    )
  ):(<div className="movies-error">
  <h3>{movies.Error}</h3>
  </div>
  )


  const renderShows = shows.Response === "True"?(
    shows.Search.map((movie:Imovie,index:number)=>
    <MovieCard key={index} movie={movie}/>
    )
  ):(<div className="movies-error">
  <h3>{movies.Error}</h3>
  </div>
  )


  return (
<div className="movie-wrapper">
  <div className="movie-list">
    <h2>Movies</h2>
    <div className="movie-container">
      {renderMovies}
    </div>
  </div>
  <div className="show-list">
    <h2>Show</h2>
    <div className="movie-container">
      {renderShows}
    </div>
  </div>
</div>
  )
}

export default Movielisting