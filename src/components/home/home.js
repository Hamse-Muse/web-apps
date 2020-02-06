import React from 'react';
import firebase from '../firebase/fire';
const home = () => {
  const singOut = () => {
    firebase.auth().signOut();
  };
  return (
    <div>
      <button onClick={singOut}>singOut</button>
      home is here you log in
    </div>
  );
};

export default home;
