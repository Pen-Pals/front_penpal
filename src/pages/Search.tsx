/**
 *@file Search.tsx
 *@author @SeryeongK
 *@date 2023-08-08
 *@brief 친구를 탐색(위치, 닉네임, 관심사 검색 / 친구 추천)하는 페이지
 */

interface BoxProps {
  imageUrl: string;
}

const Box: React.FC<BoxProps> = ({ imageUrl }) => {
  const boxStyle: React.CSSProperties = {
    position: "relative",
    height: "9rem",
    width: "11.2rem",
    background: `#93C5FD radial-gradient(#fff 0px, #fff 7px, transparent 7px)`,
    backgroundSize: "20px 17.5px",
    backgroundPosition: "-10px",
  };

  const beforeStyle: React.CSSProperties = {
    content: "''",
    position: "absolute",
    backgroundSize: "cover",
    backgroundImage: `url(${imageUrl})`,
    inset: "20px",
    boxShadow: "0px 0px 0px 10px #93C5FD",
  };

  return (
    <div className="box" style={boxStyle}>
      <div style={beforeStyle}></div>
    </div>
  );
};

const Search = () => {
  return (
    <div className="p-7 w-screen h-screen">
      <div className="w-full h-full shadow-2xl">
        <div className="w-full h-44 bg-blue-300">{/* 검색창 */}</div>
        <div className="flex flex-row">
          <div className="w-2/3 h-full p-7">
            <p className="text-2xl">검색 결과</p>
            <div className="py-5">
              <div className="border-[0.1rem] w-[12rem] h-[15rem] pt-2">
                <div className="flex flex-col justify-center items-center bg-white">
                  <div>
                    <Box
                      imageUrl={
                        "https://images.pexels.com/photos/50577/hedgehog-animal-baby-cute-50577.jpeg?cs=srgb&dl=pexels-pixabay-50577.jpg&fm=jpg"
                      }
                    />
                  </div>
                  <div className="w-full p-2 flex flex-row justify-between items-center">
                    <p>닉네임</p>
                    <div>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/800px-Flag_of_South_Korea.svg.png"
                        className="w-8 h-8 rounded-full border-2 border-blue-500 object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full flex flex-row ">
                    <div className="px-3  mx-1 bg-blue-300 rounded-md text-sm">
                      <p>#영화</p>
                    </div>
                    <div className="px-3 mx-1 bg-blue-300 rounded-md text-sm">
                      <p>#음악</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 h-full p-7">
            <p className="text-2xl">친구 추천</p>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
