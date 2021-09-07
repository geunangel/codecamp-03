import { gql, useQuery } from "@apollo/client"
import styled from "@emotion/styled"

const FETCH_PRODUCT = gql`
    query{
        fetchProducts{
            seller
            name
            detail
            price
            createdAt
        }
    }
`

const Wrapper = styled.div`
    width: 500px;
    height: 1200px;
`

const ContentsBox = styled.div`
    display: flex;
    flex-direction: row;
    border: solid 1px gray;
    text-align: center;
`

const ContentsCheck = styled.div`
    width: 20px;
    border-right: solid 1px gray;
`

const ContentsWriter = styled.div`
    width: 80px;
    border-right: solid 1px gray;
`

const ContentsName = styled.div`
    width: 80px;
    border-right: solid 1px gray;
`

const ContentsDetail = styled.div`
    width: 160px;
    border-right: solid 1px gray;
`

const ContentsPrice = styled.div`
    width: 80px;
    border-right: solid 1px gray;
`

const ContentsButton = styled.div`
    width: 100px;
`
export default function FetchProductsPage(){

    const {data} = useQuery(FETCH_PRODUCT)

    

    return(
        <Wrapper>
            {data?.fetchProducts.map((el) => (
                <ContentsBox>
                    <ContentsCheck>
                        <input type="checkbox" />
                    </ContentsCheck>
                    <ContentsWriter>{el.seller}</ContentsWriter>
                    <ContentsName>{el.name}</ContentsName>
                    <ContentsDetail>{el.detail}</ContentsDetail>
                    <ContentsPrice>{el.price}</ContentsPrice>
                    
                    <ContentsButton>
                        <button>삭제</button>
                    </ContentsButton>
                </ContentsBox>
            ))}
        </Wrapper>
    )
}