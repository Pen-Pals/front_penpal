import React from "react";
// API
import { GetRecentMailList } from "../utils/api/mailApi";
import { GetIncomingMailList } from "../utils/api/mailApi";

const useMailData = () => {
  const [recentMail, setRecentMail] = useState();
  const [incomingMail, setIncomingMail] = useState();
};

export default useMailData;
