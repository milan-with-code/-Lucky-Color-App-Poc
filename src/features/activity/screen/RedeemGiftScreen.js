import {View, ScrollView, Image, StyleSheet} from 'react-native';
import React from 'react';
import GreetingMessageWithInput from '../component/GreetingMessageWithInput';
import GiftHistoryTable from '../component/GiftHistoryTable';
import CustomHeader from '../../../components/CustomHeader';

const RedeemGiftScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CustomHeader navigation={navigation} headerCenterTitle="Gift" />
      <ScrollView style={styles.scrollView}>
        <Image
          source={{uri: 'https://rajawager.in/assets/png/gift-d7507b9b.png'}}
          style={styles.image}
        />
        <GreetingMessageWithInput />
        <GiftHistoryTable />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    flexGrow: 1,
  },
  image: {
    width: '100%',
    height: 155,
  },
});

export default RedeemGiftScreen;
