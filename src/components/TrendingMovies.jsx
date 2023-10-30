import {View, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import Carousel from 'react-native-snap-carousel';
import {MovieCard} from './MovieCard';
import {useNavigation} from '@react-navigation/native';
import {androidMarginTop} from '../constants';
import {useAppSelector, useAppDispatch} from '../hooks';
import {getTrendingMoviesAction, getTrendingState} from '../libs';

const {width} = Dimensions.get('window');
export const TrendingMovies = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTrendingMoviesAction());
  }, []);

  const trendingMovies = useAppSelector(getTrendingState());

  return (
    <View className={`mb-8 ${androidMarginTop(3)}`}>
      <Carousel
        data={trendingMovies}
        renderItem={({item}) => <MovieCard item={item} />}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{display: 'flex', alignItems: 'center'}}
      />
    </View>
  );
};
