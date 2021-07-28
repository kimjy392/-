## Objective

`Intersection Observer`를 활용하지 않고  `scroll event`을 활용하여 `Infintie Scroll` 구현한다.



## 설치 및 실행 방법

* 설치

```
npm install 
```

* 실행 방법

```
npm start
```



## 차이점

* `Intersection Observer`

  * `option` 인자를 이용하여 다양한 설정을 할 수 있다.

    ex) 뷰포트를 지정, 뷰포트의 크기를 늘리거나 줄일 수 있음, 교차 영역의 비율을 지정

  * reflow가 발생하지 않는다.

* `Scroll Event`

  * 이벤트 함수 호출 횟수가 많다.

    `Scroll Event`는 스크롤이 움직일 때마다 발생하기 때문에 이벤트 함수 호출을 줄이기 위해 `Throttling`이나 `Debounce`가 필요하다.

  * 대상의 크기나 위치를 알기 위해 `element.getBoundingClientRect()`를 호출하게 되면 reflow가 발생한다.
