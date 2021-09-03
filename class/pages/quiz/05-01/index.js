import { useState } from "react"
import { useRouter } from "next/router"
import { gql, useMutation } from "@apollo/client"

const CREATE_PRODUCT = gql`
    mutation createProduct($seller:String,$createProductInput:CreateProductInput!){
        createProduct(seller:$seller,createBoardInput:$createBoardInput){
            _id
            number
        }
    }
`

export default function quizNewProduct(){
    const router = useRouter()

    const [createProduct] = useMutation(CREATE_PRODUCT)

    const [seller,setSeller] = useState('')
    const [name,setName] = useState('')
    const [detail,setDetail] = useState('')
    const [price,setPrice] = useState('')

    function onClickSubmit() {
        const result = createProduct({
            variables:{
                seller,
                
            }
        })
    }

    return(
        <div>
            <div>판매자:
                <input type="text" />
            </div>
            <div>상품명:
                <input type="text" />
            </div>
            <div>상품내용:
                <input type="text" />
            </div>
            <div>상품가격:
                <input type="text" />
            </div>
            <button onClick={onClickSubmit}>상품등록</button>
        </div>
    )
}