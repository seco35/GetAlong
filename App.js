import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
    render() {
        console.log("TEST :)")
        return (
            <View style={styles.container}>
                <Text>Öffnet App.js um die App zu bearbeiten!</Text>
                <Text>Veränderungen die in App.js durchgeführt werden, tauchen sofort hier auf.</Text>
                </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
