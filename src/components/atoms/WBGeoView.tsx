import React from 'react';
import { GeoViewProps } from '@/constants/Interfaces';
import { StyleSheet } from 'react-native';
import GoogleMapReact from 'google-map-react';
import { View } from '../Themed';

const AnyReactComponent = ({ text }) => <View>{text}</View>;

const WBGeoView: React.FC<GeoViewProps> = () => {

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <View style={styles.map}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDlA8Y9LKSbm_E59A2os9E0np9W_Jvp3iM" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </View>
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

export default WBGeoView;
