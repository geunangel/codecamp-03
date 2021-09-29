import LazyLoad from "react-lazyload";

export default function LazyLoadPreLoad() {
  return (
    <>
      <div>
        <div style={{ height: "1000px" }}></div>
        <LazyLoad height={500}>
          <img src={"/images/졸린뭉뭉.jpeg"} style={{ height: "1000px" }} />
        </LazyLoad>
        <LazyLoad height={200}>
          <img src={"/images/잠티뭉뭉.jpeg"} style={{ height: "1000px" }} />
        </LazyLoad>
        <LazyLoad height={200}>
          <img src={"/images/미소뭉뭉.jpeg"} style={{ height: "1000px" }} />
        </LazyLoad>
      </div>
    </>
  );
}
