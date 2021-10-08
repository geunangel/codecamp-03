import { useRouter } from "next/router";
import MainUI from "./LayoutMain.presenter";

export default function LayoutMain() {
  const router = useRouter();

  return <MainUI />;
}
