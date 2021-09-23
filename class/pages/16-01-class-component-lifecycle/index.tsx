import { Component, createRef } from "react";
import Router from "next/router";

interface IState {
  count: number;
}

export default class ClassComponentLifecyclePage extends Component {
  //옛날 class형
  // constructor(){
  //     this.state={
  //     }
  // }

  //최근 class형
  state = {
    count: 0,
  };

  //input 태그를 담아서 사용(타입스트립트라서 HTMLInputElement 씀)
  inputRef = createRef<HTMLInputElement>();

  //그려지고 난 이후
  //커서 깜빡깜빡
  componentDidMount = () => {
    console.log("컴포넌트 마운트 완료!!!");
    this.inputRef.current.focus();
  };

  //수정 될 때
  componentDidUpdate = () => {
    console.log("컴포넌트 수정 완료!!!");
  };

  //사라질때
  componentWillUnmount = () => {
    console.log("잘가요~~~");
  };

  onClickCount = () => {
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
  };

  onClickMove = () => {
    Router.push("/");
  };

  render() {
    return (
      <>
        현재 카운트: {this.state.count}
        <br />
        <button onClick={this.onClickCount}>카운트 증가!!!</button>
        <br />
        <button onClick={this.onClickMove}>페이지 이동하기</button>
        <br />
        {/* id대신 ref로 씀. id로 쓰면 동일한 이름이 주어질 수 있기때문에 */}
        <input type="text" ref={this.inputRef} />
      </>
    );
  }
}
