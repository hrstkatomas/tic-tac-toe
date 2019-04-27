import React, { useState } from 'react'
import Square from './Square'

type reactHook = [
  string,
  (value: string) => void
]

enum PlayerSymbols {
  Player1 = 'X',
  Player2 = 'O'
}

const setObjectAtIndex = (array: any[], index: number, newObject: any): any[] => ([
  ...array.slice(0, index),
  newObject,
  ...array.slice(index + 1)
])

const Board: React.FunctionComponent = () => {
  const [ { player1, state }, setGameState ] = useState({
    player1: true,
    state: Array(9).fill(null)
  })

  const handleClick = (index: number): void => {
    setGameState({
      player1: !player1,
      state: setObjectAtIndex(state, index, player1 ? PlayerSymbols.Player1 : PlayerSymbols.Player2)
    })
  }


  return (
    <div>
      <div>
        <Square value={state[0]} onClick={() => handleClick(0)} />
        <Square value={state[1]} onClick={() => handleClick(1)}/>
        <Square value={state[2]} onClick={() => handleClick(2)}/>
      </div>
      <div>
        <Square value={state[3]} onClick={() => handleClick(3)} />
        <Square value={state[4]} onClick={() => handleClick(4)} />
        <Square value={state[5]} onClick={() => handleClick(5)} />
      </div>
      <div>
        <Square value={state[6]} onClick={() => handleClick(6)} />
        <Square value={state[7]} onClick={() => handleClick(7)} />
        <Square value={state[8]} onClick={() => handleClick(8)} />
      </div>
    </div>
  )
}

export default Board
