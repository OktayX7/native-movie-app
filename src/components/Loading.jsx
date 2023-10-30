import {View, ActivityIndicator, Platform} from 'react-native';
import React from 'react';
import {theme} from '../theme';

export const Loading = () => {
  const ios = Platform.OS === 'ios';

  return (
    <View className="flex-1 justify-center items-center bg-neutral-800">
      <ActivityIndicator size={ios ? 'large' : 60} color={theme.background} />
    </View>
  );
};
