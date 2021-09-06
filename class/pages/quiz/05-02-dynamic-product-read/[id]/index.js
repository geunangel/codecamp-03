import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'

const FETCHBOARD = gql`
    query fetchProduct($productId: ID){
        fetchProduct(productId: $productId){
            _id
            seller
            name
            detail
            price
        }
    }
`

export default function ReadProduct(){

    const router = useRouter();

    console.log(router.query)
    const {data} = useQuery(FETCHBOARD,{
        variables: {productId : router.query.check_board}

    })
        console.log(data)

    return(
        <>
            <div>상품상세 페이지입니다.</div>
            <div>사용자ID: {router.query.check_board}</div>
            <div>판매자: {data ? data.fetchProduct.seller: "loading..."}</div>
            <div>상품명: {data ? data.fetchProduct.name: "loading..."}</div>
            <div>상품상세: {data ? data.fetchProduct.detail: "loading..."}</div>
            <div>상품가격: {data ? data.fetchProduct.price: "loading..."}</div>
        </>
    )
}