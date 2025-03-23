import indiaFlag, {EnglishFlag} from '../../assets/svg/svgData';
import Feather from 'react-native-vector-icons/Feather';
import Zocial from 'react-native-vector-icons/Zocial';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

export const languageData = [
  {
    language: 'EN',
    param: 'en',
    flag: EnglishFlag,
  },
  {
    language: 'HD',
    param: 'in',
    flag: indiaFlag,
  },
];

export const loginType = [
  {
    name: 'Phone Number',
    iconName: isSelected => (
      <Feather
        name="smartphone"
        size={30}
        color={isSelected ? '#FFFFFF' : '#575757'}
      />
    ),
  },
  // {
  //   name: 'Email Login',
  //   iconName: isSelected => (
  //     <Zocial
  //       name="email"
  //       size={26}
  //       color={isSelected ? '#FFFFFF' : '#575757'}
  //     />
  //   ),
  // },
];

export const customerSupport = [
  {
    title: 'Forgot Password',
    icon: <Fontisto name="locked" size={23} color="#575757" />,
  },
  {
    title: 'Customer Services',
    icon: <AntDesign name="customerservice" size={23} color="#575757" />,
  },
];

export const loginConfig = {
  'Phone Number': {
    placeholder: 'Please enter the phone number',
    iconName: 'smartphone',
    IconType: Feather,
    label: 'Phone Number',
    keyboardType: 'number-pad',
  },
  'Email Login': {
    placeholder: 'Please enter the email address',
    iconName: 'email',
    IconType: Zocial,
    label: 'Mail',
    keyboardType: 'email-address',
  },
};

export const inputFields = [
  {
    key: 'phone',
    placeholder: 'Please enter the phone number',
    label: 'Phone Number',
    iconName: 'smartphone',
    IconType: Feather,
    keyboardType: 'number-pad',
  },
  {
    key: 'otp',
    placeholder: 'Please enter the confirmation code',
    label: 'Verification Code',
    iconName: 'smartphone',
    IconType: Feather,
    keyboardType: 'number-pad',
    sendOtp: true,
    onSendPress: () => console.log('Send OTP'),
    marginVertical: 19,
  },
  {
    key: 'password',
    placeholder: 'Set password',
    label: 'Set Password',
    iconName: 'lock',
    IconType: Feather,
    keyboardType: 'default',
    secureTextEntry: true,
  },
  {
    key: 'confirmPassword',
    placeholder: 'Confirm password',
    label: 'Confirm Password',
    iconName: 'lock',
    IconType: Feather,
    keyboardType: 'default',
    secureTextEntry: true,
    marginVertical: 19,
  },
  {
    key: 'invite',
    placeholder: 'Please enter the invitation code',
    label: 'Invite Code',
    iconName: 'file-code',
    IconType: FontAwesome6,
    keyboardType: 'number-pad',
  },
];
