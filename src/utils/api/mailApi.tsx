import axios from "axios";

export const GetConversationMailMail = async (userId: number) => {
  return await axios.get(`/api/letters/${userId}`);
};

export const SendMail = async (userId: number, mailContent: string) => {
  return await axios.post(`/api/letters/${userId}`, {
    content: mailContent,
  });
};

export const DeleteAllMail = async (userId: number) => {
  return await axios.delete(`/api/letters/${userId}`);
};

export const MarkMailAsRead = async (mailId: number) => {
  return await axios.patch(`/api/letters/${mailId}`);
};

export const GetContactList = async () => {
  return await axios.get(`/api/letters`);
};

export const GetSpecificLetterWithUser = async (
  userId: number,
  mailId: number
) => {
  return await axios.get(`/api/letters/${userId}/${mailId}`);
};

export const GetRecentMailList = async () => {
  return await axios.get(`/api/letters/my/recent`);
};

export const GetIncomingMailList = async () => {
  return await axios.get(`/api/letters/my/recent`);
};
