import React from 'react';
import {Button, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {globalStyles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Pagina3Screen = ({navigation}: Props) => {
  return (
    <View style={globalStyles.globalMargin}>
      <Text>Pagina3Screen</Text>
      <Button title="Regresar" onPress={() => navigation.pop()} />
      <Button title="Ir a la página1" onPress={() => navigation.popToTop()} />
    </View>
  );
};
