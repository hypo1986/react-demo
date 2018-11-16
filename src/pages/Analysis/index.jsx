import React, {Component} from 'react'
import './index.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import server from '../../api/server'

const echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/line')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')


const mapStateToProps = (state, props) => ({})
const mapDispatchToProps = (dispatch, props) => {
  return {
    init () {
      server.post('/intelligent/api/v3/plan/queryDetailDocumentInfo?version=1.5', {
        userId: '',
        orderId: this.props.match.params.orderId,
        userFamilyRequestId: this.props.match.params.userFamilyRequestId,
        adviseType: this.props.match.params.adviseType
      })
      .then(res => {
        this.setState({
          headDesc: res.data.headDesc,
          headDocument: res.data.headDocument,
          labelDocumentList: [],
          chartList: res.data.adviseContent,
          adviseContent: res.data.adviseContent
        })
        const myChart = echarts.init(document.getElementById('lineEcharts'))
        myChart.setOption({
          title: {
            left: 'center',
            bottom: '0',
            text: '中国人身保险业重大疾病经验发生率表（2006-2018）',
            textStyle: {
              color: '#999',
              fontWeight: 'lighter',
              fontSize: 11
            }
          },
          grid: {
            left: '8%',
            right: '8%',
            top: '10%',
            bottom: '25%',
            show: true,
            // backgroundColor: 'transparent'
            borderColor: 'transparent',
            // shadowColor: '#ff9f48',
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: res.data.listage,
              axisLine: {
                shwo: true,
                lineStyle: {
                  width: 1,
                  color: '#ddd'
                }
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                color: '#999'
              }
          },
          yAxis: {
              type: 'value',
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: true,
                color: '#999'
              }
          },
          series: [{
              data: res.data.listrate,
              type: 'line',
              smooth: true,
              areaStyle: {
                color: 'rgba(255,159,72, 0.2)'
              },
              lineStyle: {
                color: '#FF9F48'
              },
              itemStyle: {
                borderColor: '#FF9F48'
              },
              symbolSize: 8
          }]
        })
      })
    }
  }
}

class Analysis extends Component {
  constructor () {
    super()
    this.state = {
      headDesc: "",
      headDocument:"",
      labelDocumentList: [],
      chartList: {
        ageList: [],
        rateList: []
      },
      "adviseContent":""
    }
  }
  componentWillMount () {
    this.props.init.bind(this)()
  }
  componentDidMount () {

  }
  render () {
    return (
      <div className='analysis'>
        <p>{this.state.headDesc}</p>
        <div className='echart' id='lineEcharts'></div>
        <p>{this.state.headDocument}</p>
        <ul>
          {
            this.state.labelDocumentList.map((v,i) => {
              return (
                <li key={i}>
                  <span>{v.labelName}</span>
                  <p>{v.documentContent}</p>
                </li>
              )
            })
          }
        </ul>
        <div className='threaten'></div>
        <p>健康保障建议：<span>{this.state.adviseContent}</span></p>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Analysis)
