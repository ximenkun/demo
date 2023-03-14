/*
 * @Author: liuxiang liuxiang@163.com
 * @Date: 2023-03-07 17:18:49
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-03-13 18:14:02
 * @FilePath: \demo\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createSSRApp } from 'vue';
import Vant from 'vant';
import store from './store';
import App from './App.vue';
// import filters from '@/utils/filters.js';
//拦截器
uni.addInterceptor('request', {
  invoke: (config) => {
    console.log(config);
  },
});
export function createApp() {
  const app = createSSRApp(App);
  app.use(store);
  app.use(Vant);
  return {
    app,
  };
}
