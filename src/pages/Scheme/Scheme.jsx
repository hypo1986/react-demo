import React, {Component} from 'react'
import './Scheme.css'
import FixedSave from '../../components/FixedSave/FixedSave.jsx'
import Problem from '../../components/Problem/index.jsx'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import server from '../../api/server'
import {Router, Route, hashHistory} from 'react-router'

const mapStateToProps = (state, props) => ({})
const mapDispatchToProps = (dispatch, props) => {
  return {
    init (obj = {
      userId: '',
      orderId: this.props.match.params.orderId,
      personType: '01',
      userFamilyRequestId: ''
    }) {
      server.post('/intelligent/api/v3/plan/queryPersonalPlan?version=1.5', obj)
      .then(res => {
        this.setState({
          personList:  res.data.personList,
          userInfo: res.data.userInfo,
          sumPlanInfo: res.data.sumPlanInfo,
          detailPlanList: res.data.detailPlanList,
          userFamilyRequestId: this.state.userFamilyRequestId == '' ? res.data.personList[0].userFamilyRequestId : this.state.userFamilyRequestId
        })
      })
    }
  }
}

class Scheme extends Component {
  constructor () {
    super()
    this.state = {
      personList: [],
      userInfo: {},
      sumPlanInfo: {},
      detailPlanList: [],
      userId: '',
      userFamilyRequestId: ''
    }
    this.changeActive = this.changeActive.bind(this)
    this.tabFn = this.tabFn.bind(this)
    this.getInfo = this.getInfo.bind(this)
  }
  changeActive (e) {
    if (e.target.tagName !== 'IMG') return
    const _li = document.getElementsByClassName('roleChose')[0].getElementsByTagName('li')
    const _liLen = _li.length
    if (e.target.parentNode.parentNode.className.split(' ').indexOf('active') === -1) {
      for (let i = 0; i < _liLen; i++) {
        _li[i].className = ''
      }
      e.target.parentNode.parentNode.className = 'active'
    }
  }
  tabFn (e) {
    if (e.target.tagName === 'LI') {
      if (e.target.className.split(' ').indexOf('active') !== -1) return
      const _tabLi = e.target.parentNode.getElementsByTagName('li')
      const _tabLiLen = _tabLi.length
      const _tabCon = document.getElementsByClassName('planCon')[0].children
      for (let i = 0; i < _tabLiLen; i++) {
        _tabLi[i].className = ''
        _tabCon[i].className = ''
      }
      e.target.className = 'active'
      _tabCon[e.target.getAttribute('data-index')].className = 'active'
    }
  }
  getInfo (obj) {
    let _obj = {
      userId: '',
      orderId: this.props.match.params.orderId,
      personType: obj.personType,
      userFamilyRequestId: obj.userFamilyRequestId
    }
    this.props.init.bind(this)(_obj)
  }
  componentWillMount () {
    this.props.init.bind(this)()
  }
  componentDidMount () {

  }
  render () {
    let role = ''
    return (
      <div className='schemeCon'>
        <div className='roleTab'>
          <div>
            <div className='feedback'>
              <Link to={'/family/' + this.props.match.params.orderId}>
                <img src={require('./home.png')} />
                <span>家庭保障方案</span>
                <img src={require('./right.png')} />
              </Link>
              <p>
                <Link to={'/'} className='reset'><img />重新测评</Link>
              </p>
            </div>
            <div className='roleChose'>
              <ul onClick={this.changeActive}>
                {
                  this.state.personList.map((v, i) => {
                    if ((v.personType === '01' && v.sex === '1') || v.personType === '02') {
                      role = (
                        <span>
                          <img src={require('./scheme3_no.png')} />
                          <img src={require('./scheme3_yes.png')} />
                        </span>
                      )
                    } else if ((v.personType === '01' && v.sex === '0') || v.personType === '03') {
                      role = (
                        <span>
                          <img src={require('./scheme4_no.png')} />
                          <img src={require('./scheme4_yes.png')} />
                        </span>
                      )
                    } else if (v.personType === '04') {
                      role = (
                        <span>
                          <img src={require('./scheme1_no.png')} />
                          <img src={require('./scheme1_yes.png')} />
                        </span>
                      )
                    } else if (v.personType === '05') {
                      role = (
                        <span>
                          <img src={require('./scheme2_no.png')} />
                          <img src={require('./scheme2_yes.png')} />
                        </span>
                      )
                    } else if (v.personType === '06') {
                      role = (
                        <span>
                          <img src={require('./scheme6_no.png')} />
                          <img src={require('./scheme6_yes.png')} />
                        </span>
                      )
                    } else if (v.personType === '07') {
                      role = (
                        <span>
                          <img src={require('./scheme5_no.png')} />
                          <img src={require('./scheme5_yes.png')} />
                        </span>
                      )
                    }
                    return (
                      <li onClick={() => {this.getInfo(v)}} className={v.personType === '01' ? 'active' : ''} key={i}>
                        {role}
                        <em>{v.personTypeName}</em>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
          <ul className='label'>
            <li>
              <span>{this.state.userInfo.age}</span>
              <em>年龄（岁）</em>
            </li>
            <li>
              <span>{this.state.userInfo.socialSecurity}</span>
              <em>社保情况</em>
            </li>
            <li>
              <span>{this.state.userInfo.cityName || ''}</span>
              <em>所在地</em>
            </li>
          </ul>
        </div>
        <div className='programme'>
          <div className='programmeTit'>
            <h1>推荐方案</h1>
            <span>保费：约<em>{this.state.sumPlanInfo.sumPrem || 0}</em>元/年</span>
          </div>
          <ul className='actuary'>
            <li style={this.state.sumPlanInfo.severeAmount === '0' ? {display: 'none'} : {}}>
              <img src={require('./scheme7.png')} />
              <span>{this.state.sumPlanInfo.severeAmount/10000 || 0}<em>万</em></span>
              <p>重疾保障</p>
            </li>
            <li style={this.state.sumPlanInfo.medicalAmount === '0' ? {display: 'none'} : {}}>
              <img src={require('./scheme8.png')} />
              <span>{this.state.sumPlanInfo.medicalAmount/10000 || 0}<em>万</em></span>
              <p>医疗保障</p>
            </li>
            <li style={this.state.sumPlanInfo.accidentAmount === '0' ? {display: 'none'} : {}}>
              <img src={require('./scheme9.png')} />
              <span>{this.state.sumPlanInfo.accidentAmount/10000 || 0}<em>万</em></span>
              <p>意外保障</p>
            </li>
            <li style={this.state.sumPlanInfo.lifeAmount === '0' ? {display: 'none'} : {}}>
              <img src={require('./scheme10.png')} />
              <span>{this.state.sumPlanInfo.lifeAmount/10000 || 0}<em>万</em></span>
              <p className='Tit'>身故保障</p>
            </li>
          </ul>
        </div>
        <div className='plan'>
          <ul className='planTit' onClick={this.tabFn}>
            <li data-index='0' className='active'>健康风险</li>
            <li data-index='1'>意外风险</li>
            <li data-index='2'>财务风险</li>
          </ul>
          <ul className='planCon'>
            {
              this.state.detailPlanList.map((v, i) => {
                return (
                  <li className={v.adviseType === '01' ? 'active' : ''} key={i}>
                    <span>保险方案：<em>{v.adviseTitle}</em></span>
                    <p className='introduce'>{v.adviseContent}</p>
                    <Link to={'/analysis/' + this.props.match.params.orderId + '/' + this.state.userFamilyRequestId + '/' + v.adviseType}>查看风险分析 ></Link>
                    {
                      v.classPlans && v.classPlans.map((_v, i) => {
                        return (
                          <div className='recommendation' key={i}>
                            <div>
                              <h1>{_v.adviseTitle}</h1>
                              <p>建议保额<span>{_v.sumAmount/10000}</span>万</p>
                            </div>
                            <ul className='RecomList'>
                              {
                                _v.riskPlanList.map((__v, i) => {
                                  return (
                                    <li key={i}>
                                      <Link to={'/details/'+this.props.match.params.orderId+'/'+this.state.userFamilyRequestId+'/'+__v.riskCode}>
                                        <div>
                                          <h1>{__v.riskName}</h1>
                                          <span><em>{__v.prem}</em>元/年起</span>
                                        </div>
                                        <p>
                                          <span>{__v.amount/10000}万<em>保额</em></span>
                                          <span>{__v.period}<em>保障期限</em></span>
                                          <span>{__v.feeYear}<em>交费年限</em></span>
                                        </p>
                                      </Link>
                                    </li>
                                  )
                                })
                              }
                              <li>
                                <a>{_v.adviseTitle}为什么这么配置 ></a>
                              </li>
                            </ul>
                          </div>
                        )
                      })
                    }
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className='justNeed'>
          <Link className='justPro' to={'/just/' + this.props.match.params.orderId + '/' + this.state.userFamilyRequestId}>预算有限？查看刚需版方案 ></Link>
          <Problem />
        </div>
        <FixedSave />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scheme)
