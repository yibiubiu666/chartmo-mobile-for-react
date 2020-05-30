import React from 'react'

import CompomentTopBackNav from '@/components/nav/top-back-nav'
import MockTableData from '@/mock/MockTableData'

import Styles from './styles.less'

export default class Table extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount () {
  }

  render () {
    return (
      <div className="view-table">
        <CompomentTopBackNav title="表格" backPath="/plaza"/>
        <div className="table-container">
          <header className="table-header">
            <div className="table-header__title">列表</div>
            <div className="table-header__subtitle">这里是副标题</div>
          </header>
          <section className="table-content">
            <table>
              <tr>
                {
                  MockTableData.th.map((th, thIndex) => (
                    <th key={th}>
                      {th}
                    </th>
                  ))
                }
              </tr>
              {
                MockTableData.tds.map((tds, tdsIndex) => (
                  <tr>
                    {
                      tds.map((td, tdIndex) => (
                      <td key={td}>
                        {td}
                      </td>
                      ))
                    }
                  </tr>
                ))
              }
            </table>
          </section>
          <footer className="table-pagetion">
            <div className="pagetion-left">
              <span className="pagetion-left__txt">共20条结果，当前显示1-10条</span>
            </div>
            <div className="pagetion-right">
              <div></div>
              <span>第 1 页</span>
              <div></div>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}
