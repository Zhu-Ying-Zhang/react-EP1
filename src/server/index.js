import Express from "express";
//const Express = require('express');

const PORT = process.env.PORT || "3000";
//創造實體
const server = new Express();

const renderHtml = (args) => `
return '<!DOCTYPE html>
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

server.use("/js/", Express.static(`${__dirname}/../../dist/client/`));
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
