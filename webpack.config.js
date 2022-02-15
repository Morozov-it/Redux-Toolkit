const path = require('path');//импорт из NodeJS библиотеки path, для указания пути к папкам
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

//объект для размещения всех свойств приложения
module.exports = {
    mode: "development",//режим разработки, файлы не сжимать
    entry: ["@babel/polyfill", "./src/index.jsx"],//входной путь к файлу, с него начинается запуск приложения
    output: {
        path: path.resolve(__dirname, "dist"),//имя итоговой папки
        filename: "[name].[hash].js",//для слежения сборщику за файлами
        publicPath: '/'//исключение проблем хеширования при передах
    },
    devServer: {
        port: 3000,
        historyApiFallback: true
    },//режим разработки в браузере
    plugins: [
        new HTMLWebpackPlugin({ template: "./src/index.html" }),
        new CleanWebpackPlugin()
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(jpg|jpeg|png|svg)$/,
                use: ["file-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                        loader: 'babel-loader',
                        options: {
                            presets: ["@babel/preset-env"]
                    }
                }]
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-react", "@babel/preset-env"]
                    }
                }]
            },
        ] 
    }//правила для импорта стилей
}