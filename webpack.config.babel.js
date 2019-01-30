import EnvConfig from './config.json';
//console.log(EnvConfig);
const stageConfig = process.env.NODE_ENV || EnvConfig.NODE_ENV || 'production';
const isProd = 'production' === stageConfig;


export default {
    entry : './src/client/index.js',
    output : {
        filename : './client/bundle.js'
    },
    mode : isProd? 'production' : 'development',
};
