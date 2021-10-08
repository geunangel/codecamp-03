import { useRouter } from "next/router";
import SidebarUI from "./LayoutSidebar.presenter";

export default function SidebarContainer() {
  const router = useRouter();

  function onClickMarket() {
    router.push(`/market`);
  }
  return <SidebarUI onClickMarket={onClickMarket} />;
}
