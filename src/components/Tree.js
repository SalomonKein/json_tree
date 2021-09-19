import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css'; 


let arr = [
    {
      title: "Africa",
      children: [
        {
          title: "Egipt",
          children: [
            {
              title: "Language",
              children: [
                {
                  title: "Arabian"
                },
              ]
            },
          ]
        }, {
          title: "RSA",
          children: [
            {
              title: "Language",
              children: [
                {
                  title: "English"
                },
              ]
            },
          ]
        },
      ]
    }, {
      title: "Antarctica",
      children: [
        "456"
      ]
    },{
      title: "Asia",
      children: [
        "456"
      ]
    },{
      title: "Australia",
      children: [
        "456"
      ]
    },{
      title: "Europe",
      children: [
        "456"
      ]
    },{
      title: "North America",
      children: [
        "456"
      ]
    },{
      title: "South America",
      children: [
        "456"
      ]
    },
    
   ];
   
   

// function iterate(arr){
//   arr.map((e)=>  e.children ?
// (console.log(e.title), iterate(e.children)):
// e.title ? console.log(e.title, "2") : null
// )}
// iterate(arr);
  //  console.log(obj.map((e)=>e.isArray ? e.map((e)=>e.isArray));

export default class Tree extends Component {
  constructor(props) {
    super(props);
   

    this.state = {
      // treeData: [{ title: 'Chicken', children: [{ title: 'Egg' }] }],
      treeData: arr,
    };
  }
  
  render() {
    return (
      <div style={{ height: 800 }}>         
        <SortableTree    
          treeData={this.state.treeData}
          onChange={treeData => this.setState({ treeData })}
          canDrag={false}
          // style={ {width: "50%"}}
        />
      </div>
    );
  }
}