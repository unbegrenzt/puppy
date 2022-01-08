// import {useCallback} from "react";
// import {View, Text, Button, Platform} from "react-native";
// import * as Updates from "expo-updates";
// import mainScreenStyle from "../styles/screens/mainScreenStyle";
// import LottieView from 'lottie-react-native';
//
// export default function MainScreen() {
//
//   return (
//     <View style={mainScreenStyle.container}>
//       <Text>
//         Main screen
//       </Text>
//       <LottieView
//         source={require('../assets/lottie/splashPuppy.json')}
//         autoPlay
//         loop
//       />
//     </View>
//   );
// }

import React from 'react';
import { Text, StyleSheet, View, useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar'; // automatically switches bar style based on theme!

import useStyle from "../hooks/useStyle";
import useTheme from '../hooks/useTheme';

export default function App() {
    const currentTheme = useTheme();
    const colorScheme = useColorScheme();
    const styles = useStyle({
        styleKey: 'MAIN_SCREEN_STYLE',
        currentTheme: currentTheme
    });

    return (
        <View style={[styles.container]}>
            <Text>Color scheme: {colorScheme}</Text>
            <StatusBar />
        </View>
    );
}
