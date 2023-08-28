import Globesample from "./Globesample";
import React, { useState } from "react";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(credentials);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://myswagger-env.eba-tf5qrbch.ap-northeast-2.elasticbeanstalk.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to login");
      }

      const data = await response.json();
      console.log(data);
      // Here you can handle the response from the server, like saving the token, redirecting the user, etc.
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-screen h-screen flex justify center items-center">
      {/* 여기가 지구본 자리 */}
      <Globesample />

      <div className="w-1/2 h-2/3 flex-col justify-center items-center border-2 rounded-lg">
        <div className="h-1/3 flex items-center justify-center">
          <h1 className="text-6xl font-thin text-center"> MaeilMail </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-1/2 h-2/3 flex-col justify-center items-center border-2 rounded-lg"
        >
          <div className="h-1/2 flex flex-col items-center justify-center">
            {/* 아이디 */}

            <div className="flex flex-row mb-5">
              <p className="font-thin text-3xl mr-10">아이디</p>
              <input
                className="border-2 rounded-xl text-center text-2xl font-thin"
                type="email"
                name="email"
                placeholder="id"
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-row mb-10">
              <p className="font-thin text-3xl mr-5">비밀번호</p>
              <input
                className="border-2 rounded-xl text-2xl font-thin text-center"
                type="password"
                name="password"
                placeholder="password"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <button
                className="border-2 rounded-lg text-2xl px-4 py-1 font-thin"
                type="submit"
              >
                로그인
              </button>
            </div>
          </div>
        </form>
        <p className="text-center font-thin">회원가입하기 | ID,PW 찾기</p>
      </div>
    </div>
  );
};

export default Login;
