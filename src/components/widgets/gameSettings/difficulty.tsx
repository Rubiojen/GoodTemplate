import {BulletTextUnderline} from 'components/shared/Texts';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useGameDifficulty, useGameSetters} from 'utils/atoms/gameAtoms';
import {CustomCheckBox} from '../CheckBox';

export const Difficulty = () => {
  const difficulty = useGameDifficulty();
  const {setGameDifficulty} = useGameSetters();

  const setDifficulty = (difficultyLevel: number) => {
    setGameDifficulty(difficultyLevel);
  };

  return (
    <>
      <BulletTextUnderline text={'Difficulty:'} />
      <View style={styles.comboWrap}>
        <CustomCheckBox
          title="Easy"
          isChecked={difficulty === 1}
          onPress={() => setDifficulty(1)}
        />
        <CustomCheckBox
          title="Medium"
          isChecked={difficulty === 2}
          onPress={() => setDifficulty(2)}
        />
        <CustomCheckBox
          title="Hard"
          isChecked={difficulty === 3}
          onPress={() => setDifficulty(3)}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  comboWrap: {
    flexDirection: 'row',
  },
});
