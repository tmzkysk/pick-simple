import React from 'react'
import { render } from 'react-dom'
import { ChromePicker } from 'react-color'

class ButtonExample extends React.Component {
  constructor() {
    super();
    this.state = {
      color: {
        r: '241',
        g: '112',
        b: '255',
        a: '1',
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(color) {
    this.setState({ color: color.rgb })
  }

  render() {
    return (
      <ChromePicker color={ this.state.color } onChange={ this.handleChange } />
    )
  }
}

render(<ButtonExample/>, document.getElementById('pallet'))