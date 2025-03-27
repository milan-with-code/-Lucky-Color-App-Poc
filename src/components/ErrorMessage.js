import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ErrorMessage = ({message, visible}) => {
  if (!visible) return null;

  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    position: 'absolute',
    top: '40%',
    left: '10%',
    right: '10%',
    backgroundColor: '#D32F2F',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    zIndex: 999,
    elevation: 5,
  },
  errorText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ErrorMessage;
