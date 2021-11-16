import React, {useState} from 'react';
import {Alert, Button, View} from 'react-native';
import styled from '@emotion/native';
import {gql, useMutation} from '@apollo/client';

const CREATE_USED_ITEM_QUESTION = gql`
  mutation createUseditemQuestion(
    $createUseditemQuestionInput: CreateUseditemQuestionInput!
    $useditemId: ID!
  ) {
    createUseditemQuestion(
      createUseditemQuestionInput: $createUseditemQuestionInput
      useditemId: $useditemId
    ) {
      _id
    }
  }
`;

// const UPDATE_USED_ITEM_QUESTION = gql`
//   mutation updateUseditemQuestion(
//     $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
//     $useditemQuestionId: ID!
//   ) {
//     updateUseditemQuestion(
//       updateUseditemQuestionInput: $updateUseditemQuestionInput
//       useditemQuestionId: $useditemQuestionId
//     ) {
//       _id
//       contents
//     }
//   }
// `;

// const FETCH_USED_ITEM_QUESTIONS = gql`
//   query fetchUseditemQuestions($useditemId: ID!) {
//     fetchUseditemQuestions(useditemId: $useditemId) {
//       user {
//         name
//       }
//       contents
//     }
//   }
// `;

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
const CommentContents = styled.TextInput`
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid;
`;
const Submit = styled.TouchableOpacity`
  background-color: #ffd600;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Signup = () => {
  const [contents, setContents] = useState('');
  const [images, setImage] = useState([]);

  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);

  const onCommtentSubmit = async () => {
    const result = await createUseditemQuestion({
      variables: {
        createUseditemQuestionInput: {
          contents,
        },
        useditemId: {},
      },
    });
    Alert.alert('등록되었습니다.');
    console.log(result.data?.createUseditemQuestion);
  };

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
      <CommentContents
        onChangeText={setContents}
        placeholder="댓글을 입력하세요"
      />
      <Submit onPress={onCommtentSubmit}>등록하기</Submit>
    </View>
  );
};
export default Signup;
