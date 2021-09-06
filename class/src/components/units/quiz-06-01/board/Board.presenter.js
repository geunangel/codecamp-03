export default function BoardUI(props){

    return(
        //부모
        <>
            {/* 자식 */}
            작성자: <input type="text" onChange={props.onChangeMyWriter}/><br/>
            제목: <input type="text" onChange={props.onChangeMyTitle}/><br/>
            내용: <input type="text" onChange={props.onChangeMyContents}/><br/>
            <button onClick={props.aaa}>GRAPHQL-API 요청하기!!!</button>
        </>
    )
}