import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import dictionary from 'app/assets/dictionary.json';
import {Layouts, Typography} from 'app/styles';
import Text from 'app/components/Text';
import Button from 'app/components/Button';
import Link from 'app/components/Link';
import {WithNavigationProp} from 'app/navigation';
import IconButton from 'app/components/IconButton';

const sjpBaseHref = 'https://sjp.pwn.pl/szukaj/';

const selectRandom = () => {
  return dictionary[Math.floor(Math.random() * dictionary.length)];
};

interface FreeplayProps extends WithNavigationProp {}

const Freeplay: React.FC<FreeplayProps> = ({navigation}) => {
  let [word, setWord] = useState<string>(selectRandom);

  return (
    <View style={styles.outerContainer}>
      <IconButton onPress={navigation.goBack} name={'arrowleft'} size={70} />

      <View style={styles.sectionContainer}>
        <Text style={styles.mainText}>{word}</Text>
        <Link text={'Że co?'} href={sjpBaseHref + word + '.html'} />
      </View>

      <View style={styles.sectionContainer}>
        <Button title={'Następne'} onPress={() => setWord(selectRandom())} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    ...Layouts.container,
    ...Layouts.padded(),
  },
  sectionContainer: {
    ...Layouts.container,
    ...Layouts.pullCenterDown,
  },
  mainText: {
    ...Typography.h1,
    ...Typography.bold,
  },
});

export default Freeplay;
