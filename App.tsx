import { View, Text, StyleSheet } from 'react-native';
import {
  Raleway_400Regular
} from "@expo-google-fonts/raleway";
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { PointsButton } from './components';
import { convertPtsToHrs } from './utilities';

const App = () => {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);
  const [pts, setPts] = useState<number>(0);

  useEffect(() => {
    const prepare = async () => {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();

        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({ Raleway_400Regular });
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={[styles.container, { backgroundColor: '#81b29a' }]} onLayout={onLayoutRootView} >
        <View style={styles.buttonContainer}>
          <PointsButton title='1' setPoints={setPts} value={1} />
          <PointsButton title='2' setPoints={setPts} value={2} />
          <PointsButton title='3' setPoints={setPts} value={3} />
          <PointsButton title='5' setPoints={setPts} value={5} />
          <PointsButton title='8' setPoints={setPts} value={8} />
          <PointsButton title='13' setPoints={setPts} value={13} />
          <PointsButton title='> 13' setPoints={setPts} value={NaN} />
        </View>
      </View>
      <View style={[styles.container, { backgroundColor: '#f4f1de' }]}>
        <Text style={[styles.text, { color: '#81b29a' }]}>{convertPtsToHrs(pts)}</Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: '3%'
  },
  buttonContainer: {
    justifyContent: 'center', 
    alignItems: 'center', 
    flexDirection: 'row', 
    flexWrap: 'wrap',
  },
  text: {
    fontFamily: 'Raleway_400Regular', 
    fontSize: 48,
    textAlign: 'center'
  }
});
