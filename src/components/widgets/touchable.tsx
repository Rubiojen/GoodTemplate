import React, {ReactNode} from 'react';
import {ViewStyle} from 'react-native';
import {
  HandlerStateChangeEvent,
  State,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type TouchableProps = {
  style?: ViewStyle | ViewStyle[];
  onPress: (answer: string) => void;
  children: ReactNode;
  value: string;
};

export const Touchable = ({
  children,
  onPress,
  style,
  value,
}: TouchableProps) => {
  const opacity = useSharedValue(1);

  const opacityStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const onSingleTap = (event: HandlerStateChangeEvent) => {
    if (event.nativeEvent.state === State.BEGAN) {
      opacity.value = withTiming(0.5, {duration: 0});
      onPress(value);
      return;
    }
    if (event.nativeEvent.state === State.END) {
      opacity.value = withTiming(1, {duration: 0});
      return;
    }
    opacity.value = withTiming(1, {duration: 0});
  };

  return (
    <TapGestureHandler
      shouldCancelWhenOutside={false}
      maxDurationMs={5000}
      onHandlerStateChange={onSingleTap}>
      <Animated.View style={[opacityStyle, style]}>{children}</Animated.View>
    </TapGestureHandler>
  );
};
