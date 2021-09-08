import { MyButton, Title } from "./BoardWrite.styles"

export default function BoardwriteUI(props){

    return (
        <>
            <h1>{props.isedit ? "수정페이지" : "등록페이지"}</h1>
            <Title zzz={props.zzz} >컨테이너 프리젠터 패턴!!!</Title>
            작성자: <input type="text" onChange={props.onChangeMyWriter} /><br />
            제목: <input type="text" onChange={props.onChangeMyTitle} /><br />
            내용: <input type="text" onChange={props.onChangeMyContents} /><br />
            {/* true면 해 */}
            {/* <MyButton onClick={props.aaa} qqq={true}>GRAPHQL-API 요청하기!!!</MyButton> */}
             {!props.isEdit && <MyButton onClick={props.aaa} qqq={props.qqq}>등록하기</MyButton>}
             {props.isEdit && <MyButton onClick={props.onClickEdit} qqq={props.qqq}>수정하기</MyButton>}
        </>
    )
}