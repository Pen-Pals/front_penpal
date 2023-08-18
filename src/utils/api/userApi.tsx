import axios from "axios";

export const EditMemberInfo = async (userEditInfo: UserInfo) => {
  return await axios.put("/api/auth/edit", {
    content: userEditInfo,
  });
};

export const GetMemberInfo = async (userId: number) => {
  return await axios.put(`/api/auth/info/${userId}`);
};
