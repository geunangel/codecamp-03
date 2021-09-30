import { Modal } from "antd";

export function CheckValidationImage(file) {
  // 검증
  // if (!imgFile) {
  //   alert("파일이 없습니다.");
  //   return;
  // }
  // if (imgFile.size > 10 * 1024 * 1024) {
  //   alert("파일 용량이 너무 큽니다.");
  //   return;
  // }
  // if (!imgFile.type.includes("jpeg") && !imgFile.type.includes("png")) {
  //   alert("jpeg나 png만 업로드 가능합니다.");
  //   return;
  // }

  if (!file) {
    Modal.error({ content: "파일이 없습니다." });
    return false;
  }
  if (file.size > 5 * 1024 * 1024) {
    Modal.error({ content: "파일이 너무 큽니다.(제한: 5MB)" });
    return false;
  }
  if (!file.type.includes("png") && !file.type.includes("jpeg")) {
    Modal.error({
      content: "파일 확장자가 올바르지 않습니다.(png, jpeg만 가능)",
    });
    return false;
  }
  return file;
}