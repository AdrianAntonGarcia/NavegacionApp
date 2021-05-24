/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {DrawerScreenProps} from '@react-navigation/drawer';
// import {StackScreenProps} from '@react-navigation/stack';
import {Button, Text, View, TouchableOpacity} from 'react-native';
import {globalStyles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

// interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        // <Button title="Menu"  onPress={() => navigation.toggleDrawer()} />
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu-outline" size={50} color="#f72585" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <View style={globalStyles.globalMargin}>
      <Text style={globalStyles.title}>Pagina1Screen</Text>
      <Button
        title="Ir página 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />
      <Text>Navegar con argumentos</Text>
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
        <TouchableOpacity
          style={{...globalStyles.botonGrande, backgroundColor: '#5856D6'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {id: 1, nombre: 'Adrián'})
          }>
          <Icon name="heart-outline" size={50} color="#f72585" />
          <Text style={globalStyles.botonGrandeTexto}>Adrián</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...globalStyles.botonGrande, backgroundColor: '#FF9427'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {id: 2, nombre: 'Ana'})
          }>
          <Icon name="heart-outline" size={50} color="#f72585" />
          <Text style={globalStyles.botonGrandeTexto}>Ana</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
