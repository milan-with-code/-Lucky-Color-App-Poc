import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Fonts from '../../../theme/fonts';

const ActivityContent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Activity</Text>
      <Text style={styles.text}>Please remember to follow the event page</Text>
      <Text style={styles.text}>
        We will launch user feedback activities from time to time
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0063E6',
    padding: 20,
  },
  title: {
    paddingBottom: 8,
    fontSize: 16,
    fontFamily: Fonts.medium,
    color: 'white',
  },
  text: {
    fontSize: 13,
    fontFamily: Fonts.medium,
    color: 'white',
  },
});

export default ActivityContent;
