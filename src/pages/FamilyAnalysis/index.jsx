import React, {Component} from 'react'
import './index.css'
import Problem from '../../components/Problem/index.jsx'
import FixedSave from '../../components/FixedSave/FixedSave.jsx'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import server from '../../api/server'

const echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/pie')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

const mapStateToProps = (state, props) => ({})
const mapDispatchToProps = (state, props) => ({
  init () {
    server.post('/intelligent/api/v3/plan/queryFamilyPlan?version=1.5', {
      userId: '',
      orderId: this.props.match.params.orderId
    })
    .then(res => {
      let list = []
      res.data.personTypeList.map(v => {
        list.push({
          value:v.premRate,
          name:'直接访问'
        })
      })
      this.setState({
        bannerImg: res.data.headConfig || '',
        personTypeList: res.data.personTypeList,
        familyDocument: {
          summaryDeocument: res.data.familyDocument !== null ? res.data.familyDocument.summaryDeocument : '',
          configDocument: res.data.familyDocument !== null ? res.data.familyDocument.configDocument : ''
        },
        planInfo: res.data.planInfo,
        echartList: list
      })
      const myChart = echarts.init(document.getElementById('echarts'))
      myChart.setOption({
        legend: {
          orient: 'vertical',
          x: 'left',
          y: 'center',
          data:['']
        },
        series: [
          {
            name:'',
            type:'pie',
            radius: ['55%', '70%'],
            center: ['30%','50%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '12',
                  fontWeight: 'normal'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: this.state.echartList
          }
        ]
      })
    })
  }
})

class FamilyAnaly extends Component {
  constructor () {
    super()
    this.state = {
      bannerImg: '',
      personTypeList: [],
      familyDocument: {},
      planInfo: {},
      personTypeList: [],
      echartList: []
    }
  }
  componentWillMount () {
    this.props.init.bind(this)()
  }
  componentDidMount () {
    console.log('2')
    console.log(this.state.echartList)

  }
  render () {
    let familyType = ''
    return (
      <div className='familyAnalysis'>
        <img className='banner' src={this.state.bannerImg} />
        <ul>
          {
            this.state.personTypeList.map((v, i) => {
              if (v.personType === '01') {
                familyType = (<img src={require('./family1.png')} />)
              } else if (v.personType === '02') {
                familyType = (<img src={require('./family2.png')} />)
              } else if (v.personType === '03') {
                familyType = (<img src={require('./family3.png')} />)
              } else if (v.personType === '04') {
                familyType = (<img src={require('./family4.png')} />)
              } else if (v.personType === '05') {
                familyType = (<img src={require('./family6.png')} />)
              } else if (v.personType === '06') {
                familyType = (<img src={require('./family5.png')} />)
              }
              return (
                <li key={i}>
                  <a>
                    {familyType}
                    <span>{v.personTypeName}</span>
                  </a>
                </li>
              )
            })
          }
        </ul>
        <div className='analyCon'>
          <div><h1>家庭风险分析</h1></div>
          <p>{this.state.familyDocument.summaryDeocument && this.state.familyDocument.summaryDeocument}</p>
          <ul>
            <li>
              <img src={require('./family7.png')} />
              <span>健康风险</span>
            </li>
            <li>
              <img src={require('./family8.png')} />
              <span>意外风险</span>
            </li>
            <li>
              <img src={require('./family9.png')} />
              <span>财务风险</span>
            </li>
          </ul>
          <p>{this.state.familyDocument.configDocument && this.state.familyDocument.configDocument}</p>
        </div>
        <div className='analyCon'>
          <div>
            <h1>家庭总保费</h1>
            <span><em>{(this.state.planInfo.sumPrem || '').replace(/元\/年/gi, '')}</em>元/年</span>
          </div>
          <p>根据您当前的家庭情况，建议保障方案如下：</p>
          <ul>
            <li>
              <img src={require('../Scheme/scheme7.png')} />
              <span className='money'><em>{(this.state.planInfo.accidentAmount || '0').replace(/万/gi, '')/10000}</em>万</span>
              <span>重疾保障</span>
            </li>
            <li>
              <img src={require('../Scheme/scheme8.png')} />
              <span className='money'><em>{(this.state.planInfo.medicalAmount || '0').replace(/万/gi, '')/10000}</em>万</span>
              <span>医疗保障</span>
            </li>
            <li>
              <img src={require('../Scheme/scheme9.png')} />
              <span className='money'><em>{(this.state.planInfo.severeAmount || '0').replace(/万/gi, '')/10000}</em>万</span>
              <span>意外保障</span>
            </li>
            <li>
              <img src={require('../Scheme/scheme10.png')} />
              <span className='money'><em>{(this.state.planInfo.lifeAmount || '0').replace(/万/gi, '')/10000}</em>万</span>
              <span>身故保障</span>
            </li>
          </ul>
          <div className='echart'>
            <div id='echarts'></div>
          </div>
          <div>
            <Problem />
          </div>
        </div>
        <FixedSave />
      </div>

    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FamilyAnaly)
