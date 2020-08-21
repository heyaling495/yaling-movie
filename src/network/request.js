import axios from 'axios';

function rebackdata(error) {
  let errdata = {
    status: 0,
  };
  switch (error.response.status) {
    case 400:
      errdata.msg = '错误请求';
      break;
    case 401:
      errdata.msg = '未授权,请重新登录';
      break;
    case 403:
      errdata.msg = '拒绝访问';
      break;
    case 404:
      errdata.msg = '请求错误,未找到该资源';
      break;
    case 405:
      errdata.msg = '请求方法未允许';
      break;
    case 408:
      errdata.msg = '请求超时';
      break;
    case 500:
      errdata.msg = '服务器错误';
      break;
    case 501:
      errdata.msg = '网络未实现';
      break;
    case 502:
      errdata.msg = '网络错误';
      break;
    case 503:
      errdata.msg = '服务不可用';
      break;
    case 504:
      errdata.msg = '网络超时';
      break;
    case 505:
      errdata.msg = 'HTTP版本不支持该请求';
      break;
    default:
      break;
  }
  return errdata;
}
export function request(config) {
  //创建 axios实例
  const instance = axios.create({
    // baseURL: 'http://localhost:8080',
    // timeout: 5000,
    // headers: headers
    withCredentials: true,
  });
  //拦截器

  //拦截请求
  instance.interceptors.request.use(
    (config) => {
      // Do something before request is sent
      /**
       * 比如某些信息不符合服务器的需求
       * 比如每次发送网络请求时 希望在界面中显示一个请求的图标
       * 某些网络请求(比如登录(token)),必须携带一些特殊的信息
       */
      return config;
    },
    (error) => {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  //拦截响应
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log(error.response.data);
      let errordata = rebackdata(error);
      return Promise.reject(errordata);
    }
  );

  //发送真正的请求
  return instance(config);
}
