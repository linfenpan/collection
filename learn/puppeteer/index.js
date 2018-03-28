'use strict';

const puppeteer = require('puppeteer');

// @see https://github.com/googlechrome/puppeteer/blob/HEAD/docs/api.md#pagesetrequestinterceptionvalue page.setRequestInterception 可中断请求?

function wait(time) {
  return new Promise(function(r) {
    setTimeout(r, time);
  });
}

(async () => {
  const args = puppeteer.defaultArgs().filter(arg => String(arg).toLowerCase() !== '--disable-extensions');

  // @see https://peter.sh/experiments/chromium-command-line-switches/ args标注chrome打开的参数
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: true,
    args: args.concat([
      '--window-size=1620,1000'
    ])
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1600, height: 900 });

  // 尝试拦截请求
  await page.setRequestInterception(true);
  page.on('request', interceptedRequest => {
    const url = interceptedRequest.url();
    if (url.indexOf('inner-action') >= 0) {
      console.log('拦截请求:' + url);
    } else {
      console.log('非拦截请求:' + url);
    }
    interceptedRequest.continue();
  });

  await page.goto('https://www.baidu.com/');
  // 输入，delay 是输入间隔
  await page.type('#kw', '土豆', { delay: 300 });
  const searchSbButton = await page.$('#su');
  await searchSbButton.click();
  await searchSbButton.dispose();

  // 等待搜索完毕，会跳转到新地址
  await page.waitForSelector('.c-container .t');
  // await wait(500);

  // 遍历所有元素，找出 text/link 值
  // 或者可以使用 page.$eval
  const list = await page.evaluate(() => {
    const links = document.querySelectorAll('.c-container .t');
    return [].slice.call(links).map((el) => {
      return {
        text: el.innerText.trim(),
        url: el.querySelector('a').getAttribute('href')
      };
    });
  });

  console.log(list);

  await page.evaluate(async () => {
    location.href = 'inner-action://test';
    return 11;
  });

  await wait(2000);

  // await browser.close();
})();
