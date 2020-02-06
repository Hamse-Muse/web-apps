import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import firebase from './components/firebase/fire';
import './App.css';
import SingIn from './components/authentication/signIn';
import Home from './components/home/home';
function App() {
  useEffect(() => {
    onlistener();
  }, []);
  const [currentUser, setCurrentUser] = React.useState(null);
  const onlistener = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  };
  return (
    <Router>
      <div className='container'>
        {currentUser ? (
          <Route path='/' exact component={Home} />
        ) : (
          <Redirect to={'/singin'} />
        )}
        {!currentUser ? (
          <Route path='/singin' exact component={SingIn} />
        ) : (
          <Redirect to={'/'} />
        )}
        {/* <Route path='/singin' exact component={SingIn} /> : */}
      </div>
    </Router>
  );
}

export default App;
