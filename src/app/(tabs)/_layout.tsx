import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import TabBarIcon from '@/components/atoms/TabBarIcon/TabBarIcon';

export default function TabLayout() {
  const colorScheme = useColorScheme();

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
          backgroundColor: Colors[colorScheme ?? 'light'].neutral.hueLightest
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
          tabBarIcon: ({ color }) => <TabBarIcon name="account" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
