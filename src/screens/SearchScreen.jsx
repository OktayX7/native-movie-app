import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {androidMarginTop} from '../constants';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {Loading, MovieListItem} from '../components';
import {useAppDispatch, useAppSelector} from '../hooks';
import {
  getSearchMoviesAction,
  getSearchResultsState,
  getLoadingState,
} from '../libs';
import {fallbackMoviePoster, image500} from '../api/moviedb';

export const SearchScreen = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const [searchText, setSearchText] = useState('');

  const {width, height} = Dimensions.get('window');

  useEffect(() => {
    const searchTextModified = searchText
      .trim()
      .toLowerCase()
      .replace(/\s+/g, ' ');

    dispatch(getSearchMoviesAction(searchTextModified));
  }, [searchText]);

  const results = useAppSelector(getSearchResultsState());
  const loading = useAppSelector(getLoadingState());

  return (
    <SafeAreaView className="bg-neutral-800 flex-1">
      <View
        className={`mx-4 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full ${androidMarginTop(
          3,
        )}`}>
        <TextInput
          value={searchText}
          onChangeText={text => {
            setSearchText(text);
          }}
          placeholder="Search Movie"
          placeholderTextColor={'lightgray'}
          className="py-2 px-6 flex-1  text-base font-semibold text-white tracking-wider"
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('HomeScreen');
          }}
          className="rounded-full p-3 m-1 bg-neutral-500">
          <Icon name="close" size={25} color="white" />
        </TouchableOpacity>
      </View>

      {loading && <Loading />}

      {/** Search Result */}
      {results.length > 0 && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 15}}
          className="space-y-3">
          <Text className="text-white font-semibold ml-1">
            Results ({results.length})
          </Text>
          <View className="flex-row justify-between flex-wrap">
            {results.map((movie, index) => {
              return <MovieListItem key={index} movie={movie} />;
            })}
          </View>
        </ScrollView>
      )}

      {results.length <= 0 && (
        <View className="flex-row items-start justify-center">
          <Image
            source={require('../assets/images/movieTime.png')}
            className="w-96 h-96"
          />
        </View>
      )}
    </SafeAreaView>
  );
};
