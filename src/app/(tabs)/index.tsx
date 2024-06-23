import { Button, Platform, StyleSheet, Text } from 'react-native';

import { View } from '@/components/Themed';
import MBGeoView from '@/components/atoms/MBGeoView';
import WBGeoView from '@/components/atoms/WBGeoView';
import useStore from '@/store/store';

export default function TabOneScreen() {

  const switchLights = useStore(state => state.switchLights);

  return (
    <View style={styles.container}>
      {/* {(Platform.OS === 'android' || Platform.OS === 'ios') && (
        <MBGeoView />
      )}
      {(Platform.OS === 'web') && (
        <WBGeoView />
      )} */}
      <Text>Esta es mi torre de mandos:</Text>

      <Button title='cambiar la luz de forma remota' onPress={switchLights} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
