module.exports = {
    mode: "development",
    devtool: 'eval',
    entry: "./src/index.js",

    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },

}