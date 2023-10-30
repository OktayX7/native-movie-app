import {
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import {fallbackMoviePoster, image500} from '../api/moviedb';
import {useNavigation} from '@react-navigation/native';

export const MovieListItem = ({movie}) => {
  const navigation = useNavigation();

  const {id, title, poster_path} = movie;
  const {width, height} = Dimensions.get('window');
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('MovieScreen', id)}>
      <View className="space-y-2 mb-4 ml-2">
        <Image
          source={{
            uri: image500(poster_path) || fallbackMoviePoster,
          }}
          className="rounded-3xl"
          style={{width: width * 0.44, height: height * 0.3}}
        />
        <Text className="text-gray-300 ml-1">
          {title?.length > 20 ? title?.slice(0, 20) + '...' : title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
