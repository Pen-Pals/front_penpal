import Globesample from "./Globesample";

const Login = () => {
  return (
    <div className="w-screen h-screen flex justify center items-center">
      {/* 여기가 지구본 자리 */}
      <Globesample />

      <div className="w-1/2 h-2/3 flex-col justify-center items-center border-2 rounded-lg">
        <div className="h-1/3 flex items-center justify-center">
          <h1 className="text-6xl font-thin text-center"> MaeilMail </h1>
        </div>
        <div className="h-1/2 flex flex-col items-center justify-center">
          {/* 아이디 */}
          <div className="flex flex-row mb-5">
            <p className="font-thin text-3xl mr-10">아이디</p>
            <input
              className="border-2 rounded-xl text-center text-2xl font-thin"
              type="email"
              placeholder="id"
            />
          </div>

          <div className="flex flex-row mb-10">
            <p className="font-thin text-3xl mr-5">비밀번호</p>
            <input
              className="border-2 rounded-xl text-2xl font-thin text-center"
              type="password"
              placeholder="password"
            />
          </div>
          <div>
            <button className="border-2 rounded-lg text-2xl px-4 py-1 font-thin">
              로그인
            </button>
          </div>
        </div>
        <p className="text-center font-thin">회원가입하기 | ID,PW 찾기</p>
      </div>
    </div>
  );
};

export default Login;
