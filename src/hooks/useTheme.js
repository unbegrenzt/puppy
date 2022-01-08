import { useColorScheme } from 'react-native';
import themes from "../theme/themes";

export default function useTheme(themeName = 'default') {
    const colorScheme = useColorScheme();

    console.log(colorScheme);

    return colorScheme === 'light' ? themes[themeName].light : themes[themeName].dark;
}