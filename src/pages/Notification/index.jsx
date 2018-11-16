import React, {Component} from 'react'
import './index.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import server from '../../api/server'
import {Router, Route, hashHistory} from 'react-router'

const mapStateToProps = (state, props) => ({})
const mapDispatchToProps = (dispatch, props) => {
  return {
    init () {
      server.post('/intelligent/api/v3/risk/queryHealthNoticeInfo?version=1.5', {
        riskCode: this.props.match.params.riskId
      })
      .then(res => {
        this.setState({
          questionList: res.data.content.split(/\n/gi)
        })
      })
    }
  }
}

class Notification extends Component {
  constructor () {
    super()
    this.state = {
      questionList: []
    }
  }
  componentWillMount () {
    this.props.init.bind(this)()
  }
  componentDidMount () {
  }
  render () {
    return (
      <div className='notification'>
        <h1>请提供“是”或“否”的答案，若被保险人为未成年人，则请被保险人的父母代为回答：</h1>
        <p>如申请投保人豁免保费附加险，请务必对投保人健康状况进行告知。</p>
        <ul>
          {
            this.state.questionList.map((v,i) => {
              return (
                <li key={i}>
                  <p>{v}</p>
                </li>
              )
            })
          }
        </ul>
        <p>本产品支持智能核保，不完全符合健康告知的用户智能核保通过后，可进行投保。若您对某个健康情况无法确认，可以通过“核保咨询”联系我们的保险规划师提交相关病例资料，我们会跟保险公司确认后反馈。</p>
        <a>核保咨询</a>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Notification)
