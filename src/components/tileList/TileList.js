import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ( {tiles} ) => {
  return (
    <div>
      {tiles.map((object, index) => (<Tile key={index} tile={object}/>))}
    </div>
  );
};
