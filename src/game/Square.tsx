import React, { useState } from 'react'

type squareProps = {
  value: string,
  onClick: (value: string) => void
}

const Square: React.FunctionComponent<squareProps> = ({ value, onClick }: squareProps) => {
  return (
    <button onClick={() => onClick}>
      {value}
    </button>
  )
}

export default Square
