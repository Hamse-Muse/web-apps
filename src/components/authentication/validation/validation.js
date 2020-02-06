const validation = values => {
  const error = {};
  if (!values.email) {
    error.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = 'not valid email';
  }
  if (!values.password) {
    error.password = 'Required';
  } else if (values.password.length < 6) {
    error.password = 'Must be 6 characters';
  }
  return error;
};

export default validation;
