import React from 'react';
import {ScreenView} from 'components/shared/Views';
import {View} from 'react-native';
import {HomeHeader} from './screenParts/homeHeader';
import Games from './screenParts/games';

export const Home = () => {
  return (
    <ScreenView>
      <HomeHeader />
      <View>
        <Games />
      </View>
    </ScreenView>
  );
};
