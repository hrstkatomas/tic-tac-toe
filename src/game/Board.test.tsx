import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Board from './Board'

describe("Board component", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Board />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  
  it('renders according to snapshot', () => {
    const tree = renderer
      .create(<Board />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
