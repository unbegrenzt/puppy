import {StyleSheet} from 'react-native';

const mainScreenStyle = (currentTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: currentTheme.splash.backgroundColor,
      alignItems: "center",
      justifyContent: "center",
    },
  })
};

export default mainScreenStyle;
