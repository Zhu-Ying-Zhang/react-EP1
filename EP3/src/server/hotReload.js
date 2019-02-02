import webpack from "webpack";
import WebpackDevMiddleware from "webpack-dev-middleware";
import WebpackHotMiddleware from "webpack-hot-middleware";
import webpackConfig, { hmrConfig } from "../../webpack.config.babel.js";

//new compile實體
const compile = webpack(webpackConfig);
//publicPath要記得加  用處在於如果js有import某些東西圖片或字型 他會把字串取代為publicPath的路徑 發布正式會用到
export const webpackDevMiddleware = WebpackDevMiddleware(compile, {
  logLevel: hmrConfig.logLevel,
  publicPath: webpackConfig.output.publicPath
});
//
export const webpackHotMiddleware = WebpackHotMiddleware(compile, {
  log: hmrConfig.log,
  path: hmrConfig.path,
  heartbeat: hmrConfig.heartbeat
});

export default { webpackDevMiddleware, webpackHotMiddleware };
