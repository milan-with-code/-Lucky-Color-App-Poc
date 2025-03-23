import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Fonts from '../../../theme/fonts';
import Feather from 'react-native-vector-icons/Feather';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomCheckbox from '../../../components/CustomCheckbox';
import CustomButton from '../../../components/CustomButton';
import {inputFields} from '../../../data/Data';

const RegistrationForm = ({navigation, formType}) => {
  const [rememberMe, setRememberMe] = useState(false);

  const isRegister = formType === 'register';
  const title = isRegister ? 'Register' : 'Forgot Password';
  const description = isRegister
    ? 'Please register by phone number or email'
    : 'Please retrieve change your password through your mobile phone number or email';
  const loginTypeText = isRegister ? 'Register your phone' : 'phone reset';

  let filteredFields = isRegister
    ? inputFields
    : [inputFields[0], inputFields[2], inputFields[3], inputFields[1]];

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={[styles.description, styles.descriptionContainer]}>
        {description}
      </Text>
      <View style={styles.loginTypeContainer}>
        <TouchableOpacity activeOpacity={0.7} style={styles.loginTypeButton}>
          <Feather name="smartphone" size={30} color="#FFFFFF" />
          <Text style={styles.loginTypeText}>{loginTypeText}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        {filteredFields.map((field, index) => (
          <CustomTextInput
            key={field.key}
            {...{
              placeholder: field.placeholder,
              label: field.label,
              iconName: field.iconName,
              IconType: field.IconType,
              keyboardType: field.keyboardType,
              secureTextEntry: field.secureTextEntry,
              sendOtp: field.sendOtp,
              onSendPress: field.onSendPress,
              customStyle:
                index > 0 ? {marginVertical: field.marginVertical} : {},
            }}
          />
        ))}
      </View>

      {isRegister && (
        <CustomCheckbox
          label="I have read and agree Privacy Agreement"
          onChange={setRememberMe}
          checked={rememberMe}
        />
      )}

      <View style={styles.customerContainer}>
        <CustomButton
          title="I have an account Login"
          customStyle={{marginTop: 24}}
          onPress={() => navigation.navigate('Login')}
        />
        <CustomButton title="Register" customStyle={{marginVertical: 17}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: Fonts.medium,
  },
  descriptionContainer: {
    paddingVertical: 8,
  },
  description: {
    fontFamily: Fonts.medium,
    lineHeight: 20,
  },
  loginTypeContainer: {
    paddingVertical: 5,
    marginTop: 10,
  },
  inputContainer: {
    marginVertical: 24,
  },
  loginTypeButton: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#0063E6',
    borderRadius: 10,
  },
  loginTypeText: {
    fontFamily: Fonts.medium,
    paddingTop: 8,
    color: '#fff',
  },
  customerContainer: {
    marginBottom: 53,
  },
});

export default RegistrationForm;
