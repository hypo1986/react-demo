import React from 'react'
// import { WingBlank, Button, WhiteSpace } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
// import DialogContent from '../../components/DialogContent.jsx'
// import FixedContent from '../../components/page/FixedContent.jsx'
import Scale from '../../components/Scale/Scale.jsx'
// import Questionnaire from '../../components/Questionnaire/Questionnaire.jsx'
import Scheme from '../Scheme/Scheme.jsx'
import Address from '../../components/Address/Address.jsx'
import SingleBox from '../../components/SingleBox/SingleBox.jsx'
import Switch from '../../components/Switch/Switch.jsx'
import Choices from '../../components/Choices/Choices.jsx'
import './home.less'
import {connect} from 'react-redux'
import actions from '../../redux/actions'
import {Router, Route, hashHistory} from 'react-router'
// import API from '../../api/api'
import server from '../../api/server'
import Immutable from 'immutable'
// import {getData} from './getData.jsx'
let _ = require('lodash')
const insStart = 3
class Home extends React.Component {
  componentWillMount () {
    this.props.init.bind(this)()
  }

  render () {
    let {questions, clildCurrentIndex, ansQuestionList, personList, questionList, familyDept, familyIncome} = this.props.homeInfo || {}
    let questionsLen = questions && questions.length - 1
    let clientHeight = document.documentElement.clientHeight || document.body.clientHeight

    let questionLen = questions && questions.length
    let questionListLen = questionList && questionList.length
    let proWidth = questionLen * (321 / questionListLen)
    let choisesIsAdd = false
    return (
      // <Scheme />
      // <FamilyAnaly />
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div className='process-bar'>
          <span className='process-line' style={{width: proWidth + 'px'}} />
        </div>
        <ul className='nav'>
          {questions && questions.map((item, index) => {
            let lists = item.answerList && item.answerList.map((ans, i) => {
              let newList = {}
              let {answerContent: sex} = ansQuestionList[0] || {}
              let {answerContent: marry} = ansQuestionList[1] || {}
              if (index === 2) {
                let isShow = true
                if ((marry === '100' || sex === '1') && i === 1) {
                  isShow = false
                } else if ((marry === '100' || sex === '0') && i === 2) {
                  isShow = false
                } else if (marry === '101' && (i === 5 || i === 6)) {
                  isShow = false
                }
                newList = {
                  value: ans.answerCode,
                  name: ans.answerName,
                  show: isShow
                }
                if (marry !== '101') {
                  choisesIsAdd = true
                }
              } else {
                newList = {
                  value: ans.answerCode,
                  name: ans.answerName,
                  show: true
                }
              }
              return newList
            })
            let answerInfo = ansQuestionList && ansQuestionList[index] && ansQuestionList[index].answerInfo
            let answerText = (answerInfo && answerInfo.name) || ''
            let answerContent = ''
            let isBtnPassed = false
            let newBtnArr = []
            if (index > 2) {
              personList && personList.map((itemPer) => {
                answerContent = itemPer.questionList[index - insStart].answerContent
                if (index === 5 || index === 4 || index === 7 || index === 8) {
                  answerContent = itemPer.questionList[index - insStart].answerDes
                }
                if (answerContent !== '-1') {
                  answerText = answerText + itemPer.personName + itemPer.questionList[index - insStart].questionTypeName + ':' + answerContent + (' \n ')
                }
                if (answerContent !== '') {
                  newBtnArr.push(answerContent)
                }
                // answerText = answerText + '<br/>'
              })
              if (newBtnArr.length === personList.length) {
                isBtnPassed = true
              }
            } else {
              if (item.answerType === '03') {
                let anserStr = ''
                answerInfo && answerInfo.map((itemAns) => {
                  if (itemAns.isChecked) {
                    anserStr = anserStr + itemAns.name + ','
                  }
                })
                if (anserStr.indexOf('本人') > -1) {
                  answerText = anserStr
                }
              }
            }
            let familyDefVal = 0
            if (index === 9) {
              personList && personList.map((itemPerb) => {
                let {personType: newType} = itemPerb || {}
                newType = newType | 0
                if (newType <= 3) {
                  let {answerContent: acVal} = itemPerb.questionList[3] || {}
                  familyDefVal += acVal
                }
              })
            }
            if (index === 5) {
              lists = lists.slice(0, 3)
            }
            answerText = answerText.replace(/,$/gi, '')
            return (
              <li key={index} ref={index === clildCurrentIndex ? 'lastChild' : ''} style={{height: questionsLen === index ? clientHeight + 'px' : ''}}>
                <div className='question'>
                  <div className='questionL'>
                    <div className='questionL_cont'>
                      {item.questionDesc}
                    </div>
                  </div>
                  <div className='loadingL' />
                </div>
                <div className='option'>
                  <div className='l'>
                    <div className='choiceItem'>
                      {item.answerType === '02' && (item.questionType === '01' || item.questionType === '02') && <SingleBox lists={lists} keyIndex={index} value={ansQuestionList && ansQuestionList[index] && ansQuestionList[index].answerInfo.value} onHandleClick={this.props.checkSex.bind(this)} />}
                      {index > 2 && index !== 9 &&
                        <div>
                          {personList && personList.map((itemPer, indexPer) => {
                            let {personType} = itemPer || {}
                            let newPersonType = personType | 0
                            let defaultVal = 0
                            let ageMinVal = 0
                            const curPersonVal = 30
                            if (newPersonType <= 3) {
                              defaultVal = curPersonVal
                              ageMinVal = 18
                            } else if (newPersonType > 3 && newPersonType <= 5) {
                              defaultVal = curPersonVal + 25
                              ageMinVal = 40
                            } else if (newPersonType > 5) {
                              defaultVal = curPersonVal - 25
                              ageMinVal = 0
                            }
                            return (
                              <div key={indexPer}>
                                {item.questionType === '04' && <Scale key={indexPer} defaultVal={defaultVal} thisIndex={indexPer} parentIndex={index} name={itemPer.personName + '年龄'} max='' min={ageMinVal} unit='岁' value={itemPer.questionList[index - insStart].answerContent} onHandleClick={this.props.checkScale.bind(this)} />}
                                {item.questionType === '05' && <Switch title={itemPer.personName} lists={lists} thisIndex={indexPer} parentIndex={index} value={itemPer.questionList[index - insStart].answerContent} onHandleClick={this.props.checkTwoSwitch.bind(this)} />}
                                {(item.questionType === '06' && newPersonType < 4) &&
                                  <div style={{overflow: 'hidden'}}>
                                    <div className='quesTitle'>{'选择' + itemPer.personName + item.questionTypeName + '类型'}</div>
                                    <SingleBox lists={lists} insType='selection' thisIndex={indexPer} parentIndex={index} value={itemPer.questionList[index - insStart].answerContent} insHandleClick={this.props.checkProfession.bind(this)} />
                                  </div>
                                }
                                {(item.questionType === '07' && newPersonType < 4) && <Scale key={indexPer} thisIndex={indexPer} parentIndex={index} name={itemPer.personName + '税后年收入'} max='' min='' unit='万元' value={itemPer.questionList[index - insStart].answerContent} onHandleClick={this.props.checkScale.bind(this)} />}
                                {item.questionType === '08' &&
                                  <div className='sel-area'>
                                    <Address title={itemPer.personName} upAreaInfo={indexPer && personList[indexPer - 1].questionList[index - insStart].answerArea} areaInfo={itemPer.questionList[index - insStart].answerArea} thisIndex={indexPer} parentIndex={index} onChange={this.props.changeArea.bind(this)} />
                                  </div>
                                }
                                {(item.questionType === '09' && newPersonType < 4) &&
                                  <div style={{overflow: 'hidden', marginTop: '20px'}}>
                                    <Choices title={'请选择' + itemPer.personName + '生活状态（可多选）'} keyIndex={index} lists={lists} thisIndex={indexPer} parentIndex={index} value={itemPer.questionList[index - insStart].answerSelectList} insHandleClick={this.props.changeLifeState.bind(this)} />
                                  </div>
                                }
                              </div>
                            )
                          })}
                          <button className={!isBtnPassed ? 'confirmAdd disableBtn' : 'confirmAdd'} onClick={this.props.addAnswer.bind(this, index, isBtnPassed)}>确认选择</button>
                        </div>
                      }
                      {item.questionType === '03' &&
                        <div>
                          <Choices title='多项选择' isAdd={choisesIsAdd} curChkVal='1' keyIndex={index} lists={lists} value={ansQuestionList && ansQuestionList[index] && ansQuestionList[index].answerInfo} onHandleClick={this.props.changeChoices.bind(this)} />
                          <button className={answerText === '' ? 'confirmAdd disableBtn' : 'confirmAdd'} onClick={this.props.addAnswer.bind(this, index, answerText)}>确认选择</button>
                        </div>
                      }
                      {item.questionType === '10' &&
                        <div>
                          <Scale defaultVal={familyDefVal / 10000} thisIndex='0' parentIndex={index} name='家庭税后年收入' max='' min='' unit='万' value={familyIncome} onHandleClick={this.props.checkScale.bind(this)} />
                          <Scale thisIndex='1' parentIndex={index} name='家庭负债' max='' min='' unit='万' value={familyDept} onHandleClick={this.props.checkScale.bind(this)} />
                          <button className='confirmAdd' onClick={this.props.submitQues.bind(this)}>确认选择</button>
                        </div>
                      }
                    </div>
                    <div className='determine'>
                      <div className='determineItem'>{answerText}</div>
                      {/* <div className='determineItem' onClick={this.props.resizeFn.bind(this, 'edit', index)}>{answerText}</div> */}
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = function (state, props) {
  let homeInfo = state.map.get('homeInfo')
  return {
    homeInfo: homeInfo && homeInfo.toJS()
  }
}
const mapDispatchToProps = function (dispatch, props) {
  return {
    init () {
      server.get('/intelligent/api/v3/question/queryAllQuestionInfo?version=1.5', {}).then((res) => {
        dispatch(actions.mapSet('homeInfo', Immutable.fromJS({
          questionList: res.data,
          questions: [res.data[0]],
          ansQuestionList: []
        })))
      })
    },
    getParentNode (el, eleClass) {
      while (!el.parentElement.classList.contains(eleClass)) {
        el = el.parentElement
      }
      return el.parentElement
    },
    addQuestion (i) {
      let {questionList, questions, personList} = this.props.homeInfo
      if (questions.length - 1 <= i) {
        let nextQuestion = questionList[i + 1]
        questions.push(nextQuestion)
        let answerContent = ''
        let answerDes = ''
        personList && personList.map((item, index) => {
          if (nextQuestion.questionType === '05') {
            answerContent = nextQuestion.answerList[0].answerCode
            answerDes = nextQuestion.answerList[0].answerName
          }
          item.questionList.push({
            questionNum: nextQuestion.questionNum,
            // questionType: nextQuestion.questionType,
            questionTypeName: nextQuestion.questionTypeName,
            // answerType: nextQuestion.answerType,
            answerContent: answerContent,
            answerDes: answerDes
          })
        })
        dispatch(actions.mapSet('homeInfo', 'personList', Immutable.fromJS(personList)))
        dispatch(actions.mapSet('homeInfo', 'questions', Immutable.fromJS(questions)))
      }
    },
    backToTop (rate) {
      let doc = document.body.scrollTop ? document.body : document.documentElement
      // document.getElementsByTagName('body')[0].style.height = +window.getComputedStyle(document.getElementsByTagName('body')[0]).height.replace(/px/g, '') + rate + 'px'
      // console.log(document.getElementsByTagName('body')[0].style.height)
      let scrollTop = doc.scrollTop
      let top = function () {
        scrollTop = scrollTop + 5
        // 临界判断，终止动画
        if (scrollTop >= rate) {
          doc.scrollTop = rate
          return
        }
        doc.scrollTop = scrollTop
        window.requestAnimationFrame(top)
      }
      top()
    },
    resizeTransform (ele, time, i, thisIndex) {
      if (typeof window.getComputedStyle === 'undefined') return
      const resizeEle = this.props.getParentNode(ele, 'l')
      const widthEle = window.getComputedStyle(resizeEle).width
      const heightEle = window.getComputedStyle(resizeEle).height
      resizeEle.children[0].style.display = 'none'
      let parentsNode = this.props.getParentNode(ele, 'option')
      if (parentsNode.classList.contains('active')) {
        parentsNode.classList.remove('active')
        resizeEle.children[0].style.display = 'block'
        resizeEle.children[1].style.display = 'none'
      } else {
        parentsNode.classList.add('active')
        resizeEle.children[0].style.display = 'none'
        resizeEle.children[1].style.display = 'block'
      }
      resizeEle.style.transition = 'none'
      resizeEle.style.width = 'auto'
      resizeEle.style.height = 'auto'
      const widthEleNex = window.getComputedStyle(resizeEle).width
      const heightEleNex = window.getComputedStyle(resizeEle).height
      resizeEle.style.width = widthEle
      resizeEle.style.height = heightEle
      resizeEle.style.offsetWidth = resizeEle.offsetWidth + 'px'
      if (time) resizeEle.style.transition = 'all ' + time + 'ms'

      if (parentsNode.classList.contains('active')) {
        resizeEle.style.width = widthEleNex
        resizeEle.style.height = heightEleNex
      } else {
        resizeEle.style.width = '100%'
        resizeEle.style.height = 'auto'
      }
      setTimeout(() => {
        if (parentsNode.classList.contains('active')) {
          this.props.backToTop(this.refs.lastChild.offsetTop)
        }
      }, time)
      if (i !== 'edit') {
        this.props.addQuestion.call(this, i)
        dispatch(actions.mapSet('homeInfo', 'clildCurrentIndex', i + 1))
      } else {
        dispatch(actions.mapSet('homeInfo', 'clildCurrentIndex', thisIndex))
      }
    },
    resizeFn (e, i, thisIndex) {
      this.props.resizeTransform.call(this, e === 'edit' ? thisIndex.target : e.target, 900, e === 'edit' ? e : i, i)
    },
    checkSex (env, selObj, index) {
      let {ansQuestionList, questions} = this.props.homeInfo
      ansQuestionList[index] = {
        questionNum: questions[index].questionNum,
        questionType: questions[index].questionType,
        questionTypeName: questions[index].questionTypeName,
        answerType: questions[index].answerType,
        answerContent: selObj.value,
        answerInfo: selObj
      }
      dispatch(actions.mapSet('homeInfo', 'ansQuestionList', ansQuestionList))
      this.props.resizeFn.call(this, env, index)
    },
    checkProfession (item, thisIndex, parentIndex) {
      let {personList} = this.props.homeInfo
      personList[thisIndex].questionList[parentIndex - insStart].answerContent = item.value
      personList[thisIndex].questionList[parentIndex - insStart].answerDes = item.name
      personList && personList.map((itemb, i) => {
        let {personType} = itemb || {}
        personType = personType | 0
        if (personType > 3) {
          personList[i].questionList[parentIndex - insStart].answerContent = '-1'
          personList[i].questionList[parentIndex - insStart].answerDes = '-1'
        }
      })
      dispatch(actions.mapSet('homeInfo', 'personList', Immutable.fromJS(personList)))
    },
    checkSingle (env, selObj) {
      dispatch(actions.mapSet('homeInfo', 'singleValue', selObj))
      this.props.resizeFn.call(this, env)
    },
    checkTwoSwitch (item, thisIndex, parentIndex) {
      let {personList} = this.props.homeInfo
      personList[thisIndex].questionList[parentIndex - insStart].answerContent = item.value
      personList[thisIndex].questionList[parentIndex - insStart].answerDes = item.name
      dispatch(actions.mapSet('homeInfo', 'personList', Immutable.fromJS(personList)))
    },
    changeChoices (env, selectLists, index) {
      let {ansQuestionList, questions} = this.props.homeInfo
      let answerContent = ''
      selectLists && selectLists.map((itemAns) => {
        if (itemAns.isChecked) {
          answerContent = answerContent + itemAns.value + ','
        }
      })
      ansQuestionList[index] = {
        questionNum: questions[index].questionNum,
        questionType: questions[index].questionType,
        questionTypeName: questions[index].questionTypeName,
        answerType: questions[index].answerType,
        answerContent: answerContent.replace(/,$/gi, ''),
        answerInfo: selectLists
      }
      dispatch(actions.mapSet('homeInfo', 'ansQuestionList', Immutable.fromJS(ansQuestionList)))
      if (questions[index].questionType === '03') {
        let personList = []
        selectLists && selectLists.map((itemAns) => {
          if (itemAns.isChecked) {
            personList.push({
              personType: itemAns.value,
              personName: itemAns.name,
              questionList: []
            })
          }
        })
        _.remove(questions, function (n, index) {
          return index > 2
        })
        dispatch(actions.mapSet('homeInfo', 'questions', Immutable.fromJS(questions)))
        dispatch(actions.mapSet('homeInfo', 'personList', Immutable.fromJS(personList)))
      }
    },
    addAnswer (i, answerText, env) {
      if (!answerText) return
      this.props.resizeFn.call(this, env, i)
    },
    checkScale (val, thisIndex, parentIndex) {
      let {personList} = this.props.homeInfo
      if (parentIndex === 9) {
        if (thisIndex === '0') {
          dispatch(actions.mapSet('homeInfo', 'familyIncome', val))
        } else {
          dispatch(actions.mapSet('homeInfo', 'familyDept', val))
        }
      } else {
        if (parentIndex === 6) {
          val = val * 10000
          personList && personList.map((itemb, i) => {
            let {personType} = itemb || {}
            personType = personType | 0
            if (personType > 3) {
              personList[i].questionList[parentIndex - insStart].answerContent = '-1'
            }
          })
        }
        personList[thisIndex].questionList[parentIndex - insStart].answerContent = val
        dispatch(actions.mapSet('homeInfo', 'personList', Immutable.fromJS(personList)))
      }
    },
    changeArea (areaInfo, thisIndex, parentIndex) {
      let {personList} = this.props.homeInfo
      personList[thisIndex].questionList[parentIndex - insStart].answerContent = areaInfo.cityCode
      personList[thisIndex].questionList[parentIndex - insStart].answerDes = areaInfo.cityName + areaInfo.provinceName
      personList[thisIndex].questionList[parentIndex - insStart].answerArea = areaInfo
      dispatch(actions.mapSet('homeInfo', 'personList', Immutable.fromJS(personList)))
    },
    changeLifeState (selectLists, thisIndex, parentIndex) {
      let {personList} = this.props.homeInfo
      let answerDes = ''
      let answerContent = ''
      selectLists && selectLists.map((itemAns) => {
        if (itemAns.isChecked) {
          answerDes = answerDes + itemAns.name + ','
          answerContent = answerContent + itemAns.value + ','
        }
      })
      personList && personList.map((itemb, i) => {
        let {personType} = itemb || {}
        personType = personType | 0
        if (personType > 3) {
          personList[i].questionList[parentIndex - insStart].answerContent = '-1'
          personList[i].questionList[parentIndex - insStart].answerDes = '-1'
        }
      })
      personList[thisIndex].questionList[parentIndex - insStart].answerContent = answerContent.replace(/,$/gi, '')
      personList[thisIndex].questionList[parentIndex - insStart].answerDes = answerDes.replace(/,$/gi, '')
      personList[thisIndex].questionList[parentIndex - insStart].answerSelectList = selectLists
      dispatch(actions.mapSet('homeInfo', 'personList', Immutable.fromJS(personList)))
    },
    submitQues () {
      let {ansQuestionList, personList, familyIncome, familyDept} = this.props.homeInfo
      personList && personList.forEach((item) => {
        let {personType, questionList} = item || {}
        personType = personType | 0
        if (personType < 4) {
          delete questionList[5].answerSelectList
        }
      })
      familyDept = familyDept || 0
      personList.forEach((item) => {
        let {personType, questionList} = item || {}
        personType = personType | 0
        if (personType === 4 || personType === 5) {
          questionList[2].answerContent = '退休'
          questionList[2].answerDes = '退休'
        } else if (personType > 5) {
          questionList[2].answerContent = '学生'
          questionList[2].answerDes = '学生'
        }
      })
      let submitData = {
        familyType: ansQuestionList[1].answerContent,
        familyIncome: String(familyIncome * 10000),
        familyDept: String(familyDept * 10000),
        sex: ansQuestionList[0].answerContent,
        socialSecurity: personList[0].questionList[1].answerContent,
        age: personList[0].questionList[0].answerContent,
        areaCode: personList[0].questionList[4].answerContent,
        areaName: personList[0].questionList[4].answerArea.cityName,
        familyStructureDesc: ansQuestionList[1].answerInfo.name,
        personList: personList
      }
      server.post('/intelligent/api/v3/plan/subOrder?version=1.5', {jsonStr: JSON.stringify(submitData)}).then((res) => {
        let success = res.success
        if (success) {
          if (res.data) {
            this.props.history.push('/scheme/' + res.data)
            // this.props.history.push({
            //   pathname: '/scheme',
            //   state: {
            //     orderId: res.data
            //   }
            // })
          }
        } else {
          alert(res.error.message)
        }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
