import React from "react";

export const Card = (props) => {
  return (
    <>
      <div className="container mt-3">
        <div className="card">
          <div className="card-header">
          <img src={props.imgsrc} height="60" style={props.style} width="70"/>
          </div>
          <div className="card-body">
           
                <img src={props.imgsrc} height={props.height} width={props.width}/>
           
          </div>
          <div className="card-footer"></div>
        </div>
      </div>
    </>
  );
};
