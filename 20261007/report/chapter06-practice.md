# 6장 자바스크립트 언어 — 실습문제

---

---

## 1. HTML 페이지와 출력 결과를 보고 물음에서 요구하는 대로 웹 페이지를 수정하라.

### (1) HTML 페이지를 수정하여 자바스크립트 코드를 `<script>` 태그에 삽입하라.

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>자바스크립트 코드 위치</title>
  </head>
  <body>
    <h3>마우스를 올려 보세요</h3>
    <hr />
    <div id="box">여기에 마우스를 올리면 배경색이 노란색으로 변합니다.</div>

    <script>
      let box = document.getElementById("box");

      box.onmouseover = function () {
        this.style.background = "yellow";
      };

      box.onmouseout = function () {
        this.style.background = "white";
      };
    </script>
  </body>
</html>
```

### (2) 자바스크립트 코드를 6-1.js 파일에 저장하고 `<script>` 태그로 6-1.js 파일을 불러오도록 HTML 페이지를 수정하라.

**정답:**

#### `6-1.html`

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>외부 자바스크립트 파일</title>
  </head>
  <body>
    <h3>마우스를 올려 보세요</h3>
    <hr />
    <div id="box">여기에 마우스를 올리면 배경색이 노란색으로 변합니다.</div>

    <script src="6-1.js"></script>
  </body>
</html>
```

#### `6-1.js`

```javascript
let box = document.getElementById("box");

box.onmouseover = function () {
  this.style.background = "yellow";
};

box.onmouseout = function () {
  this.style.background = "white";
};
```

HTML 파일과 `6-1.js` 파일은 같은 폴더에 저장한다.

---

## 2. document.write()를 이용하여 다음 `<script>` 태그 안에 자바스크립트 코드를 완성하라.

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>document.write()</title>
  </head>
  <body>
    <script>
      document.write("<h3>Welcome Home</h3>");
      document.write("<hr>");
      document.write("저희 홈 페이지 오신 것을 환영합니다.");
    </script>
  </body>
</html>
```

---

## 3. document.write()를 이용하여 문제 2에 주어진 `<script>` 태그의 자바스크립트 코드를 완성하여 다음과 같이 출력되게 하라.

### (1)

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>별 출력하기</title>
  </head>
  <body>
    <script>
      for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= i; j++) {
          document.write("*");
        }
        document.write("<br>");
      }
    </script>
  </body>
</html>
```

### (2)

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>document.write()로 표만들기</title>
  </head>
  <body>
    <script>
      document.write("<h3>document.write()로 표만들기</h3>");
      document.write("<hr>");
      document.write("<table border='1'>");

      document.write("<tr><th>n</th>");
      for (let n = 0; n <= 9; n++) {
        document.write("<td>" + n + "</td>");
      }
      document.write("</tr>");

      document.write("<tr><th>n<sup>2</sup></th>");
      for (let n = 0; n <= 9; n++) {
        document.write("<td>" + n * n + "</td>");
      }
      document.write("</tr>");

      document.write("</table>");
    </script>
  </body>
</html>
```

---

## 4. prompt() 함수를 이용하여 월, 화, 수, 목, 금, 토, 일 중 하나를 입력받아 월~목의 경우 ‘출근’을, 다른 날의 경우 ‘휴일’을 출력하는 자바스크립트 코드를 작성하여 웹 페이지를 완성하라.

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>월화수목금토일</title>
  </head>
  <body>
    <h3>월화수목금토일</h3>
    <hr />

    <script>
      let day = prompt("월화수목금토일 중에서 입력하세요");

      switch (day) {
        case "월":
        case "화":
        case "수":
        case "목":
          document.write(day + "는 출근");
          break;

        case "금":
        case "토":
        case "일":
          document.write(day + "는 휴일");
          break;

        default:
          document.write("입력 오류입니다.");
      }
    </script>
  </body>
</html>
```

---

## 5. 정확한 암호가 입력될 때까지 계속 prompt()를 출력하여 암호를 입력받는 웹 페이지를 작성하라. 암호는 you이다. you가 입력되면 오른쪽과 같이 출력된다.

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>암호 입력</title>
  </head>
  <body>
    <h3>암호를 입력하라!</h3>
    <hr />

    <script>
      let password;

      do {
        password = prompt("암호를 대라");
      } while (password != "you");

      document.write("통과!");
    </script>
  </body>
</html>
```

---

## 6. 브라우저 화면과 같이 출력되도록 `<script>` 태그 내에 함수를 작성하라.

### (1)

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>1</title>
  </head>
  <body>
    <script>
      function big(a, b) {
        a = parseInt(a);
        b = parseInt(b);

        if (a > b) return a;
        else return b;
      }
    </script>

    <script>
      let b = big("625", "555");
      document.write("큰수=" + b);
    </script>
  </body>
</html>
```

### (2)

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>2</title>
  </head>
  <body>
    <script>
      function pr(text, count) {
        for (let i = 0; i < count; i++) {
          document.write(text);
        }
      }
    </script>

    <script>
      pr("%", 5);
    </script>
  </body>
</html>
```

---

## 7. prompt() 함수로 사용자로부터 숫자를 입력받고 제일 큰 자리 수와 제일 낮은 자리의 수가 같으면 ‘성공’, 아니면 ‘다름’을 출력하는 웹 페이지를 작성하라. 문자열 연산으로 풀지 말고 while을 이용하여 제일 큰 자리의 수와 낮은 자리의 수를 구하여 풀도록 하라.

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>큰 자리수와 낮은 자리수 비교</title>
  </head>
  <body>
    <h3>큰 자리수와 낮은자리수 같은지 비교</h3>
    <hr />

    <script>
      let input = prompt("숫자 입력");
      let n = Number(input);

      if (
        input == null ||
        input.trim() == "" ||
        isNaN(n) ||
        n < 0 ||
        n % 1 != 0
      ) {
        document.write("0 이상의 정수를 입력하세요.");
      } else {
        let last = n % 10;
        let first = n;

        while (first >= 10) {
          first = Math.floor(first / 10);
        }

        if (first == last) document.write(n + ": 성공");
        else document.write(n + ": 다름");
      }
    </script>
  </body>
</html>
```

---

## 8. prompt() 함수를 통해 수식을 입력받아 계산 결과를 출력하는 웹 페이지를 작성하라. 수식 계산은 eval() 함수를 이용하라.

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>eval()로 수식 계산</title>
  </head>
  <body>
    <h3>eval()로 수식 계산</h3>
    <hr />

    <script>
      let expression = prompt("수식 입력");

      if (expression == null || expression.trim() == "") {
        document.write("수식을 입력하지 않았습니다.");
      } else {
        try {
          let result = eval(expression);
          document.write(expression + " = " + result);
        } catch (error) {
          document.write("잘못된 수식입니다.");
        }
      }
    </script>
  </body>
</html>
```
