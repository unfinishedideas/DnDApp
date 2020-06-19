import * as React from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// Components
import DiceMachine from './components/DiceMachine';

export default function App() {
  return (
    <View style={styles.container}>
      <DiceMachine numOfDice={2} numOfSides={4} modifier={2}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
