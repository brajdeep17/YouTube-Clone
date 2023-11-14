import React from "react";
import { Context } from "../context/contextApi";
import { categories } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import LeftNavMenuItem from "./LeftNavMenuItem";

const LeftNav = () => {
  const {selectCategories, setSelectCategories, mobileMenu} =  useContext(Context);
  
  const navigate = useNavigate()

  const clickHandler = (name,type) => {
    switch(type){
      case "category":
        return setSelectCategories(name)
      case "home":
        return setSelectCategories(name)
      case "menu": 
        return false
        default:
          break;  
    }
  }


  return (
    <div className={`md:block w-[240px] overflow-y-auto h-[530px] py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${mobileMenu ? "translate-x-0":""}`}>
      <div className="flex flex-col px-5 text-white">
        {categories.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <LeftNavMenuItem 
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  clickHandler(item.name, item.type)
                  navigate("/")
                }}
                className={`${
                  selectCategories === item.name ? "bg-white/[0.15]" : ""
                }`}
              />
              {item.divider && <hr className="my-5 border-white/[0.15]" />}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default LeftNav;
