import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://myswagger-env.eba-tf5qrbch.ap-northeast-2.elasticbeanstalk.com/api/auth/login",
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        // Assuming your server returns the access token in the response data
        console.log(response);
        const { accessToken } = response.data;

        // Store the access token in local storage
        localStorage.setItem("accessToken", accessToken);

        // Redirect to the desired route (e.g., the home page)
        navigate("/");
      } else {
        // Handle error scenarios here
        // You can display an error message or take other actions as needed
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <h1>로그인</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">이메일 주소</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Signin;
