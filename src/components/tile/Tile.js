import React from "react";

export const Tile = (props) => {
  const condensedInformation = Object.values(props.info);

  return (
    <div className="tile-container">
      {
        

        condensedInformation.map((info, index)=>{
          let className
          if(index === 0){
            className = 'tile-title'
          } else {
            className = 'tile'
          }

          return <p className={className} key={index} >{info}</p>
        })
      }
    </div>
  );
};
