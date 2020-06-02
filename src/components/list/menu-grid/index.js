import React from 'react'

import Styles from './styles.less'

export default class ComponentMenuGridList extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount () {
  }

  goOuterUrl (url) {
    window.location.href = url
  }

  render () {
    return (
      <div className="cmp-menu-grid-list">
        <ul className="menu-list-wrap">
          <li onTouchEnd={() => this.goOuterUrl('https://t.cj.sina.cn/?vt=4')}>
            <img src="https://img.favpng.com/5/5/15/sina-weibo-computer-icons-sina-corp-logo-png-favpng-uLCdrPbj26XQqpvnyRA7qbQwz.jpg" alt="" />
            <span>sina</span>
          </li>
          <li onTouchEnd={() => this.goOuterUrl('https://xw.qq.com/m/tech')}>
            <img src="https://mat1.gtimg.com/www/mobi/2017/image/ui-icon_log.svg" alt="" />
            <span>腾讯</span>
          </li>
          <li onTouchEnd={() => this.goOuterUrl('https://www.infoq.cn/topic/Front-end')}>
            <img src="https://shubotong.oss-cn-hangzhou.aliyuncs.com/logogogo.png" alt="" />
            <span>infoQ</span>
          </li>
          <li onTouchEnd={() => goPath('/table')}>
            <img src="https://shubotong.oss-cn-hangzhou.aliyuncs.com/logogogo.png" alt="" />
            <span>表格</span>
          </li>
          <li onTouchEnd={() => goPath('/table')}>
            <img src="https://shubotong.oss-cn-hangzhou.aliyuncs.com/logogogo.png" alt="" />
            <span>表格</span>
          </li>
          <li onTouchEnd={() => goPath('/table')}>
            <img src="https://shubotong.oss-cn-hangzhou.aliyuncs.com/logogogo.png" alt="" />
            <span>表格</span>
          </li>
          <li onTouchEnd={() => goPath('/table')}>
            <img src="https://shubotong.oss-cn-hangzhou.aliyuncs.com/logogogo.png" alt="" />
            <span>表格</span>
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
