import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useAppSelector} from '../hooks';
import {getFavoritesState} from '../libs';
import {MovieListItem, PersonCard} from '../components';

export const FavoritesScreen = () => {
  const navigation = useNavigation();

  const {movies, persons} = useAppSelector(getFavoritesState());

  return (
    <SafeAreaView className="flex-1 bg-neutral-800">
      <ScrollView>
        {movies?.length > 0 && (
          <View>
            <Text className="text-white font-bold text-2xl px-4 py-8">
              Favorite Movies
            </Text>
            <View className="flex-row flex-wrap justify-between items-center px-4">
              {movies?.map(movie => (
                <MovieListItem key={movie.id} movie={movie} />
              ))}
            </View>
          </View>
        )}
        {persons?.length > 0 && (
          <View>
            <Text className="text-white font-bold text-2xl px-4 py-8">
              Favorite Persons
            </Text>
            <View className="flex-row flex-wrap items-center px-4">
              {persons?.map(person => (
                <TouchableOpacity
                  key={person.id}
                  onPress={() =>
                    navigation.navigate('PersonScreen', person.id)
                  }>
                  <PersonCard key={person.id} person={person} />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
        {movies?.length === 0 && persons?.length === 0 && (
          <View className="flex-1 justify-center items-center">
            <Text className="text-white font-bold text-2xl px-4 py-8 text-center">
              No favorites yet
            </Text>
            <Image
              source={require('../assets/images/movieTime.png')}
              className="w-96 h-56"
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
