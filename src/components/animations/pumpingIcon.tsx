import {getSvgByName} from 'assets';
import * as React from 'react';
import {useCallback, useState, useEffect} from 'react';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import {COLORS, SVGS} from 'utils/enums';

export interface PumpingIconProps {
  iconName: SVGS;
  animate: boolean;
  onEndAnimation: () => void;
}

const fadeInDuration = 300;
const delayBetweenPumps = 500;
const pumpDuration = 200;
const iconGrownSize = 250;
const iconRegularSize = 210;

export const PumpingIcon = ({
  iconName,
  animate,
  onEndAnimation,
}: PumpingIconProps) => {
  const iconSize = useSharedValue(0);
  const iconOpacity = useSharedValue(0);
  const [firstAnimFinished, setFirstAnimFinished] = useState(false);

  const animateChorusIcon = useCallback(() => {
    iconOpacity.value = withTiming(1, {
      duration: fadeInDuration,
      easing: Easing.linear,
    });
    iconSize.value = withTiming(
      iconGrownSize,
      {duration: fadeInDuration, easing: Easing.linear},
      isFinished1 => {
        if (isFinished1) {
          iconSize.value = withTiming(
            iconRegularSize,
            {duration: pumpDuration, easing: Easing.linear},
            isFinished2 => {
              if (isFinished2) {
                runOnJS(setFirstAnimFinished)(true);
                iconSize.value = withRepeat(
                  withSequence(
                    withDelay(
                      delayBetweenPumps,
                      withTiming(iconGrownSize, {
                        duration: pumpDuration,
                        easing: Easing.linear,
                      }),
                    ),
                    withTiming(iconRegularSize, {
                      duration: pumpDuration,
                      easing: Easing.linear,
                    }),
                  ),
                  Infinity,
                );
              }
            },
          );
        }
      },
    );
  }, [iconOpacity, iconSize]);

  useEffect(() => {
    if (firstAnimFinished && !animate) {
      onEndAnimation();
    }
  }, [animate, firstAnimFinished, onEndAnimation]);

  useEffect(() => {
    animateChorusIcon();
  }, [animateChorusIcon]);

  const iconStyle = useAnimatedStyle(() => {
    return {
      width: iconSize.value,
      height: iconSize.value,
      opacity: iconOpacity.value,
    };
  });

  return (
    <Animated.View style={iconStyle}>
      {getSvgByName({name: iconName, size: '100%', fill: COLORS.WHITE})}
    </Animated.View>
  );
};
