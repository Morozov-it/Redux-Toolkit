# Инициализировать проект и создать файл package.json
npm init

# Установить webpack, webpack-cli(для использования через терминал)
npm install -D webpack webpack-cli

# Создать папку src with index.js and index.html файлами
# Создать файл webpack.config.js для конфигурации webpack

# Установить загрузчики стилей, позволяют импортировать файлы напрямую в js код
npm install -D style-loader less-loader css-loader file-loader

# Установить плагины для переноса и очистки html файлов в папку dist
npm install -D html-webpack-plugin clean-webpack-plugin

# Установить плагины для режима разработки
npm install -D webpack-dev-server

# Сборка приложения
npm run build
# Режим разработки приложения
npm run dev

# Установить компилятор babel для транспиляции jsx кода
npm install --save-dev babel-loader @babel/core

# Установить preset для преобразования кода под старые браузеры
npm install @babel/preset-env --save-dev 

# Установить preset для react
npm install --save-dev @babel/preset-react

# Установить polifill для react
npm install --save @babel/polyfill

# Установить react и react-dom
npm install --save react react-dom

# Создать функциональный компонент
rafce

# Установить redux
npm install --save redux react-redux redux-thunk

# Установить модуль для работы расширения в браузере Redux DevTools
npm install --save redux-devtools-extension