import React, {useContext} from "react";
import cn from "./Childpoint.module.css";
import whithCollapse from "../hoc/withCollapse";
import {Context} from "../context";

function Childpoint(props) {
  const {isCollapse} = useContext(Context);
  return (
    <span
      className={isCollapse ? `${cn.secondlvl}  ${cn.hide}` : `${cn.secondlvl}`}
      onClick={props.onClick}
    >
      {props.element}
    </span>
  );
}

// export default Childpoint;
export default whithCollapse(Childpoint);
