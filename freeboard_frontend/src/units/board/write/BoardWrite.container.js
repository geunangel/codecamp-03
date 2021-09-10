import {useMutation} from '@apollo/client'
import {useState} from 'react'
import {useRouter} from 'next/router'
import BoardWritePresenter from './BoardWrite.presenter'
import {CREATE_BOARD, UPDATE_BOARD} from './BoardWrite.queries'

export default function BoardWriteContainer(props){
    const router = useRouter()

    const [ buttoncolor, setButtoncolor ] = useState()

    const [createBoard ] = useMutation(CREATE_BOARD)
    const [ updateBoard ] = useMutation(UPDATE_BOARD)

    const [ writer, setWriter ] = useState('')
    const [ pw, setPw ] = useState('')
    const [ title, setTitle ] = useState('')
    const [ contents, setContents ] = useState('')

    const [ writerError, setWriterError ] = useState('')
    const [ pwError, setPwError ] = useState('')
    const [ titleError, setTitleError ] = useState('')
    const [ contentsError, setContentsError ] = useState('')

    function onChangeWriter(event) {
        setWriter(event.target.value)
        if((event.target.value) !== "" && pw !== "" && title !== "" && contents !== ""){
            setWriterError("")
            setButtoncolor(true)
        }else{
            setButtoncolor(false)
        }
    }

    function onChangePw(event) {
        setPw(event.target.value)
        if(writer !== "" && (event.target.value) !== "" && title !== "" && contents !== ""){
            setWriterError("")
            setButtoncolor(true)
        }else{
            setButtoncolor(false)
        }
    }

    function onChangeTitle(event) {
        setTitle(event.target.value)
        if(writer !== "" && pw !== "" && (event.target.value) !== "" && contents !== ""){
            setWriterError("")
            setButtoncolor(true)
        }else{
            setButtoncolor(false)
        }
    }

    function onChangeContents(event) {
        setContents(event.target.value)
        if(writer !== "" && pw !== "" && title !== "" && (event.target.value) !== ""){
            setWriterError("")
            setButtoncolor(true)
        }else{
            setButtoncolor(false)
        }
    }

    async function onClickEdit(){
        try {
            const result = await updateBoard({
              variables: {
                boardId: router.query.detail,
                password: pw,
                updateBoardInput: {
                  title: title,
                  contents: contents
                }
              }
            })
            router.push(`/boards/${result.data.updateBoard._id}`)
          } catch(error){
            console.log(error)
          }
    }

    //클릭시 실행
    async function onClickSubmit() {
        if(writer === ("")) {
            setWriterError("이름을 작성해 주세요.")
        }

        if(pw === ("")) {
            setPwError("비밀번호를 작성해 주세요.")
        }

        if(title === ("")) {
            setTitleError("제목을 작성해 주세요.")
        }

        if(contents === ("")) {
            setContentsError("내용을 작성해 주세요.")
        }
        if(writer  !== "" && pw !== "" && title !== "" && contents){
            alert('등록완료')
        }
        //alert("버튼클릭확인")

        //등록
        const result = await createBoard({
            variables:{
                createBoardInput: {
                    writer: writer,
                    password: pw,
                    title: title,
                    contents: contents
                }
            }
        })
        console.log(result.data.createBoard._id)
        console.log(result)
        // 
        router.push(`/boards/${result.data.createBoard._id}`)
    }

    return(
        <BoardWritePresenter 
            onChangeWriter={onChangeWriter}
            onChangePw={onChangePw}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            onClickSubmit={onClickSubmit}
            onClickEdit={onClickEdit}
            writerError={writerError}
            pwError={pwError}
            titleError={titleError}
            contentsError={contentsError}
            buttoncolor={buttoncolor}
            isEdit={props.isEdit}
        />
    )
}