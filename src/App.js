import {useQuery} from "@apollo/client";
import React, {useState} from "react";
import Myiteratelist from "./components/Myiteratelist";
import {Context} from "./context";
import {GET_ALL_CONTINENT} from "./query/continents";

function App() {
  const {data, loading} = useQuery(GET_ALL_CONTINENT);
  const [isCollapse, setIsCollapse] = useState(true);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  function collapseAll() {
    isCollapse ? setIsCollapse(false) : setIsCollapse(true);
  }

  return (
    <Context.Provider value={{collapseAll, isCollapse, data}}>
      <div className="App">
        <Myiteratelist />
      </div>
    </Context.Provider>
  );
}

export default App;
