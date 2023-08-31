import { useEffect } from "react"
import MovieListing from "../MovieListing/MovieListing"
import "./home.scss"
import { useDispatch } from "react-redux"
import { fetchMoviesAsync, fetchShowsAsync } from "../../features/movies/apiCall"
import { AppDispatch } from "../../features/store"

const Home = () => {
  const dispatch = useDispatch<AppDispatch>()

useEffect(()=>{

dispatch(fetchMoviesAsync("Harry"))
dispatch(fetchShowsAsync("Friends"))
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