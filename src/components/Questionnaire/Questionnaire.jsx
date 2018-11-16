import React, { Component } from 'react'
import RadioCom from '../../components/RadioCom/RadioCom.jsx'
import './Questionnaire.css'
import imgLocal from './1.jpg'

export default class Questionnaire extends Component {
  constructor () {
    super()
    this.getParentNode = this.getParentNode.bind(this)
    this.resizeFn = this.resizeFn.bind(this)
    this.resizeTransform = this.resizeTransform.bind(this)
    this.backToTop = this.backToTop.bind(this)
  }

  getParentNode (el, eleClass) {
    while (!el.parentElement.classList.contains(eleClass)) {
      el = el.parentElement
    }
    return el.parentElement
  }

  resizeFn (e) {
    console.log('123')
    // let parentsNode = this.getParentNode(e.target, 'option')
    // parentsNode.classList.add('active')
    // funTransitionChange($(this), 900)
    this.resizeTransform(e.target, 900)
  }

  backToTop (rate) {
    let doc = document.body.scrollTop ? document.body : document.documentElement
    document.getElementsByTagName('body')[0].style.height = +window.getComputedStyle(document.getElementsByTagName('body')[0]).height.replace(/px/g, '') + rate + 'px'
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
  }

  resizeTransform (ele, time) {
    if (typeof window.getComputedStyle === 'undefined') return
    const resizeEle = this.getParentNode(ele, 'l')
    const widthEle = window.getComputedStyle(resizeEle).width
    const heightEle = window.getComputedStyle(resizeEle).height
    resizeEle.children[0].style.display = 'none'
    let parentsNode = this.getParentNode(ele, 'option')
    console.log(parentsNode.classList)
    if (parentsNode.classList.contains('active')) {
      parentsNode.classList.remove('active')
      resizeEle.children[0].style.display = 'block'
    } else {
      parentsNode.classList.add('active')
      resizeEle.children[0].style.display = 'none'
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
    let scrollBodyHeight = 0
    let scrollBodyLi = 0
    setTimeout(() => {
      scrollBodyHeight = +window.getComputedStyle(resizeEle.parentNode.parentNode).height.replace(/px/g, '')
      scrollBodyLi = +window.getComputedStyle(resizeEle.parentNode.parentNode).marginBottom.replace(/px/g, '')
      if (parentsNode.classList.contains('active')) {
        // this.backToTop(+document.documentElement.scrollTop + scrollBodyHeight + scrollBodyLi)
        this.backToTop(+resizeEle.parentNode.parentNode.offsetTop + scrollBodyHeight + scrollBodyLi)
      }
    }, time)
  }

  componentDidMount () {
    // $('.choiceItem .choiceItemOption').click(function () {
    //   var showTrueCon = ''
    //   showTrueCon = $(this).text()
    //   var $showTrueDom = $(this).parents('.choiceItem').next()
    //   $showTrueDom.html(showTrueCon)
    //   $(this).parents('.option').addClass('active')
    //   funTransitionChange($(this), 900)
    // })

    // function funTransitionChange (element, time) {
    //   if (typeof window.getComputedStyle === 'undefined') return
    //   var $parent = element.parents('.l')
    //   var height = $parent.height()
    //   var width = $parent.width()
    //   $parent.children('.choiceItem').css('display', 'none')
    //   $parent.children('.determine').css('diaplay', 'block').css('visibility', 'hidden')
    //   $parent.css('transition', 'none')
    //   $parent.css('width', 'auto')
    //   $parent.css('height', 'auto')
    //   var targetHeight = $parent.height()
    //   var targetWidth = $parent.width()
    //   $parent.css('width', width)
    //   $parent.css('height', height)
    //   $parent[0].offsetWidth = $parent[0].offsetWidth
    //   if (time) $parent.css('transition', 'all ' + time + 'ms')
    //   $parent.css('width', targetWidth)
    //   $parent.css('height', targetHeight)
    //   setTimeout(function () {
    //     $parent.children('.determine').css('visibility', 'visible')
    //     $('body').css('height', $('body').height() + $parent.parents('li').height() + 400)
    //     $('html, body').animate({
    //       scrollTop: $('html, body').scrollTop() + $parent.parents('li').height() + 20
    //     }, 500)
    //   }, time - 200)
    // }
  }

  render () {
    return (
      <ul className='nav'>
        <li>
          <div className='question'>
            <div className='portraitL'>
              <div className='portraitL_img'>
                <img src={imgLocal} alt='' />
              </div>
            </div>
            <div className='questionL'>
              <div className='questionL_cont'>
                达到发发第三方士大夫阿萨德发斯蒂芬所发生的发送发送到发送发送到发顺丰范阿萨德发顺丰阿斯顿发斯蒂芬
              </div>
            </div>
            <div className='loadingL' />
          </div>
          <div className='option'>
            <RadioCom onClick={this.resizeFn} />
            <div className='r'>
              <div className='portraitR_img'>
                <img src={imgLocal} alt='' />
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className='question'>
            <div className='portraitL'>
              <div className='portraitL_img'>
                <img src={imgLocal} alt='' />
              </div>
            </div>
            <div className='questionL'>
              <div className='questionL_cont'>
                达到发发第三方士大夫阿萨德发斯蒂芬所发生的发送发送到发送发送到发顺丰范阿萨德发顺丰阿斯顿发斯蒂芬
              </div>
            </div>
            <div className='loadingL' />
          </div>
          <div className='option'>
            <RadioCom onClick={this.resizeFn} />
            <div className='r'>
              <div className='portraitR_img'>
                <img src={imgLocal} alt='' />
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className='question'>
            <div className='portraitL'>
              <div className='portraitL_img'>
                <img src={imgLocal} alt='' />
              </div>
            </div>
            <div className='questionL'>
              <div className='questionL_cont'>
                达到发发第三方士大夫阿萨德发斯蒂芬所发生的发送发送到发送发送到发顺丰范阿萨德发顺丰阿斯顿发斯蒂芬
              </div>
            </div>
            <div className='loadingL' />
          </div>
          <div className='option'>
            <RadioCom onClick={this.resizeFn} />
            <div className='r'>
              <div className='portraitR_img'>
                <img src={imgLocal} alt='' />
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className='question'>
            <div className='portraitL'>
              <div className='portraitL_img'>
                <img src={imgLocal} alt='' />
              </div>
            </div>
            <div className='questionL'>
              <div className='questionL_cont'>
                达到发发第三方士大夫阿萨德发斯蒂芬所发生的发送发送到发送发送到发顺丰范阿萨德发顺丰阿斯顿发斯蒂芬
              </div>
            </div>
            <div className='loadingL' />
          </div>
          <div className='option'>
            <RadioCom onClick={this.resizeFn} />
            <div className='r'>
              <div className='portraitR_img'>
                <img src={imgLocal} alt='' />
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className='question'>
            <div className='portraitL'>
              <div className='portraitL_img'>
                <img src={imgLocal} alt='' />
              </div>
            </div>
            <div className='questionL'>
              <div className='questionL_cont'>
                达到发发第三方士大夫阿萨德发斯蒂芬所发的说法是打发第三方达阿斯顿发生打算地方生的发送发送到发送发送到发顺丰范阿萨德发顺丰阿斯顿发斯蒂芬达到发发第三方士大夫阿萨德发斯蒂芬所发的说法是打发第三方达阿斯顿发生打算地方生的发送发送到发送发送到发顺丰范阿萨德发顺丰阿斯顿发斯蒂芬
              </div>
            </div>
            <div className='loadingL' />
          </div>
          <div className='option'>
            <div className='l'>
              <div className='choiceItem'>
                <div className='choiceItemOption'>男</div>
                <div className='choiceItemOption'>女</div>
              </div>
              <div className='determine'>
                <div className='determineItem' />
              </div>
            </div>
            <div className='r'>
              <div className='portraitR_img'>
                <img src={imgLocal} alt='' />
              </div>
            </div>
          </div>
        </li>
      </ul>
    )
  }
}
