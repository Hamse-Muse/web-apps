import React from 'react';
import { withRouter } from 'react-router-dom';
import useFormValid from './validation/formValid';
import firebase from '../firebase/fire';
import validation from './validation/validation';
const SignIn = ({ history }) => {
  const [firebaseError, setFirebaseError] = React.useState(null);
  const initialValues = {
    email: '',
    password: ''
  };
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors
  } = useFormValid(initialValues, validation, authenticate);

  function authenticate() {
    firebase
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(success => {
        history.push('/');
        console.log(success);
      })
      .catch(err => {
        setFirebaseError('incorrect email or password');
        console.log(err);
      });
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='col-4 mr-auto'>
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input
            id='email'
            name='email'
            type='email'
            className='form-control'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email ? <div>{errors.email}</div> : null}
        </div>
        <div className='form-group'>
          <label htmlFor='password'>password Address</label>
          <input
            id='password'
            name='password'
            type='password'
            className='form-control'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password ? <div>{errors.password}</div> : null}
          {firebaseError ? (
            <div className='text-center'>{firebaseError}</div>
          ) : null}
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default withRouter(SignIn);
