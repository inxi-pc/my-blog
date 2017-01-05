# my-blog
Vue.js based blog

# Concept
mvvm framework
webpack
single page web application

# Using tool & version
```javascript
{
  "name": "my-blog",
  "version": "1.0.0",
  "description": "Bingchao Xiong first blog",
  "main": "main.js",
  "dependencies": {
    "vue": "^1.0.26"
  },
  "devDependencies": {
    "vue-hot-reload-api": "^1.3.3",
    "vue-html-loader": "^1.2.3",
    "vue-loader": "^8.5.3",
    "vue-resource": "^1.0.1",
    "vue-router": "^0.7.13",
    "vue-style-loader": "^1.0.0",
    "vuex": "^1.0.0-rc.2",
    "webpack": "^2.1.0-beta.28",
    "webpack-dev-server": "^2.1.0-beta.12",
    "webpack-stream": "^3.2.0",
    "babel-core": "^6.13.2",
    "babel-loader": "^6.2.4",
    "babel-plugin-transform-runtime": "^6.12.0",
    "babel-preset-es2015": "^6.13.2",
    "babel-runtime": "^6.11.6",
    "glob": "^7.1.0",
    "grunt": "^1.0.1",
    "autoprefixer": "^6.4.1",
    "css-loader": "^0.25.0",
    "style-loader": "^0.13.1",
    "exports-loader": "^0.6.3",
    "imports-loader": "^0.7.0",
    "file-loader": "^0.9.0",
    "url-loader": "^0.5.7",
    "extract-text-webpack-plugin": "^2.0.0-beta.4",
    "html-webpack-plugin": "^2.22.0",
    "bootstrap": "^3.3.7",
    "datatables": "^1.10.12",
    "datatables-bootstrap": "0.0.1",
    "github-markdown-css": "^2.4.1",
    "highlight.js": "^9.9.0",
    "jquery": "^3.1.0",
    "jquery-ui": "^1.12.1",
    "jquery.fancytree": "^2.19.0",
    "jwt-decode": "^2.1.0",
    "normalize.css": "^5.0.0",
    "store": "^1.3.20",
    "tinymce": "^4.4.3"
  },
  "scripts": {
    "dev": "webpack-dev-server --inline --hot",
    "build:dev": "webpack --progress --display-modules --display-chunks",
    "build:prod": "NODE_ENV=production webpack --progress"
  },
  "author": "Owen Xiong",
  "license": "ISC"
}
```

# Build
```shell
npm install
npm run dev

##then open brower, input localhost:8080
```

#坑
1. Webpack 2.0 migration
    * tinymce内部unicode被ugily plugin给压缩成乱码，导致js执行失败。
    * vue-loader option放在loader位置是无效的，ExtractTextPlugin无法生效，要放在LoaderOptionsPlugin下。
