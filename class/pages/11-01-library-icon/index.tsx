import { QuestionCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const MyIcon = styled(QuestionCircleOutlined)`
  font-size: 450px;
  color: magenta;
`;

export default function LibraryIconPage() {
  return (
    <div>
      {/* 아이콘은 id를 쓰면 안됨 */}
      <MyIcon />

      {/* styled를 안쓰고 기본으로 불러올땐 부르기만 하면 됨 */}
      {/* <QuestionCircleOutlined /> */}
    </div>
  );
}
