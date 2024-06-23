import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TabBarIconProps } from './TabBarIcon.types';
import { styles } from './TabBarIcon.style'
import { View } from 'react-native';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';

export default function TabBarIcon(props: Readonly<TabBarIconProps>) {
  const colorScheme = useColorScheme();

  const isActive = props.color === Colors[colorScheme ?? 'light'].tabIconSelected;

  const sx = styles({ borderColor: props.color, isActive, colorScheme });

  return (
    <View style={sx.container}>
      <MaterialCommunityIcons style={sx.default} {...props} />
    </View>
  );
}
