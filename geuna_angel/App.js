import type {Node} from 'react';
import * as React from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Home from './screens/Home';
import LoginScreen from './screens/LoginScreen';
import {TextInput, View} from 'react-native';

const App: () => Node = () => {
  React.useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '564110210252-ure2bchd987v4fvmj7oraq7dhila9sp1.apps.googleusercontent.com',
    });
  }, []);

  async function onGoogleButtonPress() {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth().GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  }

  const [loggedIn, setLoggedIn] = React.useState(false);

  auth().onAuthStateChanged(user => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  if (loggedIn) {
    return <Home />;
  }
  return <LoginScreen onGoogleButtonPress={onGoogleButtonPress} />;
};
export default App;
