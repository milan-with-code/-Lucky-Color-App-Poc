import {View, Text} from 'react-native';
import React from 'react';
import Fonts from '../../../theme/fonts';

const ActivityContent = () => {
  return (
    <View style={{backgroundColor: '#0063E6', padding: 20}}>
      <Text
        style={{
          paddingBottom: 8,
          fontSize: 16,
          fontFamily: Fonts.medium,
          color: 'white',
        }}>
        Activity
      </Text>
      <Text
        style={{
          fontSize: 12,
          fontFamily: Fonts.medium,
          color: 'white',
        }}>
        Please remember to follow the event page
      </Text>
      <Text
        style={{
          fontSize: 12,
          fontFamily: Fonts.medium,
          color: 'white',
        }}>
        We will launch user feedback activities from time to time
      </Text>
    </View>
  );
};

export default ActivityContent;
