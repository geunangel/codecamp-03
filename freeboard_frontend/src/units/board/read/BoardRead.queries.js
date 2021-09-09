import { gql } from '@apollo/client'

export const FETCH_BOARD = gql`
    query fetchBoard($boardId:ID!) {
        fetchBoard(boardId:$boardId) {
            writer
            title
            contents
        }
    }
`

export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`

export const CREATE_BOARD_COMMENT = gql`
  mutation createBoardComment(
    $createBoardCommentInput:createBoardCommentInput!,
    $boardId:ID!){
      createBoardComment(
        createBoardCommentInput:$createBoardCommentInput,
        boardId:$boardId){
          _id
        }
    }
`