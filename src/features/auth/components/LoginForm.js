import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Fonts from '../../../theme/fonts';
import {customerSupport, loginConfig, loginType} from '../../../data/Data';
import CustomTextInput from '../../../components/CustomTextInput';
import Feather from 'react-native-vector-icons/Feather';
import CustomCheckbox from '../../../components/CustomCheckbox';
import CustomButton from '../../../components/CustomButton';
import {loginUser} from '../../../api/authApi';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const LoginForm = ({navigation}) => {
  const [loginTypeSelected, setSelectedLoginType] = useState(loginType[0].name);
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: '',
  });
  const [errors, setErrors] = useState();

  const handleLoginType = name => setSelectedLoginType(name);

  const {placeholder, iconName, IconType, label, keyboardType} =
    loginConfig[loginTypeSelected];

  useEffect(() => {
    if (errors) {
      const timer = setTimeout(() => setErrors(), 2000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  const validateForm = () => {
    if (!formData.password) {
      setErrors('Password is required');
      return errors;
    }
  };

  const handleLogin = async () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await loginUser(
        `+91${formData.emailOrPhone}`,
        formData.password,
      );
      setFormData({emailOrPhone: '', password: ''});
      setErrors({});
      console.log('Login successful', response);
    } catch (error) {
      setErrors({
        password: error.response?.data?.message || 'Invalid credentials!',
      });
    }
  };

  return (
    <View>
      {errors && (
        <View
          style={[
            styles.errorPopup,
            {width: '100%', justifyContent: 'center', alignItems: 'center'},
          ]}>
          <View
            style={{
              backgroundColor: 'rgba(0, 0, 0, .7)',
              padding: 16,
              borderRadius: 8,
              zIndex: 10,
              alignItems: 'center',
            }}>
            <FontAwesome6 name="exclamation" color="white" size={20} />
            <Text style={styles.errorText}>{errors}</Text>
          </View>
        </View>
      )}

      <Text style={styles.title}>Log In</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          Please log in with your phone number or email
        </Text>
        <Text style={styles.description}>
          If you forget your password, please contact customer service
        </Text>
      </View>

      {/* Login Type Selection */}
      <View style={styles.loginTypeContainer}>
        {loginType.map(item => {
          const isSelected = loginTypeSelected === item.name;
          return (
            <TouchableOpacity
              key={item.name}
              activeOpacity={0.7}
              style={[
                styles.loginTypeButton,
                isSelected && styles.selectedLoginType,
              ]}
              onPress={() => handleLoginType(item.name)}>
              {item.iconName(isSelected)}
              <Text
                style={[
                  styles.loginTypeText,
                  isSelected && styles.selectedText,
                ]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <CustomTextInput
          label={label}
          iconName={iconName}
          IconType={IconType}
          placeholder={placeholder}
          iconSize={24}
          keyboardType={keyboardType}
          value={formData.emailOrPhone}
          onChangeText={text => setFormData({...formData, emailOrPhone: text})}
        />
        <CustomTextInput
          label="Password"
          iconName="lock"
          IconType={Feather}
          placeholder="Enter your password"
          iconSize={24}
          keyboardType="default"
          customStyle={styles.passwordInput}
          secureTextEntry={true}
          value={formData.password}
          onChangeText={text => setFormData({...formData, password: text})}
        />
      </View>
      <CustomCheckbox
        label="Remember password"
        onChange={setRememberMe}
        checked={rememberMe}
      />
      <View>
        <CustomButton
          title="Login"
          onPress={handleLogin}
          customStyle={{marginTop: 24}}
          disabled={!formData.emailOrPhone}
        />
        <CustomButton
          title="Register"
          onPress={() => navigation.navigate('Register')}
          customStyle={{marginVertical: 17}}
        />
      </View>

      <View style={styles.customerContainer}>
        {customerSupport.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.7}
            style={{alignItems: 'center'}}>
            {item.icon}
            <Text style={styles.customerSupportText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = {
  errorPopup: {
    position: 'absolute',

    top: '40%',
  },
  errorText: {
    color: 'white',
    fontSize: 16,
    fontFamily: Fonts.bold,
  },
  title: {
    fontSize: 24,
    fontFamily: Fonts.medium,
  },
  descriptionContainer: {
    paddingVertical: 8,
  },
  description: {
    fontFamily: Fonts.medium,
    lineHeight: 20,
  },
  loginTypeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  loginTypeButton: {
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  selectedLoginType: {
    backgroundColor: '#0063E6',
    borderRadius: 10,
  },
  loginTypeText: {
    fontFamily: Fonts.medium,
    paddingTop: 8,
    color: '#575757',
  },
  selectedText: {
    color: '#FFFFFF',
  },
  inputContainer: {
    marginVertical: 24,
  },
  passwordInput: {
    marginTop: 19,
  },
  customerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50,
    justifyContent: 'space-between',
  },
  customerSupportText: {
    marginTop: 6,
    fontFamily: Fonts.medium,
    color: '#575757',
  },
};

export default LoginForm;
