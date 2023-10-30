import {Text} from 'react-native';
import React from 'react';
import {styles} from '../theme';

export const Logo = () => {
  return (
    <Text className="text-white text-3xl font-bold">
      <Text style={styles.text}>M</Text>ovies
    </Text>
  );
};
