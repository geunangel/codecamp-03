import styled from "@emotion/styled";
// import dynamic from "next/dynamic";
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Wrapper = styled.div`
  width: 1200px;
  /* height: 2009px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 100px rgba(0, 0, 0, 0.1);
  background: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 50px,
      rgba(255, 127, 0, 0.25) 50px,
      rgba(255, 127, 0, 0.25) 56px,
      transparent 56px,
      transparent 63px,
      rgba(255, 127, 0, 0.25) 63px,
      rgba(255, 127, 0, 0.25) 69px,
      transparent 69px,
      transparent 116px,
      rgba(255, 206, 0, 0.25) 116px,
      rgba(255, 206, 0, 0.25) 166px
    ),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 50px,
      rgba(255, 127, 0, 0.25) 50px,
      rgba(255, 127, 0, 0.25) 56px,
      transparent 56px,
      transparent 63px,
      rgba(255, 127, 0, 0.25) 63px,
      rgba(255, 127, 0, 0.25) 69px,
      transparent 69px,
      transparent 116px,
      rgba(255, 206, 0, 0.25) 116px,
      rgba(255, 206, 0, 0.25) 166px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 5px,
      rgba(143, 77, 63, 0.25) 5px,
      rgba(143, 77, 63, 0.25) 10px
    ),
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 5px,
      rgba(143, 77, 63, 0.25) 5px,
      rgba(143, 77, 63, 0.25) 10px
    );
  background: repeating-linear-gradient(
      90deg,
      transparent 0 50px,
      rgba(255, 127, 0, 0.25) 50px 56px,
      transparent 56px 63px,
      rgba(255, 127, 0, 0.25) 63px 69px,
      transparent 69px 116px,
      rgba(255, 206, 0, 0.25) 116px 166px
    ),
    repeating-linear-gradient(
      0deg,
      transparent 0 50px,
      rgba(255, 127, 0, 0.25) 50px 56px,
      transparent 56px 63px,
      rgba(255, 127, 0, 0.25) 63px 69px,
      transparent 69px 116px,
      rgba(255, 206, 0, 0.25) 116px 166px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent 0 5px,
      rgba(143, 77, 63, 0.25) 5px 10px
    ),
    repeating-linear-gradient(
      45deg,
      transparent 0 5px,
      rgba(143, 77, 63, 0.25) 5px 10px
    );
`;
export const MainTitle = styled.div`
  width: 207px;
  height: 53px;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 53px;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 100px;
`;
export const ProductBox = styled.div``;

export const Product = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 10px;
`;

export const ProductContents = styled.input`
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  width: 996px;
  height: 52px;
  border-radius: 30px;
  padding-left: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`;

export const ProductContentsBox = styled.div``;

export const ButtonProduct = styled.button`
  width: 179px;
  height: 52px;
  background: #bdbdbd;
  border-radius: 20px;
  border: none;
`;

export const AddressBox = styled.div`
  width: 996px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const AddressImgBox = styled.div``;

export const AddressImg = styled.div`
  width: 384px;
  height: 252px;
  background: #bdbdbd;
`;

export const AddressInput1 = styled.input`
  width: 588px;
  height: 52px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 30px;
  padding-left: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`;

export const AddressInput2 = styled.input`
  width: 588px;
  height: 52px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 30px;
  padding-left: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
`;

export const AddressInputBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddressGPSInputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const AddressGPS = styled.input`
  text-align: center;
  width: 128px;
  height: 52px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 30px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`;

// export const ReactQuillBox = styled(ReactQuill)`
//   width: 996px;
//   height: 320px;
//   margin-top: 10px;
//   margin-bottom: 40px;
// `;
