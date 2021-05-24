import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text, View} from 'react-native';
import {globalStyles} from '../theme/appTheme';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab1ScreenEffect');
  }, []);
  return (
    <View style={globalStyles.globalMargin}>
      <Text style={globalStyles.title}>Iconos</Text>
      <Text>
        <Icon name="airplane-outline" size={80} color="#900" />
      </Text>
    </View>
  );
};
