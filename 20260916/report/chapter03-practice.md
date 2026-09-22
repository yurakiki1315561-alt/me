# 3장 HTML5 문서 구조화와 웹 폼 - 실습문제

---

## 1. 9개의 버튼을 가진 웹 페이지

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>버튼이 있는 페이지</title>
  </head>
  <body>
    <h3>버튼을 만들자</h3>
    <hr />
    <form>
      <table>
        <tr>
          <td><input type="button" value="1" /></td>
          <td><input type="button" value="2" /></td>
          <td><input type="button" value="3" /></td>
        </tr>
        <tr>
          <td><input type="button" value="4" /></td>
          <td><input type="button" value="5" /></td>
          <td><input type="button" value="6" /></td>
        </tr>
        <tr>
          <td><input type="button" value="7" /></td>
          <td><input type="button" value="8" /></td>
          <td><input type="button" value="0" /></td>
        </tr>
      </table>
    </form>
  </body>
</html>
```

---

## 2. `<figure>`와 `<figcaption>`을 이용한 문서

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>웹 브라우저</title>
  </head>
  <body>
    <h3>웹 브라우저 소개</h3>
    <hr />
    <table>
      <tr>
        <td width="200">
          브라우저라고 불리기도 하는 웹 브라우저(Web Browser)는, 사용자에게 웹
          서버 컴퓨터에 접속하고 웹 페이지, 이미지, 동영상, 음악 등 다양한
          데이터 다운받아 보여주는 소프트웨어이다.
          <strong>그림 1-2</strong>는 대표적인 Chrome 웹 브라우저를 보여준다.
        </td>
        <td>
          <figure>
            <img src="chrome.png" width="250" alt="구글 크롬" />
            <figcaption>그림 1-2 구글 Chrome</figcaption>
          </figure>
        </td>
      </tr>
      <tr>
        <td>
          웹 페이지는 브라우저에 HTML5 문서임을 알리기 위해
          <strong>그림 1-3</strong>과 같은 코드를 첫 라인에 삽입하여야 한다.
        </td>
        <td>
          <figure>
            <code>
              &lt;!doctype html&gt;<br />
              &lt;html&gt;<br />
              ...<br />
              &lt;/html&gt;
            </code>
            <figcaption>그림 1-3 HTML5 문서 구성</figcaption>
          </figure>
        </td>
      </tr>
    </table>
  </body>
</html>
```

---

## 3. `<fieldset>`, `<legend>`, `<label>`, `<input>`을 이용한 로그인 폼

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>로그인 폼 만들기</title>
  </head>
  <body>
    <h3>로그인 폼</h3>
    <hr />
    <form>
      <fieldset>
        <legend>Login</legend>
        <label for="user">Username</label>
        <input type="text" id="user" name="user" size="25" />
        <label for="pw">Password</label>
        <input type="password" id="pw" name="pw" size="25" />
      </fieldset>
    </form>
  </body>
</html>
```

---

## 4. `<details>`와 `<summary>`를 이용한 웹 페이지

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>웹 프로그래밍 개요</title>
  </head>
  <body>
    <h3>웹 프로그래밍 개요</h3>
    <hr />

    <details>
      <summary>웹의 기본 목적</summary>
      <p>
        웹의 기본 목적은 한 컴퓨터에서 만든 문서(document)를 다른 컴퓨터에서
        쉽게 볼 수 있도록 하는 것이다.
      </p>
    </details>

    <details>
      <summary>왜 Web인가?</summary>
      <p>
        전 세계의 컴퓨터들을 인터넷으로 거미줄처럼 연결하고 웹 문서를 쉽게
        주고받을 수 있도록 시스템을 만들고 WWW(World Wide Web), 간단히 줄여
        웹(Web)이라고 부른다.
      </p>
    </details>

    <details>
      <summary>웹 페이지를 구성하는 3 요소</summary>
      <ul>
        <li>HTML - 문서의 구조와 내용</li>
        <li>CSS(Cascading Style Sheet) - 문서의 모양</li>
        <li>Javascript - 행동 및 응용 프로그램</li>
      </ul>
    </details>
  </body>
</html>
```

---

## 5. 도형 서식을 입력받는 폼

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>도형 서식 폼 만들기</title>
  </head>
  <body>
    <h3>도형 서식 폼 만들기</h3>
    <hr />
    <form>
      <fieldset>
        <legend>도형 서식 입력</legend>

        <label for="line">선종류</label>
        <select id="line" name="line" size="3">
          <option value="none">선없음</option>
          <option value="solid">실선</option>
          <option value="dotted">점선</option>
        </select>
        <br /><br />

        <label for="width">선두께</label>
        <input
          type="number"
          id="width"
          name="width"
          min="1"
          max="20"
          size="5"
        />

        <label for="color">선색</label>
        <input type="color" id="color" name="color" value="#4488cc" />
        <br /><br />

        <label for="alpha">투명도(0~100) :</label>
        <input
          type="range"
          id="alpha"
          name="alpha"
          min="0"
          max="100"
          value="50"
        />
      </fieldset>
    </form>
  </body>
</html>
```