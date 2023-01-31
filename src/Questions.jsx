import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Questions = ({ id, title, info }) => {
  const [show, setShow] = useState(false);
  return (
    <div key={id} className="rounded-2 p-3 shadow-sm">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h4>{title}</h4>
        <button className="btn btn-primary" onClick={() => setShow(!show)}>
          {show ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </div>
      {show && <p className="text-secondary lh-base pe-5">{info}</p>}
    </div>
  );
};

export default Questions;
