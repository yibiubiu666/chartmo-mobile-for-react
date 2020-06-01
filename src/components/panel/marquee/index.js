import React from 'react'

import Styles from './styles.less'

export default class ComponentMarqueePanel extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount () {
  }

  render () {
    return (
      <div className="cmp-top-search-nav">
          hello marquee panel
      </div>
    )
  }
}
