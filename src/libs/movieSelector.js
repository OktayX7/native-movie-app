export const getTrendingState =
  () =>
  ({movie: {trending}}) =>
    trending;

export const getUpcomingState =
  () =>
  ({movie: {upcoming}}) =>
    upcoming;

export const getTopRatedState =
  () =>
  ({movie: {topRated}}) =>
    topRated;

export const getMovieDetailsState =
  () =>
  ({movie: {movieDetails}}) =>
    movieDetails;

export const getMovieCreditsState =
  () =>
  ({movie: {movieCredits}}) =>
    movieCredits;

export const getSimilarMoviesState =
  () =>
  ({movie: {similarMovies}}) =>
    similarMovies;

export const getPersonDetailsState =
  () =>
  ({movie: {personDetails}}) =>
    personDetails;

export const getPersonMovieCreditsState =
  () =>
  ({movie: {personMovieCredits}}) =>
    personMovieCredits;

export const getSearchResultsState =
  () =>
  ({movie: {searchResults}}) =>
    searchResults;

export const getFavoritesState =
  () =>
  ({movie: {favorites}}) =>
    favorites;

export const getLoadingState =
  () =>
  ({movie: {loading}}) =>
    loading;

export const getErrorState =
  () =>
  ({movie: {error}}) =>
    error;
