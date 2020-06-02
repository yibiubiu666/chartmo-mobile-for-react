import React from 'react'

export default class ComponentFavorIconSvg extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount () {
  }

  render () {
    return (
      <svg t="1590997140717" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3224" width="16" height="16"><defs><style type="text/css"></style></defs><path d="M512 913.066667 452.266667 853.333333C230.4 657.066667 85.333333 524.8 85.333333 362.666667 85.333333 230.4 187.733333 128 320 128c72.533333 0 145.066667 34.133333 192 89.6C558.933333 162.133333 631.466667 128 704 128 836.266667 128 938.666667 230.4 938.666667 362.666667c0 162.133333-145.066667 294.4-366.933333 490.666667L512 913.066667z" p-id="3225" fill={this.props.fill || '#efefef'}></path></svg>
    )
  }
}
