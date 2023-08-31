import { createSlice} from "@reduxjs/toolkit";
import { fetchMovieDetailAsync, fetchMoviesAsync, fetchShowsAsync } from "./apiCall";

const initialState = {
  movies: {},
  shows:{},
  selectedMovie:{},
  pending: false
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovie:(state)=>{
        state.selectedMovie={}
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesAsync.pending, (state) => {
        return {...state,pending:true}
      })
      .addCase(fetchMoviesAsync.fulfilled, (state, { payload }) => {
        console.log("fulfilled");
        return {...state, movies: payload}
      })
      .addCase(fetchMoviesAsync.rejected, () => {
        console.log("rejected");
      })
      .addCase(fetchShowsAsync.fulfilled, (state, { payload }) => {
        console.log("fulfilled");
        return {...state, shows: payload}
      })
      .addCase(fetchMovieDetailAsync.fulfilled, (state, { payload }) => {
        console.log("fulfilled");
        return {...state, selectedMovie: payload}
      })
  },
});
export const pending =(state:any)=> state.movies.pending
export const {removeSelectedMovie} = movieSlice.actions;
export const getAllMovies = (state: any) => state.movies.movies;
export const getAllShows = (state: any) => state.movies.shows;
export const getSelecteMovie = (state: any) => state.movies.selectedMovie;

export default movieSlice.reducer;
