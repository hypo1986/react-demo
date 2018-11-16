import React, {Component} from 'react'
import './index.less'
import FixedContent from '../../components/page/FixedContent.jsx'

export default class DiseaseInfo extends Component {
  render () {
    return (
      <div className='diseaseinfo'>
        <div className='info-list'>
          <p className='title'><span>1</span>为什么要购买寿险</p>
          <p className='con'>如果说重疾险是买给自己的，那么寿险就是买给家人的保险。身为家庭的顶梁柱，每个人肩上都有一份沉甸甸的责任，养房子、养孩子、养父母，如若不幸身故，家庭在情感和经济上都将遭受巨大的冲击，寿险是家庭财务安全的“定海神针”，是对家人最大的关爱。</p>
        </div>
        <div className='nav-list'>
          <p className='subti'>身故风险无处不在</p>
          <ul className='ulist'>
            <li style={{paddingTop: 0}}>
              <img src={require('./1.png')} />
              <p>未来29年内，您身边的100个同龄人中 <br />重疾或身故的人有<span className='s'>8</span>人</p>
            </li>
            <li>
              <img src={require('./2.png')} />
              <p>全国每年因疾病死亡的人数约<span className='b'>12</span>万人</p>
            </li>
            <li>
              <img src={require('./3.png')} />
              <p>全国每年意外死亡人数约<span className='b'>20</span>万人</p>
            </li>
          </ul>
        </div>
        <div className='nav-list'>
          <p className='subti'>哪些人需要寿险</p>
          <img className="bigimg" src={require('./whybug.png')} />
          <p className='smt0'>以下人群必备寿险</p>
          <ul className="list">
            <li>有孩子要养的人</li>
            <li>有父母需要赡养的人</li>
            <li>家里负债比较高的人</li>
            <li>家庭重要经济贡献的人</li>
          </ul>
        </div>
        <div className='info-list'>
          <p className='title'><span>2</span>怎么选择寿险</p>
          <p className='con'>
            1、身故和全残保障不可少<br/>
            2、等待期越短越好<br/>
            3、将康告知越宽松越好<br/>
            4、相同保障价格越便宜越好<br/>
          </p>
        </div>
        <div className='nav-list' style={{marginBottom: 0, paddingLeft: 0, paddingRight: 0}}>
          <img src={require('./table.jpg')} width='100%' />
        </div>
        <div className='info-list'>
          <p className='title'><span>3</span>为什么这么配置</p>
          <p className='con'>
            寿险分为定期寿险和终身寿险，定期寿险只保障一定的期限， 比如保障到60周岁，在保障期限内身故，家人可以拿到保险公司赔付身故保险金，保险到期未身故，则保险金不予退还，合同结束。根据您的家庭成员结构和家庭负债及收入情况，建议您最少配置xx万定期寿险作为基本保障。
          </p>
        </div>
        <div className='caseImg'>
          <img src={require('./case.png')} />
        </div>
        <div className='nav-list' style={{marginBottom: 0, paddingTop: 0}}>
          <p className="remind">
            <b>为什么不推荐终身寿险？ 终身寿险的保险期?</b>
            终身寿险的保险期间是终身，无论何时身故都能拿到身故赔偿，但终身寿险的保费特别高，如果没有资产传承的目的，不建议购买。举个例子：28岁王女士购买100万保额的定期寿险可能每年需要1000元，终身寿险则高达8000多元每年
          </p>
          <p className='remind'>出于以上考虑，我们在综合分析了市面上常见的1736款重疾产品后，<span className='or'>建议您组合购买如下俩款产品：</span></p>
          <div className='product-list'>
            <ul className='pulist'>
              <li>
                <p className='name'>
                  <span>悟空保</span>
                  <span className='ri'><span className='pb'>6787</span>元/年起</span>
                </p>
                <div className='pdetail'>
                  <div className='plist'>
                    <p className='be'>190万</p>
                    <p className='wa'>保额</p>
                  </div>
                  <div className='plist'>
                    <p className='be'>60岁</p>
                    <p className='wa'>保障期限</p>
                  </div>
                  <div className='plist'>
                    <p className='be'>30年</p>
                    <p className='wa'>交费年限</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <p className='pwhy'>配置理由：</p>
          <ul className='whylist'>
            <li>·250万以内免费体检，线上投保方便</li>
            <li>·健康告知仅4条，投保要求宽泛 </li>
            <li>·针对非抽烟体价格优惠</li>
          </ul>
        </div>
      </div>
    )
  }
}
