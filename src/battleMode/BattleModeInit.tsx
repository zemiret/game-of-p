import React from 'react';
import {View} from 'react-native';
import IconButton from 'app/components/IconButton';
import {navigateAction, Routes} from 'app/navigation';
import {useNavigation} from '@react-navigation/native';
import Button from 'app/components/Button';

const BattleModeInit: React.FC = () => {
  const navigation = useNavigation();

  // const settingsCtx = useContext(SettingsContext);
  // const settings = settingsCtx.state;
  //
  // const {state, dispatch} = useContext(BattleModeContext);

  // useEffect(() => {
  //   dispatch({type: BattleActionType.INIT, payload: settings});
  // }, [state, dispatch]);

  return (
    <View>
      <IconButton onPress={navigation.goBack} name={'arrowleft'} size={70} />
      {/*<Text>{state.currentTeam}</Text>*/}
      <Button
        title={'Start'}
        onPress={navigateAction(navigation, Routes.BATTLE_MODE_WORD_CHALLENGE)}
      />
    </View>
  );
};

export default BattleModeInit;
