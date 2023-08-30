import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

export const fetchMoviesAsync = createAsyncThunk(
  "movies/fetchMoviesAsync",
  async () => {
    const movieText = "Harry";

    const response = await movieApi.get(
      `?apikey=${APIKey}&s=${movieText}&type=movie`
    );

    return response.data;
  }
);

export const fetchShowsAsync = createAsyncThunk(
    "shows/fetchMoviesAsync",
    async () => {
      const seriesText = "Friends";
  
      const response = await movieApi.get(
        `?apikey=${APIKey}&s=${seriesText}&type=series`
      );
  
      return response.data;
    }
  );

  export const fetchMovieDetailAsync = createAsyncThunk(
    "movie/fetchMovieAsync",
    async (id:string) => {
    
  
      const response = await movieApi.get(
        `?apikey=${APIKey}&i=${id}&Plot=full`
      );
  
      return response.data;
    }
  );

const initialState = {
  movies: {},
  shows:{},
  selectedMovie:{},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesAsync.pending, () => {
        console.log("pending");
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

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state: any) => state.movies.movies;
export const getAllShows = (state: any) => state.movies.shows;
export const getSelecteMovie = (state: any) => state.movies.selectedMovie;

export default movieSlice.reducer;
