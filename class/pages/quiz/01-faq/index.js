import styled from '@emotion/styled'

    const Wrapper = styled.div`
        width: 640px;
        height: 1138px;
        border: solid 1px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 50px;
    `
    const Head = styled.div`
        width: 640px;
        height: 40px;
        display: flex;
        justify-content: flex-end;
        background-color: gray;
        
    `

    const HeadIcon = styled.div`
    
    `

    const Search = styled.div`
        width: 640px;
        height: 32px;
        display: flex;
        justify-content: flex-end;
    `
    const SearchIcon = styled.img`
        width: 32px;
        height: 32px;
    `

    const Header = styled.div`
        width: 640px;
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 50px 0 50px;
    `
    const Title = styled.div`
        width: 640px;
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: solid 1px;
        padding: 0 50px 0 50px;
    `

    const TitleText = styled.div`
        font-size: 30px;
        color: #cacaca;
    `

    const HeaderLeft = styled.div`
        display: flex;
    `

    const HeaderRight = styled.div`
        display: flex;
    `

    const Body = styled.div`
        width: 640px;
    `

    const Footer = styled.div`
        width: 640px;
        margin-top: 50px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        font-size: 16px;
        border-top: solid 1px;
        padding: 0 50px 0 50px;
    `

    const My = styled.div`
        width: 71px;
        height: 43px;
        font-size: 40px;
        color: #1f1f1f;
    `

    const Image = styled.img`
        width: 60px;
        height: 60px;
    `
    const Name = styled.div`
        width: 60px;
        height: 60px;
    `

    const TextBox = styled.div`
        width: 640px;
        display: flex;
        flex-direction: column;
        padding: 50px 50px 0 50px;
    `

    const NumberText = styled.div`
        width: 112px;
        height: 32px;
        font-size: 18px;
        color: #cacaca;
    `

    const MemoBox = styled.div`
        display: flex;
        justify-content: space-between;

    `

    const MemoText = styled.div`
        width: 300px;
        height: 26px;
        font-size: 24px;
        color: #444;
    `

    const MemoClick = styled.div`
        width: 60px;
        height: 60px;

    `

    const IconBox = styled.div`
        display: flex;
        flex-direction: column;
    `

    const Icon = styled.div`
        width: 60px;
        height: 60px;
    `

    const IconText = styled.div`
        width: 60px;
        height: 20px;
    `

export default function EmotionPage(){

    //return ????????? Javascript ?????? ???
    //return ????????? HTML ?????? ???
    return(
        <Wrapper>
            <Head>
                <HeadIcon>??????</HeadIcon>
                <HeadIcon>??????</HeadIcon>
                <HeadIcon>?????????</HeadIcon>
                <diHeadIconv>??????</diHeadIconv>
            </Head>
            <Search>
                <SearchIcon src="/images/??????.svg"></SearchIcon>
            </Search>
            <Header>
                <HeaderLeft><My>??????</My></HeaderLeft>
                <HeaderRight>
                    <Image src="/images/??????.png"></Image>
                    <Name>??????</Name>
                    <img src="/images/????????????.svg"></img>
                </HeaderRight>
            </Header>

            <Title>
                <TitleText>????????????</TitleText>
                <TitleText>?????????</TitleText>
                <TitleText>FAQ</TitleText>
                <TitleText>Q&A</TitleText>
            </Title>
            
            <Body>
            <TextBox>
                <NumberText>Q.01</NumberText>
                <MemoBox>
                    <MemoText>?????? ????????? ????????? ??????????</MemoText>
                    <MemoClick><img src="/images/?????????.svg" /></MemoClick>
                </MemoBox>
            </TextBox>
            <TextBox>
                <NumberText>Q.02</NumberText>
                <MemoBox>
                    <MemoText>?????? ????????? ????????? ??????????</MemoText>
                    <MemoClick><img src="/images/?????????.svg" /></MemoClick>
                </MemoBox>
            </TextBox>
            <TextBox>
                <NumberText>Q.03</NumberText>
                <MemoBox>
                    <MemoText>?????? ????????? ????????? ??????????</MemoText>
                    <MemoClick><img src="/images/?????????.svg" /></MemoClick>
                </MemoBox>
            </TextBox>
            <TextBox>
                <NumberText>Q.04</NumberText>
                <MemoBox>
                    <MemoText>?????? ????????? ????????? ??????????</MemoText>
                    <MemoClick><img src="/images/?????????.svg" /></MemoClick>
                </MemoBox>
            </TextBox>
            <TextBox>
                <NumberText>Q.05</NumberText>
                <MemoBox>
                    <MemoText>?????? ????????? ????????? ??????????</MemoText>
                    <MemoClick><img src="/images/?????????.svg" /></MemoClick>
                </MemoBox>
            </TextBox>
            <TextBox>
                <NumberText>Q.06</NumberText>
                <MemoBox>
                    <MemoText>?????? ????????? ????????? ??????????</MemoText>
                    <MemoClick><img src="/images/?????????.svg" /></MemoClick>
                </MemoBox>
            </TextBox>
            </Body>
            <Footer>
                <IconBox>
                    <Icon><img src="/images/???.svg"></img></Icon>
                    <IconText>???</IconText>
                </IconBox>
                <diIconBoxv>
                    <Icon><img src="/images/????????????.svg"></img></Icon>
                    <IconText>????????????</IconText>
                </diIconBoxv>
                <IconBox>
                    <Icon><img src="/images/?????????.svg"></img></Icon>
                    <IconText>?????????</IconText>
                </IconBox>
                <IconBox>
                    <Icon><img src="/images/??????.svg"></img></Icon>
                    <IconText>??????</IconText>
                </IconBox>
            </Footer>
        </Wrapper>
    )
}