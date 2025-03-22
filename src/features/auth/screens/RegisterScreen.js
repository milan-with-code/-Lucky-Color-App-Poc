import {View, StatusBar, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import AuthHeader from '../components/AuthHeader';
import RegistrationForm from '../components/RegistrationForm';

const RegisterScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View
        style={{
          marginTop: StatusBar.currentHeight,
          paddingHorizontal: 20,
        }}>
        <AuthHeader navigation={navigation} />
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          <RegistrationForm navigation={navigation} formType="register" />
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

export default RegisterScreen;
