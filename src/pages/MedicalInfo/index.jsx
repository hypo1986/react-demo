import React, {Component} from 'react'
import './index.less'
import FixedContent from '../../components/page/FixedContent.jsx'

export default class MedicalInfo extends Component {
  render () {
    return (
      <div className='diseaseinfo'>
        <div className='info-list'>
          <p className='title'><span>1</span>为什么要购买医疗险</p>
          <p className='con'>我们的一生是不可预测的，面对现在环境的污染，人类感染疾病的概率提高，昂贵的医疗费，只有医保一般是不够用的，解决这些问题最好的方法就是搭配一份商业医疗保险。</p>
        </div>
        <div className='nav-list'>
          <p className='subti'>患病几率上涨</p>
          <ul className='ulist'>
            <li style={{paddingTop: 0}}>
              <img src={require('./1.png')} />
              <p>全国总诊疗人次高达<span className='b'>78.9</span>亿次 <br />比上一年增加2.4亿次，同比涨幅3.1%</p>
            </li>
            <li>
              <img src={require('./2.png')} />
              <p>居民平均就诊次数<span className='b'>5.8</span>次<br />比上一年增加0.2次</p>
            </li>
            <li>
              <img src={require('./3.png')} />
              <p>一年内生病住院率<span className='b'>16.5%</span><br />比上一年增加1.3%，6个人中有1个人要住次院</p>
            </li>
          </ul>
          <p className='litile'>数据来源于：卫生和计划生育事业发展统计公报</p>
        </div>
        <div className='nav-list'>
          <p className='subti'>医保与商业医疗险区别</p>
          <p className='smt-text'>举个例子，王先生和李先生得了脑出血，需要住院治疗。王先生有基本社会保险，李先生除了有社保之外，还购买了百万医疗险。</p>
          <div className='img-tpl'><img src={require('./p01.jpg')} className='p01' /></div>
          <p className='smt-text'>同样的一场病，李先生因为购买了百万医疗险，住院花费自己只掏了一万元，而王先生因为只有社保，住院花费自己掏了13.6万元。可见，商业医疗险是医保的重要补充，能覆盖社保不能报销的部分，减轻家庭因看病产生的经济负担。
          </p>
        </div>
        <div className='nav-list'>
          <p className='subti'>常见医疗花费</p>
          <div className='img-tpl'><img src={require('./tb01.jpg')} className='tb01' /></div>
          <p className='l-bot'>常见治疗费用，购买百万医疗可以覆盖</p>
        </div>
        <div className='info-list'>
          <p className='title'><span>2</span>如何选择医疗险</p>
          <p className='con'>上面举例提到的医疗费用开支中，个人仍要承担30%或40%的比例，因此配置医疗险很有必要，下面我们就一起来看下如何选择一份相对比较好的商业医疗险？</p>
        </div>
        <div className='nav-list' style={{marginBottom: 0}}>
          <ul className='jblist'>
            <li>
              <span />
              <p className='t'>应选择覆盖医保目录外费用的产品</p>
              <p>目前医保报销比例一般在70%左右，很多医疗项目比如自费药、进口药、重症监护室费用社保都不能报销，因此配置商业医疗险时，应优先考虑能覆盖社保范围外用药的产品
              </p>
            </li>
            <li>
              <span />
              <p className='t'>尽量选择报销比例高的产品</p>
              <p>商业医疗险的报销比例有100%报销，也有非100%报销，在价格差不多的情况下，尽量选择100%报销的产品，才能从最大程度上抵御疾病风险</p>
            </li>
            <li>
              <span />
              <p className='t'>优先考虑抵御较大疾病风险的医疗产品</p>
              <p>有些人认为感冒发少频繁，因此购买医疗险会优先选择门诊险。事实上，一场感冒发生不会对家庭造成多大的损失，但一场大病会给家庭致命打击，在选择医疗险时，应优先选择能够抵御较大风险的产品，例如市面上的百万医疗险由于有1万的免赔额，可以让大多数人实现每年数百元甚至更低的保费，得到百万级别的医疗保障。</p>
            </li>
          </ul>
          <div className='img-tpl'><img src={require('./tb02.jpg')} className='tb01' /></div>
          <p className='l-bot'>常见治疗费用，购买百万医疗可以覆盖</p>
        </div>
        <div className='info-list'>
          <p className='title'><span>3</span>医疗险重疾险需要怎么买</p>
        </div>
        <div className='nav-list' style={{marginBottom: 0}}>
          <div className='img-tpl'><img src={require('./tb03.jpg')} className='tb01' /></div>
          <ul className='jblist' style={{paddingTop: '0.6rem'}}>
            <li>
              <span />
              <p className='t'>举个例子</p>
              <p style={{lineHeight: '0.5rem'}}>王女士同时购买了重疾险和百万医疗险，假若保障期间内王女士不幸的了恶性肿瘤<br />
                重疾险一次性赔付王女士50万<br />
                王女士住院治病花了30万，社保报销一部分，省下的医疗险全部报销<br />
                出院后，王女士拿着重疾险赔付的50万，实现了环游世界的梦想</p>
            </li>
          </ul>
          <p className='remind'>出于以上考虑，我们在综合分析了市面上常见的1736款医疗险产品后，<span className='or'>建议您购买如下产品：</span></p>
          <div className='product-list'>
            <ul className='pulist'>
              <li>
                <p className='name'>
                  <span>好医保长期医疗险</span>
                  <span className='ri'><span className='pb'>6787</span>元/年起</span>
                </p>
                <div className='pdetail'>
                  <div className='plist'>
                    <p className='be'>30万</p>
                    <p className='wa'>保额</p>
                  </div>
                  <div className='plist'>
                    <p className='be'>终身</p>
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
            <li>·100种重大疾病医疗保险金（0免赔额），600万</li>
            <li>·一般疾病及意外医疗保险金（1万免赔额），300万</li>
            <li>·可续保至100岁</li>
            <li>·就医绿色通道</li>
          </ul>
        </div>
      </div>
    )
  }
}
