import {ButtonOpacity} from 'components/shared/Buttons';
// import {useAppNavigation} from 'hooks/commonHooks';
import React from 'react';
import {Text, View} from 'react-native';
import {GS} from 'utils/globalStyles';

type HeaderProps = {
  text?: string;
};

export const HomeHeader = ({text}: HeaderProps) => {
  // const userPicture = useUser('userPicture') as string;
  // const {navigate} = useAppNavigation();

  const navigateToUser = () => {
    // navigate('User');
  };
  return (
    <View
      style={[GS.row, GS.fullWidth, GS.justifySpaceBetween, GS.alignCenter]}>
      <ButtonOpacity onPress={navigateToUser}>
        {/* <UserAvatar uri={userPicture} size={whp(1)} /> */}
      </ButtonOpacity>
      {text && <Text style={[GS.base60024]}>{text}</Text>}
      {/* <GlobalRank /> */}
    </View>
  );
};
