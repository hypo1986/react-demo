import React, {Component} from 'react'
import './Address.less'
import FixedContent from '../page/FixedContent.jsx'
// import actions from 'actions'
// import Immutable from 'immutable'
import server from '../../api/server'

class Address extends Component {
  constructor (props) {
    super(props)
    let {areaInfo} = this.props
    this.state = {
      isShowSelect: false,
      tabCurIndex: 0,
      areaInfo: areaInfo || {
        cityCode: '',
        cityName: '请选择',
        provinceCode: '',
        provinceName: '请选择'
      }
    }
  }

  showPopup () {
    server.get('/intelligent/api/v3/common/queryAreaInfo?version=1.5&areaLevel=1', {}).then((res) => {
      console.log(res)
      this.setState({
        isShowSelect: true,
        provinceList: res.data
      })
    })
  }

  closePopup () {
    this.setState({
      isShowSelect: false
    })
  }
  changeUp () {
    let {upAreaInfo, onChange, thisIndex, parentIndex} = this.props
    if(upAreaInfo){
      this.setState({
        areaInfo: upAreaInfo
      })
      onChange(upAreaInfo, thisIndex, parentIndex)
    }
  }
  renderInputBox () {
    let {title, thisIndex} = this.props
    let {cityName, provinceName} = this.state.areaInfo
    let areaName = cityName !== '请选择' && provinceName !== '请选择' && (cityName)
    return (
      <div className='areaInfo'>
        <div className='left'>{title}</div>
        <div className='right' onClick={() => this.showPopup()}>{areaName || '点击选择城市'} </div>
        {thisIndex > 0 && <div className={'aside on'} onClick={() => this.changeUp()}>
          <span>&nbsp;</span>同上
        </div>}
      </div>
    )
  }

  changeArea (i) {
    this.setState({
      tabCurIndex: i
    })
  }

  setCityInfo (code, cname) {
    let {onChange, thisIndex, parentIndex} = this.props
    let {provinceCode, provinceName} = this.state.areaInfo
    let areaInfo = {
      cityCode: code,
      cityName: cname,
      provinceCode: provinceCode,
      provinceName: provinceName
    }
    this.setState({
      areaInfo: areaInfo
    })
    onChange(areaInfo, thisIndex, parentIndex)
    this.closePopup()
  }

  setProvinceInfo (code, name) {
    server.get('/intelligent/api/v3/common/queryAreaInfo?version=1.5&areaLevel=2&areaCode=' + code, {}).then((res) => {
      console.log(res)
      this.setState({
        areaInfo: {
          provinceCode: code,
          provinceName: name,
          cityCode: '',
          cityName: '请选择'
        },
        cityList: res.data
      })
      this.changeArea(1)
    })
  }

  render () {
    let {isShowSelect, tabCurIndex, provinceList, cityList, areaInfo} = this.state
    return (
      <FixedContent className='this'>

        {this.renderInputBox()}

        {isShowSelect &&
        <div className='chooseMask' onClick={() => this.closePopup()} />}

        {isShowSelect &&
        <div className='chooseBox'>
          <div className='chooseTop'>
            <ul className='titleCenter'>
              <li className={tabCurIndex === 0 ? 'active' : ''} onClick={() => this.changeArea(0)}>{areaInfo.provinceName}</li>
              <li className={tabCurIndex === 1 ? 'active' : ''} onClick={() => this.changeArea(1)}>{areaInfo.cityName}</li>
            </ul>
          </div>
          <ul className={tabCurIndex === 0 ? 'trans0 chooseContainer' : 'trans1 chooseContainer'}>
            <li>
              {provinceList && provinceList.map((item, index) => {
                return (
                  <div className={areaInfo.provinceCode === item.areaCode ? 'active' : ''} key={index} onClick={() => this.setProvinceInfo(item.areaCode, item.areaName)}>{item.areaName}</div>
                )
              })}
            </li>
            <li>
              {cityList && cityList.map((item, index) => {
                return (
                  <div className={areaInfo.cityCode === item.areaCode ? 'active' : ''} key={index} onClick={() => this.setCityInfo(item.areaCode, item.areaName)}>{item.areaName}</div>
                )
              })}
            </li>
          </ul>
        </div>
        }
      </FixedContent>
    )
  }
}
export default Address
