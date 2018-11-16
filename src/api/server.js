import axios from 'axios'
import qs from 'qs'
axios.defaults.baseURL = '/api'
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  /**
     * 下面的注释为通过在response里，自定义code来标示请求状态
     * 当code返回如下情况则说明权限有问题，登出并返回到登录页
     * 如想通过xmlhttprequest来状态码标识 逻辑可写在下面error中
     */
  // response => {
  //   const res = response.data
  //   if (res.code !== 20000) {
  //     })
  //     // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
  //     if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
  //       }).then(() => {
  //         })
  //       })
  //     }
  //     return Promise.reject('error')
  //   } else {
  //     return response.data
  //   }
  // },
  return response
}, function (error) {
  console.log('err' + error)
  return Promise.reject(error)
}
)
export default{
  // get请求
  get (url, param) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: param
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  // post请求
  post (url, param) {
    console.log(url)
    console.log(param)
    return new Promise((resolve, reject) => {
      axios.post(url, qs.stringify(param), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      ).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
