import { useEffect } from "react"
import MovieListing from "../MovieListing/MovieListing"
import "./home.scss"
import { useDispatch } from "react-redux"
import { fetchMoviesAsync, fetchShowsAsync } from "../../features/movies/movieSlice"
import { AppDispatch } from "../../features/store"

const Home = () => {
  const dispatch = useDispatch<AppDispatch>()

useEffect(()=>{

dispatch(fetchMoviesAsync())
dispatch(fetchShowsAsync())
},[dispatch]);
  
  return (
    <>
    <div className="banner">

    <MovieListing/>
    </div>
    </>
    
  )
}

export default Home