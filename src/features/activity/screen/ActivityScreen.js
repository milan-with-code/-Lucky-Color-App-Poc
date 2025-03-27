import {View, ScrollView} from 'react-native';
import React from 'react';
import ActivityHeader from '../component/ActivityHeader';
import ActivityContent from '../component/ActivityContent';
import ActivityGrid from '../component/ActivityGrid';
import FeatureGameSection from '../component/FeatureGameSection';

const ActivityScreen = () => {
  return (
    <View style={{flex: 1}}>
      <ActivityHeader />
      <ScrollView style={{flexGrow: 1}}>
        <ActivityContent />
        <ActivityGrid />
        <FeatureGameSection />
      </ScrollView>
    </View>
  );
};

export default ActivityScreen;
