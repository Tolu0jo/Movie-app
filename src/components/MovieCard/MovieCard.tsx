import { Link } from 'react-router-dom'
import { Imovie } from '../../common/interface'
import "./MovieCard.scss"
interface Props{
    movie:Imovie
}
const MovieCard = ({ movie }: Props) => {
    
  return (
<div className="card-item">
    <Link to={`/movie/${movie.imdbID}`}>
    <div className="card-inner">
        <div className="card-top">
            <img src={movie.Poster} alt={movie.Title}/>
        </div>
        <div className="card-bottom">
            <div className="card-info">
                <h4>
                    {movie.Title}
                </h4>
                <p>
                    {movie.Year}
                </p>
            </div>
        </div>
    </div>
    </Link>
</div>
  )
}

export default MovieCard