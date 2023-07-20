import { StatusBar, View } from 'react-native';
import {
  Raleway_400Regular
} from "@expo-google-fonts/raleway";
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { ButtonContainer, HoursContainer } from './components';

const App = () => {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);
  const [pts, setPts] = useState<number | null>(0);

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
      <StatusBar />
      <ButtonContainer onLayoutRootView={onLayoutRootView} setPts={setPts}/>
      <HoursContainer pts={pts} />
    </View>
  );
};

export default App;
