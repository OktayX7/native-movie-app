import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  trending: [],
  upcoming: [],
  topRated: [],
  movieDetails: {},
  movieCredits: {},
  similarMovies: [],
  personDetails: {},
  personMovieCredits: [],
  favorites: {
    movies: [],
    persons: [],
  },
  searchResults: [],
  loading: false,
  error: false,
};

const {reducer, actions} = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setTrendingState: (state, action) => {
      state.trending = action.payload;
    },
    setUpcomingState: (state, action) => {
      state.upcoming = action.payload;
    },
    setTopRatedState: (state, action) => {
      state.topRated = action.payload;
    },
    setMovieDetailsState: (state, action) => {
      state.movieDetails = action.payload;
    },
    setMovieCreditsState: (state, action) => {
      state.movieCredits = action.payload;
    },
    setSimilarMoviesState: (state, action) => {
      state.similarMovies = action.payload;
    },
    setPersonDetailsState: (state, action) => {
      state.personDetails = action.payload;
    },
    setPersonMovieCreditsState: (state, action) => {
      state.personMovieCredits = action.payload;
    },
    setSearchResultsState: (state, action) => {
      state.searchResults = action.payload;
    },
    setFavoritesState: (state, action) => {
      state.favorites = action.payload;
    },
    // addFavoriteMovieState: (state, action) => {
    //   const newMovie = state.favorites.movies.find(
    //     movie => movie.id === action.payload.id,
    //   );
    //   if (!newMovie) {
    //     state.favorites.movies.push(action.payload);
    //   } else {
    //     state.favorites.movies = state.favorites.movies.filter(
    //       movie => movie.id !== action.payload.id,
    //     );
    //   }
    // },
    setLoadingState: (state, action) => {
      state.loading = action.payload;
    },
    setErrorState: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default reducer;
export const {
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
} = actions;
