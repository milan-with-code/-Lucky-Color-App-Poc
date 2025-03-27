import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {featureGameSectionData} from '../../../data/Data';
import Fonts from '../../../theme/fonts';

const FeatureGameSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        {featureGameSectionData.map((feature, index) => (
          <TouchableOpacity activeOpacity={0.7} key={index} style={styles.card}>
            <Image source={{uri: feature.url}} style={styles.image} />
            <Text style={styles.text}>{feature.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{paddingVertical: 20, alignItems: 'center'}}>
        <Text style={styles.text}>No More</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 80,
  },
  list: {
    flexDirection: 'column',
    gap: 11,
  },
  card: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 120,
  },
  text: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
});

export default FeatureGameSection;
