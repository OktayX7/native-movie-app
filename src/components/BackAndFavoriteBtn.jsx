import {SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {styles, theme} from '../theme';
import Icon from 'react-native-vector-icons/Entypo';
import {androidMarginTop} from '../constants';
import {
  toggleFavoriteMovieAction,
  toggleFavoritePersonAction,
  getFavoritesState,
} from '../libs';
import {useAppDispatch, useAppSelector} from '../hooks';
const BackAndFavoriteBtn = ({isAbsolute, item}) => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const {movies, persons} = useAppSelector(getFavoritesState());

  return (
    <SafeAreaView
      className={`${
        isAbsolute && 'absolute w-96'
      } flex-row justify-between items-center mx-4 z-20 ${androidMarginTop(
        3,
      )}`}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.background}
        className="rounded-xl p-1">
        <Icon name="chevron-left" size={28} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          isAbsolute
            ? dispatch(toggleFavoriteMovieAction(item))
            : dispatch(toggleFavoritePersonAction(item))
        }>
        <Icon
          name="heart"
          size={35}
          color={
            isAbsolute
              ? movies?.find(movie => movie.id === item.id)
                ? theme.background
                : '#fff'
              : persons?.find(person => person.id === item.id)
              ? theme.background
              : '#fff'
          }
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default BackAndFavoriteBtn;
