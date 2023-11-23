import React from "react";

import "./style.scss";
import AdminLink from "../../components/AdminLink/AdminLink";
import Title from "../../components/Title/Title";
import HotPriceContainer from "../../Containers/HotPrice/HotPriceContainer";

const PersonalData = () => {
  return (
    <>
      <section className="personal">
        <div className="personal__container">
          <div className="personal__admin">
            <AdminLink />
          </div>
          <div className="personal__content">
            <Title text="Personal data" />
            <div className="personal__data">
              <div className="personal__data-item">
                <p className="personal__data-const">Name</p>
                <p>Antonina</p>
              </div>
              <div className="personal__data-item">
                <p className="personal__data-const">Surname</p>
                <p>Synelnyk</p>
              </div>
              <div className="personal__data-item">
                <p className="personal__data-const">Phone</p>
                <p>+380 63 629 73 28</p>
              </div>
              <div className="personal__data-item">
                <p className="personal__data-const">Email</p>
                <p>antonina_luk@ukr.net</p>
              </div>
            </div>
          </div>
        </div>
        <HotPriceContainer />
      </section>
    </>
  );
};

export default PersonalData;
