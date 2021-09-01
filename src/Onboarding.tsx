import React, {useRef} from 'react';
import {navigateAction, Routes} from 'app/navigation';
import {StyleSheet, View} from 'react-native';
import Text from 'app/components/Text';
import AppIntroSlider from 'react-native-app-intro-slider';
import RoundIcon from 'app/components/RoundIcon';
import {Colors, Layouts, Spacings, Typography} from 'app/styles';
import Spacer from 'app/components/Spacer';
import {useNavigation} from '@react-navigation/native';

const Onboarding: React.FC = () => {
  const navigation = useNavigation();

  const slides = [
    {
      key: 0,
      image: <Text>Imydż</Text>,
      title: <Text style={styles.title}>O co chodzi?</Text>,
      subtitle: (
        <View>
          <Spacer spacing={Spacings.md} />
          <Text style={styles.subtitle}>
            W P twoim zadaniem jest tłumaczenie wyrazów innym ludziom jedynie za
            pomocą słów rozpoczynających się na literę "p".
          </Text>
          <Spacer spacing={Spacings.sm} />
          <Text style={styles.subtitle}>Pamiętaj, tylko P!</Text>
        </View>
      ),
    },
    {
      key: 1,
      image: <Text>Imydż 2</Text>,
      title: <Text style={styles.title}>Przykładowo: rakieta</Text>,
      subtitle: (
        <View>
          <Spacer spacing={Spacings.md} />
          <Text style={styles.subtitle}>
            - Pojazd Przemierzający Przestrzeń Planetarną
          </Text>
          <Text style={styles.subtitle}>- Satelita?</Text>
          <Text style={styles.subtitle}>
            - Przeczę. Poszukajcie, poodmieniajcie.
          </Text>
          <Text style={styles.subtitle}>- Rakieta?</Text>
          <Text style={styles.subtitle}>- Prawda</Text>
        </View>
      ),
    },
    {
      key: 2,
      image: <Text>Imydż 3</Text>,
      title: <Text style={styles.title}>Tryb klasyczny</Text>,
      subtitle: (
        <View>
          <Spacer spacing={Spacings.md} />
          <Text style={styles.subtitle}>
            W trybie klasycznym jedna osoba tłumaczy wyraz, a reszta zgaduje.
            Gdy uda się zgadnąć wyraz, przekaż telefon następnej osobie.
          </Text>
          <Text style={styles.subtitle}>Teraz jej kolej!</Text>
        </View>
      ),
    },
    {
      key: 3,
      image: <Text>Imydż 4</Text>,
      title: <Text style={styles.title}>Tryb ustawki</Text>,
      subtitle: (
        <View>
          <Spacer spacing={Spacings.md} />
          <Text style={styles.subtitle}>
            W trybie ustawki podzielcie się na dwie drużyny.
          </Text>
          <Text style={styles.subtitle}>
            Gra toczy się w rundach. Wyrazów nie można pomijać, a każda runda ma
            ograniczony czas.
          </Text>
          <Text style={styles.subtitle}>
            Wygrywa drużyna, która zgadnie więcej wyrazów.
          </Text>
          <Spacer spacing={Spacings.sm} />
          <Text style={styles.subtitle}>Powodzenia!</Text>
        </View>
      ),
    },
  ];

  const _renderItem = ({item}: {item: any}) => {
    return (
      <View style={styles.container}>
        {item.image}
        <Spacer spacing={Spacings.md} />
        {item.title}
        <Spacer spacing={Spacings.md} />
        {item.subtitle}
        <Spacer spacing={Spacings.md} />
      </View>
    );
  };

  const _renderNextButton = () => <RoundIcon name={'arrowright'} />;
  const _renderDoneButton = () => <RoundIcon name={'check'} />;

  const _keyExtractor = (item: any) => item.key;

  const ref = useRef<AppIntroSlider>(null);

  return (
    <AppIntroSlider
      ref={ref}
      renderItem={_renderItem}
      data={slides}
      onDone={() => {
        ref.current?.goToSlide(0);
        navigateAction(navigation, Routes.MENU)();
      }}
      renderDoneButton={_renderDoneButton}
      renderNextButton={_renderNextButton}
      keyExtractor={_keyExtractor}
      activeDotStyle={styles.activeDot}
      dotStyle={styles.dot}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    ...Layouts.container,
    ...Layouts.padded(),
  },
  title: {
    ...Typography.h1,
  },
  subtitle: {
    ...Typography.h4,
    // color: Colors.secondary,
    color: Colors.black,
    textAlign: 'center',
  },
  activeDot: {
    backgroundColor: Colors.secondary,
  },
  dot: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
});

export default Onboarding;
