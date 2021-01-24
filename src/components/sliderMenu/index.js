/* eslint-disable prettier/prettier */
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, fonts} from '../../utils';

const SliderMenu = () => {
  return (
    <View style={styles.wrapper}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity>
          <View style={styles.actived}>
            <Text style={styles.active}>All</Text>
            <View style={styles.line} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.inactive}>Asia</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.inactive}>America</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.inactive}>Africa</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.inactive}>Europe</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.inactive}>North</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default SliderMenu;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    marginRight: 10,
  },
  actived: {alignItems: 'center'},
  active: {
    color: colors.text.active,
    fontFamily: fonts.primary[600],
    fontSize: 14,
  },
  line: {
    borderWidth: 1,
    borderColor: colors.button,
    width: 15,
  },
  inactive: {
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
    fontSize: 14,
    marginLeft: 22,
  },
});
