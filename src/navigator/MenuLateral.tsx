import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {SettingScreen} from '../screens/SettingScreen';
import {useWindowDimensions, Text, Image, View} from 'react-native';
import {globalStyles} from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
      drawerType={width >= 600 ? 'permanent' : 'front'}
      drawerPosition="left"
      drawerContent={props => <ContenidoMenu {...props} />}>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingScreen" component={SettingScreen} />
    </Drawer.Navigator>
  );
};

const ContenidoMenu = (
  props: DrawerContentComponentProps<DrawerContentOptions>,
) => {
  return (
    <DrawerContentScrollView>
      <View style={globalStyles.avatarContainer}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
          }}
          style={globalStyles.avatar}
        />
      </View>
    </DrawerContentScrollView>
  );
};
