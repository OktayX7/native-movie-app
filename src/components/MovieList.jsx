import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import React from 'react';
import {styles} from '../theme';
import {useNavigation} from '@react-navigation/native';
import {fallbackMoviePoster, image185} from '../api/moviedb';

const {width, height} = Dimensions.get('window');

export const MovieList = ({title, data, hideSeeAll}) => {
  const navigation = useNavigation();

  return (
    <View className="mb-8 space-y-4">
      <View className="mx-4 flex-row justify-between items-center">
        <Text className="text-white text-xl">{title}</Text>
        {!hideSeeAll && (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('MoviesByCategoryScreen', {title, data})
            }>
            <Text style={styles.text} className="text-lg">
              See All
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableWithoutFeedback
            onPress={() => navigation.push('MovieScreen', item.id)}>
            <View className="space-y-1 mr-4">
              <Image
                source={{
                  uri: image185(item.poster_path) || fallbackMoviePoster,
                }}
                className="rounded-3xl"
                style={{width: width * 0.33, height: height * 0.22}}
              />
              <Text className="text-neutral-300 ml-1">
                {item.title.length > 14
                  ? item.title.slice(0, 14) + '...'
                  : item.title}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        )}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}
      />
    </View>
  );
};
