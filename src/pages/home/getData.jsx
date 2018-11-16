// import {loading} from '../../components/loading/loading.jsx'

const convertData = function (result) {
  return [
    {
      'questionTypeName': '性别',
      'answerList': [
        {
          'answerName': '先生',
          'answerCode': 'D00101',
          'answerRange': ''
        },
        {
          'answerName': '女士',
          'answerCode': 'D00102',
          'answerRange': ''
        }
      ],
      'questionNum': 'W001',
      'answerType': '02',
      'questionType': '01',
      'questionDesc': '请问您的性别是?'
    },
    {
      'questionTypeName': '家庭结构',
      'answerList': [
        {
          'answerName': '单生贵族',
          'answerCode': 'D00201',
          'answerRange': ''
        },
        {
          'answerName': '已婚无娃',
          'answerCode': 'D00202',
          'answerRange': ''
        },
        {
          'answerName': '已婚有娃',
          'answerCode': 'D00203',
          'answerRange': ''
        }
      ],
      'questionNum': 'W002',
      'answerType': '02',
      'questionType': '02',
      'questionDesc': '我们会基于您的家庭结构和成员情况,为您推荐合适的保障方案~请选择您的家庭成员吧?'
    },
    {
      'questionTypeName': '被保人',
      'answerList': [
        {
          'answerName': '自己',
          'answerCode': 'D01001',
          'answerRange': ''
        },
        {
          'answerName': '配偶',
          'answerCode': 'D01002',
          'answerRange': ''
        },
        {
          'answerName': '儿子',
          'answerCode': 'D01003',
          'answerRange': ''
        },
        {
          'answerName': '女儿',
          'answerCode': 'D01004',
          'answerRange': ''
        },
        {
          'answerName': '父亲',
          'answerCode': 'D01005',
          'answerRange': ''
        },
        {
          'answerName': '母亲',
          'answerCode': 'D01006',
          'answerRange': ''
        }
      ],
      'questionNum': 'W010',
      'answerType': '03',
      'questionType': '03',
      'questionDesc': '您想给谁买保险呢?'
    },
    {
      'questionTypeName': '年龄',
      'answerList': [
        {
          'answerName': '本人',
          'answerCode': 'D00301',
          'answerRange': '18-60岁'
        },
        {
          'answerName': '子女',
          'answerCode': 'D00302',
          'answerRange': '0-17岁'
        },
        {
          'answerName': '父母',
          'answerCode': 'D00303',
          'answerRange': '40-80岁'
        }
      ],
      'questionNum': 'W003',
      'answerType': '01',
      'questionType': '04',
      'questionDesc': '年龄会关系到保障方案及价格的准确性哦~告诉我被保人的年龄吧!'
    },
    {
      'questionTypeName': '社保',
      'answerList': [
        {
          'answerName': '有',
          'answerCode': 'D00501',
          'answerRange': ''
        },
        {
          'answerName': '无',
          'answerCode': 'D00502',
          'answerRange': ''
        }
      ],
      'questionNum': 'W005',
      'answerType': '02',
      'questionType': '05',
      'questionDesc': '被保险人有社保(含新农合)吗?'
    },
    {
      'questionTypeName': '职业',
      'answerList': [
        {
          'answerName': '室内',
          'answerCode': 'D00401',
          'answerRange': ''
        },
        {
          'answerName': '室外普通',
          'answerCode': 'D00402',
          'answerRange': ''
        },
        {
          'answerName': '室外复杂',
          'answerCode': 'D00403',
          'answerRange': ''
        },
        {
          'answerName': '学生',
          'answerCode': 'D00404',
          'answerRange': ''
        },
        {
          'answerName': '退休',
          'answerCode': 'D00405',
          'answerRange': ''
        },
        {
          'answerName': '其他',
          'answerCode': 'D00406',
          'answerRange': ''
        }
      ],
      'questionNum': 'W004',
      'answerType': '02',
      'questionType': '06',
      'questionDesc': '被保人职业是?'
    },
    {
      'questionTypeName': '收入',
      'questionNum': 'W006',
      'answerType': '01',
      'questionType': '07',
      'questionDesc': '被保险人的税后年收入?'
    },
    {
      'questionTypeName': '居住地',
      'questionNum': 'W007',
      'answerType': '02',
      'questionType': '08',
      'questionDesc': '接下来是被保险人的几个问题,因为国内各地的社保政策,消费水平不同,且保险产品的支持投保区域也不同,所以告诉我被保险人的常住城市吧!'
    },
    {
      'questionTypeName': '生活习惯',
      'answerList': [
        {
          'answerName': '吸烟',
          'answerCode': 'D00801',
          'answerRange': ''
        },
        {
          'answerName': '喝酒',
          'answerCode': 'D00802',
          'answerRange': ''
        },
        {
          'answerName': '运动少',
          'answerCode': 'D00803',
          'answerRange': ''
        },
        {
          'answerName': '加班狗',
          'answerCode': 'D00804',
          'answerRange': ''
        },
        {
          'answerName': '夜猫子',
          'answerCode': 'D00805',
          'answerRange': ''
        },
        {
          'answerName': '以上全无',
          'answerCode': 'D00806',
          'answerRange': ''
        }
      ],
      'questionNum': 'W008',
      'answerType': '03',
      'questionType': '09',
      'questionDesc': '请描述被保人当前的生活状态?'
    },
    {
      'questionTypeName': '家庭收支',
      'questionNum': 'W009',
      'answerType': '03',
      'questionType': '10',
      'questionDesc': '为了更精准的推荐,还请告诉我您家庭的收支情况,家庭税后年收入(含租金,理财,及家庭成员总收入),家庭负债(车贷,房贷等)'
    }
  ]
}
exports.getData = function () {
  console.log(9999)
  // return loading(2000).then((result) => {

  return convertData()
  // })
}
