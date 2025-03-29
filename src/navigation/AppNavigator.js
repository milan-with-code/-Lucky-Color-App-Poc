import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import {AuthContext} from '../context/AuthContext';
import AuthNavigator from './AuthNavigator';
import RedeemGiftScreen from '../features/activity/screen/RedeemGiftScreen';
import AttendanceScreen from '../features/activity/screen/AttendanceScreen';
import ActivityAward from '../features/activity/screen/ActivityAward';
import InvitationBonus from '../features/activity/screen/InvitationBonus';
import BettingRebate from '../features/activity/screen/BettingRebate';
import SuperJackpot from '../features/activity/screen/SuperJackpot';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const {user} = useContext(AuthContext);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{headerShown: false}}>
        {/* {user ? ( */}
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="RedeemGift" component={RedeemGiftScreen} />
        <Stack.Screen name="Attendance" component={AttendanceScreen} />
        <Stack.Screen name="ActivityAward" component={ActivityAward} />
        <Stack.Screen name="InvitationBonus" component={InvitationBonus} />
        <Stack.Screen name="Rebate" component={BettingRebate} />
        <Stack.Screen name="SuperJackpot" component={SuperJackpot} />
        {/* ) : ( */}
        <Stack.Screen name="Auth" component={AuthNavigator} />
        {/* )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
