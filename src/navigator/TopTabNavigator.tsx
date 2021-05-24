/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ChatScreen} from '../screens/ChatScreen';
import {ContactsScreen} from '../screens/ContactsScreen';
import {AlbumsScreen} from '../screens/AlbumsScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colores} from '../theme/appTheme';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const {top: paddingTop} = useSafeAreaInsets();
  return (
    <Tab.Navigator
      style={{paddingTop}}
      sceneContainerStyle={{backgroundColor: 'white'}}
      tabBarOptions={{
        pressColor: colores.primary,
        showIcon: true,
        indicatorStyle: {
          backgroundColor: colores.primary,
        },
        style: {
          borderTopColor: colores.primary,
          shadowColor: 'transparent',
          elevation: 0,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: Element = <></>;
          switch (route.name) {
            case 'Chat':
              iconName = <Icon name="alarm-sharp" size={20} color="#d00000" />;
              break;
            case 'Contacts':
              iconName = (
                <Icon name="bicycle-outline" size={20} color="#ffb703" />
              );
              break;
            case 'Albums':
              iconName = (
                <Icon name="brush-outline" size={20} color="#4361ee" />
              );
              break;

            default:
              break;
          }
          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};
