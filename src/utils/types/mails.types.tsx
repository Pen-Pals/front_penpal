interface Mail {
  nickname: string;
  sendId: number;
  receiveId: number;
  sendDate: string;
  content: string;
}

interface MailData {
  content: string;
  sendDate: string;
  receiveDate: string;
  deliveryTime: string;
}
