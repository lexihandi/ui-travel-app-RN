/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../utils';

const Button = ({title}) => {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.button,
    width: 170,
    height: 60,
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 13,
    justifyContent: 'center',
  },
  title: {
    color: colors.text.white,
    fontFamily: fonts.primary[600],
    fontSize: 16,
    textAlign: 'center',
  },
});
