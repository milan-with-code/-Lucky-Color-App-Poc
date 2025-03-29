import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton from '../../../components/CustomButton';
import Fonts from '../../../theme/fonts';

const GreetingMessageWithInput = () => {
  return (
    <View style={styles.container}>
      <View style={styles.messageBox}>
        <Text style={styles.greetingText}>Hi</Text>
        <Text style={[styles.greetingText, {paddingTop: 0}]}>
          We have a gift for you
        </Text>
        <Text style={styles.instructionText}>
          Please enter the gift code below
        </Text>
        <CustomTextInput
          placeholder="Please enter gift code"
          customStyle={styles.input}
        />
        <CustomButton title="Receive" customStyle={styles.button} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 12,
  },
  messageBox: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderColor: '#DBDBDB',
    borderWidth: 1,
    borderRadius: 8,
  },
  greetingText: {
    paddingTop: 5,
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: '#757575',
  },
  instructionText: {
    paddingTop: 20,
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: 'black',
  },
  input: {
    marginTop: 11,
  },
  button: {
    marginTop: 23,
  },
});

export default GreetingMessageWithInput;
