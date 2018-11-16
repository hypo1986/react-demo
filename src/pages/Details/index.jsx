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
      server.post('/intelligent/api/v3/risk/queryRiskInfo?version=1.5', {
        userId: '',
        orderId: this.props.match.params.orderId,
        userFamilyRequestId: this.props.match.params.userFamilyRequestId,
        riskCode: this.props.match.params.riskId
      })
      .then(res => {
        this.setState({
          riskName: res.data.riskName,
          companyName: res.data.companyName,
          labelList: res.data.labelList,
          riskPlan: res.data.riskPlan,
          dutyList: res.data.dutyList,
          reading: res.data.reading.advantageList !== null ? res.data.reading : {advantageList: [], faultList: []},
          specialityList: res.data.specialityList,
          questionList: res.data.questionList,
          fileList: res.data.fileList,
          recommendDesc: res.data.recommendDesc,
          existsHealthNotice: res.data.existsHealthNotice
        })
      })
    }
  }
}

class Details extends Component {
  constructor () {
    super()
    this.state = {
      riskName: '',
      companyName: '',
      labelList: [],
      riskPlan: [],
      dutyList: [],
      reading: {
        advantageList: [],
        faultList: []
      },
      specialityList: [],
      questionList: [],
      fileList: [],
      recommendDesc: {},
      existsHealthNotice: false
    }
    this.activeFn = this.activeFn.bind(this)
  }
  componentWillMount () {
    this.props.init.bind(this)()
  }
  componentDidMount () {
  }
  activeFn (e) {
    while(e.target.tagName !== 'LI') {
      e.target = e.target.parentNode
    }
    e.target.className = e.target.className ? '' : 'active'
  }
  render () {
    let isShow
    if (this.state.existsHealthNotice) {
      isShow = (
        <div className='inform' >
          <h1>健康告知</h1>
          <p>可根据健康告知，了解是否满足产品投保要求。</p>
          <Link to={'/notification/' + this.props.match.params.riskId}>点击查看 >></Link>
        </div>
      )
    }
    return (
      <div className='detailsPage'>
        <div className='title'>
          <h1>{this.state.riskName}</h1>
          <p>承保公司：{this.state.companyName}</p>
          <ul>
            {this.state.labelList.map((v,i) => {
              return (
                <li key={i}>{v}</li>
              )
            })}
          </ul>
        </div>
        <ul className='details'>
          <li>
            <em>{this.state.riskPlan.amount}</em>
            <span>保额</span>
          </li>
          <li>
            <em>{this.state.riskPlan.feeYear}</em>
            <span>缴费期限</span>
          </li>
          <li>
            <em>{this.state.riskPlan.period}</em>
            <span>保障期限</span>
          </li>
          <li>
            <em><span>{(this.state.riskPlan.prem || '').replace(/元\/年/gi, '')}</span>元/年</em>
            <span>保费</span>
          </li>
        </ul>
        <div className='responsibility'>
          <div>
            <h1>保障责任</h1>
            <Link to={'/securityDetails/' + this.props.match.params.orderId + '/' + this.props.match.params.userFamilyRequestId + '/' + this.props.match.params.riskId}>查看详情</Link>
          </div>
          <ul>
            {
              this.state.dutyList.map((v,i) => {
                return (
                  <li key={i}>
                    <h3>{v.dutyName}</h3>
                    <p>{v.dutyAmount && v.dutyAmount}</p>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className='recommend'>
          <h1>保险专家推荐</h1>
          <ul>
            <li>{this.state.recommendDesc.content}</li>
          </ul>
          <a href={this.state.recommendDesc.url}>{this.state.recommendDesc.title}</a>
        </div>
        <div className='unscramble'>
          <h1>产品解读</h1>
          <p>
            <span>优势</span>
            <span>劣势</span>
          </p>
          <ul className='advantage'>
            {
              this.state.reading && (this.state.reading.advantageList.length >= this.state.reading.faultList.length ? this.state.reading.advantageList : this.state.reading.faultList).map((v,i) => {
                return (
                  <li key={i}>
                    <p>
                      <img src={require('./details1.png')} />
                      <span>{v}</span>
                    </p>
                    <p>
                      <img src={require('./details2.png')} />
                      <span>{this.state.reading.faultList[i]}</span>
                    </p>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className='service'>
          <h1>特色服务</h1>
          <ul>
            {
              this.state.specialityList.map((v,i) => {
                return (
                  <li key={i}>
                    <img src={require('./follow.png')} />
                    <span>{v.dutyDesc}</span>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className='comproblem'>
          <h1>常见问题</h1>
          <ul>
            {
              this.state.questionList.map((v,i) => {
                return (
                  <li onClick={this.activeFn} key={i}>
                    <p>
                      <img src={require('./Q.png')} />
                      <span>{v.question}</span>
                    </p>
                    <p>
                      <img src={require('./A.png')} />
                      <span>{v.answer}</span>
                    </p>
                  </li>
                )
              })
            }
          </ul>
          <div><a>查看更多问题 >></a></div>
        </div>
        <div className='file'>
          <h1>相关文件</h1>
          <div>
            {
              this.state.fileList.map((v,i) => {
                return (
                  <a href={v.value} key={i}>《{v.key}》</a>
                )
              })
            }
          </div>
        </div>
        {isShow}
        <div className='consultation'>
          <div>看了这么多产品分析，还是不知道怎么买？<br />点击“投保咨询”，享保险规划师一对一咨询服务</div>
          <a>投保咨询</a>
        </div>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Details)
