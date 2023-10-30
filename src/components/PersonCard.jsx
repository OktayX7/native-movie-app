import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import {image342, fallbackPersonImage} from '../api/moviedb';
import {MovieList} from './MovieList';

export const PersonCard = ({person, personMovies, detail}) => {
  const {width, height} = Dimensions.get('window');
  return (
    <View
      className="items-center mt-3"
      style={{
        shadowColor: 'gray',
        shadowRadius: 40,
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 1,
      }}>
      <View>
        <View
          className="flex-row justify-center"
          style={{
            shadowColor: 'gray',
            shadowRadius: 40,
            shadowOffset: {width: 0, height: 5},
            shadowOpacity: 1,
          }}>
          <View
            className={`${
              detail ? 'h-72 w-72' : 'w-40 h-40 ml-4'
            } items-center rounded-full overflow-hidden border-neutral-500 border-2`}>
            <Image
              source={{
                uri: image342(person?.profile_path) || fallbackPersonImage,
              }}
              style={
                detail
                  ? {height: height * 0.43, width: width * 0.74}
                  : {height: height * 0.2, width: width * 0.38}
              }
            />
          </View>
        </View>

        <View className="mt-6">
          <Text
            className={`${
              detail ? 'text-3xl' : 'text-xl'
            } text-white font-bold text-center`}>
            {person?.name}
          </Text>
          <Text className="text-neutral-500 text-sm text-center">
            {person?.place_of_birth?.length > 20 ? (
              <Text>{person?.place_of_birth?.slice(0, 20)}...</Text>
            ) : (
              person?.place_of_birth
            )}
          </Text>
        </View>
      </View>
      {detail && (
        <>
          <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full ">
            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold ">Gender</Text>
              <Text className="text-neutral-300 text-sm">
                {person?.gender === 1 ? 'Famele' : 'Male'}
              </Text>
            </View>
            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold">Birthday</Text>
              <Text className="text-neutral-300 text-sm">
                {person?.birthday}
              </Text>
            </View>
            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold">known for</Text>
              <Text className="text-neutral-300 text-sm">
                {person?.known_for_department}
              </Text>
            </View>
            <View className="px-2 items-center">
              <Text className="text-white font-semibold">Popularity</Text>
              <Text className="text-neutral-300 text-sm">
                {person?.popularity?.toFixed(2)} %
              </Text>
            </View>
          </View>
          <View className="my-6 mx-4 space-y-2">
            <Text className="text-white text-lg">Biography</Text>
            <Text className="text-neutral-400 tracking-wide">
              {person?.biography || 'No biography found'}
            </Text>
          </View>
          {/* Movies */}
          <MovieList hideSeeAll data={personMovies} title="Movies" />
        </>
      )}
    </View>
  );
};
