import axios from "axios"
export default function RestAPIPageQuiz(){
    async function onClickRestApi() {

        const result = await axios.get("https://koreanjson.com/users")
        console.log(result)
    }

    return(
            <button onClick={onClickRestApi}>REST-API 요청하기</button>
    )
}
