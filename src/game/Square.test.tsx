import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Square from './Square'

describe("Board component", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Square />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  
  it('renders according to snapshot', () => {
    const tree = renderer
      .create(<Square />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
