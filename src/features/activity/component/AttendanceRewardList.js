import {View, Text, Dimensions, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {attendanceRewardListData} from '../../../data/Data';
import Fonts from '../../../theme/fonts';
import StarCoin from '../../../../assets/images/starCoin.svg';
import GiftBoxIcon from '../../../../assets/images/giftBoxIcon.svg';
import CustomButton from '../../../components/CustomButton';

const AttendanceRewardList = () => {
  const numColumns = 3;
  const screenWidth = Dimensions.get('window').width;
  const itemWidth = (screenWidth - 40) / numColumns - 8;

  const RenderItem = ({item}) => {
    return (
      <View style={[styles.itemContainer, {width: itemWidth}]}>
        <Text style={styles.rewardText}>₹ {item.rewardMoney}</Text>
        <StarCoin width={40} height={40} style={styles.starCoin} />
        <Text style={styles.rewardDay}>{item.rewardDay}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={attendanceRewardListData}
        renderItem={RenderItem}
        keyExtractor={(_item, index) => index.toString()}
        numColumns={numColumns}
      />
      <View style={styles.giftBoxContainer}>
        <GiftBoxIcon width={111} height={78} />
        <View>
          <Text style={styles.rewardText}>₹6,000.00</Text>
          <Text style={styles.rewardDayCentered}>7 Day</Text>
        </View>
      </View>
      <CustomButton title="Attendance" customStyle={styles.attendanceButton} />
    </View>
  );
};

export default AttendanceRewardList;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 13,
  },
  itemContainer: {
    borderColor: '#DBDBDB',
    borderWidth: 1,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
    padding: 8,
  },
  rewardText: {
    fontSize: 16,
    fontFamily: Fonts.medium,
    color: 'black',
  },
  rewardDay: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: '#757575',
  },
  starCoin: {
    marginVertical: 7,
  },
  giftBoxContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#DBDBDB',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    margin: 4,
    marginTop: 11,
  },
  rewardDayCentered: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: '#757575',
  },
  attendanceButton: {
    marginTop: 43,
  },
});
