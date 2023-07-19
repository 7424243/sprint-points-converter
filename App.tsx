import { View, Text, StyleSheet, Platform } from 'react-native';
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
  const [pts, setPts] = useState<number | null>(0);
  const [activeValue, setActiveValue] = useState<number | null>(0);

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
      <View 
        style={[
          styles.container, 
          { 
            flex: 2,
            backgroundColor: '#81b29a',     
            ...Platform.select({
              ios: {
                shadowColor: '#000',
                shadowOffset: {width: 1, height: 1},
                shadowOpacity: 0.4,
              },
              android: {
                elevation: 4,
              },
            }), 
          },
        ]} 
        onLayout={onLayoutRootView} 
      >
        <Text style={[styles.text, { color: '#f4f1de', marginBottom: 10 }]}>Sprint Points</Text>
        <View style={styles.buttonContainer}>
          <PointsButton 
            title='1' 
            setPoints={setPts} 
            value={1} 
            activeValue={activeValue} 
            setActiveValue={setActiveValue} 
          />
          <PointsButton 
            title='2' 
            setPoints={setPts} 
            value={2} 
            activeValue={activeValue} 
            setActiveValue={setActiveValue} 
          />
          <PointsButton 
            title='3' 
            setPoints={setPts} 
            value={3} 
            activeValue={activeValue} 
            setActiveValue={setActiveValue} 
          />
          <PointsButton 
            title='5' 
            setPoints={setPts} 
            value={5} 
            activeValue={activeValue} 
            setActiveValue={setActiveValue} 
          />
          <PointsButton 
            title='8' 
            setPoints={setPts} 
            value={8} 
            activeValue={activeValue} 
            setActiveValue={setActiveValue} 
          />
          <PointsButton 
            title='13' 
            setPoints={setPts} 
            value={13} 
            activeValue={activeValue} 
            setActiveValue={setActiveValue} 
          />
          <PointsButton 
            title='> 13' 
            setPoints={setPts} 
            value={null} 
            activeValue={activeValue} 
            setActiveValue={setActiveValue} 
          />
        </View>
      </View>
      <View style={[styles.container, { backgroundColor: '#f4f1de', flex: 1 }]}>
        <Text style={[styles.text, { color: '#81b29a' }]}>{convertPtsToHrs(pts)}</Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
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
    fontSize: 40,
    textAlign: 'center'
  }
});
