import {} from "./MarketWrite.styles";

export default function MarketUI() {
  return (
    <div>
      <div>상품등록하기</div>
      <div>
        <div>상품명</div>
        <input type="text" placeholder="상품명을 작성해주세요." />
      </div>
      <div>
        <div>한줄요약</div>
        <input type="text" placeholder="상품명을 작성해주세요." />
      </div>
      <div>
        <textarea placeholder="상품을 설명해주세요.." />
      </div>
      <div>
        <div>판매가격</div>
        <input type="text" placeholder="판매가격을 입력해주세요." />
      </div>
      <div>
        <div>태그입력</div>
        <input type="text" placeholder="#태그 #태그 #태그" />
      </div>
      <div>
        <div>거래위치</div>
        <img />
      </div>
      <div>
        <div>
          <div>GPS</div>
          <input placeholder="위도(LAT)" />
          <img />
          <input placeholder="경도(LNG)" />
        </div>
        <div>
          <div>주소</div>
          <input />
          <input />
        </div>
      </div>
      <div>
        <div>사진 첨부</div>
        <img />
        <img />
      </div>
      <div>
        <div>메일 사진 설정</div>
        <input type="radio" />
        사진 1
        <input type="radio" />
        사진 2
      </div>
      <button>등록하기</button>
    </div>
  );
}
