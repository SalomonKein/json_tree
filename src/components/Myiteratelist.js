import React, { useContext } from "react";
import { Context } from "../context";
import createJSONTree from "../resource/createJSONTree";
import Childpoint from "./Childpoint";
import cn from "./Myiteratelist.module.css";

export default function Myiteratelist() {
  let arr = [
    {
      name: "Africa",
      children: [
        {
          name: "Egipt",
          children: [
            {
              name: "Language",
              children: [
                {
                  name: "Arabian",
                },
              ],
            },
          ],
        },
        {
          name: "RSA",
          children: [
            {
              name: "Language",
              children: [
                {
                  name: "English",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Antarctica",
      children: ["456"],
    },
    {
      name: "Asia",
      children: [
        {
          name: "Qatar",
          children: [
            {
              name: "Language",
              children: [
                {
                  name: "Arabian",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Australia",
      children: ["456"],
    },
    {
      name: "Europe",
      children: [
        {
          name: "Great Britan",
          children: [
            {
              name: "Language",
              children: [
                {
                  name: "English",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "North America",
      children: ["456"],
    },
    {
      name: "South America",
      children: ["456"],
    },
  ];

  // let arr=createJSONTree(4)(6);
  console.log(JSON.stringify(createJSONTree(4)(6)));

  const {collapseAll} = useContext(Context)  

  return (
    <div className={"container"}>
      {(function iterate(arr) {
        return arr.map((e) =>
          e.children ? (
            <div key={Date.now() * Math.random()} className={cn.firstlvl}>
              <Childpoint 
                element = {e.name}                 
              />               
              <span className={cn.thirdlvl}>{iterate(e.children)}</span>
            </div>
          ) : e.name ? (
            <div key={Date.now() * Math.random()} className={cn.lastlvl}
            onClick={collapseAll}>
              {e.name}
            </div>
          ) : null
        );
      })(arr)}
    </div>
  );
}
