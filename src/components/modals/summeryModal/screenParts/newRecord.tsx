import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {COLORS} from 'utils/enums';
import {GS} from 'utils/globalStyles';

export const NewRecord = () => {
  return (
    <>
      {/* <LottieFireWorks /> */}
      <Text style={[GS.baseBold14, {color: COLORS.YELLOW}, styles.newRecord]}>
        {`Congratulations 
it's a New Record!`}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  newRecord: {paddingBottom: 20, textAlign: 'center'},
});
