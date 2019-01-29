const isProd = 'production' === process.env.NODE_ENV;
module.exports = {
    entry : './src/index.js',
    output : {
        filename : 'bundle.js'
    },
    mode : isProd? 'production' : 'development',
};
