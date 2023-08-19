import React, { useState } from "react";
// Conponents
import MailMenuBar from "../components/mailList/mailMenuBar";
import MailCard from "../components/mailList/MailCard";
import Sidebar from "../components/sidebar/Sidebar";
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
      <Sidebar/>
    </div>
  );
};

export default Mail;
