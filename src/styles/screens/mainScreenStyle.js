import {StyleSheet} from 'react-native';
import darkTheme from "../../theme/darkTheme";


const mainScreenStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: darkTheme.splash.backgroundColor, //import('../../theme/darkTheme').then((module) => {
      //   return module.default.splash.backgroundColor;
      // }),
      alignItems: "center",
      justifyContent: "center",
    },
  })
};

export default mainScreenStyle();
