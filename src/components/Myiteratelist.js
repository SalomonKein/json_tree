import React, {useContext} from "react";
import {Context} from "../context";
// import arrayForStart from "../resource/arrayForStart";
// import createJSONTree from "../resource/createJSONTree";
import Childpoint from "./Childpoint";
import cn from "./Myiteratelist.module.css";

export default function Myiteratelist() {
  const {collapseAll, data} = useContext(Context);

  //  let array = arrayForStart(); // - hand mock array, use with import

  // const array = createJSONTree(5, 3); // - custom generated array, use with import

  let array = data.continents; // - array from query

  function iterate(arr) {
    return arr.map((e) => {
      return Object.keys(e).map((key) => {
        return e[key] instanceof Array ? (
          <div key={Date.now() * Math.random()} className={cn.firstlvl}>
            <Childpoint element={e.name} />
            <span className={cn.thirdlvl}>{iterate(e[key])}</span>
          </div>
        ) : Object.keys(e).length <= 1 ? (
          Object.keys(e).map((key) => {
            return typeof e[key] === "object" ? null : (
              <div
                key={Date.now() * Math.random()}
                className={cn.lastlvl}
                onClick={collapseAll}
              >
                {e.name}
              </div>
            );
          })
        ) : null;
      });
    });
  }

  return <div className={"container"}>{iterate(array)}</div>;
}
