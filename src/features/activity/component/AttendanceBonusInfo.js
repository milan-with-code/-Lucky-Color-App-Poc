import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Fonts from '../../../theme/fonts';
import CustomButton from '../../../components/CustomButton';

const AttendanceBonusInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Attendance bonus</Text>
      <Text style={styles.text}>
        Get rewards based on consecutive login days
      </Text>
      <View style={styles.spacingSmall}></View>
      <View style={styles.spacingMedium}>
        <Text style={styles.text}>Accumulated</Text>
        <Text style={styles.amount}>₹0.00</Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton title="Game Rules" bgColor="white" textColor="black" />
        <CustomButton
          title="Attendance history"
          bgColor="white"
          textColor="black"
        />
      </View>
    </View>
  );
};

export default AttendanceBonusInfo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0063E6',
    padding: 20,
  },
  text: {
    fontFamily: Fonts.medium,
    color: 'white',
    fontSize: 14,
  },
  amount: {
    marginTop: 2.5,
    fontFamily: Fonts.medium,
    color: 'white',
    fontSize: 18,
  },
  spacingSmall: {
    marginTop: 11,
  },
  spacingMedium: {
    marginTop: 7,
  },
  buttonContainer: {
    marginTop: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
