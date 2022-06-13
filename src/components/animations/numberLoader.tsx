import React, {useEffect, useState} from 'react';
import {TextStyle} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {GameConst} from 'utils/consts';
import {GS} from 'utils/globalStyles';

type NumberLoaderProps = {
  loadNumber: number;
  style?: TextStyle;
  duration?: number;
  onFinish: () => void;
};

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export const NumberLoader = ({
  loadNumber,
  style,
  duration = GameConst.oneSecondMs,
  onFinish,
}: NumberLoaderProps) => {
  const animated = useSharedValue(0);
  const [number, setNumber] = useState(loadNumber);

  useEffect(() => {
    if (number >= 1) {
      animated.value = 0;
      animated.value = withTiming(
        1,
        {
          duration,
          easing: Easing.linear,
        },
        isFinished => {
          if (isFinished) {
            if (number === 1) {
              runOnJS(onFinish)();
            } else {
              runOnJS(setNumber)(number - 1);
            }
          }
        },
      );
    }
  }, [animated, duration, number, onFinish]);

  const animatedProps = useAnimatedProps(() => {
    return {
      opacity: animated.value,
    };
  });

  return (
    <AnimatedTextInput
      underlineColorAndroid="transparent"
      editable={false}
      defaultValue={number.toString()}
      style={[GS.base600100, style]}
      animatedProps={animatedProps as any}
    />
  );
};
