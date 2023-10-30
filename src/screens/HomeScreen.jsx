import {
  View,
  StatusBar,
  Platform,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';
import {Logo, MovieList, TrendingMovies} from '../components';
import {useNavigation} from '@react-navigation/native';
import {
  getUpcomingMoviesAction,
  getTopRatedMoviesAction,
  getUpcomingState,
  getTopRatedState,
} from '../libs';
import {useAppDispatch, useAppSelector} from '../hooks';
export const HomeScreen = () => {
  const ios = Platform.OS === 'ios';

  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUpcomingMoviesAction());
    dispatch(getTopRatedMoviesAction());
  }, []);

  const upcomingMov = useAppSelector(getUpcomingState());
  const topRatedMov = useAppSelector(getTopRatedState());

  return (
    <View className="flex-1 bg-neutral-800">
      {/* Search bar and logo */}
      <SafeAreaView className={ios ? 'mb-3' : 'my-3'}>
        <StatusBar barStyle="light-content" />
        <View className="flex-row justify-between items-center px-4">
          <Icon name="menuunfold" size={30} color="#fff" />
          <Logo />
          <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
            <Icon name="search1" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}>
        {/* Trending Movies Carousel */}
        <TrendingMovies />

        {/* upcoming movies row */}
        <MovieList title="Upcoming" data={upcomingMov} />

        {/* top rated movies row */}
        <MovieList title="Top Rated" data={topRatedMov} />
      </ScrollView>
    </View>
  );
};
