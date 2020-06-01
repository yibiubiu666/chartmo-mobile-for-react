import React from 'react'

import ComponentTwoCatSvg from '@/components/svg/two-cat'
import ComponentMenuBarList from '@/components/list/menu-bar'
import ComponentMenuGridList from '@/components/list/menu-grid'
import ComponentTopSearchNav from '@/components/nav/top-search-nav'
import ComponentMarqueePanel from '@/components/panel/marquee'

import { goPath } from '@/utils/location'

import Styles from './styles.less'

export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount () {
  }

  goGithub () {
    window.location.href = 'https://yibiubiu666.github.io/yibiubiu.github.io/'
  }

  render () {
    return (
      <div className="view-home">
        <ComponentTopSearchNav />
        <header className="view-header">
          <ComponentTwoCatSvg />
          <a className="header__drawer" onTouchEnd={() => this.goGithub()}></a>
          <a className="header__plaza" onTouchEnd={() => goPath('plaza')}></a>
        </header>
        <ComponentMenuBarList />
        <ComponentMenuGridList />
        <ComponentMarqueePanel />
      </div>
    )
  }
}
