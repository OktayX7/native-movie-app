import {
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  Text,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Entypo';
import {styles, theme} from '../theme';
import {androidMarginTop} from '../constants';
import LinearGradient from 'react-native-linear-gradient';
import {Cast, Loading, MovieList} from '../components';
import {
  getMovieDetailsAction,
  getMovieCreditsAction,
  getSimilarMoviesAction,
  getMovieDetailsState,
  getMovieCreditsState,
  getSimilarMoviesState,
  getLoadingState,
} from '../libs';
import {useAppDispatch, useAppSelector} from '../hooks';
import {fallbackMoviePoster, image500} from '../api/moviedb';
import BackAndFavoriteBtn from '../components/BackAndFavoriteBtn';

const {width, height} = Dimensions.get('window');

export const MovieScreen = () => {
  const dispatch = useAppDispatch();
  const id = useRoute().params;
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    dispatch(getMovieDetailsAction(id));
    dispatch(getMovieCreditsAction(id));
    dispatch(getSimilarMoviesAction(id));
  }, [id]);

  const movieDetails = useAppSelector(getMovieDetailsState());
  const similarMoviesState = useAppSelector(getSimilarMoviesState());
  const cast = useAppSelector(getMovieCreditsState());
  const loading = useAppSelector(getLoadingState());

  if (loading) return <Loading />;

  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: 20}}
      className="flex-1 bg-neutral-900">
      <View className="w-full">
        <BackAndFavoriteBtn isAbsolute={true} item={movieDetails} />
        <View>
          <Image
            // source={require('../assets/images/moviePoster2.png')}
            source={{
              uri: image500(movieDetails?.poster_path) || fallbackMoviePoster,
            }}
            style={{
              width,
              height: height * 0.55,
            }}
          />
          <LinearGradient
            colors={[
              'transparent',
              'rgba(23, 23, 23, 0.8)',
              'rgba(23, 23, 23, 1)',
            ]}
            style={{width, height: height * 0.4}}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
            className="absolute bottom-0"
          />
        </View>
      </View>
      {/* Movie Details */}
      <View style={{marginTop: -(height * 0.09)}} className="space-y-3">
        {/* Movie Title */}
        <Text className="text-white text-center text-3xl font-bold tracking-wider">
          {movieDetails?.title}
        </Text>
        {/* status,relase,runtime */}
        {movieDetails?.id && (
          <Text className="text-neutral-400 font-semibold text-base text-center">
            {movieDetails?.status} | {movieDetails?.release_date?.split('-')[0]}{' '}
            |{movieDetails?.runtime} min
          </Text>
        )}
        {/* Genres */}
        <View className=" flex-row justify-center mx-4 space-x-2">
          {movieDetails?.genres?.map((genre, index) => {
            let showDot = index + 1 !== movieDetails?.genres?.length;
            return (
              <Text
                key={index}
                className="text-neutral-400 font-semibold text-base text-center">
                {genre.name} {showDot && '|'}
              </Text>
            );
          })}
        </View>

        {/* Description */}
        <Text className="text-neutral-400 mx-4 tracking-wide">
          {movieDetails?.overview ||
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatem?'}
        </Text>
      </View>
      {/* Cast */}
      {cast?.length > 0 && <Cast data={cast} navigation={navigation} />}

      {/* Similar Movies */}
      {similarMoviesState?.length > 0 && (
        <MovieList
          title="Similar Movies"
          hideSeeAll
          data={similarMoviesState}
        />
      )}
    </ScrollView>
  );
};
