const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
    resolve: {
        modules: [ "src/lib", "src", "src/app", "node_modules" ],
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "public/build"),
        publicPath: "build/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
            }
        ]
    },
    plugins: [htmlPlugin],
    devServer: {
        contentBase: "./public",
        port: 8092,
        headers: { "Access-Control-Allow-Origin": "*" },
    },

};
