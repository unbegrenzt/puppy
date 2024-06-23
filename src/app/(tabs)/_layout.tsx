import React, { useEffect, useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Dimensions, Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import TabBarIcon from '@/components/atoms/TabBarIcon/TabBarIcon';

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({ window, screen }) => {
        setDimensions({ window, screen });
      },
    );
    return () => subscription?.remove();
  });

  console.log(`
    ${Object.entries(dimensions.window).map(([key, value]) => (
        key + ' - ' + value
    ))}
    Screen Dimensions
    ${Object.entries(dimensions.screen).map(([key, value]) => (
      key + ' - ' + value
    ))}`);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tabIconSelected,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tabIconDefault,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].secondary.hueLightest,
          borderWidth: 0
        },
        headerTintColor: Colors[colorScheme ?? 'light'].primary.hueDarkest,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].neutral.hueLightest,
          height: `${8}%`
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          headerTitle: 'Veterinary Clinic',
          tabBarIcon: ({ color }) => <TabBarIcon name="home-search" size={24} color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name='two'
        options={{
          title: '',
          headerTitle: 'Account',
          tabBarIcon: ({ color }) => <TabBarIcon name="account" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
