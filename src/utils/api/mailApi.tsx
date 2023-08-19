import axios from "axios";

// 특정 유저와의 편지 목록 보기
export const GetConversationMailMail = async (userId: number) => {
  return await axios.get(`/api/letters/${userId}`);
};

/** 특정 유저에게 편지 쓰기
 * @param userId
 * @reeturns {Promise<AxiosResponse<any>>}
 */
export const SendMail = async (userId: number, mailContent: string) => {
  return await axios.post(`/api/letters/${userId}`, {
    content: mailContent,
  });
};

/** 편지 전체 삭제
 * @param userId
 * @returns {Promise<AxiosResponse<any>>}
 */
export const DeleteAllMail = async (userId: number) => {
  return await axios.delete(`/api/letters/${userId}`);
};

/** 편지 읽음 처리
 * @param mailId
 * @returns {Promise<AxiosResponse<any>>}
 */
export const MarkMailAsRead = async (mailId: number) => {
  return await axios.patch(`/api/letters/${mailId}`);
};

/** 대화한 사람 목록 조회
 * @param userId
 * @returns {Promise<AxiosResponse<any>>}
 */
export const GetContactList = async () => {
  return await axios.get(`/api/letters`);
};

/** 특정 유저와의 특정 편지 조회
 * @param userId
 * @returns {Promise<AxiosResponse<any>>}
 */
export const GetSpecificLetterWithUser = async (
  userId: number,
  mailId: number
) => {
  return await axios.get(`/api/letters/${userId}/${mailId}`);
};

/** 최근 도착한 편지 조회
 * @param userId
 * @returns {Promise<AxiosResponse<any>>}
 */
export const GetRecentMailList = async () => {
  return await axios.get(`/api/letters/my/recent`);
};

/** 오고 있는 편지 조회
 * @param userId
 * @returns {Promise<AxiosResponse<any>>}
 */
export const GetIncomingMailList = async () => {
  return await axios.get(`/api/letters/my/recent`);
};
