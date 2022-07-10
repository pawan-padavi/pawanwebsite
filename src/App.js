import React from "react";
import "./App.css";
import { Card } from "./Components/Card";
import Sdata from "./Components/Sdata";
function App() {
  const height = "400px";
  const width ='100%';
  const style = {
    borderRadius: "20px",
  };

  return (
    <>
      <h2 className="bg-danger text-center">All Are The Cards</h2>
      {Sdata.map((val, index) => {
        return (
          <Card
            key={index}
            imgsrc={val.imgsrc}
            height={height}
            width={width}
            style={style}
          />
        );
      })}
    </>
  );
}

export default App;
