import React, {Component} from 'react'
import './index.less'
import FixedContent from '../../components/page/FixedContent.jsx'

export default class DiseaseInfo extends Component {
  render () {
    return (
      <div className='diseaseinfo'>
        <div className='info-list'>
          <p className='title'><span>1</span>为什么要购买重疾险</p>
          <p className='con'>生病固然可怕，但更可怕的是没钱治病，一份重疾险，虽然不能杜绝所有的疾病，但却能让一场重病有了被医治的可能，让家人不用在金钱和生命之中做选择，避免因病致贫的深渊。</p>
        </div>
        <div className='nav-list'>
          <p className='subti'>重疾发生率高</p>
          <ul className='ulist'>
            <li style={{paddingTop: 0}}>
              <img src={require('./1.png')} />
              <p>我国每年新发肿瘤病例为<span className='b'>3120000</span>例 <br />每天平均<span className='s'>8550</span>例</p>
            </li>
            <li>
              <img src={require('./2.png')} />
              <p>每分钟有<span className='b'>3120000</span>人被诊断为癌症<br />有<span className='s'>5</span>人死于癌症</p>
            </li>
            <li>
              <img src={require('./3.png')} />
              <p>人一生中患重大疾病<br />几率高达<span className='b'>72.18%</span></p>
            </li>
          </ul>
          <p className='litile'>中国人身保险业重大疾病经验发生率表（2006-2018）</p>
          <p className='remind'>基于你经常【抽烟】、【熬夜】的生活行为习惯，以及医疗大数据、重疾发生率赔付和《中国人身保险业重大疾病发生率表》判断，<span className='or'>你的患重疾的概率相比同龄人较高。</span></p>
        </div>
        <div className='nav-list'>
          <p className='subti'>医疗费用改  损失重大</p>
          <p className='smt'>当不幸遭遇一场重疾时，你将面临：</p>
          <ul className='yllist'>
            <li>
              <img src={require('./zl.png')} />
              <p className='bl'>治疗费</p>
              <p>10-50万</p>
            </li>
            <li>
              <img src={require('./yy.png')} />
              <p className='bl'>营养费</p>
              <p>3-5万</p>
            </li>
            <li>
              <img src={require('./hl.png')} />
              <p className='bl'>护理费</p>
              <p>10-15万</p>
            </li>
            <li>
              <img src={require('./wg.png')} />
              <p className='bl'>误工费</p>
              <p>因人而异</p>
            </li>
          </ul>
          <p className='smt'>高发重疾治疗费用详情表</p>
          <table className='jbtable' width='100%' cellSpacing='4'>
            <thead>
              <tr>
                <th>疾病种类</th>
                <th className='ri'>治疗费用</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>恶性肿瘤</td>
                <td>12-50万</td>
              </tr>
              <tr>
                <td>急性心肌梗塞</td>
                <td>10-30万</td>
              </tr>
              <tr>
                <td>脑中风后遗症</td>
                <td>10-40万</td>
              </tr>
              <tr>
                <td>重大器官移植手术</td>
                <td>20-50万</td>
              </tr>
              <tr>
                <td>冠状动脉搭桥术</td>
                <td>10-30万</td>
              </tr>
              <tr>
                <td>终末期肾病</td>
                <td>10万/年</td>
              </tr>
              <tr>
                <td>多个肢体确缺失</td>
                <td>10-40万</td>
              </tr>
              <tr>
                <td>急性或亚急性重疾肝炎</td>
                <td>4-5万/年</td>
              </tr>
              <tr>
                <td>良性脑肿瘤</td>
                <td>5-25万/年</td>
              </tr>
              <tr>
                <td>慢性肝功能衰竭失代偿期</td>
                <td>3-7万/年</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='nav-list' style={{marginBottom: 0}}>
          <p className='subti'>社保保障不足</p>
          <p className='smt'>有社保为什么还要重疾</p>
          <table className='jbtable letable' width='100%' cellSpacing='4'>
            <thead>
              <tr>
                <th className='le'>对比类别</th>
                <th className='ce'>社保</th>
                <th className='co'>重疾险</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='le bs'>报销方式</td>
                <td>先借钱看病，时候凭单据报销</td>
                <td className='bs'>确诊为重疾后，一次性赔付，凭医院诊断书即可以向保险公司申请赔付</td>
              </tr>
              <tr>
                <td className='le bs'>报销范围</td>
                <td>限社保范围内的药品，自费药、进口药等不在保险范围内</td>
                <td className='bs'>买了多少钱保额，赔付多少钱，不针对具体医疗费用，患者可以用这笔钱享受好的医疗技术</td>
              </tr>
              <tr>
                <td className='le bs'>使用限制</td>
                <td>有起付线，只报销治病费用，重大疾病报销比例不足50%</td>
                <td className='bs'>赔付的保额可以自由支配，既可以用于治病，也可以用于康复及家庭开支</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='info-list'>
          <p className='title'><span>2</span>重疾险怎么选</p>
          <p className='con'>选购一款好的重疾险，要从保障内容、保障服务、保险费用、承保公司等层面去综合评估</p>
        </div>
        <div className='nav-list' style={{marginBottom: 0, paddingLeft: 0, paddingRight: 0}}>
          <img src={require('./table.jpg')} width='100%' />
        </div>
        <div className='info-list'>
          <p className='title'><span>3</span>为什么这么配置</p>
          <p className='con'><span>为什么为您配置了一款哆啦a保重疾险与康乐e生重疾险？</span><br />通常来讲，重疾的治疗康复费用为20-50万，重疾发生率随着年龄增大而增加，所以推荐至少配置30万终身重疾险，再加一份与2-3年收入相当保额的20万定期重疾险，是最优的购买选择。</p>
        </div>
        <div className='caseImg'>
          <img src={require('./case.png')} />
        </div>
        <div className='nav-list' style={{marginBottom: 0, paddingTop: 0}}>
          <ul className='jblist'>
            <li>
              <span />
              <p className='t'>终身重疾</p>
              <p>不管在何时治疗重疾，都会花费巨额的疾病治疗费用和康复费用</p>
            </li>
            <li>
              <span />
              <p className='t'>定期重疾</p>
              <p>在有工作收入的人生阶段，除了治疗康复费用以外，鉴于重疾治疗和康复过程比较漫长，还会有2-3年的工资收入损失</p>
            </li>
          </ul>
          <p className='remind'>出于以上考虑，我们在综合分析了市面上常见的1736款重疾产品后，<span className='or'>建议您组合购买如下俩款产品：</span></p>
          <div className='product-list'>
            <p className='pt'>产品组合一</p>
            <ul className='pulist'>
              <li>
                <p className='name'>
                  <span>哆啦A保重疾险</span>
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
              <li>
                <p className='name'>
                  <span>康乐e生重疾险</span>
                  <span className='ri'><span className='pb'>2890</span>元/年起</span>
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
            <li>·主要作用是重疾后的治疗和康复费用的使用。</li>
            <li>·保障内容越全面越好，保障的重疾种类数应不少于50种，包含25种保监会定义最高发的重疾</li>
            <li>·结合目前家庭财务状况，建议配置30万，未来现金流充足时，可以增加至50万</li>
          </ul>
          <div className='product-list'>
            <p className='pt'>产品组合二</p>
            <ul className='pulist'>
              <li>
                <p className='name'>
                  <span>哆啦A保重疾险</span>
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
              <li>
                <p className='name'>
                  <span>康乐e生重疾险</span>
                  <span className='ri'><span className='pb'>2890</span>元/年起</span>
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
            <li>·主要作用是重疾后的治疗和康复费用的使用。</li>
            <li>·保障内容越全面越好，保障的重疾种类数应不少于50种，包含25种保监会定义最高发的重疾</li>
            <li>·结合目前家庭财务状况，建议配置30万，未来现金流充足时，可以增加至50万</li>
          </ul>
        </div>
      </div>
    )
  }
}
