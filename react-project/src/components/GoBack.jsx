import React from "react";
import { useNavigate } from "react-router-dom";

const GoBack = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <>
      <a href="##" className="goback" onClick={goBack}>
        <svg
          width="10"
          height="10"
          viewBox="0 0 13 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.11914 10.7129C0.503906 11.3965 0.503906 12.4219 1.11914 13.0371L10.416 22.334C11.0996 23.0176 12.125 23.0176 12.7402 22.334L14.3125 20.8301C14.9277 20.1465 14.9277 19.1211 14.3125 18.5059L7.68164 11.875L14.3125 5.3125C14.9277 4.69727 14.9277 3.60352 14.3125 2.98828L12.7402 1.41602C12.125 0.800781 11.0996 0.800781 10.416 1.41602L1.11914 10.7129Z"
            fill="#8732c9"
          />
        </svg>
        <svg
          width="10"
          height="10"
          viewBox="0 0 13 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.11914 10.7129C0.503906 11.3965 0.503906 12.4219 1.11914 13.0371L10.416 22.334C11.0996 23.0176 12.125 23.0176 12.7402 22.334L14.3125 20.8301C14.9277 20.1465 14.9277 19.1211 14.3125 18.5059L7.68164 11.875L14.3125 5.3125C14.9277 4.69727 14.9277 3.60352 14.3125 2.98828L12.7402 1.41602C12.125 0.800781 11.0996 0.800781 10.416 1.41602L1.11914 10.7129Z"
            fill="#8732c9"
          />
        </svg>
        <p>go back</p>
      </a>
    </>
  );
};

export default GoBack;
