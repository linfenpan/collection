'use strict';
// https://github.com/baidu/san/tree/master/example/todos-esnext
import san from 'san';
import './main.less';
import './global';
import Test from './test.vue';

console.log(Test);

const $app = document.getElementById('app');
$app.innerHTML = `
  <div class="site-navbar">
    <span class="icon icon-site-logo"></span>
    不要让我孤单xxxx111
  </div>
`;

if (process.env.NODE_ENV == 'development') {
  console.log('在发环境中');
} else {
  console.log('在生产环境中');
}

async function getData() {

}
getData().then(function() {
  console.log('获取数据');
});

console.log(san);
