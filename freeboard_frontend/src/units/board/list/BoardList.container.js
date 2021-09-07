import { useQuery } from '@apollo/client'
import BoardListPresenter from './BoardList.presenter'
import { FETCH_BOARDS } from './BoardList.queries';

export default function BoardListContainer(){

    const {data} = useQuery(FETCH_BOARDS)

    return(
        <BoardListPresenter 
            data={data}
        />
    )
}