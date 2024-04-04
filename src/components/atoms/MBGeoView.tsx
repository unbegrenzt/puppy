import React from 'react';
import { GeoViewProps } from '@/constants/Interfaces';
import MapView from 'react-native-maps';
import { StyleSheet } from 'react-native';

const MBGeoView: React.FC<GeoViewProps> = () => {

  return (
    <MapView style={styles.map} />
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default MBGeoView;
