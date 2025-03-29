import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import CustomHeader from '../../../components/CustomHeader';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fonts from '../../../theme/fonts';
import ActivityBanner from '../component/ActivityBanner';

const ActivityAward = () => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <CustomHeader
        headerEndContent={
          <TouchableOpacity
            activeOpacity={0.7}
            style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <MaterialCommunityIcons name="history" size={26} color="black" />
            <Text style={{color: 'black', fontFamily: Fonts.regular}}>
              Collection record
            </Text>
          </TouchableOpacity>
        }
      />
      <ScrollView style={{flexGrow: 1}}>
        <ActivityBanner />
      </ScrollView>
    </View>
  );
};

export default ActivityAward;
