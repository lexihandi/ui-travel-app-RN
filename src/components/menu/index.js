/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconHome, IconMenu, IconNotif, IconSetting} from '../../assets';
import {colors, fonts} from '../../utils';

const Menu = () => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.home}>
        <IconHome />
        <Text style={styles.title}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <IconNotif />
      </TouchableOpacity>
      <TouchableOpacity>
        <IconMenu />
      </TouchableOpacity>
      <TouchableOpacity>
        <IconSetting />
      </TouchableOpacity>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.background,
    borderRadius: 37,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 35,
    left: 35,
    padding: 10,
    justifyContent: 'space-around',
  },
  home: {
    flexDirection: 'row',
    backgroundColor: colors.icon,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    alignSelf: 'center',
  },
  title: {
    marginLeft: 7,
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.titleMenu,
  },
});
