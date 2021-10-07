import { useRouter } from "next/router";
import SidebarUI from "./LayoutSidebar.presenter";

export default function SidebarContainer() {
  const router = useRouter();

  function onClickBoardList() {
    router.push(`/boards`);
  }

  function onClickMypage() {
    router.push(`/mypage`);
  }
  return (
    <SidebarUI
      onClickBoardList={onClickBoardList}
      onClickMypage={onClickMypage}
    />
  );
}
