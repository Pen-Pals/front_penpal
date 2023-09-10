import React, { useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import axios from "axios";

const WriterBox: React.FC = () => {
  const [value, setValue] = useState<string>("**Hello world!!!**");
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const handleChange = (newValue: string | undefined) => {
    if (typeof newValue === "string") {
      setValue(newValue);
    }
  };
  useEffect(() => {
    // Check if the access token is stored in localStorage when the component mounts.
    const storedAccessToken = localStorage.getItem("accessToken");
    console.log(storedAccessToken);

    if (storedAccessToken) {
      setAccessToken(storedAccessToken);
    }
  }, []);

  const sendEmail = async () => {
    try {
      const userId = "7";
      const url = `http://myswagger-env.eba-tf5qrbch.ap-northeast-2.elasticbeanstalk.com/api/letters/${userId}`;
      console.log("accestoken: ", accessToken);
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
      axios.defaults.withCredentials = true;
      const response = await axios.post(
        url,
        {
          content: value,
        },
        { headers }
      );

      // Log the response to the console
      console.log("Email sent successfully!");
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="writerbox">
      <MDEditor value={value} onChange={handleChange} height={400} />
      <button
        onClick={sendEmail}
        className="border-solid border-2 border-s-violet-600m mt-3"
      >
        이메일 보내기
      </button>
    </div>
  );
};

export default WriterBox;
