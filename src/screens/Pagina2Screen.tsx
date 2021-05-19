import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {globalStyles} from '../theme/appTheme';

export const Pagina2Screen = () => {
  // Forma de usar con el hook
  const navigator = useNavigation();
  return (
    <View style={globalStyles.globalMargin}>
      <Text>Pagina2Screen</Text>
      <Button
        title="Ir página 3"
        onPress={() => navigator.navigate('Pagina3Screen')}
      />
    </View>
  );
};
