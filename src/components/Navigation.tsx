import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Home} from 'components/screens/home/Home';
import {MathGamePlay} from 'components/screens/mathGamePlay/MathGamePlay';
import AppModal from './modals/AppModal';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Group>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MathGamePlay" component={MathGamePlay} />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'transparentModal'}}>
        <Stack.Screen name="AppModal" component={AppModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
