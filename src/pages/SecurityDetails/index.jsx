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
      server.post('/intelligent/api/v3/risk/queryRiskDutyInfo?version=1.5', {
        userId: '',
        orderId: this.props.match.params.orderId,
        userFamilyRequestId: this.props.match.params.userFamilyRequestId,
        riskCode: this.props.match.params.riskId
      })
      .then(res => {
        this.setState({
          dutyList: res.data.dutyList
        })
      })
    }
  }
}

class Notification extends Component {
  constructor () {
    super()
    this.state = {
      dutyList: []
    }
  }
  componentWillMount () {
    this.props.init.bind(this)()
  }
  componentDidMount () {
  }
  render () {
    return (
      <div className='securityDetails'>
        <ul>
          {
            this.state.dutyList.map((v,i) => {
              return (
                <li key={i}>
                  <p>{v.dutyName}&nbsp;&nbsp;&nbsp;&nbsp;{v.dutyAmount}</p>
                  <p>{v.dutyDesc}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Notification)
