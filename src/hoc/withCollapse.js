import React from "react";
import cn from "../components/Childpoint.module.css";

export default function withCollapse(Component) {
  const onClickHandler = (e) => {
    if (e.target.classList.contains(cn.hide)) {
      e.target.classList.remove(cn.hide);
    } else {
      e.target.classList.add(cn.hide);
    }
  };

  return (props) => {
    return React.cloneElement(<Component {...props} />, {
      onClick: onClickHandler,
    });
  };
}
