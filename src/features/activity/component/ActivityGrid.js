import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {activityBigGridData, activityGridData} from '../../../data/Data';
import Fonts from '../../../theme/fonts';

const ActivityGrid = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.smallGrid}>
        {activityGridData.map((activity, index) => (
          <TouchableOpacity
            activeOpacity={0.7}
            key={index}
            onPress={() => {
              if (!activity.route) return;
              navigation.navigate(activity.route);
            }}>
            <Text style={styles.smallText}>{activity.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.bigGrid}>
        {activityBigGridData.map((activity, index) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              if (!activity.route) return;
              navigation.navigate(activity.route);
            }}
            key={index}
            style={styles.bigGridItem}>
            <Text style={styles.bigText}>{activity.title}</Text>
            <Text style={styles.bigText}>{activity.description}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  smallGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  smallText: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    textAlign: 'center',
  },
  bigGrid: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bigGridItem: {
    width: '48%',
    backgroundColor: '#F0F0F0',
    borderRadius: 4,
  },
  bigText: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
});

export default ActivityGrid;
