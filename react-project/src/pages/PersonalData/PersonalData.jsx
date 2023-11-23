import React from "react";

import "./style.scss";
import AdminLink from "../../components/AdminLink/AdminLink";

const PersonalData = () => {
  return (
    <>
      <section className="personal">
        <div className="personal__container">
          <div className="personal__admin">
            <AdminLink />
          </div>
        </div>
      </section>
    </>
  );
};

export default PersonalData;
