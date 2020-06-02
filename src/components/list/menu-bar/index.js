import React from 'react'

import Styles from './styles.less'

export default class ComponentMenuBarList extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount () {
  }

  render () {
    return (
      <div className="cmp-menu-bar-list">
          <ul className="menu-list-wrap">
            <li className="menu-item-wrap">
              <span>推荐</span>
            </li>
            <li className="menu-item-wrap">
              <span>视频</span>
            </li>
            <li className="menu-item-wrap">
              <span>娱乐</span>
            </li>
            <li className="menu-item-wrap">
              <span>军事</span>
            </li>
            <li className="menu-item-wrap">
              <span>汽车</span>
            </li>
          </ul>
      </div>
    )
  }
}
