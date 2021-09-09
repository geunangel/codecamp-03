export default function TypescriptPage(){

    //타입추론 처음 값이 string이면 다음값도 sring을 적어야함
    //문자타입 - 타입추론
    let aaa = "안녕하세요"
    
    aaa=3

    //숫자타입 - 타입추론
    let bbb = 3

    bbb="안녕하세요"

    //문자타입
    let ccc:string;

    ccc="반갑습니다"
    ccc=123

    //숫자타입
    let ddd: number = 5

    ddd = "333"

    //배열타입
    //타입스크립트의 또는 쓸땐 | 로 씀
    let eee: number[] = [1, 2, 3, 4, 5, 6]
    //배열은 배열인데 그안에 들어가는게 숫자 또는 문자열
    let fff: (number | string)[] = ["1", 2, 3, 4, 5, 6]
    //숫자배열 또는 문자열
    let ggg: (number[] | string[]) = [1, 2, 3, 4, 5, 6]

    //객체타입
    interface IProfile {
        school: string
        age: number
    }

    let profile: IProfile = {
        school: "다람쥐 초등학교",
        age: 13
    }

    profile.age = "ee" //타입을 강제화 시킴
    profile.age = 15



    return <div>타입스크립트 페이지 입니다.</div>
}