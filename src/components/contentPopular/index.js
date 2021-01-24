/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../utils';

const ContentPopular = ({city, image, onPress}) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <View style={styles.title}>
        <Text style={styles.city}>{city}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ContentPopular;

const styles = StyleSheet.create({
  wrapper: {paddingLeft: 20, marginRight: 10},

  image: {
    width: 130,
    height: 130,
    position: 'relative',
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
  },
  title: {
    backgroundColor: colors.menu,
    height: 50,
    borderBottomRightRadius: 26,
    borderBottomLeftRadius: 26,
    justifyContent: 'center',
  },
  city: {textAlign: 'center', fontFamily: fonts.primary[500], fontSize: 18},
});
