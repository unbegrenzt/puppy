import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import useStore from '@/store/store';

const Counter: React.FC = () => {
  const count = useStore(state => state.count);
  const increase = useStore(state => state.increase);
  const decrease = useStore(state => state.decrease);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increase" onPress={increase} />
        <Button title="Decrease" onPress={decrease} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 48,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
  },
});

export default Counter;
