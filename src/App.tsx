import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from 'components/Navigation';
import React from 'react';
import {I18nManager, StatusBar, useColorScheme} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {RecoilRoot} from 'recoil';
import {COLORS} from 'utils/enums';
import {GS} from 'utils/globalStyles';
import {log} from 'utils/log.utils';
import {RecoilLogger} from 'recoil-devtools-logger';

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

export const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  log('isDarkMode', isDarkMode);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? COLORS.BLACK : COLORS.WHITE,
  };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView style={[GS.flexOne, backgroundStyle]}>
        <GestureHandlerRootView style={GS.flexOne}>
          <NavigationContainer>
            <RecoilRoot>
              <RecoilLogger />
              <Navigation />
            </RecoilRoot>
          </NavigationContainer>
        </GestureHandlerRootView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
