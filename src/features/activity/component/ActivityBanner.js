import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import Fonts from '../../../theme/fonts';

const ActivityBanner = () => {
  return (
    <ImageBackground
      source={require('../../../../assets/images/activityBanner.png')}
      style={styles.container}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Activity Award</Text>
        <Text style={[styles.description, styles.paddingTop]}>
          Complete weekly/daily tasks to{'\n'}receive rich rewards
        </Text>
        <Text style={styles.description}>
          Weekly rewards cannot be{'\n'}accumulated to the next week,{'\n'}and
          daily rewards cannot be{'\n'}accumulated to the next day.
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontFamily: Fonts.medium,
    fontSize: 20,
    color: 'white',
  },
  description: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: 'white',
  },
  paddingTop: {
    paddingTop: 4,
  },
});

export default ActivityBanner;
