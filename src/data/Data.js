import indiaFlag, {EnglishFlag} from '../../assets/svg/svgData';
import Feather from 'react-native-vector-icons/Feather';
import Zocial from 'react-native-vector-icons/Zocial';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
  {
    name: 'Email Login',
    iconName: isSelected => (
      <Zocial
        name="email"
        size={26}
        color={isSelected ? '#FFFFFF' : '#575757'}
      />
    ),
  },
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
