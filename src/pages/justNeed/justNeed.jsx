import React, {Component} from 'react'
import './justNeed.css'
import FixedSave from '../..//components/FixedSave/FixedSave.jsx'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import server from '../../api/server'

const mapStateToProps = (state, props) => ({})
const mapDispatchToProps = (dispatch, props) => {
  return {
    init () {
      server.post('/intelligent/api/v3/plan/queryPersonalSimplePlan?version=1.5', {
        userId: '',
        orderId: this.props.match.params.orderId,
        userFamilyRequestId: this.props.match.params.userFamilyRequestId,
      })
      .then(res => {
        this.setState({
          sumPlanInfo: res.data.sumPlanInfo,
          riskPlanList: res.data.riskPlanList,
          tailConfig: res.data.tailConfig || ''
        })
      })
    }
  }
}


class JustNeed extends Component {
  constructor () {
    super()
    this.state = {
      sumPlanInfo: {},
      riskPlanList: [],
      tailConfig: ''
    }
  }
  componentWillMount () {
    this.props.init.bind(this)()
  }
  componentDidMount () {
  }
  render () {
    return (
      <div className='justNeedPage'>
        <div className='programme'>
          <div className='programmeTit'>
            <h1>推荐方案</h1>
            <span>保费：约<em>{this.state.sumPlanInfo.sumPrem}</em>元/年</span>
          </div>
          <ul className='actuary'>
            <li>
              <img src={require('./just1.png')} />
              <span>{this.state.sumPlanInfo.severeAmount}<em>万</em></span>
              <p>重疾保障</p>
            </li>
            <li>
              <img src={require('./just2.png')} />
              <span>{this.state.sumPlanInfo.medicalAmount}<em>万</em></span>
              <p>医疗保障</p>
            </li>
            <li>
              <img src={require('./just3.png')} />
              <span>{this.state.sumPlanInfo.lifeAmount}<em>万</em></span>
              <p className='Tit'>身故保障</p>
            </li>
          </ul>
        </div>
        <div className='proposal'>
          <p>根据您当前的家庭收入、收入结构、负债因素，建议配置。可能存在不足。根据您当前的家庭收入、收入结构、负债因素，建议配置。可能存在不足。</p>
        </div>
        <div className='recommendation'>
          <div>
            <h1>保障方案</h1>
          </div>
          <ul className='RecomList'>
            {
              this.state.riskPlanList.map((v,i) => {
                return (
                  <li key={i}>
                    <Link to={'/details/'+this.props.match.params.orderId+'/'+this.props.match.params.userFamilyRequestId+'/'+v.riskCode}>
                      <div>
                        <h1>{v.riskName}</h1>
                        <span><em>{v.prem}</em>元/年起</span>
                      </div>
                      <p>
                        <span>{v.amount/10000}万<em>保额</em></span>
                        <span>{v.period}<em>保障期限</em></span>
                        <span>{v.feeYear}<em>交费年限</em></span>
                      </p>
                    </Link>
                  </li>
                )
              })
            }
          </ul>
          <div className='guarantee'>
            <h4>保障建议：</h4>
            <p>根据您当前的家庭收入、收入结构、负债因素，建议配置。可能存在不足。</p>
          </div>
        </div>
        <div className='upgrade'>
          <a>
            <img src={require('./just4.png')} />
            <div>
              <h1>升级保障</h1>
              <span>查看专家推荐的保障方案</span>
            </div>
          </a>
        </div>
        <FixedSave />
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(JustNeed)
