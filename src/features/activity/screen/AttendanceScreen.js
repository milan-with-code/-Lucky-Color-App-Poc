import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import CustomHeader from '../../../components/CustomHeader';
import AttendanceBonusInfo from '../component/AttendanceBonusInfo';
import AttendanceRewardList from '../component/AttendanceRewardList';

const AttendanceScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <CustomHeader navigation={navigation} headerCenterTitle="Attendance" />
      <ScrollView style={{flexGrow: 1}}>
        <AttendanceBonusInfo />
        <AttendanceRewardList />
      </ScrollView>
    </View>
  );
};

export default AttendanceScreen;
