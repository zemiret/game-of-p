import React, {useCallback, useState} from 'react';
import {Linking, StyleSheet, View} from 'react-native';
import {Layouts, Typography} from 'app/styles';
import Text from 'app/components/Text';
import Button from 'app/components/Button';
import Link from 'app/components/Link';
import IconButton from 'app/components/IconButton';
import {useNavigation} from '@react-navigation/native';
import {Words} from 'app/services/words';

const Freeplay: React.FC = () => {
  const navigation = useNavigation();

  let [word, setWord] = useState<string>(Words.selectRandom());

  const openLink = useCallback(async () => {
    await Linking.openURL(Words.lookupBaseHref + word + '.html');
  }, [word]);

  return (
    <View style={styles.outerContainer}>
      <IconButton onPress={navigation.goBack} name={'arrowleft'} size={70} />

      <View style={styles.sectionContainer}>
        <Text style={styles.mainText}>{word}</Text>
        <Link text={'Że co?'} onPress={openLink} />
      </View>

      <View style={styles.sectionContainer}>
        <Button
          title={'Następne'}
          onPress={() => setWord(Words.selectRandom())}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    ...Layouts.container,
    ...Layouts.padded(),
    ...Layouts.justifySpaceBetween,
  },
  sectionContainer: {
    ...Layouts.alignCenter,
  },
  mainText: {
    ...Typography.h1,
    ...Typography.bold,
  },
});

export default Freeplay;
