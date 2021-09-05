import styled from '@emotion/styled'

export const Wrapper = styled.div`
    width: 640px;
    height: 1138px;
    /* background-color: gray; */
    background-image:url("/images/피자.png");
    display: flex;
    flex-direction: column;
`

export const Haeder = styled.div`
    width: 100%;
    height: 43px;
    display: flex;
    justify-content: flex-end;
    /* background-color: red; */
`

export const HaederIconBox = styled.div`
    width: 210px;
    height: 43px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
`

export const HaederIcon = styled.div`
    width: 59px;
    height: 28px;
`

export const MainBox = styled.div`
    width: 640px;
    height: 1095px;
    /* background-color: orange; */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 51px;
    padding-right: 49px;
    padding-top: 181px;
    padding-bottom: 83px;
`
export const LogoBox = styled.div`
    width: 218px;
    height: 189px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /* background-color: black; */
    margin-bottom: 162px;
    
`

export const LogoImg = styled.div`
    width: 100px;
    height: 100px;
    /* background-color: yellow; */

`

export const LogoText = styled.div`
    width: 218px;
    height: 62px;
    font-size: 60px;
    color: white;
    font-weight: bold;
`

export const EmailPwBox = styled.div`
    width: 540px;
    height: 183px;
    display: flex;
    flex-direction: column;
    /* background-color: violet; */
    justify-content: space-between;
`

export const TextBox = styled.div`
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* margin-bottom: 10px; */
    /* background-color: wheat; */

`

export const TextEmailBox = styled.div`
    height: 30px;
    display: flex;
    align-content: space-between;
    /* background-color: red; */
`

export const TextEmail = styled.input`
    background-color: transparent;
    width: 520px;
    height: 30px;
    border: none;
    font-size: 24px;
    font-weight: normal;
    color: white;
    /* background-color: black; */
`
export const TextIcon = styled.div`
    width: 20px;
    height: 20px;
    background-image:url("/images/엑스.svg");
    cursor: pointer;
`
export const TextLine = styled.div`
    border-bottom: 1px solid #ffffff;
    opacity: 0.2;
    margin-top: 10px;
`

export const EmailError = styled.div`
    background-color: transparent;
    width: 540px;
    height: 20px;
    border: none;
    color: #ff1b6d;
    margin-bottom: 3px;
    font-size: 18px;
`
export const TextPasswordBox = styled.div`
    display: flex;
    align-content: space-between;
    /* background-color: red; */
`

export const TextPassword = styled.input`
    background-color: transparent;
    width: 540px;
    height: 30px;
    border: none;
    font-size: 24px;
    font-weight: normal;
    color: white;
    /* background-color: black; */
`
export const PwError = styled.div`
    background-color: transparent;
    width: 520px;
    height: 20px;
    border: none;
    color: #ff1b6d;
    margin-bottom: 20px;
    font-size: 18px;
`

export const ButtonLogin = styled.button`
    margin-top: 30px;
    margin-bottom: 30px;
    width: 540px;
    height: 76px;
    opacity: 0.6;
    border-radius: 38px;
    background-color: #ff1b6d;
    font-size: 26px;
    color: white;
    font-weight: bold;
    cursor: pointer;
`

export const Footer = styled.div`
    width: 540px;
    height: 350px;
    display: flex;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: burlywood;
`

export const FindBox = styled.div`
    width: 402px;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: space-between;
`
export const FindEmail = styled.div`
    width: 90px;
    height: 20px;
    color: white;
    opacity: 0.6;
`
export const FindPw = styled.div`
    width: 90px;
    height: 20px;
    color: white;
    opacity: 0.6;
`

export const FindJoin = styled.div`
    width: 90px;
    height: 20px;
    color: white;
    opacity: 0.6;
`

export const FindAnd = styled.div`
    opacity: 0.2;
    /* padding-right: 30px; */
    /* background-color: darkblue; */
`

export const ButtonCacao = styled.button`
    width: 540px;
    height: 76px;
    border: solid 2px #fae100;
    text-align: center;
    /* display: flex;
    flex-direction: row;
    justify-items: center; */
    
    border-radius: 38px;
    opacity: 0.6;
    background-color: transparent;
    cursor: pointer;
    :hover {
        opacity: 1;
    }
`

export const CacaoImg = styled.img`
    width: 40px;
    height: 40px;
    background-color: violet;
`

export const Cacao = styled.div`   
    font-size: 26px;
    font-weight: bold;
    color: #fae100;
`
