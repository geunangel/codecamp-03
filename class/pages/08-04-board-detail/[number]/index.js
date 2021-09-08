import { useQuery, gql } from "@apollo/client"
import { useRouter } from "next/router"

const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number: $number){
            writer
            title
            contents
        }
    }
`

export default function BoardDetailPage(){
    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: { number: Number(router.query.number) }
    })

    function onClickMoveToEdit(){
        router.push(`/08-04-board-detail/${router.query.number}/edit`)
    }

    return(
        <>
            <div>게시물 상세 페이지 입니다.</div>
            <div>게시물 번호: {router.query.number}</div>
            <div>게시물 작성자: {data?.fetchBoard.writer}</div>
            <div>게시물 제목: {data?.fetchBoard.title}</div>
            <div>게시물 내용: {data?.fetchBoard.contents}</div>
            {/* <div>게시물 작성자: {data ? data.fatchBoard.writer : "loding..."}</div>
            <div>게시물 제목: {data ? data.fatchBoard.title : "loding..."}</div>
            <div>게시물 내용: {data ? data.fatchBoard.contents : "loding..."}</div> */}
            
            {/* *************************************************** */}
            <button onClick={onClickMoveToEdit} >수정하러 이동하기</button>
            {/* *************************************************** */}
        </>
    )
}