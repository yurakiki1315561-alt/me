# 5장 CSS3 고급 활용 — 실습문제

---

## 1. `display` 프로퍼티를 이용하여 3개의 `<div>` 태그에 담긴 텍스트가 다음 화면과 같이 출력되는 웹 페이지를 작성하라.

(1) 각 `<div>` 박스의 폭을 200픽셀로 설정하여 가로로 나열한다.

(2) `<div>`를 인라인 요소로 출력한다.

**정답:**

(1) `inline-block` 사용

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>display 프로퍼티</title>
    <style>
      div {
        display: inline-block;
        width: 200px;
        border: 1px solid gray;
        vertical-align: top;
      }
    </style>
  </head>
  <body>
    <h2>3개의 div 활용</h2>
    <hr />

    <div>
      캔버스에 이미지를 그리기 위해서는 이미지를 담을 객체가 먼저 필요하다.
    </div>

    <div>Image 객체의 src 프로퍼티를 이용하여 비트맵을 로드한다.</div>

    <div>
      이미지 로딩이 끝나면 그때 비로소 이미지의 너비와 높이가 제대로 알려진다.
    </div>
  </body>
</html>
```

(2) `inline` 사용

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>display 프로퍼티</title>
    <style>
      div {
        display: inline;
        border: 1px solid gray;
      }
    </style>
  </head>
  <body>
    <h2>3개의 div 활용</h2>
    <hr />

    <div>
      캔버스에 이미지를 그리기 위해서는 이미지를 담을 객체가 먼저 필요하다.
    </div>

    <div>Image 객체의 src 프로퍼티를 이용하여 비트맵을 로드한다.</div>

    <div>
      이미지 로딩이 끝나면 그때 비로소 이미지의 너비와 높이가 제대로 알려진다.
    </div>
  </body>
</html>
```

---

## 2. `position: fixed`를 이용하여 광고문이 항상 브라우저의 바닥에 나타나도록 작성하라. 광고문은 브라우저 폭의 100% 크기로 출력된다.

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>position: fixed</title>
    <style>
      .advertisement {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        box-sizing: border-box;
        background-color: purple;
        padding: 5px;
        z-index: 100;
      }

      body {
        margin-bottom: 60px;
      }
    </style>
  </head>
  <body>
    <h2>소연재</h2>
    <hr />

    <p>
      저는 체조 선수 소연재입니다. 음악을 들으면서 책 읽기를 좋아합니다.
      김치찌개와 막국수를 무척 좋아합니다.
    </p>

    <div class="advertisement">소연재 공연은 24일입니다.</div>
  </body>
</html>
```

---

## 3. HTML 태그와 CSS3을 이용하여 오디오 재생 리스트를 표로 작성하라. 또한 버튼에 마우스가 올라가면 버튼 글자가 magenta 색으로 바뀌게 하라. 버튼은 눌러도 작동하지 않는다.

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>오디오 재생 리스트</title>
    <style>
      table {
        border-collapse: collapse;
      }

      td {
        border: 1px solid lightgray;
        padding: 4px;
      }

      button {
        cursor: pointer;
      }

      button:hover {
        color: magenta;
      }
    </style>
  </head>
  <body>
    <h2>오디오 재생 리스트</h2>
    <hr />

    <table>
      <tbody>
        <tr>
          <td>1</td>
          <td>애국가</td>
          <td><button type="button">재생</button></td>
          <td><button type="button">중지</button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Moon Glow</td>
          <td><button type="button">재생</button></td>
          <td><button type="button">중지</button></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Embraceable You</td>
          <td><button type="button">재생</button></td>
          <td><button type="button">중지</button></td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
```

---

## 4. 리스트와 CSS3 스타일 시트를 이용하여 다음과 같이 출력되는 HTML 페이지를 작성하라.

(1) 리스트 아이템에 마우스를 올리면 배경색이 `yellowgreen`으로 변한다.

(2) 세계지도(`worldmap.png`)를 리스트 배경으로 출력한다.

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>리스트 스타일</title>
    <style>
      ul {
        width: 250px;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-right: 10px;
        list-style-type: square;
        background-color: aliceblue;
      }

      li:hover {
        background-color: yellowgreen;
      }

      .worldmap {
        background-image: url("worldmap.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
    </style>
  </head>
  <body>
    <h2>가보고 싶은 나라</h2>
    <hr />

    <h3>(1) 리스트 아이템의 배경색 변경</h3>
    <ul>
      <li>프랑스</li>
      <li>독일</li>
      <li>칠레</li>
      <li>남아프리카공화국</li>
    </ul>

    <h3>(2) 세계지도를 리스트 배경으로 출력</h3>
    <ul class="worldmap">
      <li>프랑스</li>
      <li>독일</li>
      <li>칠레</li>
      <li>남아프리카공화국</li>
    </ul>
  </body>
</html>
```

---

## 5. 스폰지밥 이미지가 왼쪽 모서리에서 10픽셀 떨어진 위치에 항상 나오도록 웹 페이지를 작성하라. 이미지에 테두리를 두고, 여백은 10픽셀, 패딩은 5픽셀로 하라.

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>float 배치</title>
    <style>
      img {
        float: left;
        border: 1px solid gray;
        padding: 5px;
        margin: 10px;
      }

      .container {
        display: flow-root;
      }
    </style>
  </head>
  <body>
    <h2>스폰지밥</h2>
    <hr />

    <div class="container">
      <img src="spongebob.png" alt="스폰지밥" width="100" height="100" />

      <p>
        저는 스폰지밥입니다. 먹는 밥이 아니고요. 제 이름이 그냥 그래요. 그리고
        어린이부터 노인까지 많은 분의 사랑을 받고 있어요. 제 친구 뚱이도 있고요.
        징징이도 있고 집게 사장님도 있어요.
      </p>
    </div>
  </body>
</html>
```

---

## 6. 이미지를 회전시키는 애니메이션을 작성하라.

(1) 1초에 한 바퀴씩 무한 반복한다.

(2) 왼쪽으로 90도 갔다가 다시 오른쪽으로 90도 가기를 1초에 한 번씩 무한 반복한다.

**정답:**

(1) 1초에 한 바퀴씩 무한 반복

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>이미지 회전 애니메이션</title>
    <style>
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }

        to {
          transform: rotate(360deg);
        }
      }

      img {
        animation: spin 1s linear infinite;
      }
    </style>
  </head>
  <body>
    <h2>어지러워요</h2>
    <hr />

    <img src="spongebob.png" alt="회전하는 스폰지밥" width="100" height="100" />
  </body>
</html>
```

(2) 왼쪽 90도와 오른쪽 90도 사이에서 반복

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>이미지 회전 애니메이션 - 왕복</title>
    <style>
      @keyframes rotate-back-forth {
        0% {
          transform: rotate(-90deg);
        }

        50% {
          transform: rotate(90deg);
        }

        100% {
          transform: rotate(-90deg);
        }
      }

      img {
        animation: rotate-back-forth 1s ease-in-out infinite;
      }
    </style>
  </head>
  <body>
    <h2>어지러워요</h2>
    <hr />

    <img
      src="spongebob.png"
      alt="좌우로 회전하는 스폰지밥"
      width="100"
      height="100"
    />
  </body>
</html>
```

---

## 7. 아래 왼쪽과 같은 웹 페이지를 작성하고, CSS3을 이용하여 이미지에 마우스를 올리면 이미지의 폭이 2초에 걸쳐 부드럽게 브라우저 폭의 크기로 늘어나게 하라.

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>이미지 transition 애니메이션</title>
    <style>
      body {
        margin: 0;
        padding: 8px;
      }

      img {
        width: 100px;
        height: 100px;
        transition: width 2s ease;
      }

      img:hover {
        width: calc(100vw - 16px);
      }
    </style>
  </head>
  <body>
    <h2>마우스를 올려봐요</h2>
    <hr />

    <img src="spongebob.png" alt="가로로 늘어나는 스폰지밥" />
  </body>
</html>
```

---

## 8. 예제 5-9를 수정하여 다음과 같이 상하로 출력되는 메뉴를 만들어라.

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>세로 메뉴</title>
    <style>
      .menu {
        width: 150px;
        padding: 0;
        margin: 0;
        list-style: none;
        background-color: olive;
      }

      .menu a {
        display: block;
        padding: 5px 15px;
        color: white;
        text-decoration: none;
      }

      .menu a:hover {
        color: violet;
        background-color: #666600;
      }
    </style>
  </head>
  <body>
    <ul class="menu">
      <li><a href="#">Home</a></li>
      <li><a href="#">Espresso</a></li>
      <li><a href="#">Cappuccino</a></li>
      <li><a href="#">Cafe Latte</a></li>
      <li><a href="#">F.A.Q</a></li>
    </ul>
  </body>
</html>
```

---

## 9. `<ol>` 태그를 이용하여 ‘카푸치노를 만드는 과정’을 웹 페이지로 만들어 보자. 마커를 크게 만들기 위해 CSS3을 이용하여 기본 마커를 제거하고 직접 숫자를 준다.

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>카푸치노 만들기</title>
    <style>
      .container {
        width: 300px;
        border: 1px solid brown;
        padding: 15px;
      }

      .container h3 {
        text-align: center;
      }

      ol {
        list-style-type: none;
        padding: 0;
        margin: 0;
      }

      li {
        position: relative;
        padding-left: 50px;
        margin-bottom: 15px;
      }

      li:last-child {
        margin-bottom: 0;
      }

      li span {
        position: absolute;
        top: 0;
        left: 0;
        color: olive;
        font-size: 32px;
        font-weight: bold;
        font-style: italic;
      }

      li p {
        margin: 0;
        font-size: 14px;
        line-height: 1.5;
      }
    </style>
  </head>
  <body>
    <h2>카푸치노</h2>
    <hr />

    <div class="container">
      <h3>카푸치노 만드는 순서</h3>

      <ol>
        <li>
          <span>1.</span>
          <p>
            에스프레소를 추출한다. 반드시 에스프레소 콩을 사용해야 제맛이 난다.
          </p>
        </li>

        <li>
          <span>2.</span>
          <p>적당한 용기에 우유를 넣어 중탕하거나 끓기 직전까지 데운다.</p>
        </li>

        <li>
          <span>3.</span>
          <p>
            몇 초간 저어 충분히 거품을 낸다. 거품이 충분하지 않으면 풍미가
            떨어진다.
          </p>
        </li>

        <li>
          <span>4.</span>
          <p>
            컵에 계피 막대를 꽂고 커피를 부은 후 우유 거품을 붓는다. 휘핑크림을
            얹고 계피 가루를 뿌린다.
          </p>
        </li>
      </ol>
    </div>
  </body>
</html>
```

---

## 10. `<p>` 문단의 텍스트가 오른쪽 끝에서 시작하여 왼쪽으로 3초에 걸쳐 펼쳐지도록 CSS3 애니메이션을 작성하라. 애니메이션은 한 번만 진행한다. `<p>` 문단을 오른쪽 끝에 출력하려면 `margin-left: 100%`로, 왼쪽에 출력하려면 `margin-left: 0%`로 설정하면 된다.

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>애니메이션 응용</title>
    <style>
      @keyframes slide-text {
        from {
          margin-left: 100%;
        }

        to {
          margin-left: 0%;
        }
      }

      p {
        animation: slide-text 3s ease 1;
      }
    </style>
  </head>
  <body>
    <h2>애니메이션 응용</h2>
    <hr />

    <p>질문 있습니다.</p>
  </body>
</html>
```
