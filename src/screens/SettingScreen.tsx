import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {globalStyles, colores} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

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
      <Icon
        name={favoriteIcon ? favoriteIcon : 'airplane-outline'}
        size={150}
        color={colores.primary}
      />
    </View>
  );
};
