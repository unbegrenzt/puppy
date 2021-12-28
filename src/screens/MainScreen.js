import {useCallback} from "react";
import {View, Text, Button, Platform} from "react-native";
import * as Updates from "expo-updates";
import mainScreenStyle from "../styles/screens/mainScreenStyle";
import LottieView from 'lottie-react-native';

export default function MainScreen() {

  return (
    <View style={mainScreenStyle.container}>
      <Text>
        Main screen
      </Text>
      <LottieView
        source={require('../assets/lottie/splashPuppy.json')}
        autoPlay
        loop
      />
    </View>
  );
}
