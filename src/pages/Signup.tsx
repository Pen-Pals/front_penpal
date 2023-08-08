const Signup = () => {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold"> 회원가입 </h1>
        <div> 이메일 </div>
        <input type="email" />
        <div> 비밀번호 </div>
        <input type="password" />
        <div>
          <button>로그인하기</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;