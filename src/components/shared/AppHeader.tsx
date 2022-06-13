import {getSvgByName} from 'assets';
import {useAppNavigation} from 'hooks/commonHooks';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SVGS} from 'utils/enums';
import {GS} from 'utils/globalStyles';
import {normalizeWidth} from 'utils/sizes';
import {ButtonOpacity} from './Buttons';

type HeaderProps = {
  text: string;
};

export const AppHeader = ({text}: HeaderProps) => {
  const {navigate} = useAppNavigation();

  const goHome = () => {
    navigate('Home');
  };
  return (
    <View style={[GS.row, GS.fullWidth, GS.justifyCenter]}>
      <ButtonOpacity style={styles.back} onPress={goHome}>
        {getSvgByName({name: SVGS.BACK, size: normalizeWidth(24)})}
      </ButtonOpacity>
      <Text style={[GS.base60024]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  back: {
    position: 'absolute',
    left: 0,
  },
});
