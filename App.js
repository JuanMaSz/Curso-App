import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola, Coder!</Text>
      <Text>Estamos trabajando en la app, gracias por esperar.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#404467',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
