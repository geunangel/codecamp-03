export function fileValidation(file) {
  //파일검증
  if (!file) {
    alert("파일이 없습니다!");
    return false;
  }

  //사이즈는 보통 byte로 나옴
  //5MB 5*1024곱하면 됨
  if (file.size > 5 * 1024 * 1024) {
    alert("파일 용량이 너무 큽니다(제한: 5MB)");
    return false;
  }

  //jpeg,png일때만 넣고 싶을때
  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    alert("jpeg 또는 png만 업로드 가능합니다!");
    return false;
  }
  return true;
}
