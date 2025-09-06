import './Game.css'

// App code

export default function Game() {
  return (
    <body>
      <h1>Tic tac toe!</h1>
      <p>The shittiest one possible lolololol</p>
      <Board></Board>
    </body>
  );
}

function Square({value}) {
  return (
    // curly brackets "escape" into JavaScript
    // So, JS var is rendered in the html component
  <button className="square">{value}</button>
  );
}

function Board() {
  return (
    <>
      <div className="board-row">
        <Square value="1"/>
        <Square value="2"/>
        <Square value="3"/>
      </div>
      <div className="board-row">
        <Square value="4"/>
        <Square value="5"/>
        <Square value="6"/>
      </div>
      <div className="board-row">
        <Square value="7"/>
        <Square value="8"/>
        <Square value="9"/>
      </div>
    </>
  );
}
