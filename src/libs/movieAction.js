import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  getTrendingMoviesApi,
  getUpcomingMoviesApi,
  getTopRatedMoviesApi,
  getMovieDetailsApi,
  getMovieCreditsApi,
  getSimilarMoviesApi,
  getPersonDetailsApi,
  getPersonMovieCreditsApi,
  getSearchMoviesApi,
} from '../api/moviedb';
import {
  setTrendingState,
  setUpcomingState,
  setTopRatedState,
  setMovieDetailsState,
  setMovieCreditsState,
  setSimilarMoviesState,
  setPersonDetailsState,
  setPersonMovieCreditsState,
  setSearchResultsState,
  setFavoritesState,
  setLoadingState,
  setErrorState,
} from './movieSlice';

// API call function

const fetchMovies = async (apiCall, successAction, dispatch, params = null) => {
  dispatch(setLoadingState(true));
  try {
    const response = await apiCall(params);
    if (response) {
      if (response.results) {
        dispatch(successAction(response.results));
      } else if (response.cast) {
        dispatch(successAction(response.cast));
      } else {
        dispatch(successAction(response));
      }
    } else {
      dispatch(setErrorState(true));
    }
  } catch (error) {
    dispatch(setErrorState(true));
  } finally {
    dispatch(setLoadingState(false));
  }
};

// Action creators

// Api calls

export const getTrendingMoviesAction = createAsyncThunk(
  'movie/getTrendingMoviesAction',
  (_, {dispatch}) =>
    fetchMovies(getTrendingMoviesApi, setTrendingState, dispatch),
);

export const getUpcomingMoviesAction = createAsyncThunk(
  'movie/getUpcomingMoviesAction',
  (_, {dispatch}) =>
    fetchMovies(getUpcomingMoviesApi, setUpcomingState, dispatch),
);

export const getTopRatedMoviesAction = createAsyncThunk(
  'movie/getTopRatedMoviesAction',
  (_, {dispatch}) =>
    fetchMovies(getTopRatedMoviesApi, setTopRatedState, dispatch),
);

export const getMovieDetailsAction = createAsyncThunk(
  'movie/getMovieDetailsAction',
  (movieId, {dispatch}) => {
    fetchMovies(getMovieDetailsApi, setMovieDetailsState, dispatch, movieId);
  },
);

export const getMovieCreditsAction = createAsyncThunk(
  'movie/getMovieCreditsAction',
  (movieId, {dispatch}) => {
    fetchMovies(getMovieCreditsApi, setMovieCreditsState, dispatch, movieId);
  },
);

export const getSimilarMoviesAction = createAsyncThunk(
  'movie/getSimilarMoviesAction',
  (movieId, {dispatch}) => {
    fetchMovies(getSimilarMoviesApi, setSimilarMoviesState, dispatch, movieId);
  },
);

export const getPersonDetailsAction = createAsyncThunk(
  'movie/getPersonDetailsApiAction',
  (personId, {dispatch}) => {
    fetchMovies(getPersonDetailsApi, setPersonDetailsState, dispatch, personId);
  },
);

export const getPersonMovieCreditsAction = createAsyncThunk(
  'movie/getPersonMovieCreditsAction',
  (personId, {dispatch}) => {
    fetchMovies(
      getPersonMovieCreditsApi,
      setPersonMovieCreditsState,
      dispatch,
      personId,
    );
  },
);

export const getSearchMoviesAction = createAsyncThunk(
  'movie/getSearchMoviesAction',
  (query, {dispatch}) => {
    fetchMovies(getSearchMoviesApi, setSearchResultsState, dispatch, query);
  },
);

// Favorites

export const toggleFavoriteMovieAction = movie => (dispatch, getState) => {
  const {
    favorites: {movies, ...favorites},
  } = getState().movie;

  const newMovie = movies.find(item => item.id === movie.id);
  if (!newMovie) {
    dispatch(
      setFavoritesState({
        ...favorites,
        movies: [...movies, movie],
      }),
    );
  } else {
    dispatch(
      setFavoritesState({
        ...favorites,
        movies: movies.filter(item => item.id !== movie.id),
      }),
    );
  }
};

export const toggleFavoritePersonAction = person => (dispatch, getState) => {
  const {
    favorites: {persons, ...favorites},
  } = getState().movie;

  const newPerson = persons.find(item => item.id === person.id);
  if (!newPerson) {
    dispatch(
      setFavoritesState({
        ...favorites,
        persons: [...persons, person],
      }),
    );
  } else {
    dispatch(
      setFavoritesState({
        ...favorites,
        persons: persons.filter(item => item.id !== person.id),
      }),
    );
  }
};
