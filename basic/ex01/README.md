## ex01: 전통적인 DOM APi 기반의 애플리케이션
1. 프로젝트 생성
    ```bash
    $ mkdir ex01
    $ cd ex01
    $ npm init -y
    $ npm i -D express
    ```
2. 프로젝트 디렉토리
    <pre>
        /ex01
            |--- package.json
            |--- package-ock.json
            |--- node-modules
            |--- public
                    |--- index.html
                    |--- index.js
            |--- dev-serer
    <pre>

3. script
```json
{
  "name": "ex01",
  "version": "1.0.0",
  "description": "",
  "type": "module",
  "main": "dev-server.js",
  "scripts": {
    "start": "node dev-server",
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
    [index.js]
    ```javascript
    
    ```
5. 테스트 (테스트 서버 실행)
``` bash
$ npm start
```