import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState<FormData>({
    member: {
      email: "",
      password: "",
      gender: "0",
      nickname: "Hojun",
      birthday: "2015-09-12",
      country: "Greece",

      // ... You can add other member fields like nickname, n
    },
    favor: {
      movie: false,
      language: false,
      book: false,
      coding: false,
      fantasy: false,
      sports: false,
      entertainment: false,
      music: false,
      fashion: false,
      art: false,
      travel: false,
    },
  });

  type FormData = {
    member: {
      email: string;
      password: string;
      gender: string;
      birthday: string;
      nickname: string;
      country: string;
      // ... other fields ...
    };
    favor: {
      movie: boolean;
      language: boolean;
      coding: boolean;
      music: boolean;
      book: boolean;
      fashion: boolean;
      sports: boolean;
      fantasy: boolean;
      art: boolean;
      travel: boolean;
      entertainment: boolean;
      // ... other fields ...
    };
  };
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    category: keyof typeof formData,
    field: string
  ) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [field]: value as any,
      },
    }));
    console.log(formData);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://myswagger-env.eba-tf5qrbch.ap-northeast-2.elasticbeanstalk.com/api/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      // Assuming server sends back JSON
      const data = await response.json();
      console.log(response);
      if (response.ok) {
        console.log(data.message);
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="w-screen h-screen flex justify center items-center">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="text-2xl">이메일</div>
          <div>
            <input
              type="email"
              value={formData.member.email}
              onChange={(e) => handleInputChange(e, "member", "email")}
            />
          </div>
          <div className="text-2xl">비밀번호</div>
          <div>
            <input
              type="password"
              value={formData.member.password}
              onChange={(e) => handleInputChange(e, "member", "password")}
            />
          </div>
          <div className="text-2xl">성별</div>

          <div className="text-2xl">나라</div>
          <div>
            <input
              type="password"
              value={formData.member.password}
              onChange={(e) => handleInputChange(e, "member", "password")}
            />
          </div>
          <div>
            <div className="text-2xl"> 관심사 </div>
            <div>
              <input
                type="checkbox"
                checked={formData.favor.movie}
                onChange={(e) => handleInputChange(e, "favor", "movie")}
              />
              영화 보기
            </div>
            <div>
              <input
                type="checkbox"
                checked={formData.favor.language}
                onChange={(e) => handleInputChange(e, "favor", "language")}
              />
              언어 교환
            </div>
            <div>
              <input
                type="checkbox"
                checked={formData.favor.book}
                onChange={(e) => handleInputChange(e, "favor", "book")}
              />
              책 읽기
            </div>
            <div>
              <input
                type="checkbox"
                checked={formData.favor.coding}
                onChange={(e) => handleInputChange(e, "favor", "coding")}
              />
              코딩 하기
            </div>
            <div>
              <input
                type="checkbox"
                checked={formData.favor.fantasy}
                onChange={(e) => handleInputChange(e, "favor", "fantasy")}
              />
              판타지
            </div>
            <div>
              <input
                type="checkbox"
                checked={formData.favor.sports}
                onChange={(e) => handleInputChange(e, "favor", "sports")}
              />
              스포츠
            </div>
            <div>
              <input
                type="checkbox"
                checked={formData.favor.entertainment}
                onChange={(e) => handleInputChange(e, "favor", "entertainment")}
              />
              엔터테인먼트
            </div>
            <div>
              <input
                type="checkbox"
                checked={formData.favor.music}
                onChange={(e) => handleInputChange(e, "favor", "music")}
              />
              음악 듣기
            </div>
            <div>
              <input
                type="checkbox"
                checked={formData.favor.fashion}
                onChange={(e) => handleInputChange(e, "favor", "fashion")}
              />
              패션
            </div>
            <div>
              <input
                type="checkbox"
                checked={formData.favor.art}
                onChange={(e) => handleInputChange(e, "favor", "art")}
              />
              예술
            </div>
            <div>
              <input
                type="checkbox"
                checked={formData.favor.travel}
                onChange={(e) => handleInputChange(e, "favor", "travel")}
              />
              여행
            </div>
            <div>
              <button type="submit" className="font-bold">
                회원 가입하기
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
