import React from "react";
import UpArrow from "../../assets/up-arrow-angle.png";
import { BsFillArrowUpCircleFil } from 'react-icons/bs';
import { IconContext } from "react-icons";

const RenderUpArrow = (props) => {
  
    return (
        <div
            className="w-[30px] h-[30px] fixed bottom-[20px] right-[20px] left-auto overflow-hidden cursor-pointer rounded-full bg-white"
            onClick={() => {
                window.scrollTo({top: 0, left: 0,  behavior: "smooth" })
            }}
        >
            <img
                className="w-11/12 h-11/12 object-fit object-center m-auto"
                src={UpArrow}
                alt="Up Arrow"
                />
        </div>
  );
};

export default RenderUpArrow;
