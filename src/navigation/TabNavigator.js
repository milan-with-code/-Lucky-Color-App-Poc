import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import HomeScreen from '../features/home/screens/HomeScreen';
import PromotionScreen from '../screens/Promotion/PromotionScreen';
import WalletScreen from '../screens/Wallet/WalletScreen';
import AccountScreen from '../screens/Account/AccountScreen';
import ActivityScreen from '../features/activity/screen/ActivityScreen';

const Tab = createBottomTabNavigator();

// ✅ Custom Button for Center Tab (Promotion)
const CustomTabButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -20,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOpacity: 0.25,
      shadowRadius: 5,
      elevation: 5,
    }}
    onPress={onPress}>
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 100,
        backgroundColor: '#0063E6',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Activity"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          height: 80,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: '#ffffff',
          elevation: 5,
        },
        tabBarIconStyle: {
          alignItems: 'center',
          flex: 1,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home-outline" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={ActivityScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="shopping-bag" color={color} size={25} />
          ),
        }}
      />

      {/* ✅ Center Promotion Button */}
      <Tab.Screen
        name="Promotion"
        component={PromotionScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="diamond-sharp" color="#fff" size={30} />
          ),
          tabBarButton: props => <CustomTabButton {...props} />,
        }}
      />

      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="wallet-outline" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="person-outline" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
