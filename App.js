import {StatusBar} from 'expo-status-bar';
import React from 'react';
import MainScreen from './src/screens/MainScreen';

export default function App() {
  return (
    // TODO: Implement the Animated App Loader
    // TODO: fix the git global config
    // <AnimatedAppLoader image={{uri: Constants.manifest.splash.image}}>
    <React.StrictMode>
      <MainScreen/>
      <StatusBar style="auto"/>
    </React.StrictMode>
    //</AnimatedAppLoader>
  );
}
