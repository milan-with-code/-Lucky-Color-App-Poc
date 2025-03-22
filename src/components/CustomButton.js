import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Fonts from '../theme/fonts';

const CustomButton = ({
  title,
  onPress,
  iconName,
  IconType = Feather,
  iconPosition = 'left',
  isLoading = false,
  disabled = false,
  bgColor = '#0063E6',
  textColor = '#FFFFFF',
  borderRadius = 5,
  iconSize = 20,
  iconColor = '#FFFFFF',
  customStyle = {},
  textStyle = {},
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled || isLoading}
      style={[
        styles.button,
        {backgroundColor: disabled ? '#A0A0A0' : bgColor, borderRadius},
        customStyle,
      ]}>
      {isLoading ? (
        <ActivityIndicator size="small" color={textColor} />
      ) : (
        <View style={styles.content}>
          {iconName && iconPosition === 'left' && (
            <IconType
              name={iconName}
              size={iconSize}
              color={iconColor}
              style={styles.icon}
            />
          )}
          <Text style={[styles.text, {color: textColor}, textStyle]}>
            {title}
          </Text>
          {iconName && iconPosition === 'right' && (
            <IconType
              name={iconName}
              size={iconSize}
              color={iconColor}
              style={styles.icon}
            />
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontFamily: Fonts.semiBold,
  },
  icon: {
    marginHorizontal: 8,
  },
});

export default CustomButton;
