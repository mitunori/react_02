import React, { useEffect, useState } from "react";
import Item from "./Item";
import View from "./View";

const Data = () => {
  const [pokemon, setPokemon] = useState([]);
  const [data, setData] = useState([]);

  console.log(data);
  useEffect(() => {
    // fetchDataという処理
    const fetchData = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );

      // jsonにしてjsで扱えるようにした
      const data = await response.json();
      // console.log(data, "data");

      // 配列だけに絞った
      const pokemonList = data.results;
      // console.log(pokemonList, "data");

      // useStateの更新の処理で更新する
      setPokemon(pokemonList);
    };

    // ここでfetchDataを実行させる
    fetchData();
  }, []);

  // useStateのpokemonというstateをコンソールログで表示してみてください😀
  // console.log(pokemon, "useState");

  // clickしたときの処理handleClickを記述
  const handleClick = async (num) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${num}/`
    ).then((res) => res.json());

    setData(response);
  };

  return (
    <div>
      {/*  */}
      {/* 追加 */}
      <div className="viewBox">
        {pokemon.map((item, index) => (
          <View key={index} pokemonItem={index} handleClick={handleClick} />
        ))}
      </div>
      {/*  */}
      {/* Item.jsを読み込む（上でimportします！） */}

      <Item
        id={data.id}
        height={data.height}
        pokemonNmae={data.name}
        weight={data.weight}
        // data.spritesが初期値は空になるため、 && でdata.spritesが「存在するとき」のみ 表示に変更
        front={data.sprites && data.sprites.front_default}
        back={data.sprites && data.sprites.back_default}
        shiny={data.sprites && data.sprites.front_shiny}
        shinyBack={data.sprites && data.sprites.back_shiny}
      />
    </div>
  );
};

export default Data;
