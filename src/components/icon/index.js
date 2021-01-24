/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconCloud, IconPlane, IconStar} from '../../assets';
import {colors, fonts} from '../../utils';

const Icon = ({titleCloud, titlePlane, titleStar}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.iconStar}>
        <View style={styles.star}>
          <IconStar />
        </View>
        <Text style={styles.title}>{titleStar}</Text>
      </View>
      <View style={styles.iconStar}>
        <View style={styles.star}>
          <IconCloud />
        </View>
        <Text style={styles.title}>{titleCloud}</Text>
      </View>
      <View style={styles.iconStar}>
        <View style={styles.star}>
          <IconPlane />
        </View>
        <Text style={styles.title}>{titlePlane}</Text>
      </View>
    </View>
  );
};

export default Icon;

const styles = StyleSheet.create({
  wrapper: {flexDirection: 'row', justifyContent: 'space-between'},
  iconStar: {alignItems: 'center', flexDirection: 'row'},
  star: {
    backgroundColor: colors.icon,
    padding: 10,
    borderRadius: 10,
    marginRight: 5,
  },
  title: {
    fontFamily: fonts.primary[600],
    color: colors.text.title,
    fontSize: 14,
  },
});
