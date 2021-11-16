import React, {useState} from 'react';
import {Text, TextInput, View, Button} from 'react-native';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default function LoginScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function signIn() {
    firestore().collection('UsersLogedIn').add({
      email: email,
      password: password,
    });
  }

  return (
    <View>
      <Text>Login Page</Text>
      <TextInput
        style={{width: 300, borderWidth: 0.5, borderRadius: 10, margin: 10}}
        onChangeText={setEmail}
        value={email}
        placeholder="이메일을 입력해주세요"
      />
      <TextInput
        style={{width: 300, borderWidth: 0.5, borderRadius: 10, margin: 10}}
        onChangeText={setPassword}
        value={password}
        placeholder="비밀번호를 입력해주세요"
      />
      <Button onPress={signIn} title="로그인" />
      {/* <Button title="회원가입" onPress={()=>navigation.navigate("Singup")} /> */}

      <GoogleSigninButton onPress={props.onGoogleButtonPress} />
    </View>
  );
}
