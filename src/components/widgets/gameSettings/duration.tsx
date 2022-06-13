import {BulletTextUnderline} from 'components/shared/Texts';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  useGameDuration,
  useGameSetters,
  useGameTaskLimit,
} from 'utils/atoms/gameAtoms';
import {GameConst} from 'utils/consts';
import {OperationButton} from './operationButton';

const durationArr = [10, 30, 60, 120];
const tasksNumberArr = [10, 25, 50, 100];

export const Duration = () => {
  const duration = useGameDuration();
  const tasksLimit = useGameTaskLimit();
  const {setGameDuration, setGameTaskLimit} = useGameSetters();
  const isTimeBased = tasksLimit === 0;
  const [numbersArr, setNumbersArr] = useState<number[]>([]);

  useEffect(() => {
    if (isTimeBased) {
      setNumbersArr(durationArr);
    } else {
      setNumbersArr(tasksNumberArr);
    }
    if (!durationArr.includes(duration)) {
      setGameDuration(GameConst.defaultDuration);
    }
  }, [duration, isTimeBased, setGameDuration]);

  const setDuration = (dur: number) => {
    setGameDuration(dur);
    setGameTaskLimit(0);
  };

  const setTaskLimit = (limit: number) => {
    setGameDuration(GameConst.defaultDuration);
    setGameTaskLimit(limit);
  };

  return (
    <>
      <BulletTextUnderline
        text={isTimeBased ? 'Time (seconds):' : 'Number of Tasks:'}
      />
      <View style={[styles.opSettings]}>
        {numbersArr.map(number => (
          <OperationButton
            key={number}
            isSelected={
              isTimeBased ? number === duration : number === tasksLimit
            }
            onPress={isTimeBased ? setDuration : setTaskLimit}
            value={number}
          />
        ))}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  comboWrap: {
    flexDirection: 'row',
  },
  opSettings: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
