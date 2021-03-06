## ex04: 애플리케이션 번들링(bundling)
1. webpack은 작게 분리된 많은 모듈들의 의존성을 분석하여 하나의 js파일로 묶은도구
2. 하나의 js파일을 번들(bundle)이라 하고 묶는 작업을 번들링(bundling)이라 한다.
3. 번들링은 단순히 모듈을 하나의 파일로 묶는 작업만을 의미하는것이 아니다.
  => 애플리케이션 빌드 작업도 한다.
4. 빌드작업:
  + linting(ESLint, 문법체크) 작업,
  + document 작업(JSDoc) 작업
  + testing(Mocha, Jest) 작업
  + 난독화/압축(Uglify) 작업
  + 번들링
5. 자바스크립트 뿐만 아니라 다양한 애셋 (image, css, font)들도 모듈로 취급하는
  추상화를 한다.

1. 프로젝트 생성
```bash
$ mkdir ex04
$ cd ex04
$ npm init -y
$ npm i -D express
$ npm i -D webpack
$ npm i -D webpack-cli
$ npm ./node_modules/.bin/webpack --version
```

2. 프로젝트 디렉토리
    <pre>
        /ex04
            |--- package.json
            |--- package-ock.json
            |--- node-modules
            |--- public
                    |--- index.html
                    |--- bundle.js
            |--- src
                    |--- index.js
                    |--- App.js
            |--- dev-serer
    <pre>

3. script
```json
{
  "name": "ex04",
  "version": "1.0.0",
  "description": "",
  "main": "dev-server.mjs",
  "scripts": {
    "start": "node dev-server.mjs",
    "build": "npx webpack ./src/index.js -o ./public",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "express": "^4.17.1"
  }
}

```

4. 애플리케이션 작성
[public/index.html]
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>#ex04</title>
</head>
<body>
    <div id="root"></div>
    <script src='bundle.js'></script>
</body>
</html>
```

[src/App.js]
```javascript
const App = function(){
    const app = document.createElement('h1');
    app.textContent='Hello Wolrd';
    return app;
}
export {App}
```

[src/index.js]
```javascript
import {} from './App.js'
document.getElementById('root').appendChild(App());
```

5. 빌드 (번들링)
```bash
$ npx webpack ./src/index.js -o ./public/bundle.js
```

```bash
$ npm run build
```

6. 테스트 서버 실행
```bash
$ npm start
```