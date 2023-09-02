import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface MemberInfo {
  member: {
    email: string;
    password: string;
    nickname: string;
    gender: string;
    birthday: string;
    country: string;
  };
  favor: {
    [key: string]: boolean;
  };
}

const Signup: React.FC = () => {
  const initialMemberInfo: MemberInfo = {
    member: {
      email: "",
      password: "",
      nickname: "",
      gender: "Man",
      birthday: "2023-09-02",
      country: "string",
    },
    favor: {
      movie: true,
      language: true,
      book: true,
      coding: true,
      fantasy: true,
      sports: true,
      entertainment: true,
      music: true,
      fashion: true,
      art: true,
      travel: true,
    },
  };
  const navigate = useNavigate();
  const [memberInfo, setMemberInfo] = useState<MemberInfo>(initialMemberInfo);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLInputElement
    >
  ) => {
    const { name, value, type } = event.target;

    setMemberInfo((prevInfo) => {
      if (type === "checkbox") {
        return {
          ...prevInfo,
          favor: {
            ...prevInfo.favor,
            [name]: !prevInfo.favor[name],
          },
        };
      } else if (name in prevInfo.member) {
        return {
          ...prevInfo,
          member: {
            ...prevInfo.member,
            [name]: value,
          },
        };
      } else {
        return prevInfo;
      }
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log(memberInfo);
    try {
      const response = await axios.post(
        "http://myswagger-env.eba-tf5qrbch.ap-northeast-2.elasticbeanstalk.com/api/auth/signup",
        memberInfo
      );
      console.log("Signup successful!", response.data);
      navigate("/signin");
    } catch (error) {
      //에러 핸들링 필요
      console.error("Signup failed:", error);
    }
  };

  return (
    <div>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          <span>이메일 주소</span>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={memberInfo.member.email}
              onChange={handleChange}
            />
          </div>
        </label>

        <label htmlFor="password">
          <span>비밀번호</span>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              value={memberInfo.member.password}
              onChange={handleChange}
            />
          </div>
        </label>

        <label htmlFor="nickname">
          <span>닉네임</span>
          <div>
            <input
              type="text"
              id="nickname"
              name="nickname"
              value={memberInfo.member.nickname}
              onChange={handleChange}
            />
          </div>
        </label>

        <label htmlFor="gender">
          <span>성별</span>
          <div>
            <select
              id="gender"
              name="gender"
              value={memberInfo.member.gender}
              onChange={handleChange}
            >
              <option value="Man">남자</option>
              <option value="Woman">여자</option>
            </select>
          </div>
        </label>

        <label htmlFor="birthday">
          <span>생년월일</span>
          <div>
            <input
              type="date"
              id="birthday"
              name="birthday"
              value={memberInfo.member.birthday}
              onChange={handleChange}
            />
          </div>
        </label>

        <label htmlFor="country">
          <span>국가</span>
          <div>
            <input
              type="text"
              id="country"
              name="country"
              value={memberInfo.member.country}
              onChange={handleChange}
            />
          </div>
        </label>

        <fieldset>
          <legend>선호</legend>
          {Object.keys(memberInfo.favor).map((key) => (
            <label key={key}>
              <input
                type="checkbox"
                name={`${key}`}
                checked={memberInfo.favor[key]}
                onChange={handleChange}
              />
              {key}
            </label>
          ))}
        </fieldset>

        <button type="submit">가입하기</button>
      </form>
    </div>
  );
};

export default Signup;
