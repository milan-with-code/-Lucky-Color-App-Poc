import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fonts from '../../../theme/fonts';
import EmptyFolder from '../../../../assets/images/emptyFolder.svg';

const GiftHistoryTable = () => {
  return (
    <View style={styles.container}>
      <View style={styles.messageBox}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
          <FontAwesome5 name="calendar-alt" size={18} />
          <Text style={styles.historyText}>History</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <EmptyFolder width={200} />
          <Text style={[styles.historyText, {color: '#757575'}]}>No Data</Text>
        </View>
      </View>
    </View>
  );
};

export default GiftHistoryTable;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 12,
  },
  messageBox: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderColor: '#DBDBDB',
    borderWidth: 1,
    borderRadius: 8,
  },
  historyText: {
    fontSize: 14,
    fontFamily: Fonts.medium,
  },
});
