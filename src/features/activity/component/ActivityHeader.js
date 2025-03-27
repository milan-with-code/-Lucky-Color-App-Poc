import {View, Text, Image} from 'react-native';
import React from 'react';

const ActivityHeader = () => {
  return (
    <View style={{backgroundColor: '#0063E6', alignItems: 'center'}}>
      <Image
        source={require('../../../../assets/images/rajaIcon.png')}
        width={50}
        height={40}
      />
    </View>
  );
};

export default ActivityHeader;
