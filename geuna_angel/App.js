import type {Node} from 'react';
import * as React from 'react';
// import auth from '@react-native-firebase/auth';
// import {
//   GoogleSignin,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';
// import Home from './screens/Home';
// import LoginScreen from './screens/LoginScreen';
import Navigation from './android/app/src/navigations';

const App: () => Node = () => {
  // React.useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId:
  //       '564110210252-ure2bchd987v4fvmj7oraq7dhila9sp1.apps.googleusercontent.com',
  //   });
  // }, []);
  // const [loggedIn, setLoggedIn] = React.useState(false);

  // async function onGoogleButtonPress() {
  //   try {
  //     const {idToken} = await GoogleSignin.signIn();
  //     console.log(idToken);
  //     const googleCredential = auth().GoogleAuthProvider.credential(idToken);
  //     return auth().signInWithCredential(googleCredential);
  //   } catch (err) {
  //     console.log(err);
  //     console.log(statusCodes);
  //   }
  // }

  // async function onGoogleButtonPress() {
  //   await GoogleSignin.hasPlayServices();
  //   const userInfo = await GoogleSignin.signIn();
  //   console.log(userInfo);
  // }

  // React.useEffect(() => {
  //   GoogleSignin.isSignedIn()
  //     .then(res => setLoggedIn(res))
  //     .catch(e => console.log(e));
  // }, []);

  // auth().onAuthStateChanged(user => {
  //   if (user) {
  //     setLoggedIn(true);
  //   } else {
  //     setLoggedIn(false);
  //   }
  // });

  // if (loggedIn) {
  //   return <Home />;
  // }
  // return <LoginScreen onGoogleButtonPress={onGoogleButtonPress} />;
  return <Navigation />;
};
export default App;
