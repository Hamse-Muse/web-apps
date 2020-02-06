import React from 'react';

const useFormValid = (initialState, validate, authenticate) => {
  const [values, setvalue] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});

  React.useEffect(() => {
    if (isSubmiting) {
      const noError = Object.keys(errors).length === 0;
      if (noError) {
        authenticate();
        setIsSubmiting(false);
      } else {
        setIsSubmiting(false);
      }
    }
  }, [errors]);

  const [isSubmiting, setIsSubmiting] = React.useState(false);
  const handleChange = e => {
    setvalue({
      ...values,
      [e.target.name]: e.target.value
    });
  };
  const handleBlur = () => {
    const validationError = validate(values);
    setErrors(validationError);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const validationError = validate(values);
    setErrors(validationError);
    setIsSubmiting(true);
  };
  return { handleSubmit, handleBlur, handleChange, values, errors };
};

export default useFormValid;
