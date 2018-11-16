import React, {Component} from 'react'
import './index.less'
// import FixedContent from '../../components/page/FixedContent.jsx'

export default class DiseaseInfo extends Component {
  render () {
    return (
      <div className='diseaseinfo'>
        <div className='info-list'>
          <p className='title'><span>1</span>为什么要购买意外险</p>
          <p className='con'>谁也不知道明天发生什么，谁也不知道意外和明天哪个先到来？风险无处不在，无法避免，谁能保证自己一辈子不发生意外？意外往往会给人们造成巨大的损失，会让人猝不及防，尤其是对家庭经济支柱，会起到毁灭家庭的经济生命作用。</p>
        </div>
        <div className='nav-list'>
          <p className='subti'>意外无处不在</p>
          <p className='subti-b'>我国每年死于非正常死亡的人数逾<span>800</span>万</p>
          <ul className='ulist'>
            <li>
              <img src={require('./1.png')} />
              <p>每年因交通事故死亡的约<span className='b'>6</span>万人</p>
            </li>
            <li>
              <img src={require('./2.png')} />
              <p>火灾年平均损失近<span className='b'>200</span>亿<br />伤亡人数达<span className='s'>2300</span>多人</p>
            </li>
            <li>
              <img src={require('./3.png')} />
              <p>每年因溺水死亡人数约<span>5.7</span>万人<br />其中0-14岁儿童约占<span className='b'>56%</span></p>
            </li>
            <li>
              <img src={require('./3.png')} />
              <p>每年触电死亡的约<span>8000</span>人</p>
            </li>
          </ul>
        </div>
        <div className='nav-list'>
          <p className='subti'>怎么样算意外</p>
          <p className='smt-box'>保险中的意外和我们平常说的意外是有区别的，我们平常所理解的意外只要是突然发生的事件都可称作是意外，而保险中的意外必须同时满足以下四个条件，这四个条件缺一不可。</p>
          <ul className={'st-item'}>
            <li>非疾病的</li>
            <li>突发的</li>
            <li>非本意的</li>
            <li>外来的</li>
          </ul>
          <p className='subti-c'>哪些可能不属于意外？</p>
          <p className='smt-box'>
            <span><strong>1、猝死</strong> - 猝死一般是因为身体长期疲劳而造成的，属于疾病死亡，并非意外。</span>
            <span><strong>2、手术意外</strong> - 手术一般是由于疾病引起的，如果在手术过程中出现状况导致意外死亡，不属于意外伤害。</span>
            <span><strong>3、高原反应</strong> - 一般来说，由于高原反应导致的医治无效不幸辞世，保险公司不予赔付。</span>
            <span><strong>4、</strong> 其他突如其来的疾病导致的死亡等也不属于意外</span>
          </p>
        </div>
        <div className='info-list'>
          <p className='title'><span>2</span>怎么选择意外险</p>
        </div>
        <div className='nav-list' style={{marginBottom: 0, paddingLeft: 0, paddingRight: 0}}>
          <img src={require('./table.jpg')} width='100%' />
        </div>
        <div className='info-list'>
          <p className='title'><span>3</span>为什么这么配置</p>
          <p className='con'>意外身故伤残是成年人高发风险，意外险的性价比较高，保额建议配置3-5倍的年收入，以防意外事故发生时，家庭遭受巨大的医疗费损失和收入损失</p>
        </div>
        <div className='nav-list' style={{marginBottom: 0}}>
          <ul className='ulist-b'>
            <li>
              <img src={require('./1.png')} />
              <p><strong>高额的医疗费</strong>因意外造成身体上的伤害，高额医疗费用如何支付？甚至不得不变卖家产去治疗。</p>
            </li>
            <li>
              <img src={require('./2.png')} />
              <p><strong>家庭收入损失</strong>意外发生后，不能正常工作，家庭收入减少，巨额房贷、车贷怎么还？家人生活品质如何保障？</p>
            </li>
            <li>
              <img src={require('./3.png')} />
              <p><strong>意外影响几代人</strong>因意外身故，家人在承受失去家人痛苦时还要面临残酷的现实，孩子成长基金、父母要老费用谁承担</p>
            </li>
          </ul>
          <p className='smt-box'>出于以上考虑，我们在综合分析了市面上常见的1736款重疾产品后，<span className={'b'}>建议您组合购买如下俩款产品：</span></p>
          <div className='product-list'>
            <ul className='pulist'>
              <li>
                <p className='name'>
                  <span>护身符意外险</span>
                  <span className='ri'><span className='pb'>6787</span>元/年起</span>
                </p>
                <div className='pdetail'>
                  <div className='plist'>
                    <p className='be'>50万</p>
                    <p className='wa'>保额</p>
                  </div>
                  <div className='plist'>
                    <p className='be'>1年</p>
                    <p className='wa'>保障期限</p>
                  </div>
                  <div className='plist'>
                    <p className='be'>1年</p>
                    <p className='wa'>交费年限</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <p className='pwhy'>配置理由：</p>
          <ul className='whylist'>
            <li>· 意外身故保险金，50万</li>
            <li>· 意外全残补助金，50万</li>
            <li>· 猝死保险金，50万</li>
            <li>· 意外伤残保险金，5万</li>
            <li>· 保险年龄，16-65岁</li>
          </ul>
        </div>
      </div>
    )
  }
}
