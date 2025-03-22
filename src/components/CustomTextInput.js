import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Fonts from '../theme/fonts';

const CustomTextInput = ({
  keyboardType,
  label,
  iconName,
  placeholder,
  value,
  sendOtp = false,
  onChangeText,
  IconType,
  iconSize = 20,
  iconColor = '#A0A0A0',
  customStyle,
  secureTextEntry = false,
  onSendPress,
}) => {
  const [isSecure, setIsSecure] = useState(secureTextEntry);

  return (
    <View style={customStyle}>
      <View style={styles.labelContainer}>
        {IconType && (
          <IconType name={iconName} size={iconSize} color={iconColor} />
        )}
        {label && <Text style={styles.label}>{label}</Text>}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#A0A0A0"
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          cursorColor="#A0A0A0"
          secureTextEntry={isSecure}
        />

        {secureTextEntry && (
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setIsSecure(!isSecure)}>
            <Feather
              name={isSecure ? 'eye-off' : 'eye'}
              size={20}
              color="#A0A0A0"
            />
          </TouchableOpacity>
        )}

        {sendOtp && (
          <TouchableOpacity style={styles.sendButton} onPress={onSendPress}>
            <Text style={styles.sendText}>Send</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 10,
    height: 23,
  },
  label: {
    fontSize: 14,
    color: '#757575',
    marginRight: 10,
    fontFamily: Fonts.medium,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#D1D1D1',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  input: {
    fontSize: 16,
    color: '#000',
    fontFamily: Fonts.regular,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
  },
  sendButton: {
    position: 'absolute',
    right: 10,
    backgroundColor: '#007BFF',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 5,
  },
  sendText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: Fonts.medium,
  },
});

export default CustomTextInput;
