import { withAuth } from "../../src/components/commons/hocs/withAuth";
// import { useContext,useEffect } from "react";
// import { GlobalContext } from "../_app";
// import { useRouter } from "next/router";

// const withAuth = (Component)=>(props)=>{
//     const router = useRouter();
//     const { accessToken } = useContext(GlobalContext);

//     //accessToken이 있는가!?
//     //accessToken이 없다면, login 페이지로 보내기!!!
//     useEffect(() => {
//       if (!accessToken) {
//         alert("로그인 한 사람만 입장 가능합니다.");
//         //서버에서는 사용 안됨. useEffect를 해줘야 사용 가능 함.
//         router.push("/23-01-login");
//       }
//     }, []);

//     return <Component {...props} />
// }

const HocPage = () => {
  //   const router = useRouter();
  //   const { accessToken } = useContext(GlobalContext);

  //   //accessToken이 있는가!?
  //   //accessToken이 없다면, login 페이지로 보내기!!!
  //   useEffect(() => {
  //     if (!accessToken) {
  //       alert("로그인 한 사람만 입장 가능합니다.");
  //       //서버에서는 router.push 바로 사용 안됨. useEffect를 해줘야 사용 가능 함.
  //       router.push("/23-01-login");
  //     }
  //   }, []);

  return (
    <>
      <div>HOC 연습 페이지 입니다.</div>
    </>
  );
};
export default withAuth(HocPage);
