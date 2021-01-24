/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconGPS} from '../../assets';
import {colors, fonts} from '../../utils';

const ContentEvents = ({image, place, country}) => {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <Image source={image} style={styles.image} />
      <View style={styles.desc}>
        <Text style={styles.place}>{place}</Text>
        <View style={styles.loc}>
          <IconGPS />
          <Text style={styles.country}>{country}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ContentEvents;

const styles = StyleSheet.create({
  wrapper: {paddingLeft: 20, marginRight: 10, paddingBottom: 20},
  image: {height: 200, width: 200, borderRadius: 25, resizeMode: 'cover'},
  desc: {position: 'absolute', left: 35, top: 25},
  place: {
    fontFamily: fonts.primary[700],
    color: colors.text.white,
    maxWidth: 130,
  },
  loc: {flexDirection: 'row', marginTop: 10},
  country: {
    marginLeft: 5,
    fontFamily: fonts.primary[600],
    color: colors.text.white,
  },
});
