export const validateForm = ({formData}) => {
  let newErrors = {};
  if (!formData.emailOrPhone)
    newErrors.email = 'Phone number or email is required';
  if (!formData.password) newErrors.password = 'Password is required';
  return newErrors;
};
