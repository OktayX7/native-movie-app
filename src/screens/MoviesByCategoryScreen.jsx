import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {MovieListItem} from '../components';

export const MoviesByCategoryScreen = () => {
  const navigation = useNavigation();
  const {title, data} = useRoute().params;
  return (
    <View className="flex-1 bg-neutral-800">
      <Text className="text-white font-bold text-2xl px-4 py-8">{title}</Text>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <MovieListItem movie={item} navigation={navigation} />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingBottom: 20,
          gap: 10,
        }}
      />
    </View>
  );
};
