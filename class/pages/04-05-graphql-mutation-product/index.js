import { useMutation, gql } from '@apollo/client'
import { useState } from 'react'

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
        createProduct(
        seller:$seller, 
        createProductInput: $createProductInput
        ){
            _id
            number
            message
        }
    }
  `

export default function GraphqlMutationProductPage(){
    //준비
    const [ createProduct ] = useMutation(CREATE_PRODUCT)
    const [myseller,setMyseller] = useState("")
    const [myname,setMyname] = useState("")
    const [mydetail,setMydetail] = useState("")
    const [myprice,setMyprice] = useState("")

    function onChangeMyseller(event){
        setMyseller(event.target.value)
    }
    function onChangeMyname(event){
        setMyname(event.target.value)
    }
    function onChangeMydetail(event){
        setMydetail(event.target.value)
    }
    function onChangeMyprice(event){
        setMyprice(event.target.value)
    }

    async function onClickSubmit(){
        //응답
        //await createProduct()
        
        //변수에 저장
        const result =await createProduct({
            variables: {
                seller: myseller,
                createProductInput: {
                    name: myname,
                    detail: mydetail,
                    //넘버로 변환해야 됨
                    price: Number(myprice)
                }
            }
        })
        console.log(result.data.createProduct._id)

    }

    return (
        <>
        판매자: <input type="text" onChange={onChangeMyseller} />
        상품명: <input type="text" onChange={onChangeMyname} />
        상품상세: <input type="text" onChange={onChangeMydetail} />
        상품가격: <input type="text" onChange={onChangeMyprice} />
        <button onClick={onClickSubmit}>상품 등록하기!!!</button>
        </>
    )
}