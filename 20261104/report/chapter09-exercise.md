# 9장 이벤트 기초 및 활용 — 이론문제

---

## 1. 자바스크립트 이벤트에 대한 설명으로 틀린 것은?

① 마우스를 클릭하면 이벤트가 발생한다.  
② 이벤트를 발생시킨 DOM 객체를 이벤트 타겟이라고 부른다.  
③ 이벤트는 반드시 이벤트 타겟 객체에서만 처리된다.  
④ 발생한 이벤트에 관한 여러 정보를 가진 객체를 이벤트 객체라고 부른다.

**정답: ③**

이벤트는 이벤트 타겟 객체에서만 처리되는 것이 아니다. 이벤트가 전달되는 경로에 있는 상위 객체에서도 캡처 단계나 버블 단계를 통해 이벤트를 처리할 수 있다.

---

## 2. 다음과 같은 자바스크립트 코드가 있을 때, 버튼을 클릭하면 실행 결과는 무엇인가?

```javascript
let button = document.getElementById("button");
button.addEventListener("click", function () {
  alert("ONE");
});
button.addEventListener("click", function () {
  alert("TWO");
});
button.addEventListener("click", function () {
  alert("THREE");
});
```

① ONE 문자열을 가진 경고창이 출력된다.  
② THREE 문자열을 가진 경고창이 출력된다.  
③ ONE, TWO, THREE 문자열을 가진 3개의 경고창이 순서대로 출력된다.  
④ THREE, TWO, ONE 문자열을 가진 3개의 경고창이 순서대로 출력된다.

**정답: ③**

`addEventListener()`는 같은 이벤트에 여러 리스너를 등록할 수 있다. 위 코드는 서로 다른 세 함수를 등록하므로 버튼을 클릭하면 등록한 순서대로 경고창이 출력된다.

```text
ONE → TWO → THREE
```

---

## 3. 이벤트 리스너 중 같지 않은 것은?

①

```javascript
div1.addEventListener("onclick", function () {
  this.innerHTML = "hello";
});
```

②

```javascript
div1.onclick = function () {
  this.innerHTML = "hello";
};
```

③

```javascript
div1.onclick = function (e) {
  this.innerHTML = "hello";
};
```

④

```javascript
div1.onclick = f;
function f() {
  this.innerHTML = "hello";
}
```

**정답: ①**

`addEventListener()`에 전달하는 이벤트 이름에는 `on`을 붙이지 않는다. 클릭 이벤트를 처리하려면 `"onclick"`이 아니라 `"click"`을 사용해야 한다.

```javascript
div1.addEventListener("click", function () {
  this.innerHTML = "hello";
});
```

②, ③, ④는 모두 클릭했을 때 `div1`의 내용을 `"hello"`로 변경한다. ③의 매개변수 `e`는 이벤트 객체를 전달받기 위한 것으로, 사용하지 않아도 된다.

---

## 4. 다음 함수와 태그가 있을 때 물음에 답하여라.

```javascript
function f() {
  // obj 객체의 배경색을 orchid로 변경하는 함수
  obj.style.backgroundColor = "orchid";
}
```

```html
<div id="div1">안녕하세요. 환영합니다.</div>
```

### (1) id가 "div1"인 DOM 객체를 알아내는 코드를 작성하라.

```javascript
let obj = ____________________;
```

**정답:**

```javascript
let obj = document.getElementById("div1");
```

`document.getElementById()`는 지정한 `id`를 가진 요소 객체를 반환한다. 이 코드는 해당 `<div>` 요소가 생성된 뒤에 실행되어야 한다.

### (2) `<div>` 태그를 클릭하면 f() 함수가 실행하도록 addEventListener()를 이용하여 이벤트 리스너를 등록하라.

```javascript
obj.____________________;
```

**정답:**

```javascript
obj.addEventListener("click", f);
```

이벤트가 발생했을 때 함수를 실행하도록 함수 이름 `f`를 전달한다. `f()`를 전달하면 등록 시점에 함수가 실행되므로 주의해야 한다.

### (3) `<div>` 태그를 클릭하면 f() 함수가 실행하도록 onclick 프로퍼티를 이용하여 이벤트 리스너를 등록하라.

```javascript
obj.____________________;
```

**정답:**

```javascript
obj.onclick = f;
```

### (4) f()를 익명 함수로 작성하여 onclick 리스너로 등록하라. onclick 프로퍼티를 이용하라.

```javascript
obj.____________________;
```

**정답:**

```javascript
obj.onclick = function () {
  obj.style.backgroundColor = "orchid";
};
```

`f()`의 실행 내용을 익명 함수 안에 작성하여 `onclick` 프로퍼티에 대입한다.

---

## 5. 이벤트 캡처 단계는 어디서부터 어디까지 이벤트가 흘러가는 과정인가?

① window 객체에서부터 타겟 객체까지  
② 타겟 객체에서부터 window 객체까지  
③ document 객체에서부터 타겟 객체까지  
④ 타겟 객체에서부터 document 객체까지

**정답: ①**

이벤트 캡처는 `window`에서 시작하여 DOM 트리의 상위 객체를 거쳐 타겟 방향으로 내려가는 과정이다.

```text
window → document → 상위 요소들 → 타겟
```

엄밀히는 타겟에 도달하기 전까지가 캡처 단계이고, 타겟에 도달하면 타겟 단계가 된다. 이 문제에서는 타겟 방향으로 내려가는 전체 흐름을 묻고 있으므로 ①이 정답이다.

---

## 6. 이벤트 버블에 대해 잘못 말한 것은?

① 익스플로러에서 처음으로 제안한 이벤트 흐름 모델  
② 이벤트가 타겟 객체에서 DOM 트리를 따라 window 객체로 흘러가는 모델  
③ 이벤트 버블이나 이벤트 캡처 단계 중 한 단계에서만 이벤트 리스너 작성 가능  
④ 이벤트에 따라 이벤트 버블 단계는 없을 수도 있다.

**정답: ③**

이벤트 리스너는 캡처 단계와 버블 단계에 각각 등록할 수 있다. `addEventListener()`의 세 번째 인수로 처리 단계를 지정한다.

```javascript
// 캡처 단계의 리스너
obj.addEventListener(
  "click",
  function (e) {
    console.log("캡처 단계");
  },
  true,
);

// 버블 단계의 리스너
obj.addEventListener(
  "click",
  function (e) {
    console.log("버블 단계");
  },
  false,
);
```

세 번째 인수를 생략하면 기본값은 `false`이다. 또한 모든 이벤트가 버블링하는 것은 아니므로 ④는 올바른 설명이다.

---

## 7. 다음 자바스크립트 코드가 실행되면 웹 페이지에 작성된 어떤 onclick 리스너도 실행되지 못한다. 이유를 설명하라.

```javascript
window.addEventListener(
  "click",
  function (e) {
    e.stopPropagation();
  },
  true,
);
```

**정답:**

세 번째 인수가 `true`이므로 이 리스너는 `window`의 캡처 단계에서 실행된다.

클릭 이벤트가 타겟으로 내려가기 전에 `e.stopPropagation()`이 호출되어 다른 객체로의 이벤트 전파가 중단된다. 따라서 타겟과 그 상위 요소의 `onclick` 리스너까지 이벤트가 전달되지 않아 실행되지 않는다.

```text
window의 캡처 리스너 실행
→ stopPropagation()으로 전파 중단
→ 타겟의 onclick 및 상위 요소의 버블 리스너 실행 안 됨
```

단, `stopPropagation()`은 같은 객체에 등록된 다른 리스너의 실행까지 중단시키지는 않는다. 따라서 문제의 “어떤 onclick 리스너도”라는 표현은 일반적인 페이지 요소의 리스너를 가리키는 것으로 이해해야 하며, `window` 자체의 다른 클릭 리스너까지 모두 막는다는 뜻은 아니다.

---

## 8. 다음 중 버블 단계에서 실행되도록 작성된 onclick 리스너를 모두 골라라.

①

```javascript
window.onclick = function (e) {
  alert(e.type);
};
```

②

```javascript
window.addEventListener(
  "click",
  function (e) {
    alert(e.type);
  },
  true,
);
```

③

```javascript
window.addEventListener(
  "click",
  function (e) {
    alert(e.type);
  },
  false,
);
```

④

```javascript
window.onclick = f;
function f(e) {
  alert(e.type);
}
```

**정답: ①, ③, ④**

`onclick` 프로퍼티에 등록한 리스너는 버블 쪽 리스너로 동작한다. `addEventListener()`의 세 번째 인수가 `false`이면 버블 쪽, `true`이면 캡처 쪽 리스너로 등록된다.

| 보기 | 등록 방법                                     | 처리 단계 |
| ---- | --------------------------------------------- | --------- |
| ①    | `window.onclick`에 익명 함수 대입             | 버블      |
| ②    | `addEventListener()`의 세 번째 인수가 `true`  | 캡처      |
| ③    | `addEventListener()`의 세 번째 인수가 `false` | 버블      |
| ④    | `window.onclick`에 함수 `f` 대입              | 버블      |

---

## 9. 다음은 HTML 페이지의 일부분이다.

```html
<body>
  <h3>이벤트 흐름</h3>
  <hr />
  <p id="p">
    이벤트가 어디서 시작하여 어디로 흘러가는지
    <strong id="strong">이벤트 흐름</strong>을 아는 것은 매우 중요하다.
  </p>
</body>
```

### (1) 앞의 코드에서 ‘이벤트 흐름’ 부분을 클릭하였을 때 경고창에 "strong+이벤트 흐름"을 출력하려고 한다. 다음 코드를 완성하라.

```javascript
let strong = document.getElementById("strong");
strong.onclick = ____________________;
```

**정답:**

```javascript
let strong = document.getElementById("strong");
strong.onclick = function (e) {
  alert("strong+" + this.innerHTML);
};
```

`this`는 이 리스너가 등록된 `<strong>` 요소를 가리킨다. 따라서 `this.innerHTML`은 `"이벤트 흐름"`이다.

```text
strong+이벤트 흐름
```

※ 클릭 대상은 제목의 `<h3>`가 아니라 `<p>` 안에 있는 `<strong>`의 ‘이벤트 흐름’이다.

### (2) 앞의 코드에서 ‘이벤트 흐름’ 부분을 클릭하였을 때 경고창에 "p+이벤트 흐름"을 출력하려고 한다. 다음 코드를 완성하라.

```javascript
let p = document.getElementById("p");
p.addEventListener(____________________, true);
```

**정답:**

```javascript
let p = document.getElementById("p");
p.addEventListener(
  "click",
  function (e) {
    alert("p+" + e.target.innerHTML);
  },
  true,
);
```

`e.target`은 실제 클릭한 `<strong>` 요소를 가리킨다. 그러므로 `e.target.innerHTML`은 `"이벤트 흐름"`이다.

이 리스너에서 `this`는 리스너가 등록된 `<p>` 요소를 가리키므로, `this.innerHTML`을 사용하면 `<p>` 내부의 전체 HTML이 출력된다. 원하는 결과를 얻으려면 `e.target.innerHTML`을 사용해야 한다.

```text
p+이벤트 흐름
```

### (3) 문제 (1)과 (2)의 코드를 모두 HTML 페이지에 작성하였을 때, “이벤트 흐름”을 클릭하면 출력 결과는 무엇인가?

① 문제 (1)의 경고창이 출력된 후 문제 (2)의 경고창이 출력된다.  
② 문제 (2)의 경고창이 출력된 후 문제 (1)의 경고창이 출력된다.  
③ 문제 (1)의 경고창만 출력된다.  
④ 문제 (2)의 경고창만 출력된다.

**정답: ②**

`<p>`의 리스너는 세 번째 인수가 `true`이므로 캡처 단계에서 실행된다. 이후 이벤트가 타겟인 `<strong>`에 도달하면 `<strong>`의 `onclick` 리스너가 실행된다.

따라서 경고창은 다음 순서로 출력된다.

```text
p+이벤트 흐름
→ strong+이벤트 흐름
```

---

## 10. 다음 코드를 addEventListener() 메소드를 이용하여 다시 작성하라.

```javascript
p.onclick = function (e) {
  alert("hello");
};
```

**정답:**

```javascript
p.addEventListener("click", function (e) {
  alert("hello");
});
```

버블 쪽 리스너로 등록한다는 것을 명시하려면 세 번째 인수에 `false`를 작성해도 된다.

```javascript
p.addEventListener(
  "click",
  function (e) {
    alert("hello");
  },
  false,
);
```

`addEventListener()`에는 `"onclick"`이 아닌 `"click"`을 전달한다. 세 번째 인수를 생략했을 때 기본값은 `false`이다.
