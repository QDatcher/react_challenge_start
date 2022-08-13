import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  return (
    <div>
      {props.info.map((info, index)=>{
        return <Tile info={info} key={index} />
      })}
    </div>
  );
};
