import React from 'react';
import {Text} from 'react-native';
import {GS} from 'utils/globalStyles';
import {ViewRow, ViewUnderline} from './Views';

export const BulletTextUnderline = ({text}: {text: string}) => {
  return (
    <ViewRow>
      <Text style={[GS.base60016, GS.alignSelfStart]}>&#8226;&#8201;</Text>
      <ViewUnderline>
        <Text style={[GS.base60016, GS.alignSelfStart]}>{text}</Text>
      </ViewUnderline>
    </ViewRow>
  );
};
