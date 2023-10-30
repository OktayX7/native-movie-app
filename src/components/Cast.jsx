import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {PersonListItem} from './PersonListItem';

export const Cast = ({data, navigation}) => {
  return (
    <View className="my-6">
      <Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <PersonListItem item={item} navigation={navigation} />
        )}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}
      />
    </View>
  );
};
