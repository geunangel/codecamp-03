import BoardWriteContainer from '../../../src/units/board/write/BoardWrite.container'

export default function BoardsNewPage(){

    
    //return 위쪽은 Javascript 쓰는 곳
    //return 아래는 HTML 쓰는 곳
    return(
        <BoardWriteContainer isEdit={false} />
    )
}