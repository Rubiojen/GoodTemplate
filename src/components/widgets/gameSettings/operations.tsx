import {BulletTextUnderline} from 'components/shared/Texts';
import {ViewRow} from 'components/shared/Views';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useGameMathOperations, useGameSetters} from 'utils/atoms/gameAtoms';
import {OPERATIONS} from 'utils/enums';
import {GS} from 'utils/globalStyles';
import TV from 'utils/textVariants';
import {CustomCheckBox} from '../CheckBox';
import {OperationButton} from './operationButton';

const operationButtons: OPERATIONS[] = [
  OPERATIONS.PLUS,
  OPERATIONS.MINUS,
  OPERATIONS.DIVIDE,
  OPERATIONS.MULTIPLY,
];

export const Operations = () => {
  const operations = useGameMathOperations();
  const {setGameMathOperations} = useGameSetters();

  const setSingleOperation = (op: OPERATIONS) => {
    setGameMathOperations([op]);
  };

  const setAllOperations = () => {
    if (operations.length === 4) {
      setGameMathOperations([OPERATIONS.PLUS]);
    } else {
      setGameMathOperations(operationButtons);
    }
  };

  return (
    <>
      <ViewRow style={GS.justifySpaceBetween}>
        <BulletTextUnderline text={'Operations:'} />
        <CustomCheckBox
          title="All"
          isChecked={operations.length === 4}
          onPress={setAllOperations}
        />
      </ViewRow>
      <View style={[styles.opSettings]}>
        {operationButtons.map(op => (
          <OperationButton
            isSelected={operations.includes(op)}
            key={op}
            onPress={setSingleOperation}
            value={op}
            textStyle={{...TV.BASE_24_600}}
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
