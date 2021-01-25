/* eslint-disable prettier/prettier */
import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  ImageBali,
  ImageBrazil,
  ImageEngland,
  ImageJapan,
  ImageParis,
} from '../../assets';
import {
  ContentEvents,
  ContentPopular,
  Header,
  Menu,
  SliderMenu,
} from '../../components/';
import {colors, fonts} from '../../utils';

const Home = ({navigation}) => {
  return (
    <View style={styles.page}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <Text style={styles.title}>Let’s enjoy your Vacation</Text>
        <SliderMenu />
        <View style={styles.desc}>
          <Text style={styles.popular}>Popular Countries</Text>
          <TouchableOpacity>
            <Text style={styles.see}>See All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.content}>
            <ContentPopular
              image={ImageBali}
              city="Bali"
              onPress={() => navigation.navigate('Detail')}
              favorite
            />
          </View>
          <ContentPopular image={ImageParis} city="Paris" />
          <ContentPopular image={ImageEngland} city="England" />
        </ScrollView>
        <View style={styles.desc}>
          <Text style={styles.popular}>Ongoing Events</Text>
          <TouchableOpacity>
            <Text style={styles.see}>See All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <ContentEvents
            image={ImageBrazil}
            place="Rio Carnival, Rio de Janiro"
            country="Brazil"
          />
          <ContentEvents
            image={ImageJapan}
            place="Sapporo Snow Festival"
            country="Japan"
          />
        </ScrollView>
      </ScrollView>
      <Menu />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: fonts.primary[700],
    fontSize: 24,
    maxWidth: 240,
    color: colors.text.title,
    marginBottom: 25,
    paddingHorizontal: 20,
  },
  desc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginTop: 20,
  },
  content: {flexDirection: 'row'},
  popular: {fontFamily: fonts.primary[600], fontSize: 18},
  see: {
    fontFamily: fonts.primary[500],
    fontSize: 14,
    color: colors.text.secondary,
    marginRight: 20,
  },
});
