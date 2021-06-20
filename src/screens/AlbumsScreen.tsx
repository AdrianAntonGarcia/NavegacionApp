import React from 'react';
import {useContext} from 'react';
import {Text, View, Button} from 'react-native';
import {AuthContext} from '../context/AuthContext';

export const AlbumsScreen = () => {
  const {
    authState: {isLoggedIn},
    logOut,
  } = useContext(AuthContext);
  return (
    <View>
      {isLoggedIn ? (
        <Button title="LogOut" onPress={logOut} />
      ) : (
        <Text>No está logueado</Text>
      )}
    </View>
  );
};
