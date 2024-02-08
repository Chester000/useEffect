import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { MyButton } from './components/button'
import { SurpriseButton } from './components/surpriseButton';
import { CallbackButton } from './components/callbackButton';
 
export default function App() {

  const gotClick = (id) => {
    Alert.alert("Clicked!", "Button " + id);
  }


  return (
    <View style={styles.container}>
      <MyButton />
      <SurpriseButton />
      <CallbackButton id={1} callback={ gotClick } />
      <CallbackButton id={2} callback={ gotClick } />
      <CallbackButton id={4} callback={ gotClick } />
      <CallbackButton id={41} callback={ gotClick } />
      <CallbackButton id={99} callback={ gotClick } />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
