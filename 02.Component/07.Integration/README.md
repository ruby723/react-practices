## React Pracractices - Integration( 개발 환경 통합 )

## Configuration
01. Application Structure
<pre>
/app
  |-- /backend
          |-- /logging
          |      |-- index.js
          |-- /routes
          |      |-- [index.js]
          |      |-- authorized.js
          |      |-- error.js
          |-- /controllers
          |-- /models
          |-- /views
          |      |-- /error
          |            |-- [404.ejs]
          |            |-- [500.ejs]
          |-- /public
          |-- [index.js]
          |-- [app.config.env]
  |-- /frontend
          |-- /config
          |      |-- babel.config.json
          |      |-- [webpack.config.json]
          |-- /public
          |      |-- favicon.ico
          |      |-- index.html
          |-- /src
          |-- /assets        
  |-- /node_module
  |-- package.json
  |-- package-lock.json
</pre>
02. nodemon
03. webpack dev server
04. package.json
05. concurrently
06. node application

## Application
01. app01.emaillist
    - 개발 통합 설정 (with Node Backend)
    - backend: Fully APIs (Node Express 기반)
    - 
02. app02.kanban
03. app03. guestbook
04. app04. gallery
05. app05.mysite
---
