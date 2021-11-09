import React from 'react';
import {Text, View} from 'react-native';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';

export default function LoginScreen(props) {
  return (
    <View>
      <Text>Login Page</Text>
      <GoogleSigninButton onPress={props.onGoogleButtonPress} />
    </View>
  );
}
