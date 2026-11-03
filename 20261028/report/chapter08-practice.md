# 8장 HTML DOM과 Document — 실습문제

---

## 1. 다음은 HTML 페이지와 브라우저의 출력 결과이다.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>라면을 끓이는 순서</title>
  </head>
  <body>
    <h3>라면을 끓이는 순서</h3>
    <hr />
    <ol type="A">
      <li>물을 끓인다.</li>
      <li>라면과 스프를 넣는다.</li>
      <li>파를 썰어 넣는다.</li>
      <li>5분 후 <strong>맛있게</strong> 먹는다.</li>
    </ol>
  </body>
</html>
```

### (1) HTML 페이지의 HTML DOM 트리를 그려라.

**정답:**

```text
document
└── html
    ├── head
    │   └── title
    │       └── "라면을 끓이는 순서"
    └── body
        ├── h3
        │   └── "라면을 끓이는 순서"
        ├── hr
        └── ol (type="A")
            ├── li
            │   └── "물을 끓인다."
            ├── li
            │   └── "라면과 스프를 넣는다."
            ├── li
            │   └── "파를 썰어 넣는다."
            └── li
                ├── "5분 후 "
                ├── strong
                │   └── "맛있게"
                └── " 먹는다."
```

### (2) `</ol>`과 `</body>` 태그 사이에 다음과 같이 자바스크립트 코드를 작성하여 모든 `<li>` 태그를 찾아 글자 색을 green으로 출력하라.

```html
...
</ol>
<script>
    // 이곳에 자바스크립트 코드를 작성하라.
</script>
</body>
...
```

**정답:**

```html
<script>
  let items = document.getElementsByTagName("li");

  for (let i = 0; i < items.length; i++) {
    items[i].style.color = "green";
  }
</script>
```

### (3) 리스트가 출력된 공간 아무 곳이나 클릭하면 리스트 전체의 배경색을 yellowgreen으로 바꾸는 자바스크립트 코드를 작성하라.

**정답:**

```html
<ol type="A" onclick="this.style.backgroundColor='yellowgreen'">
  <li>물을 끓인다.</li>
  <li>라면과 스프를 넣는다.</li>
  <li>파를 썰어 넣는다.</li>
  <li>5분 후 <strong>맛있게</strong> 먹는다.</li>
</ol>
```

---

## 2. 다음은 HTML 페이지와 브라우저의 출력 결과이다.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>자바스크립트 연습</title>
  </head>
  <body>
    <h3>
      자바스크립트란?
      <button>border</button>
      <button>p</button>
    </h3>
    <hr />
    <p>
      자바스크립트는 웹 프로그래밍 언어로서 웹 페이지를 동적 변경시킬 수 있다.
    </p>
    <p>
      <span id="mySpan">C 언어</span>를 아는 사용자는 빠르게 학습할 수 있다.
    </p>
    <p>
      이벤트 등 GUI 프로그래밍에 필요한 요소들이 있어 학습에 약간의 어려움이
      있다.
    </p>
  </body>
</html>
```

### (1) HTML 페이지의 HTML DOM 트리를 그려라.

**정답:**

```text
document
└── html
    ├── head
    │   └── title
    │       └── "자바스크립트 연습"
    └── body
        ├── h3
        │   ├── "자바스크립트란?"
        │   ├── button
        │   │   └── "border"
        │   └── button
        │       └── "p"
        ├── hr
        ├── p
        │   └── "자바스크립트는 웹 프로그래밍 언어로서 웹 페이지를 동적 변경시킬 수 있다."
        ├── p
        │   ├── span (id="mySpan")
        │   │   └── "C 언어"
        │   └── "를 아는 사용자는 빠르게 학습할 수 있다."
        └── p
            └── "이벤트 등 GUI 프로그래밍에 필요한 요소들이 있어 학습에 약간의 어려움이 있다."
```

### (2) “border” 버튼을 클릭하면 다음과 같이 `id="mySpan"`인 `<span>` 태그에 2픽셀의 violet 색 점선 테두리가 생기도록 자바스크립트 코드를 작성하라.

**정답:**

```javascript
document.getElementById("mySpan").style.border = "2px dotted violet";
```

### (3) “p” 버튼을 클릭하면 `<p>` 태그가 몇 개 있는지 alert()를 통해 다음과 같이 출력되도록 자바스크립트 코드를 삽입하여 HTML 페이지를 수정하라.

**정답:**

```javascript
alert("<p> 태그의 개수는 " + document.getElementsByTagName("p").length);
```

---

## 3. 다음은 예제 5-7을 수정하여 출력한 결과이다. 예제에 버튼(show/hide)을 추가하고 자바스크립트 코드를 삽입하여 버튼을 클릭하면 답이 보이게 하고, 다시 클릭하면 숨기도록 구현하였다. 웹 페이지를 작성하라.

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>visibility 프로퍼티</title>
  </head>
  <body>
    <h3>
      다음 빈 곳에 숨은 단어?
      <button onclick="toggleAnswers()">show/hide</button>
    </h3>
    <hr />
    <ul>
      <li>I (<span style="visibility:hidden">love</span>) you.</li>
      <li>
        CSS is Cascading (<span style="visibility:hidden">Style</span>) Sheet.
      </li>
      <li>응답하라 (<span style="visibility:hidden">1988</span>).</li>
    </ul>

    <script>
      let visible = false;

      function toggleAnswers() {
        let answers = document.getElementsByTagName("span");
        visible = !visible;

        for (let i = 0; i < answers.length; i++) {
          answers[i].style.visibility = visible ? "visible" : "hidden";
        }
      }
    </script>
  </body>
</html>
```

---

## 4. 다음과 같이 계산식이 출력되고, ‘답’을 클릭하면 계산 결과를 출력하는 웹 페이지를 작성하고자 한다. HTML 소스의 빈칸을 채우고 HTML 페이지를 완성하라.

```html
...
<p>2 + 4 = <span onclick="this.__________=eval(2+4)">답</span></p>
<p></p>
<p>4 * 20 + 64 = <span onclick="this.__________=eval(4*20+64)">답</span></p>
<p></p>
<p>20/5-8*2 = <span onclick="this.__________=20/5-8*2">답</span></p>
<p>...</p>
```

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>계산해봅시다</title>
  </head>
  <body>
    <h3>계산해봅시다</h3>
    <hr />
    <p>2 + 4 = <span onclick="this.innerHTML=eval(2+4)">답</span></p>
    <p>4 * 20 + 64 = <span onclick="this.innerHTML=eval(4*20+64)">답</span></p>
    <p>20/5-8*2 = <span onclick="this.innerHTML=20/5-8*2">답</span></p>
  </body>
</html>
```

---

## 5. 다음 HTML 페이지를 출력하면 동일한 크기의 카드 4개가 겹쳐 있어, 맨 위에 배치된 카드만 보인다 (예제 5-6 참고). 이것은 각 카드 이미지의 z-index 스타일 프로퍼티 값을 다르게 설정하여 값이 클수록 위에 배치되도록 하였기 때문이다. 카드 이미지를 클릭하면 클릭된 카드가 맨 밑으로 들어가고 바로 밑의 카드가 나타나도록, 자바스크립트 코드를 작성하라.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>z-index 스타일 프로퍼티</title>
    <style>
      div {
        position: absolute;
      }
      img {
        position: absolute;
      }
    </style>
  </head>
  <body>
    <h3>z-index 스타일 프로퍼티</h3>
    <hr />
    <div>
      <img src="media/spade-A.png" width="100" height="140" alt="스페이드A" />
      <img src="media/spade-2.png" width="100" height="140" alt="스페이드2" />
      <img src="media/spade-3.png" width="100" height="140" alt="스페이드3" />
      <img src="media/spade-7.png" width="100" height="140" alt="스페이드7" />
    </div>
    <script>
      // 여기에 자바스크립트 코드 작성
    </script>
  </body>
</html>
```

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>z-index 스타일 프로퍼티</title>
    <style>
      div {
        position: relative;
        height: 160px;
      }
      img {
        position: absolute;
        left: 0;
        top: 0;
      }
    </style>
  </head>
  <body>
    <h3>z-index 스타일 프로퍼티</h3>
    <hr />
    <div>
      <img src="media/spade-A.png" width="100" height="140" alt="스페이드A" />
      <img src="media/spade-2.png" width="100" height="140" alt="스페이드2" />
      <img src="media/spade-3.png" width="100" height="140" alt="스페이드3" />
      <img src="media/spade-7.png" width="100" height="140" alt="스페이드7" />
    </div>

    <script>
      let cards = document.getElementsByTagName("img");
      let bottomZ = -1;

      for (let i = 0; i < cards.length; i++) {
        cards[i].style.zIndex = i;
        cards[i].onclick = function () {
          this.style.zIndex = bottomZ--;
        };
      }
    </script>
  </body>
</html>
```

---

## 6. DOM 객체의 innerHTML 프로퍼티를 다루는 연습을 해보자. 다음과 같이 `<p></p>` 태그로 출력된 텍스트에 마우스로 클릭하면, prompt() 창을 출력하고 사용자가 입력한 HTML 텍스트로 `<p>` 태그의 내용을 바꾸는 웹 페이지를 작성하라.

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>innerHTML</title>
  </head>
  <body>
    <h3>innerHTML</h3>
    <hr />
    <p onclick="changeText(this)">이번 여름에는 어디로 여행을 갈까요?</p>

    <script>
      function changeText(obj) {
        let text = prompt("HTML 텍스트 혹은 그냥 텍스트를 입력하세요");

        if (text != null) {
          obj.innerHTML = text;
        }
      }
    </script>
  </body>
</html>
```

---

## 7. 이미지를 마우스로 클릭하면 이미지를 90도 회전시키는 웹 페이지를 작성하라.

### (1) 클릭하면 한 번만 90도 회전하기

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>transform:rotate</title>
  </head>
  <body>
    <h3>클릭하면 90도 회전합니다.</h3>
    <hr />
    <img
      src="media/spongebob.png"
      width="100"
      alt="이미지"
      onclick="this.style.transform='rotate(90deg)'"
    />
  </body>
</html>
```

### (2) 클릭할 때마다 90도씩 계속 회전하기

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>transform:rotate</title>
  </head>
  <body>
    <h3>클릭하면 90도 회전합니다.</h3>
    <hr />
    <img id="pic" src="media/spongebob.png" width="100" alt="이미지" />

    <script>
      let angle = 0;
      let pic = document.getElementById("pic");

      pic.onclick = function () {
        angle += 90;
        pic.style.transform = "rotate(" + angle + "deg)";
      };
    </script>
  </body>
</html>
```

---

## 8. 이미지를 클릭할 때마다 옆으로 2, 3, 4배로 확대하여 출력하는 웹 페이지를 작성하라.

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>transform:scale</title>
  </head>
  <body>
    <h3>클릭하면 2, 3, 4배도 옆으로 늘어납니다.</h3>
    <hr />
    <img id="pic" src="media/spongebob.png" width="100" alt="이미지" />

    <script>
      let scale = 1;
      let pic = document.getElementById("pic");

      pic.onclick = function () {
        if (scale >= 4) scale = 1;
        scale++;
        pic.style.transform = "scale(" + scale + ",1)";
      };
    </script>
  </body>
</html>
```

---

## 9. 다음은 HTML 페이지와 브라우저의 출력 결과이다.

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
    <ol type="A" style="background-color:yellowgreen">
      <li>물을 끓인다.</li>
    </ol>
  </body>
</html>
```

yellowgreen 색으로 칠해진 영역은 `<ol>`이 출력된 영역이다. 이 영역에 마우스로 클릭하면 다음과 같이 prompt() 함수를 출력하고, 사용자로부터 입력받은 문자열로 라면을 끓이는 순서를 하나씩 삽입하는 자바스크립트 코드를 삽입하라.

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>라면을 끓이는 순서</title>
  </head>
  <body>
    <h3>라면을 끓이는 순서</h3>
    <hr />
    <ol type="A" style="background-color:yellowgreen" onclick="addOrder()">
      <li>물을 끓인다.</li>
    </ol>

    <script>
      function addOrder() {
        let order = prompt("라면을 끓이는 순서를 입력하라");

        if (order != null && order.trim() != "") {
          let li = document.createElement("li");
          li.textContent = order;
          document.querySelector("ol").appendChild(li);
        }
      }
    </script>
  </body>
</html>
```

---

## 10. 다음 오른쪽 위 화면에서 답보기 버튼을 누르면 아래 화면과 같이 정답이 출력된다.

### (1) 정답은 다음 코드에서 `<p>` 객체를 동적으로 생성하여 삽입한다. 코드를 완성하라.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>DOM 객체 동적 삽입</title>
    <script>
      function addAnswer(obj, text) {
        // 이곳을 완성하라.
      }
    </script>
  </head>
  <body>
    <h3>정답의 동적 삽입</h3>
    <hr />
    <div>
      <p>Q. 거울아 거울아 세상에서 누가 제일 예쁘니?</p>
      <button onclick="addAnswer(this, '백설공주')">답보기</button>
    </div>
    <div>
      <p>Q. 죽느냐 사느냐 어떤 것이 문제인가?</p>
      <button onclick="addAnswer(this, '둘다')">답보기</button>
    </div>
  </body>
</html>
```

**정답:**

```html
<script>
  function addAnswer(obj, text) {
    let answer = document.createElement("p");
    answer.textContent = text;
    obj.parentElement.appendChild(answer);
  }
</script>
```

### (2) 문제 (1)의 코드를 수정하여 정답으로 출력된 ‘백설 공주’나 ‘둘다’를 클릭하면 정답이 다시 제거되게 하라.

**정답:**

```html
<script>
  function addAnswer(obj, text) {
    let answer = document.createElement("p");
    answer.textContent = text;
    answer.onclick = function () {
      this.remove();
    };
    obj.parentElement.appendChild(answer);
  }
</script>
```
