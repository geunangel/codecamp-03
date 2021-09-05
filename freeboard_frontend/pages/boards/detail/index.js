import { useRouter } from 'next/router'
import { useQuery, gql } from '@apollo/client'
import {
    Wrapper,Header,Footer,Head1,Head2,
    Title,Img,Contents,Youtube,
    Likedislike,Like,Likecount,Dislike,Dislikecount,Count,
    Box

} from '../../../styles/boardsDetail.styles'

const FETCH_BOARD = gql`
    query fetchBoard($boardId:ID!) {
        fetchBoard(boardId:$boardId) {
            writer
            title
            contents
            youtubeurl
        }
    }
`

export default function BoardsDetailPage(){

    const router = useRouter()

    const {data} = useQuery(FETCH_BOARD, {
        variables: {boardId: router.query.detail}
    })

    return(
        <Wrapper>
            <Header>
                <Head1>
                    <div>
                        <div>이미지</div>
                    </div>
                    <div>
                        <div>{data?.fetchBoard.writer}</div>
                        <div>2021.02.18</div>
                    </div>
                </Head1>
                <Head2>
                    <div>위치글자</div>
                    <div>아이콘</div>
                    <div>아이콘</div>
                </Head2>
            </Header>
            <Footer>
                <Title>{data?.fetchBoard.title}</Title>
                <Box>
                    <Img>사진</Img>
                    <Contents>{data?.fetchBoard.contents}</Contents>
                    <Youtube>{data?.fetchBoard.Youtube}</Youtube>
                    <Likedislike>
                        <Likecount>
                            <Like></Like>
                            <Count>1920</Count>
                        </Likecount>
                        <Dislikecount>
                            <Dislike></Dislike>
                            <Count>1920</Count>
                        </Dislikecount>
                    </Likedislike>
                </Box>
            </Footer>
        </Wrapper>
    )
}