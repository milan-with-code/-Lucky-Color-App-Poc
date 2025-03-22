import React from 'react';
import {View, StyleSheet, ScrollView, StatusBar} from 'react-native';
import AuthHeader from '../components/AuthHeader';
import LoginForm from '../components/LoginForm';
const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={{marginTop: StatusBar.currentHeight, paddingHorizontal: 20}}>
        <AuthHeader navigation={navigation} />
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <LoginForm navigation={navigation} />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
});

export default LoginScreen;
