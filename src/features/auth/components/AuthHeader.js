import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../theme/colors';
import LanguageModal from './LanguageModal';

const AuthHeader = ({navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
      }}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
        <MaterialIcons
          name="keyboard-backspace"
          size={30}
          color={Colors.backIconColor}
        />
      </TouchableOpacity>
      <Text>AuthHeader</Text>
      <LanguageModal />
    </View>
  );
};

export default AuthHeader;
