import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import {FETCH_BOARD} from './BoardRead.queries'
import BoardReadPresenter from './BoardRead.presenter'

export default function BoardReadContainer(){
    const router = useRouter();
    //data로 응답
    const {data} = useQuery(FETCH_BOARD, {
        variables: {boardId: router.query.detail}
    });

    return(
        <BoardReadPresenter 
            data={data}
        />
    )
}