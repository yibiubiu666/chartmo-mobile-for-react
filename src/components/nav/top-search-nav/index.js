import React from 'react'

import Styles from './styles.less'

import ComponentSearchIconSvg from '@/components/svg/search-icon'
import ComponentMessageIconSvg from '@/components/svg/message-icon'

export default class ComponentTopSearchNav extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount () {
  }

  render () {
    return (
      <div className="cmp-top-search-nav">
          <div className="nav__search">
            <a>
              <div className="search-wrap">
                <ComponentSearchIconSvg className="search__icon"/>
                <span>输入商品名或粘贴宝贝标题搜索</span>
              </div>
            </a>
          </div>
          <div className="nav__info">
            <a>
              <div className="info-wrap">
                <ComponentMessageIconSvg className="message__icon"/>
                <span>消息</span>
              </div>
            </a>
          </div>
      </div>
    )
  }
}
