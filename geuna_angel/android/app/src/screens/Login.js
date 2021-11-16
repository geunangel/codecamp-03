import React, {useState} from 'react';
import {Text, View, Button, TextInput} from 'react-native';
import styled from '@emotion/native';

const UserBox = styled.View`
  display: flex;
  flex-direction: row;
`;
const UserImage = styled.Image``;

const UserInfoBox = styled.View`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;
const UserInfo = styled.View`
  display: flex;
  flex-direction: row;
`;
const ClassNumber = styled.Text``;
const UserName = styled.Text`
  margin-left: 6px;
  font-weight: bold;
  color: black;
`;
const Date = styled.Text``;
// const CommentText = styled.Text``;
const CommentContents = styled.Text`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 48px;
  font-weight: bold;
  color: black;
`;

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View>
      <UserBox>
        <UserImage
          source={require('../../../../public/images/defaultprofile2.png')}
        />
        <UserInfoBox>
          <UserInfo>
            <ClassNumber>3기</ClassNumber>
            <UserName>코캠러</UserName>
          </UserInfo>
          <Date>2021.11.03</Date>
        </UserInfoBox>
      </UserBox>
      {/* <CommentText>댓글</CommentText> */}
      <CommentContents>댓글댈긋댓글댈긋댓글댈긋댓글댈긋</CommentContents>
      <Button title="회원가입" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
};
export default Login;

{
  /* <Text>Login</Text>
      <TextInput
        style={{width: 300, borderWidth: 0.5, borderRadius: 10, margin: 10}}
        onChangeText={text => setEmail(text)}
        value={email}
        placeholder="이메일을 입력해주세요"
      />
      <TextInput
        style={{width: 300, borderWidth: 0.5, borderRadius: 10, margin: 10}}
        onChangeText={text => setPassword(text)}
        value={password}
        placeholder="비밀번호를 입력해주세요"
        secureTextEntry={true}
      /> */
}
