import { View, Text, StyleSheet } from 'react-native';
import AppLoading  from "expo-app-loading";
import {
  useFonts,
  Raleway_400Regular
} from "@expo-google-fonts/raleway";

const App = () => {
  const [fontsLoaded] = useFonts({
    Raleway_400Regular,
  });

  return (
    <View style={{ flex: 1 }}>
      {!fontsLoaded ? 
        <AppLoading /> : (
        <>
          <View style={[styles.container, { backgroundColor: '#D77A61' }]}>
            <Text style={[styles.text, { color: '#EFF1F3' }]}>Text Goes Here</Text>
          </View>
          <View style={[styles.container, { backgroundColor: '#EFF1F3' }]}>
            <Text style={[styles.text, { color: '#D77A61' }]}>Text Goes Here</Text>
          </View>
        </>
      )}
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  text: {
    fontFamily: 'Raleway_400Regular', 
    fontSize: 48
  }
})
