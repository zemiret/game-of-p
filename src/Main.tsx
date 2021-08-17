import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import dictionary from 'app/assets/dictionary.json';
import {Buttons, Layouts} from 'app/styles';

const selectRandom = () => {
  return dictionary[Math.floor(Math.random() * dictionary.length)];
};

const Main = () => {
  let [word, setWord] = useState<string>(selectRandom);

  return (
    <View style={styles.container}>
      <Text>{word}</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={() => setWord(selectRandom())}>
        <Text style={styles.buttonText}>Następne</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Layouts.container,
    ...Layouts.centered,
    ...Layouts.padded,
  },
  button: {
    ...Buttons.btn,
    ...Buttons.primary,
    ...Buttons.big,
    ...Buttons.rounded,

    // backgroundColor: '#3a405a',
    // padding: 20,
  },
  buttonText: {
    color: '#ffffff',
  },
});

export default Main;
