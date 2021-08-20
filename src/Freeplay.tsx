import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import dictionary from 'app/assets/dictionary.json';
import {Layouts, Typography} from 'app/styles';
import Text from 'app/components/text';
import Button from 'app/components/button';
import Link from 'app/components/link';
import {WithNavigationProp} from 'app/navigation';

const sjpBaseHref = 'https://sjp.pwn.pl/szukaj/';

const selectRandom = () => {
  return dictionary[Math.floor(Math.random() * dictionary.length)];
};

interface FreeplayProps extends WithNavigationProp {}

const Freeplay: React.FC<FreeplayProps> = ({navigation}) => {
  let [word, setWord] = useState<string>(selectRandom);

  return (
    <View style={styles.outerContainer}>
      <Button title={'Back'} onPress={navigation.goBack} />

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
    ...Layouts.padded,
  },
  sectionContainer: {
    ...Layouts.container,
    ...Layouts.pullDown,
  },
  mainText: {
    ...Typography.h1,
    ...Typography.bold,
  },
});

export default Freeplay;
