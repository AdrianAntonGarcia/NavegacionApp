import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {globalStyles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

export const SettingScreen = () => {
  const insets = useSafeAreaInsets();

  const context = useContext(AuthContext);
  const {
    authState: {isLoggedIn, favoriteIcon, userName},
  } = context;
  const {authState} = context;
  console.log(isLoggedIn, favoriteIcon, userName);
  return (
    <View style={{...globalStyles.globalMargin, marginTop: insets.top + 20}}>
      <Text>Setting Screen</Text>
      <Text>{JSON.stringify(authState)}</Text>
    </View>
  );
};
