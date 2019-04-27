import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Game from './Game'

describe("Game component", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Game />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  
  it('renders according to snapshot', () => {
    const tree = renderer
      .create(<Game />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
