import React, {useState} from "react";
import Myiteratelist from "./components/Myiteratelist";
import {Context} from "./context";

// const isCollapse = true;

function App() {
  const [isCollapse, setIsCollapse] = useState(true);

  function collapseAll() {
    isCollapse ? setIsCollapse(false) : setIsCollapse(true);
  }

  return (
    <Context.Provider value={{collapseAll, isCollapse}}>
      <div className="App">
        <Myiteratelist />
      </div>
    </Context.Provider>
  );
}

export default App;
