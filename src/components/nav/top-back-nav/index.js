import React from 'react'

import { goPath } from '@/utils/location'

import Styles from './styles.less'

export default class ComponentTopBackNav extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount () {
  }

  render () {
    const { title, backPath } = this.props
    return (
      <div className="cmp-top-back-nav">
        <div className="nav__back">
          <div className="nav__back-icon"></div>
          <span className="nav__back-txt" onTouchEnd={() => goPath(backPath)}>返回</span>
        </div>
        <span className="nav__title">{title}</span>
      </div>
    )
  }
}
