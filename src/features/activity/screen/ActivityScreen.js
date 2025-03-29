import {View, ScrollView} from 'react-native';
import React from 'react';
import ActivityHeader from '../component/ActivityHeader';
import ActivityContent from '../component/ActivityContent';
import ActivityGrid from '../component/ActivityGrid';
import FeatureGameSection from '../component/FeatureGameSection';

const ActivityScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ActivityHeader />
      <ScrollView style={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
        <ActivityContent />
        <ActivityGrid navigation={navigation} />
        <FeatureGameSection />
      </ScrollView>
    </View>
  );
};

export default ActivityScreen;
