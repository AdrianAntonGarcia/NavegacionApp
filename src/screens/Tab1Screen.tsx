import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../theme/appTheme';
import {TouchableIcon} from '../components/TouchableIcon';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab1ScreenEffect');
  }, []);
  return (
    <View style={globalStyles.globalMargin}>
      <Text style={globalStyles.title}>Iconos</Text>
      <Text>
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="attach-outline" />
        <TouchableIcon iconName="bonfire-outline" />
        <TouchableIcon iconName="calculator-outline" />
        <TouchableIcon iconName="arrow-redo-circle-outline" />
        <TouchableIcon iconName="images-outline" />
        <TouchableIcon iconName="leaf-outline" />
      </Text>
    </View>
  );
};
