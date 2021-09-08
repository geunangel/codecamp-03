import { useRouter } from 'next/router'
import { useMutation, useQuery } from '@apollo/client'
import { FETCH_BOARD, DELETE_BOARD, UPDATE_BOARD } from './BoardRead.queries'
import BoardReadPresenter from './BoardRead.presenter'

export default function BoardReadContainer(){
    const router = useRouter();

    const [ deleteBoard ] = useMutation(DELETE_BOARD)
    //const [ updateBoard ] = useMutation(UPDATE_BOARD)

    //data로 응답
    const {data} = useQuery(FETCH_BOARD, {
        variables: {boardId: router.query.detail}
    })

    async function onClickDelete(){
        try {
          await deleteBoard({ variables: {boardId: router.query.detail} })
          alert("게시물이 삭제되었습니다.")
          router.push(`/boards/list`)
        } catch (error) {
          console.log(error)
        }
      }
    
    function onClickEdit(){
        router.push(`/boards/${router.query.detail}/edit`)
    }

    function onClickList(){
        router.push(`/boards/list`);
    }

    return(
        <BoardReadPresenter 
            data={data}
            onClickDelete={onClickDelete}
            onClickEdit={onClickEdit}
            onClickList={onClickList}
        />
    )
}