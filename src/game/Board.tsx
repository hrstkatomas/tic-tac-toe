import React from 'react'
import Square from './Square'

const Board: React.FunctionComponent = () => {
  return (
    <div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  )
}

export default Board
