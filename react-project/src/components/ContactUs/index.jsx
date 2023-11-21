import React, { useEffect, useState } from "react";

function ContactUs() {
  const [openContacts, setOpenContacts] = React.useState(false);

  return (
    <div className="header__contactus">
      <a href="##">Contact us</a>
      {!openContacts ? (
        <svg
          onClick={() => setOpenContacts(true)}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="#28003E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          onClick={() => setOpenContacts(false)}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M18 15L12 9L6 15"
            stroke="#28003E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
}

export default ContactUs;
