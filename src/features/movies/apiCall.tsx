import {createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

export const fetchMoviesAsync = createAsyncThunk(
  "movies/fetchMoviesAsync",
  async (term:string) => {


    const response = await movieApi.get(
      `?apikey=${APIKey}&s=${term}&type=movie`
    );

    return response.data;
  }
);

export const fetchShowsAsync = createAsyncThunk(
    "shows/fetchMoviesAsync",
    async (term:string) => {
      
  
      const response = await movieApi.get(
        `?apikey=${APIKey}&s=${term}&type=series`
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