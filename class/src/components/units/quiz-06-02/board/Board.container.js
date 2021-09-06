import { useRouter } from 'next/router'
import BoardUI from './Board.presenter'
import {FETCH_BOARD} from './Board.queries'
import { useQuery } from '@apollo/client'

export default function DynamicBoard(){
    
    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: { number: Number(router.query.number) }
    })

    return(
        <BoardUI 
            data={data}
            router={router}
        />
    )
}