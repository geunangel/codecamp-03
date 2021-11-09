import React, {useState} from 'react';
import type {Node} from 'react';
import {Button, TextInput} from 'react-native';
import firestore from '@react-native-firebase/firestore';

function SignUp() {
  // function writeData() {
  //   firestore()
  //     .collection('Users')
  //     .add({name: '상혁', age: 10, school: '상어초등학교'});

  //   // firestore().collection('Board').add({
  //   //   title: '안녕하세요',
  //   //   contents: '내용입니다',
  //   //   userId: 'document에 있는 아이디=users에 있는 아이디를 넣어주면 됨',
  //   // });
  // }

  // function aaa() {
  //   const id = 'JbTyGw2Wow0ZpEBlWCu5';
  //   firestore().collection('Community').add({
  //     title: '안녕하세요',
  //     contents: '내용입니다',
  //     userId: id,
  //   });
  // }

  function signUp() {
    firestore().collection('Users').add({
      classnumber: classNumber,
      name: name,
      nickname: nickName,
      email: email,
      password: password,
    });
  }

  const [classNumber, setClassNumber] = useState('');
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [text, setText] = useState('');

  return (
    <>
      <TextInput
        style={{borderWidth: 0.5, borderRadius: 10, margin: 10}}
        onChangeText={setClassNumber}
        value={classNumber}
        placeholder="기수를 입력해주세요"
      />
      <TextInput
        style={{borderWidth: 0.5, borderRadius: 10, margin: 10}}
        onChangeText={setName}
        value={name}
        placeholder="이름을 입력해주세요"
      />
      <TextInput
        style={{borderWidth: 0.5, borderRadius: 10, margin: 10}}
        onChangeText={setNickName}
        value={nickName}
        placeholder="닉네임을 입력해주세요"
      />
      <TextInput
        style={{borderWidth: 0.5, borderRadius: 10, margin: 10}}
        onChangeText={setEmail}
        value={email}
        placeholder="이메일을 입력해주세요"
      />
      <TextInput
        style={{borderWidth: 0.5, borderRadius: 10, margin: 10}}
        onChangeText={setPassword}
        value={password}
        placeholder="비밀번호를 입력해주세요"
      />
      <TextInput
        style={{borderWidth: 0.5, borderRadius: 10, margin: 10}}
        onChangeText={setText}
        value={text}
        placeholder="비밀번호 확인"
      />
      <Button onPress={signUp} title="회원가입" />
      {/* <Button onPress={aaa} title="커뮤니티 생성하기" /> */}
    </>
  );
}

export default SignUp;
