import Colors from "@/constants/Colors";
import { ColorSchemeName, StyleSheet } from "react-native"

export const styles = ({
  borderColor = '',
  isActive = false,
  colorScheme = 'light'
}: { borderColor: string, isActive: boolean, colorScheme: ColorSchemeName }) => StyleSheet.create({
  default: {
    margin: 0,
    padding: 0,
  },
  container: {
    paddingHorizontal: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: borderColor,
    borderRadius: 100,
    backgroundColor: isActive ? 
      Colors[colorScheme ?? 'light'].secondary.hueDark : 
      Colors[colorScheme ?? 'light'].neutral.hueLightest,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
