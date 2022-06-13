import React from 'react';
import {useModalRoute} from 'hooks/commonHooks';
import {MathSettingsModal} from './MathSettingsModal';
import {SummaryModal} from './summeryModal/SummaryModal';

function AppModal() {
  const {
    params: {type},
  } = useModalRoute();

  switch (type) {
    case 'MathSettingsModal':
      return <MathSettingsModal />;
    case 'MathSummary':
      return <SummaryModal />;
    default:
      return null;
  }
}

export default AppModal;
