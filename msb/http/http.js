import Vue from 'vue'
import VueResource from 'vue-resource'


Vue.use(VueResource)

//var userResource = 'http://test.qy.9gms.com';
// var userResource = 'http://sthapi.chenglian.com'
var userResource = ''
Vue.http.options.emulateHTTP = true
Vue.http.options.method = 'POST'
Vue.http.options.emulateJSON = true
Vue.http.options.crossOrigin = true
Vue.http.options.credentials = false
Vue.http.options.xhr = { withCredentials: true }
Vue.http.headers.post['Content-Type'] = 'application/json'
// Vue.http.headers.post['CorsSource'] = 'WeiXin'
// Vue.http.headers.post['key'] = cache.getLocalStorageData('userkey')
 //console.dir(Vue.http.headers)
Vue.http.interceptors.push((request, next) => {
  // 这里对请求体进行处理
  // request.headers = request.headers || {}

  next((response) => {
    response = response.body
    // console.dir(response)
  })
})

export default {
  send: function (action, options) {
    // return UserResource.save({action: action + '?t=' + (new Date()).getTime()}, options)
    // return Vue.http.post('http://localhost:64174/Api/Home/data?t=1480158875952', options)
    return Vue.http.post(userResource + action, options)
  },
  get: function(action, options){
    return Vue.http.get(userResource + action, options)
  },
  jsonp:function(action, options){
		console.log(action)
    return Vue.http.jsonp(userResource + action, options)
  }
}
