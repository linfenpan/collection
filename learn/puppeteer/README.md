资料 [https://github.com/GoogleChrome/puppeteer](https://github.com/GoogleChrome/puppeteer)

要拦截某些请求，可以考虑: [page.setRequestInterception(true)](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagesetrequestinterceptionvalue)

但是自定义的协议，是没法拦截的，请节哀~，可以考虑，把自定义协议，全部在 `request` 的时候，全部文件拦截下来，并且破坏掉。
