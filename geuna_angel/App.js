/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {Button} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const App: () => Node = () => {
  function writeData() {
    firestore()
      .collection('Users')
      .add({name: '근아', age: 10, school: '토끼초등학교'});

    // firestore().collection('Board').add({
    //   title: '안녕하세요',
    //   contents: '내용입니다',
    //   userId: 'document에 있는 아이디=users에 있는 아이디를 넣어주면 됨',
    // });
  }

  function aaa() {
    const id = 'JbTyGw2Wow0ZpEBlWCu5';
    firestore().collection('Community').add({
      title: '안녕하세요',
      contents: '내용입니다',
      userId: id,
    });
  }

  return (
    <>
      <Button onPress={writeData} title="회원가입" />
      <Button onPress={aaa} title="커뮤니티 생성하기" />
    </>
  );
};

export default App;
