import { useColorScheme } from 'react-native';

const getTheme = function (themeName) {
  const scheme = useColorScheme();

  return scheme === 'dark' ? require(`./darkTheme`) : require(`./darkTheme`)
}

export default getTheme;
