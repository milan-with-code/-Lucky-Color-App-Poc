// GiftHeader.js
import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fonts from '../theme/fonts';
import Colors from '../theme/colors';

const CustomHeader = ({navigation, headerCenterTitle, headerEndContent}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
        <MaterialIcons
          name="keyboard-backspace"
          size={30}
          color={Colors.backIconColor}
        />
      </TouchableOpacity>
      {headerCenterTitle && (
        <Text style={styles.giftText}>{headerCenterTitle}</Text>
      )}
      {headerEndContent && headerEndContent}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
  },
  giftText: {
    fontFamily: Fonts.regular,
    fontSize: 18,
    color: 'black',
  },
});

export default CustomHeader;
