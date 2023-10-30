import {requests} from '../utils';

// endpoints
export const getTrendingMoviesApi = () => {
  return requests.get('/trending/all/day');
};

export const getUpcomingMoviesApi = () => {
  return requests.get('/movie/upcoming');
};

export const getTopRatedMoviesApi = () => {
  return requests.get('/movie/top_rated');
};

export const getSearchMoviesApi = query => {
  return requests.get(`/search/movie?query=${query}`);
};

// dynamic endpoints
export const getMovieDetailsApi = movieId => {
  return requests.get(`/movie/${movieId}`);
};
export const getMovieCreditsApi = movieId => {
  return requests.get(`/movie/${movieId}/credits`);
};
export const getSimilarMoviesApi = movieId => {
  return requests.get(`/movie/${movieId}/similar`);
};

export const getPersonDetailsApi = personId => {
  return requests.get(`/person/${personId}`);
};
export const getPersonMovieCreditsApi = personId => {
  return requests.get(`/person/${personId}/movie_credits`);
};

// functions to get images of different widths, (show images using these to improve the loading times)
export const image500 = posterPath =>
  posterPath ? 'https://image.tmdb.org/t/p/w500' + posterPath : null;
export const image342 = posterPath =>
  posterPath ? 'https://image.tmdb.org/t/p/w342' + posterPath : null;
export const image185 = posterPath =>
  posterPath ? 'https://image.tmdb.org/t/p/w185' + posterPath : null;

// fallback images
export const fallbackMoviePoster =
  'https://img.myloview.com/stickers/white-laptop-screen-with-hd-video-technology-icon-isolated-on-grey-background-abstract-circle-random-dots-vector-illustration-400-176057922.jpg';
export const fallbackPersonImage =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUiF-YGjavA63_Au8jQj7zxnFxS_Ay9xc6pxleMqCxH92SzeNSjBTwZ0l61E4B3KTS7o&usqp=CAU';
