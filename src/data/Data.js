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

export const activityGridData = [
  {
    title: 'Activity\nAward',
  },
  {
    title: 'Invitation\nbonus',
  },
  {
    title: 'Betting\nrebate',
  },
  {
    title: 'Super\nJackpot',
  },
];

export const activityBigGridData = [
  {
    title: 'Gift',
    description: 'Enter the redemption code to receive gift rewards',
  },
  {
    title: 'Attendance bonus',
    description:
      'The more consecutive days you sign in, the higher the reward will be.',
  },
];

export const featureGameSectionData = [
  {
    name: '🟢 Top up! Start your Lucky Wheel spin.',
    url: 'https://ossimg.forpicstore777.top/rajalottery/banner/Banner_202408221740174vn2.png',
  },
  {
    name: '🟢 RajaGames Anti-Fraud Reminder',
    url: 'https://ossimg.forpicstore777.top/rajalottery/banner/Banner_202407081748393ko8.jpg',
  },
  {
    name: '🟢 AR Wallet Activity Award',
    url: 'https://ossimg.forpicstore777.top/rajalottery/banner/Banner_20250122171720a2ck.jpg',
  },
  {
    name: '🟢 Member First Deposit Bonus',
    url: 'https://ossimg.forpicstore777.top/rajalottery/banner/Banner_20240822165625mtt4.png',
  },
  {
    name: '🟢 Aviator (Slot) Extra Bonus',
    url: 'https://ossimg.forpicstore777.top/rajalottery/banner/Banner_20240822165614sf8y.png',
  },
  {
    name: '🟢 WinGo (1min) Winning Streak Reward',
    url: 'https://ossimg.forpicstore777.top/rajalottery/banner/Banner_20240822165606cusg.png',
  },
  {
    name: '🟢 Daily Task Bonus System',
    url: 'https://ossimg.forpicstore777.top/rajalottery/banner/Banner_20240822165559hn8d.png',
  },
  {
    name: '🟢 VIP Member Benefits Center',
    url: 'https://ossimg.forpicstore777.top/rajalottery/banner/Banner_20240822165551hvq5.png',
  },
  {
    name: '🟢 Member Betting Rebate',
    url: 'https://ossimg.forpicstore777.top/rajalottery/banner/Banner_20240822165545ma75.png',
  },
];
