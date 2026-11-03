# 8장 HTML DOM과 Document — 이론문제

---

## 1. 다음 중 DOM 객체는?

① window 객체  
② navigator 객체  
③ event 객체  
④ html 객체

**정답: ④ `html` 객체**

`html` 태그로부터 생성되는 객체는 DOM 객체이다.

---

## 2. 다음 중 DOM 객체가 아닌 것은?

① p 객체  
② document 객체  
③ div 객체  
④ span 객체

**정답: ② `document` 객체**

`p`, `div`, `span` 객체는 HTML 태그로부터 생성되는 DOM 객체이다.

---

## 3. HTML DOM 트리에 대해 잘못 말한 것은?

① 브라우저에 의해 만들어진다.  
② HTML 문서가 로드되면 만들어진다.  
③ HTML 태그의 포함 관계에 의해 DOM 객체들 사이에 부모 자식 관계가 형성된다.  
④ DOM 트리에서 DOM 객체를 찾는 기능은 window.getElementById()이다.

**정답: ④**

DOM 객체를 찾을 때는 `window.getElementById()`가 아니라 `document.getElementById()`를 사용한다.

```javascript
document.getElementById("id");
```

---

## 4. 브라우저가 HTML DOM 트리를 만드는 목적은 무엇인가?

**정답:**

HTML 문서의 각 태그를 객체로 만들어 자바스크립트에서 HTML 태그의 내용과 모양을 접근하고 변경할 수 있도록 하기 위해서이다.

---

## 5. 다음은 웹 페이지에 작성된 `<div id="myDiv">...</div>` 태그를 찾는 자바스크립트 코드이다.

```javascript
let obj = document.getElementById("myDiv");
```

이 `<div>` 태그의 모양을 제어하기 위해 잘못 사용한 것은?

① `obj.style.zIndex = 4;`  
② `obj.style.backgroundcolor = "red";`  
③ `obj.style.margin = "10px";`  
④ `obj.style.fontSize = "10px";`

**정답: ②**

`background-color` 스타일 프로퍼티는 자바스크립트에서 `backgroundColor`로 작성해야 한다.

```javascript
obj.style.backgroundColor = "red";
```

---

## 6. 다음 중 document 객체의 메소드 이름이 잘못된 것은?

① `getElementById()`  
② `getElementByTagName()`  
③ `writeln()`  
④ `getElementsByClassName()`

**정답: ②**

올바른 메소드 이름은 `getElementsByTagName()`이다.

```javascript
document.getElementsByTagName();
```

---

## 7. 다음 웹 페이지에 대해 물음에 답하라.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>라면을 끓이는 순서</title>
  </head>
  <body>
    <h3>라면을 끓이는 순서</h3>
    <hr />
    <ol type="A">
      <li>물을 끓인다.</li>
      <li onclick="alert(this.innerHTML)">
        <span>라면</span>과 스프를 넣는다.
      </li>
      <li>5분 후 먹는다.</li>
    </ol>
  </body>
</html>
```

### (1) 라인 9의 `<li>` 태그에 의해 생성된 DOM 객체의 innerHTML 프로퍼티 값은 무엇인가? (웹 페이지를 출력하고 라인 9를 클릭하면 확인해 볼 수 있다.)

**정답:**

```html
<span>라면</span>과 스프를 넣는다.
```

### (2) 라인 7을 `<ol type="A" onclick="alert(this.innerHTML)">`로 수정하여 웹 페이지를 출력하고 라인 8이나 10의 위치에 클릭하면 무엇이 출력되는가?

**정답:**

`<ol>` 태그의 `innerHTML`, 즉 `<ol>` 태그 안에 있는 세 개의 `<li>` 태그와 내용이 모두 출력된다.

```html
<li>물을 끓인다.</li>
<li onclick="alert(this.innerHTML)"><span>라면</span>과 스프를 넣는다.</li>
<li>5분 후 먹는다.</li>
```

---

## 8. 다음 웹 페이지를 로드하면 경고창이 출력되는가? 답에 대한 이유를 설명하라.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>자바스크립트 테스트</title>
    <script>
      let elem = document.getElementById("myBody");
      if (elem == null) alert("body is not made yet");
    </script>
  </head>
  <body id="myBody">
    <p id="first">hello</p>
  </body>
</html>
```

**정답:**

경고창이 출력된다.

```text
body is not made yet
```

`<script>`가 실행되는 시점에는 아직 `<body id="myBody">`가 만들어지기 전이므로 `document.getElementById("myBody")`의 결과가 `null`이 된다. 따라서 경고창이 출력된다.

---

## 9. HTML 페이지에 다음 태그가 작성되어 있을 때,

```html
<div id="myDiv"></div>
```

다음 코드를 작성하여 `<div>` 태그가 출력되는 영역에 `"<span>hello</span>"`을 삽입하여 hello를 출력시키고자 한다. 빈 칸을 완성하라.

```javascript
let div = document.getElementById("myDiv"); // id가 myDiv인 DOM 객체를 알아냄
let span = document.____________________; // <span> 태그를 나타내는 DOM 객체 동적 생성
span.____________ = ____________________; // "hello"를 <span> 태그의 텍스트로 삽입
div.____________________________________; // span을 div의 자식으로 삽입
```

**정답:**

```javascript
let div = document.getElementById("myDiv");
let span = document.createElement("span");
span.innerHTML = "hello";
div.appendChild(span);
```

빈 칸에 들어갈 내용은 다음과 같다.

```text
createElement("span")
innerHTML
"hello"
appendChild(span)
```
