import { Platform, StyleSheet } from 'react-native';

import { View } from '@/components/Themed';
import MBGeoView from '@/components/atoms/MBGeoView';
import WBGeoView from '@/components/atoms/WBGeoView';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      {(Platform.OS === 'android' || Platform.OS === 'ios') && (
        <MBGeoView />
      )}
      {(Platform.OS === 'web') && (
        <WBGeoView />
      )}
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
