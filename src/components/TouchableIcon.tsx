import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colores} from '../theme/appTheme';

interface Props {
  iconName: string;
}

export const TouchableIcon = ({iconName}: Props) => {
  return (
    <TouchableOpacity>
      <Icon name={iconName} size={80} color={colores.primary} />
    </TouchableOpacity>
  );
};
