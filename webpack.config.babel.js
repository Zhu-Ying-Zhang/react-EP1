import EnvConfig from "./config.json";
import webpack from "webpack";
//console.log(EnvConfig);
const stageConfig = process.env.NODE_ENV || EnvConfig.NODE_ENV || "production";
const isProd = "production" === stageConfig;
const plugins = [];
const devPlugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
];
const prodPlugins = [];

//設定hot reload
export const hmrConfig = {
  path: "/__webpack_hmr",
  timeout: 20000,
  reload: true,
  logLevel: "warn",
  log: console.log,
  heartbeat: 10 * 1000
};
//叫js記得要去連hot middleware的socket
//export的原因為其他檔案也會用到
const hotMiddlewareScript = `webpack-hot-middleware/client?path=${
  hmrConfig.path
}&timeout=${hmrConfig.timeout}&reload=${hmrConfig.reload}`;

export default {
  entry: ["./src/client/js/index.js", hotMiddlewareScript],
  output: {
    //path非常重要
    filename: "js/bundle.js",
    path: `${__dirname}/dist/client/`,
    publicPath: "/"
  },
  mode: isProd ? "production" : "development",
  module: {
    rules: [
      {
        //$代表結束的意思
        test: /\.css$/,
        use: [
          //一個處理CSS 一個處理將CSS放進JS讓js去把style標籤插入html內
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      /*{
        //由後往前檢查會先檢查eslint-loader再檢查babel-loader
        test: /\.js$/,
        exclude: "/node_modules/",
        use: [{ loader: "babel-loader" }, { loader: "eslint-loader" }]
	  }*/
      //如果加了這區塊就會確保在所有loader之前都會去處理
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: "/node_modules/",
        use: [{ loader: "eslint-loader" }]
      },
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: [{ loader: "babel-loader" }]
      }
    ]
  },
  //ES6語法
  //plugins: isProd ? plugins.concat(prodPlugins) : plugins.concat(devPlugins),
  plugins: isProd ? [...prodPlugins, ...plugins] : [...plugins, ...devPlugins]
};
