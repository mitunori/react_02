## 起動

- npm start
- yarn start
  どちらか

## 注意

授業で進行しますが、各コンポーネントにコメントを挿入しています！
要所で console.log を使って何をしているかチェックしていきましょう！！！

## コードについて

Compoments 配下の各パーツを確認してみましょう！授業で進行していきますが
こちらにアップしているもので完成しています 😀

## React について

エラーハンドリング＝エラーが発生すると画面が表示されない問題があり、そちらをしているのが下記の箇所になります！
解決策は色々と方法はありますが、[React の条件付きレンダリング]などをチェックしたり、object のエラーチェックなどを
行うと問題なく動作いたします ☺️

```
解決策１
Data.js抜粋

### 解説
&&という記法を使うと、それが存在する（それがあるときのみ）ときだけ実行される処理になります

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



解決策２
Data.js抜粋
const Data = () => {
  const [pokemon, setPokemon] = useState([]);
  // data には Object をいれるので初期値を {} に変更
  const [data, setData] = useState({});

・・・
・・・
・・・
{/* data の値がある時だけ <Item /> を表示する */}
{Object.keys(data).length && (
  <Item
    id={data.id}
    height={data.height} //7
    pokemonNmae={data.name} //"bulbasaur"
    weight={data.weight} // 69
    front={data.sprites.front_default}
    back={data.sprites.back_default}
    shiny={data.sprites.front_shiny}
  />
)}

※どちらで対応しても[動作]しますので、エラーが出た際は「どういう解消」が必要か、などをチェックするようにしてみましょう😀
```
