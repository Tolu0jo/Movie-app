import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getSelecteMovie, removeSelectedMovie } from "../../features/movies/movieSlice"
import { AppDispatch } from "../../features/store"
import "./movieDetail.scss"
import { fetchMovieDetailAsync } from "../../features/movies/apiCall"
const MovieDetail = () => {
  const data = useSelector(getSelecteMovie)
  const {imdbID}=useParams()
  const dispatch = useDispatch<AppDispatch>()
  useEffect(()=>{
      dispatch(fetchMovieDetailAsync(imdbID!))
      return()=>{
        dispatch(removeSelectedMovie())
      }
  },[dispatch])
  
  return (
<div className="movie-section">
  {Object.keys(data).length === 0 ?(<div>...Loading</div>):
  <>
  <div className="section-left">
    <div className="movie-title">
      {data.Title}
    </div>
    <div className="movie-rating">
      <span>
      IMDB Rating <i className="fa fa-star"></i>:{data.imdbRating}
      </span>
      <span>
      IMDB Votes <i className="fa fa-thumbs-up"></i>:{data.imdbRating}
      </span>
      <span>
      Runtime <i className="fa fa-film"></i>:{data.Runtime}
      </span>
      <span>
      Year <i className="fa fa-calender"></i>:{data.Year}
      </span>
    </div>
    <div className="moie-plot">
      {data.Plot}
    </div>
    <div className="movie-info">
      <div>
        <span>Director</span>
        <span>{data.Director}</span>
      </div>
      <div>
        <span>Stars</span>
        <span>{data.Actors}</span>
      </div>
      <div>
        <span>Genre</span>
        <span>{data.Genre}</span>
      </div>
      <div>
        <span>Languages</span>
        <span>{data.Language}</span>
      </div>
      <div>
        <span>Awards</span>
        <span>{data.Awards}</span>
      </div>
    </div>
  </div>
  <div className="section-right">
    <img src={data.Poster} alt={data.Title} />
  </div>
  </>}
</div>  )
}

export default MovieDetail