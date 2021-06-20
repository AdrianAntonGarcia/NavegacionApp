import React, {useContext} from 'react';
import {Text, View, Button} from 'react-native';
import {globalStyles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

export const ContactsScreen = () => {
  const {
    signIn,
    authState: {isLoggedIn},
  } = useContext(AuthContext);
  return (
    <View style={globalStyles.globalMargin}>
      <Text style={globalStyles.title}>ContactsScreen</Text>
      {!isLoggedIn ? (
        <Button title="SignIn" onPress={signIn} />
      ) : (
        <Text>está logueado</Text>
      )}
    </View>
  );
};
