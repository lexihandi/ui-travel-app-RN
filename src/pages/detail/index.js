/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IconBack, ImageDetailBali} from '../../assets';
import {Button, Icon} from '../../components';
import {colors, fonts} from '../../utils';

const Detail = ({navigation}) => {
  return (
    <View style={styles.page}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.navigate('Home')}>
          <IconBack />
        </TouchableOpacity>
        <Image source={ImageDetailBali} style={styles.image} />
        <View style={styles.content}>
          <View style={styles.wrapperContent}>
            <Text style={styles.title}>Bali, Indonesia</Text>
            <Icon titleStar="4.92" titleCloud="27 °C" titlePlane="9 Jan" />
          </View>
        </View>
        <View style={styles.descWrapper}>
          <Text style={styles.descTitle}>Description</Text>
          <Text style={styles.desc}>
            Bali is famous for beaches, countless waves for surfing scuba
            diving, natiral sites to visit and explore tremely fascinating
            Hindus culture with colorfuls ceremonies and magnificent temples
            gifted artists the producing.
          </Text>
        </View>
        <View style={styles.booking}>
          <View>
            <Text style={styles.starting}>Starting From</Text>
            <Text style={styles.price}>$500 - 750</Text>
          </View>
          <Button title="Book Now" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background,
  },
  icon: {position: 'absolute', zIndex: 10, top: 30, left: 30},
  image: {
    height: 300,
    width: 415,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignSelf: 'center',
    resizeMode: 'cover',
  },
  content: {
    backgroundColor: colors.background,
    height: 140,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  wrapperContent: {padding: 20},
  title: {
    color: colors.text.titleDetail,
    fontSize: 24,
    fontFamily: fonts.primary[700],
    marginBottom: 15,
  },
  descWrapper: {backgroundColor: colors.detail, padding: 20},
  descTitle: {
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    fontSize: 16,
  },
  desc: {
    fontFamily: fonts.primary[400],
    color: colors.text.detail,
    fontSize: 13,
  },
  booking: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
  },
  starting: {
    fontFamily: fonts.primary[400],
    fontSize: 13,
    color: colors.text.primary,
  },
  price: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.active,
  },
});
