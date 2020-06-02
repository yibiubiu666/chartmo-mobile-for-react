import React from 'react'

import Styles from './styles.less'

import ComponentFavorSvg from '@/components/svg/favor-icon'

export default class ComponentNewsList extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount () {
  }

  render () {
    return (
      <div className="cmp-news-list">
          <ul className="news-list">
            <li className="news-item-wrap">
              <div className="news-item">
                <header className="news-item-header">
                  <span className="news-item-header__title">搞活地摊经济 让城市更有烟火气搞活地摊经济</span>
                </header>
                <section className="news-item-body">
                  <img src="https://yichengliang.oss-cn-hangzhou.aliyuncs.com/beijing-10.jpeg" alt=""></img>
                </section>
                <footer className="news-item-footer">
                  <span className="news-item-footer__from">新浪财经</span>
                  <ComponentFavorSvg className="news-item-footer__favor-icon" />
                </footer>
              </div>
            </li>
            <li className="news-item-wrap">
              <div className="news-item--lf">
                <section className="news-item-left">
                  <img className="news-item-left__img" src="https://yichengliang.oss-cn-hangzhou.aliyuncs.com/beijing-10.jpeg" alt=""></img>
                </section>
                <section className="news-item-right">
                  <header><span className="news-item-header__title">王兴提前预判阿里大文娱将被放弃，阿里回应称他该去说单口相声</span></header>
                  <footer className="news-item-footer">
                    <span className="news-item-footer__from">infoQ</span>
                    <ComponentFavorSvg />
                  </footer>
                </section>
              </div>
            </li>

            <li className="news-item-wrap">
              <div className="news-item">
                <header className="news-item-header">
                  <span className="news-item-header__title">搞活地摊经济 让城市更有烟火气搞活地摊经济 让城市更有烟火气搞活地摊经济 让城市更有烟火气</span>
                </header>
                <section className="news-item-body-grid">
                  <img src="https://yichengliang.oss-cn-hangzhou.aliyuncs.com/beijing-10.jpeg" alt=""></img>
                  <img src="https://yichengliang.oss-cn-hangzhou.aliyuncs.com/beijing-10.jpeg" alt=""></img>
                  <img src="https://yichengliang.oss-cn-hangzhou.aliyuncs.com/beijing-10.jpeg" alt=""></img>
                </section>
                <footer className="news-item-footer">
                  <span className="news-item-footer__from">新浪财经</span>
                  <ComponentFavorSvg className="news-item-footer__favor-icon" />
                </footer>
              </div>
            </li>
          </ul>
      </div>
    )
  }
}
