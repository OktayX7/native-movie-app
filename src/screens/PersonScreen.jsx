import {Platform, Dimensions, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Loading, PersonCard} from '../components';
import {
  getPersonDetailsAction,
  getPersonMovieCreditsAction,
  getPersonDetailsState,
  getPersonMovieCreditsState,
  getLoadingState,
} from '../libs';
import {useAppDispatch, useAppSelector} from '../hooks';
import BackAndFavoriteBtn from '../components/BackAndFavoriteBtn';

export const PersonScreen = () => {
  const dispatch = useAppDispatch();
  const {params: personId} = useRoute();

  useEffect(() => {
    dispatch(getPersonDetailsAction(personId));
    dispatch(getPersonMovieCreditsAction(personId));
  }, [personId]);

  const person = useAppSelector(getPersonDetailsState());
  const personMovies = useAppSelector(getPersonMovieCreditsState());
  const loading = useAppSelector(getLoadingState());

  if (loading) return <Loading />;

  return (
    <ScrollView
      className="flex-1 bg-neutral-900"
      contentContainerStyle={{
        paddingBottom: 20,
      }}>
      {/* Back button and favorite button */}
      <BackAndFavoriteBtn item={person} />

      {/*Person Details */}

      <PersonCard person={person} personMovies={personMovies} detail />
    </ScrollView>
  );
};
