import React from "react";
import "../index.css";

// データを受け取りましょう
const Item = ({
  id,
  height,
  pokemonNmae,
  weight,
  front,
  back,
  shiny,
  shinyBack,
}) => {
  return (
    <div className="pokemonItem">
      {/* ポケモンのデータが渡ってくるのでそれを表示します */}
      <div>図鑑番号: {id}</div>
      <div>ポケモン: {pokemonNmae}</div>
      <div>身長: {height}</div>
      <div>体重: {weight}</div>
      <img src={front} alt={pokemonNmae} />
      <img src={back} alt={pokemonNmae} />
      <img src={shiny} alt={pokemonNmae} />
      <img src={shinyBack} alt={pokemonNmae} />
      {/*  */}
    </div>
  );
};

export default Item;
