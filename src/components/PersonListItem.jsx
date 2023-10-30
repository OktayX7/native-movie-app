import {TouchableOpacity, View, Image, Text} from 'react-native';
import React from 'react';
import {image185, fallbackPersonImage} from '../api/moviedb';

export const PersonListItem = ({item, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('PersonScreen', item.id)}
      className="mr-4 items-center">
      <View className="overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500">
        <Image
          className="rounded-2xl h-24 w-20"
          source={{
            uri: image185(item?.profile_path) || fallbackPersonImage,
          }}
        />
      </View>

      <Text className="text-white text-xs mt-1">
        {item?.character.length > 10
          ? item?.character.slice(0, 10) + '...'
          : item?.character}
      </Text>
      <Text className="text-neutral-400 text-xs">
        {item?.original_name.length > 10
          ? item?.original_name.slice(0, 10) + '...'
          : item?.original_name}
      </Text>
    </TouchableOpacity>
  );
};
