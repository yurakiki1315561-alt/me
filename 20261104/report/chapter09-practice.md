# 9장 이벤트 기초 및 활용 — 실습문제

---

## 1. 브라우저 내의 아무 곳이나 클릭하면 왼쪽 화면과 같고, 브라우저 바깥의 아무 곳에 마우스를 클릭하면 브라우저의 배경색이 lightgray로 바뀌도록 웹 페이지를 작성하라.

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>onblur와 onfocus</title>
    <script>
      window.onblur = function () {
        document.body.style.backgroundColor = "lightgray";
      };

      window.onfocus = function () {
        document.body.style.backgroundColor = "white";
      };
    </script>
  </head>
  <body>
    <h3>포커스와 onblur, onfocus</h3>
    <hr />
    <p>
      브라우저 바깥에 마우스를 클릭하면 window 객체에 blur 이벤트가
      발생하고 다시 마우스를 클릭하면 window 객체에 focus 이벤트가 발생한다.
    </p>
  </body>
</html>
```

브라우저 창이 포커스를 잃으면 `blur` 이벤트가 발생하여 배경색을 `lightgray`로 변경하고, 다시 포커스를 얻으면 `focus` 이벤트가 발생하여 배경색을 흰색으로 복원한다.

---

## 2. 라디오버튼으로 선택하면 해당 이미지를 출력하는 웹 페이지를 작성하라.

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>라디오 버튼과 이미지 출력</title>
    <script>
      function showImage(radio) {
        let image = document.getElementById("fruitImage");
        image.src = radio.value;
        image.alt = radio.dataset.name;
      }
    </script>
  </head>
  <body>
    <h3>라디오 버튼을 클릭하면 이미지를 출력합니다.</h3>
    <hr />

    <label>
      <input
        type="radio"
        name="fruit"
        value="media/banana.png"
        data-name="바나나"
        onchange="showImage(this)"
      />
      바나나
    </label>
    <label>
      <input
        type="radio"
        name="fruit"
        value="media/mango.png"
        data-name="망고"
        onchange="showImage(this)"
      />
      망고
    </label>
    <label>
      <input
        type="radio"
        name="fruit"
        value="media/apple.png"
        data-name="사과"
        onchange="showImage(this)"
        checked
      />
      사과
    </label>

    <div>
      <img
        id="fruitImage"
        src="media/apple.png"
        width="120"
        alt="사과"
      />
    </div>
  </body>
</html>
```

라디오버튼의 `name`을 같게 지정하여 하나만 선택되도록 한다. 선택이 변경되면 해당 버튼의 `value`를 이미지의 `src`에 대입한다.

※ `media/banana.png`, `media/mango.png`, `media/apple.png`는 사용할 이미지 파일의 경로에 맞게 변경한다.

---

## 3. 계산식을 입력받아 결과를 출력하는 웹 페이지를 작성하라. 식 입력 후 Enter 키를 치면 수식을 계산하고 결과를 출력한다.

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>onkeydown</title>
    <script>
      function calculate(e) {
        if (e.key !== "Enter") {
          return;
        }

        e.preventDefault();

        let expression = document.getElementById("expression").value;
        let result = document.getElementById("result");

        // 숫자, 사칙연산 기호, 소수점, 괄호, 공백만 허용한다.
        if (
          expression.trim() === "" ||
          !/^[0-9+\-*/().\s]+$/.test(expression)
        ) {
          result.value = "올바른 수식을 입력하세요.";
          return;
        }

        try {
          let value = eval(expression);

          if (typeof value !== "number" || !Number.isFinite(value)) {
            throw new Error("계산할 수 없는 수식");
          }

          result.value = value;
        } catch (error) {
          result.value = "계산 오류";
        }
      }
    </script>
  </head>
  <body>
    <h3>계산기 만들기</h3>
    <hr />
    <p>수식을 입력하고 &lt;Enter&gt;를 입력하세요.</p>

    <label>
      식
      <input type="text" id="expression" onkeydown="calculate(event)" />
    </label>
    <br />
    <label>
      값
      <input type="text" id="result" readonly />
    </label>
  </body>
</html>
```

`e.key`가 `"Enter"`인 경우에만 계산한다. 예를 들어 `12*2+7/3`을 입력하고 Enter 키를 누르면 계산 결과가 아래 입력창에 출력된다.

※ `eval()`은 교재의 계산 실습을 위해 사용하였다. 임의의 자바스크립트 코드가 실행되지 않도록 입력 문자를 제한했으며, 실제 서비스에서는 전용 수식 파서를 사용하는 방식이 적절하다.

---

## 4. onmousemove를 이용하여 웹 페이지에 마우스가 움직일 때 이미지가 마우스 커서처럼 작동하도록 웹 페이지를 작성하라. 이미지는 가로 30픽셀, 세로 30픽셀 크기로 하라.

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>onmousemove</title>
    <style>
      #imageCursor {
        position: absolute;
        width: 30px;
        height: 30px;
        visibility: hidden;
        pointer-events: none;
        z-index: 1000;
      }

      #imageCursor img {
        display: block;
        width: 30px;
        height: 30px;
      }
    </style>
  </head>
  <body>
    <h3>이미지 커서 만들기</h3>
    <hr />
    <p>마우스를 움직이면 이미지로 만든 커서가 마우스를 따라 다닙니다.</p>

    <div id="imageCursor">
      <img src="media/spongebob.png" alt="" />
    </div>

    <script>
      let imageCursor = document.getElementById("imageCursor");

      document.onmousemove = function (e) {
        imageCursor.style.left = e.pageX + "px";
        imageCursor.style.top = e.pageY + "px";
        imageCursor.style.visibility = "visible";
      };

      document.documentElement.addEventListener("mouseleave", function () {
        imageCursor.style.visibility = "hidden";
      });
    </script>
  </body>
</html>
```

`position: absolute`로 배치한 이미지 블록의 위치를 마우스 좌표인 `e.pageX`, `e.pageY`에 맞추어 변경한다. `pointer-events: none`은 이미지가 마우스 이벤트를 가로채지 않도록 한다.

※ 문제의 힌트에 나온 `display: absolute`는 `position: absolute`의 오기이다. 이미지 경로는 실제 파일에 맞게 변경한다.

---

## 5. 브라우저의 아무 곳이나 더블클릭하면 바탕색이 랜덤하게 바뀌는 웹 페이지를 작성하라.

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>자바스크립트 연습</title>
    <script>
      window.ondblclick = function () {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);

        document.body.style.backgroundColor =
          "rgb(" + red + ", " + green + ", " + blue + ")";
      };
    </script>
  </head>
  <body>
    <h3>바탕 아무 곳이나 더블 클릭</h3>
    <hr />
    <p>
      바탕 아무 곳이나 <strong>더블클릭</strong>하면 배경색이 랜덤하게 변합니다.
    </p>
  </body>
</html>
```

`Math.floor(Math.random() * 256)`으로 0부터 255까지의 정수를 생성하고, 이를 RGB 색상값으로 사용한다. 여기서 “브라우저의 아무 곳”은 주소 표시줄 등이 아닌 웹 페이지 내부를 뜻한다.

---

## 6. 이미지 위에 마우스 휠을 위로 굴리면 이미지가 5%씩 축소되고 아래로 굴리면 5%씩 확대되는 웹 페이지를 작성하라.

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>onwheel</title>
  </head>
  <body>
    <h3>마우스 휠을 이용한 이미지 확대/축소</h3>
    <hr />
    <p>
      이미지 위에 휠을 위로 굴리면 이미지가 축소되고
      아래로 굴리면 이미지가 확대됩니다.
    </p>

    <img id="picture" src="media/tulips.png" width="200" alt="튤립" />

    <script>
      let picture = document.getElementById("picture");
      let imageWidth = 200;

      picture.addEventListener("wheel", function (e) {
        e.preventDefault();

        if (e.deltaY < 0) {
          imageWidth *= 0.95;
        } else if (e.deltaY > 0) {
          imageWidth *= 1.05;
        }

        picture.style.width = imageWidth + "px";
        picture.style.height = "auto";
      }, { passive: false });
    </script>
  </body>
</html>
```

휠을 위로 굴리면 `deltaY`가 음수이므로 현재 크기의 95%로 줄이고, 아래로 굴리면 양수이므로 현재 크기의 105%로 늘린다. 높이를 `auto`로 설정하여 이미지의 가로세로 비율을 유지한다.

`preventDefault()`는 이미지 위에서 휠을 움직일 때 페이지가 함께 스크롤되는 기본 동작을 막는다. 이미지 경로는 실제 파일에 맞게 변경한다.

---

## 7. 웹 페이지에 있는 모든 `<span>` 태그에 대해, 마우스가 올라오면 해당 태그의 텍스트에 밑줄을 긋고, 내려가면 밑줄을 지우는 자바스크립트 코드를 완성하라.

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>이벤트 객체의 target</title>
    <script>
      window.onmouseover = function (e) {
        if (e.target.tagName === "SPAN") {
          e.target.style.textDecoration = "underline";
        }
      };

      window.onmouseout = function (e) {
        if (e.target.tagName === "SPAN") {
          e.target.style.textDecoration = "none";
        }
      };
    </script>
  </head>
  <body>
    <h3>span 태그에만 onmouseover/onmouseout</h3>
    <hr />
    <p>
      span 태그에 대해서만 <span>마우스</span>가 올라올 때 밑줄이 그어지고
      <span>마우스</span>가 내려갈 때 밑줄이 사라지도록
      <span>자바스크립트 코드</span>를 작성한다.
    </p>
  </body>
</html>
```

`e.target`은 이벤트가 발생한 요소를 가리킨다. HTML 요소의 `tagName`은 대문자로 반환되므로 `"SPAN"`과 비교하고, 해당 요소의 `textDecoration`을 변경한다.

---

## 8. 다음 웹 페이지에서 `<li>` 아이템을 클릭하면 텍스트 크기를 1.3배(1.3em)로 출력하도록 자바스크립트 코드를 작성하라. 다른 아이템이 클릭되면 이전 아이템을 원래 크기(1em)로 출력한다.

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>이벤트 객체의 target</title>
    <script>
      window.onload = function () {
        let items = document.getElementsByTagName("li");

        for (let i = 0; i < items.length; i++) {
          items[i].onclick = function () {
            for (let j = 0; j < items.length; j++) {
              items[j].style.fontSize = "1em";
            }

            this.style.fontSize = "1.3em";
          };
        }
      };
    </script>
  </head>
  <body>
    <h3>아이템을 클릭하면 1.3배 크기로</h3>
    <hr />
    <p>여름 방학 때 하고 싶은 것들</p>
    <ul>
      <li>자전거로 대한민국 일주</li>
      <li>책 100권 읽기</li>
      <li>철인 3종 경기 준비</li>
      <li>자바스크립트 정복</li>
    </ul>
  </body>
</html>
```

아이템을 클릭하면 먼저 모든 `<li>`의 크기를 `"1em"`으로 복원한 뒤, 클릭한 아이템만 `"1.3em"`으로 변경한다. 같은 아이템을 반복해서 클릭해도 크기가 계속 커지지 않는다.

---

## 9. 리스트를 만들고 아이템 영역 안에 마우스가 들어오면 다음과 같이 자세한 설명을 출력하는 웹 페이지를 작성하라.

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>onmouseover와 onmouseout</title>
    <style>
      #description {
        position: absolute;
        visibility: hidden;
        width: 220px;
        padding: 8px;
        border: 1px solid gray;
        background-color: lightyellow;
        pointer-events: none;
        z-index: 1000;
      }
    </style>
  </head>
  <body>
    <h3>아이템에 마우스를 올리면 설명 출력</h3>
    <hr />
    <p>여름 방학 때 하고 싶은 것들</p>

    <ul>
      <li data-index="0">자전거로 대한민국 일주</li>
      <li data-index="1">책 100권 읽기</li>
      <li data-index="2">철인 3종 경기 준비</li>
      <li data-index="3">자바스크립트 정복</li>
    </ul>

    <div id="description"></div>

    <script>
      let descriptions = [
        "빨간 자전거를 타고 서울, 대전, 대구, 부산 찍고, 목포, 인천을 거쳐 달린다.",
        "문학, 과학, 역사 등 여러 분야의 책을 100권 읽는다.",
        "수영, 사이클, 달리기를 꾸준히 연습하여 철인 3종 경기를 준비한다.",
        "자바스크립트 문법과 DOM, 이벤트 처리를 공부하고 웹 페이지를 만든다."
      ];

      let description = document.getElementById("description");
      let items = document.getElementsByTagName("li");

      function moveDescription(e) {
        description.style.left = e.pageX + 15 + "px";
        description.style.top = e.pageY + 15 + "px";
      }

      for (let i = 0; i < items.length; i++) {
        items[i].onmouseover = function (e) {
          let index = Number(this.dataset.index);

          description.innerHTML = descriptions[index];
          moveDescription(e);
          description.style.visibility = "visible";
        };

        items[i].onmousemove = function (e) {
          moveDescription(e);
        };

        items[i].onmouseout = function () {
          description.style.visibility = "hidden";
        };
      }
    </script>
  </body>
</html>
```

마우스가 아이템 위에 올라오면 설명을 `<div>`에 넣고 마우스 위치 근처에 표시한다. 마우스가 아이템에서 벗어나면 `visibility`를 `"hidden"`으로 바꾸어 숨긴다.

※ 설명 문구는 아이템에 맞게 작성한 예시이며 자유롭게 변경할 수 있다.

---

## 10. 다음 브라우저 화면과 같은 모양의 계산기 웹 페이지를 작성하라.

입력창에는 초기에 0이 출력된다. 숫자와 연산자 버튼을 눌러 계산식을 만들고, = 버튼을 클릭하면 계산 결과를 출력한다. BACK 버튼을 누르면 입력창의 마지막 문자를 지운다. CE나 C 버튼은 같은 기능으로, 입력창의 내용을 모두 지우고 처음처럼 0이 출력되게 한다. NONE 버튼은 아무 기능이 없다.

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>계산기 만들기</title>
    <style>
      .calculator {
        width: 360px;
        max-width: 100%;
      }

      #display {
        box-sizing: border-box;
        width: 100%;
        margin-bottom: 4px;
      }

      table {
        width: 100%;
        table-layout: fixed;
        border-spacing: 8px 4px;
      }

      button {
        width: 100%;
      }
    </style>
  </head>
  <body>
    <div class="calculator">
      <h3>계산기 만들기</h3>
      <hr />

      <input
        type="text"
        id="display"
        value="0"
        aria-label="계산식과 결과"
        readonly
      />

      <table>
        <tbody>
          <tr>
            <td><button type="button" onclick="backspace()">BACK</button></td>
            <td><button type="button" onclick="clearDisplay()">CE</button></td>
            <td><button type="button" onclick="clearDisplay()">C</button></td>
            <td><button type="button" onclick="calculate()">=</button></td>
          </tr>
          <tr>
            <td><button type="button" onclick="append('7')">7</button></td>
            <td><button type="button" onclick="append('8')">8</button></td>
            <td><button type="button" onclick="append('9')">9</button></td>
            <td><button type="button" onclick="append('/')">/</button></td>
          </tr>
          <tr>
            <td><button type="button" onclick="append('4')">4</button></td>
            <td><button type="button" onclick="append('5')">5</button></td>
            <td><button type="button" onclick="append('6')">6</button></td>
            <td><button type="button" onclick="append('*')">*</button></td>
          </tr>
          <tr>
            <td><button type="button" onclick="append('1')">1</button></td>
            <td><button type="button" onclick="append('2')">2</button></td>
            <td><button type="button" onclick="append('3')">3</button></td>
            <td><button type="button" onclick="append('-')">-</button></td>
          </tr>
          <tr>
            <td><button type="button" onclick="append('0')">0</button></td>
            <td><button type="button" onclick="append('+')">+</button></td>
            <td><button type="button">NONE</button></td>
            <td><button type="button">NONE</button></td>
          </tr>
        </tbody>
      </table>
    </div>

    <script>
      let display = document.getElementById("display");
      let calculated = false;

      function append(value) {
        let isNumber = /^[0-9]$/.test(value);

        if (display.value === "Error") {
          display.value = "0";
        }

        if (calculated && isNumber) {
          display.value = value;
        } else if (display.value === "0" && isNumber) {
          display.value = value;
        } else {
          display.value += value;
        }

        calculated = false;
      }

      function backspace() {
        if (display.value === "Error") {
          clearDisplay();
          return;
        }

        display.value = display.value.slice(0, -1);

        if (display.value === "") {
          display.value = "0";
        }

        calculated = false;
      }

      function clearDisplay() {
        display.value = "0";
        calculated = false;
      }

      function calculate() {
        try {
          let expression = display.value;

          // 버튼으로 만든 수식과 계산 결과의 지수 표기만 허용한다.
          if (!/^[0-9eE+\-*/.]+$/.test(expression)) {
            throw new Error("잘못된 수식");
          }

          let result = eval(expression);

          if (typeof result !== "number" || !Number.isFinite(result)) {
            throw new Error("계산할 수 없는 수식");
          }

          display.value = result;
          calculated = true;
        } catch (error) {
          display.value = "Error";
          calculated = false;
        }
      }
    </script>
  </body>
</html>
```

숫자와 연산자 버튼은 입력창에 문자를 추가한다. `=` 버튼은 만들어진 수식을 계산하며, 잘못된 수식이나 0으로 나누는 등의 계산은 `"Error"`로 표시한다.

`BACK`은 마지막 문자 하나를 지우고, `CE`와 `C`는 입력창을 `"0"`으로 초기화한다. `NONE` 버튼에는 이벤트 리스너를 등록하지 않아 아무 동작도 하지 않는다.

예를 들어 `25+3*5-6`을 만든 뒤 `=` 버튼을 누르면 `34`가 출력된다.

※ `eval()`은 문제의 힌트에 맞추어 사용하였다. 입력창을 `readonly`로 두고 계산에 필요한 문자만 검사하며, 실제 서비스에서는 전용 수식 파서를 사용하는 방식이 적절하다.
