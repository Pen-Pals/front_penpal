import React, { useState } from "react";
// Conponents
import MailMenuBar from "../components/mailList/mailMenuBar";
import MailCard from "../components/mailList/MailCard";
// API

const Mail = () => {
  return (
    <div>
      <div>
        <MailMenuBar />
        <div>
          <MailCard />
        </div>
      </div>
      <div>
        <MailMenuBar />
        <div>
          <MailCard />
        </div>
      </div>
    </div>
  );
};

export default Mail;
