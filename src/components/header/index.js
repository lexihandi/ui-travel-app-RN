/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {IconSearch, ImageAccount} from '../../assets/';
import {colors, fonts} from '../../utils';

const Header = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.account}>
        <TouchableOpacity>
          <Image source={ImageAccount} style={styles.image} />
        </TouchableOpacity>
        <View>
          <Text style={styles.name}>Hello Bimo,</Text>
          <Text style={styles.greetings}>Good Morning</Text>
        </View>
      </View>
      <TouchableOpacity>
        <IconSearch />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
    padding: 20,
  },
  account: {flexDirection: 'row', alignItems: 'center'},
  image: {width: 60, height: 60},
  name: {
    marginLeft: 15,
    fontSize: 16,
    fontFamily: fonts.primary[500],
    color: colors.text.title,
  },
  greetings: {
    marginLeft: 15,
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.text.grey,
  },
});
