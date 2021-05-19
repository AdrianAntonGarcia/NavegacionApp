import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/StackNavigator';

// interface RouterParams {
//   id: number;
//   nombre: string;
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

export const PersonaScreen = ({navigation, route}: Props) => {
  //   const params = route.params as RouterParams;
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.nombre,
    });
  }, [navigation, params]);
  return (
    <View style={globalStyles.globalMargin}>
      <Text style={globalStyles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
