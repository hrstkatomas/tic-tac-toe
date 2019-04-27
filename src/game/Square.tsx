import React, { useState } from 'react'

type reactHook = [
  string,
  (value: string) => void
]

const Square: React.FunctionComponent = () => {
  const [ value, setValue ]: reactHook = useState('')

  return (
    <button onClick={() => setValue('x')}>
      {value}
    </button>
  )
}

export default Square
