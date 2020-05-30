import React from 'react'

import CompomentTopBackNav from '@/components/nav/top-back-nav'
import { goPath } from '@/utils/location'

import Styles from './styles.less'

export default class Plaze extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount () {
  }

  render () {
    return (
      <div className="view-plaza">
        <CompomentTopBackNav title="广场" backPath="/home"/>
        <ul className="plaza-category-container">
          <li>
            <img src="https://shubotong.oss-cn-hangzhou.aliyuncs.com/logogogo.png" alt="" />
            <span>颜色</span>
          </li>
          <li>
            <img src="https://shubotong.oss-cn-hangzhou.aliyuncs.com/logogogo.png" alt="" />
            <span>字体</span>
          </li>
          <li onTouchEnd={() => goPath('/table')}>
            <img src="https://shubotong.oss-cn-hangzhou.aliyuncs.com/logogogo.png" alt="" />
            <span>表格</span>
          </li>
        </ul>
      </div>
    )
  }
}
