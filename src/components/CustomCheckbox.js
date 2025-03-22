import React, {useState} from 'react';
import {Text, TouchableOpacity, Animated, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Fonts from '../theme/fonts';

const CustomCheckbox = ({label, checked, onChange}) => {
  const [scaleAnim] = useState(new Animated.Value(1));

  const toggleCheckbox = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.8,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();

    onChange(!checked);
  };

  return (
    <TouchableOpacity
      onPress={toggleCheckbox}
      activeOpacity={0.8}
      style={styles.container}>
      <Animated.View
        style={[styles.checkbox, {transform: [{scale: scaleAnim}]}]}>
        {checked && <Icon name="check" size={20} color="#fff" />}
      </Animated.View>
      {label && <Text style={styles.label}>{label}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#0063E6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: '#0063E6',
  },
  label: {
    fontSize: 16,
    color: '#333',
    fontFamily: Fonts.regular,
  },
});

export default CustomCheckbox;
