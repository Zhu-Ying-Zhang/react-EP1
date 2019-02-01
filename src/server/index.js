import Express from "express";
import EnvConfig from '../../config.json';
//const Express = require('express');

const nodeEnv = process.env.NODE_ENV || EnvConfig.NODE_ENV || 'production';
const isProd = 'production' === nodeEnv;

const PORT = process.env.PORT || EnvConfig.PORT || "3000";
//創造實體
const server = new Express();

//開發階段才載入
if(!isProd){
    const hotReloader = require('./hotReload.js');
    server.use(hotReloader.webpackDevMiddleware);
    server.use(hotReloader.webpackHotMiddleware);
}
//也可以使用以下寫法與上面的結果一樣
//if(!isProd){
//   const {webpackDevMiddleware, webpackHotMiddleware} = require('./hotReload.js');
//   server.use(webpackDevMiddle);
//   server.use(webpackHotMiddle);
//}

const renderHtml = (args) => `
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
    <body>
      i will be back. ${args}
    </body>
    
    <script src="/js/bundle.js"></script>
  </head>
  <body></body>
</html>
`;

server.use("/css/", Express.static(`${__dirname}/../../src/client/css/`))
server.use("/js/", Express.static(`${__dirname}/../../dist/client/js/`));
//如果什麼都沒加 只有一個slash代表是根目錄
server.get("/", (request, respons) => {
  respons.send(renderHtml());
});

server.get('/:path', (request,respons) => {
  //因為request.params是一個物件所以需要JSON.stringify來轉譯但不建議因為如果有藏code就會出問題
  respons.send(renderHtml(JSON.stringify(request.params)));
})

//`的符號為ES6的書寫方式
server.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
