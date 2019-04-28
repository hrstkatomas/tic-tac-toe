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

  const renderSquare = (index: number) => (
    <Square value={state[index]} onClick={() => handleClick(index)} />
  )

  return (
    <div>
      <div>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

export default Board
