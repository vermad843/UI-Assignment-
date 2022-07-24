import React, { useState } from "react";
import { navbarConst } from "../constants/sharedConsts";
import LoginModal from "./modal";
export default function Navbar() {
  const [showModal, setShowmodal] = useState(false);
  const toggleModal = () => {
    setShowmodal(!showModal);
  };
  return (
    <>
      {showModal && <LoginModal toggleModal={toggleModal} />}
      <div className="navbarCont">
        {navbarConst.map((s, i) => (
          <img
            onClick={() => {
              if (i === 2) {
                toggleModal();
              }
            }}
            src={s}
            alt={`${i + "alt"}`}
          />
        ))}
      </div>
    </>
  );
}
