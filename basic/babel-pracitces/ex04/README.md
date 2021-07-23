## Env Preset
1. 관련 플러그인들을 모아놓고 한번에 적용하기 위해서 미리 플러그인들을 모아놓은 것
2. ECMAScript 년도별로 모아놓은 것들, stage(0,1,2,3) 레벨별로 모아놓은 프리셋,
    3rd party 프리셋 등 종류가 다양하다.
3. Env Preset stage 3레벨 이상되는 문법의 플러그인들을 설치한다.
4. Env Preset은 다양하고 편리하게 설치되는 플러그인들을 설정할 수 있다. (babel.config.json)

## 설치
1. 설치
```bash
$ npm i -D @babel/core @babel/preset-env @babel/cli
```

2. 플러그인 항목을 확인
```bash
$ npm list --depth=1 | grep "@babel/plugin"
```

## 설정 및 변환작업

1. 기본 설정 [babel.config.01.json]
    + 설정
```json
{
    "presets":[
        ["@babel/preset-env", {
            "tartets":{
                "node": "current"
            }
        }]
    ]
}
```

    - 변환
    ```bash
    $ npx babel src/ex01.js -o dist/ex01.02.js
    ```

3. 브라우저 타겟 설정[babel.config.json]
    [브라우저 별 ES6호환 테이블](http://kangax.github.io/compat-)

