import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchMovieDetailAsync, getSelecteMovie } from "../../features/movies/movieSlice"
import { AppDispatch } from "../../features/store"

const MovieDetail = () => {
  const data = useSelector(getSelecteMovie)
  const {imdbID}=useParams()
  const dispatch = useDispatch<AppDispatch>()
  useEffect(()=>{
      dispatch(fetchMovieDetailAsync(imdbID!))
  },[dispatch,imdbID])
  
  return (
<div className="monvie-selectio">
  <div className="section-left">
    <div className="movie-title">
      {data.Title}
    </div>
    <div className="movie-rating">
      <span>
      IMDB Rating <i className="fa fa star"></i>
      </span>
      
    </div>
  </div>
</div>  )
}

export default MovieDetail