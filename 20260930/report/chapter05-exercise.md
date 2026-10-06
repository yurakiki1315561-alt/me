# 5장 CSS3 고급 활용 — 이론문제

---

## 1. 다음 중 HTML 태그에 대한 브라우저의 디폴트 배치는?

**정답: ② 상대 배치**

### 설명

- **① 정적 배치**: 존재하지 않는 용어
- **② 상대 배치**: HTML 태그의 기본 배치 방식 ✅
- **③ 절대 배치**: CSS의 position 속성으로 명시할 때만 적용
- **④ 고정 배치**: CSS의 position 속성으로 명시할 때만 적용

---

## 2. CSS3에서 배치의 의미를 잘 설명한 것은?

**정답: ④ HTML 태그를 특정 위치에 고정시켜 배치할 수 있다는 의미**

### 설명

- **① HTML 태그는 웹 페이지에 작성된 순서로 배치된다는 의미**: 기본 동작이지만 배치의 의미 아님
- **② HTML 태그를 개발자가 원하는 위치에 임의로 배치할 수 있다는 의미**: 가능하지만 부정확
- **③ HTML 태그는 항상 보이게 배치된다는 의미**: 배치의 의미와 무관
- **④ HTML 태그를 특정 위치에 고정시켜 배치할 수 있다는 의미**: CSS로 위치 지정 가능 ✅

---

## 3. 다음 HTML 소스와 브라우저의 출력 결과를 참고하여 빈칸에 CSS3 스타일을 삽입하라

### 주어진 HTML 코드

```html
<p {
    border : 2px solid yellowgreen;
    color : blue;
    background : aliceblue;
}</p>

...

<div>
<p style="display:________; height:100px;________">
학생 여러분을 정말로 사랑합니다. 특히 1학년을.</p>
</div>

<div>
<p style="display:________; ________; width:100px">
몬순 3 학년 학생 여러분도 무척 사랑하지요!</p>
</div>
</div>
```

### 풀이

#### 첫 번째 빈칸 (높이 100px로 1줄)

**정답: `display: block; width: 100%;`**

```css
p style="display: block; height: 100px; width: 100%;"
```

#### 두 번째 빈칸 (3줄)

**정답: `display: inline-block; height: 100px;`**

```css
p style="display: inline-block; height: 100px; width: 100px"
```

### 최종 코드

```html
<p {
    border : 2px solid yellowgreen;
    color : blue;
    background : aliceblue;
}</p>

...

<div>
<p style="display: block; height: 100px; width: 100%;">
학생 여러분을 정말로 사랑합니다. 특히 1학년을.</p>
</div>

<div>
<p style="display: inline-block; height: 100px; width: 100px">
몬순 3 학년 학생 여러분도 무척 사랑하지요!</p>
</div>
</div>
```

---

## 4. `<span>`과 `<div>` 태그에 대한 설명

### 4번 문제 - 아래 설명 중 올바른 것은?

**정답: ③ `<span>`은 `<span style="display:inline-block"`과 동일하다**

### 설명

- **① `<span>` 태그는 다줄로 표현된다**: ❌ `<span>`은 인라인, 한 줄로 표현
- **② `<div>`는 `<div style="display:inline-block">`으로 다뤄진다**: ❌ `<div>`는 기본 블록 요소
- **③ `<span>`은 `<span style="display:inline-block"`과 동일하다**: ✅ `<span>`의 동작 방식
- **④ `<span>` 태그가 자치하는 영역의 높이는 조절할 수 있다**: ❌ 인라인 요소는 높이 조절 불가

---

## 5. 다음 HTML 태그에 대해, CSS3 스타일이 주어지는 각 경우 출력되는 결과를 그려보라

### 주어진 HTML

```html
<p>
<div>hello1</div>
<div>hello2</div>
<div>hello3</div>
</p>
```

### CSS 스타일 옵션

- **(1) div { border : 1px solid blue; width : 100px }**
  - 결과: 각 div가 100px 너비의 블록 요소로 세로 배치 (한 줄씩)

- **(2) div { display : inline; border : 1px solid blue; width : 100px }**
  - 결과: 한 줄에 배치되는 인라인 요소 (너비 100px 무시됨)

- **(3) div { display : inline-block; border : 1px solid blue; width : 100px }**
  - 결과: 한 줄에 배치되며 너비 100px 적용 (한 줄에 최대 3개)

---

## 6. 다음 각 항목에 지정한 셀렉터와 CSS3 스타일의 시드를 작성하라

### 주어진 조건

웹 페이지의 모든 이미지를 보이게 함, 한 라인에 하나씩 출력, 크기는 400x300(픽셀)

### 풀이

**(1) 웹 페이지의 모든 이미지를 보이게 암깐 한다**

```css
img {
  display: block;
}
```

**(2) 웹 페이지의 모든 이미지는 한 라인에 하나씩 출력한다**

```css
img {
  display: block;
  width: 100%;
}
```

**(3) 웹 페이지의 모든 이미지의 크기는 400x300(픽셀)로 출력한다**

```css
img {
  width: 400px;
  height: 300px;
}
```

---

## 7. 웹 페이지에 작성된 암호 입력 칸(`<input type="password">`)의 배경색을 노란색으로 칠하는 CSS3 스타일 시드를 쓰시오

**정답: ② `input[type=password] { background : yellow }`**

### 설명

- **① `input[type:password] { background : yellow }`**: ❌ 콜론(:) 사용 (속성 선택자는 등호=)
- **② `input[type=password] { background : yellow }`**: ✅ 올바른 속성 선택자 문법
- **③ `#input[type:password] { background : yellow }`**: ❌ ID 선택자는 #이고, 콜론 사용 오류
- **④ `:input[type=password] { background : yellow }`**: ❌ 가상 클래스 선택자 오류

---

## 8. 다음 칠문에 지정한 셀렉터와 CSS3 스타일의 시드를 작성하라

### 주어진 조건

웹 페이지의 모든 `<input type="button">` 버튼의 글자 색상 파란색으로 칠한다.

- 마우스가 올려질 때: 글자색과 배경색을 노란색으로 칠한다
- 마우스가 클릭될 때: 클릭한 배경색을 노란색으로 칠한다
- 그 후 사용자가 마우스로 다른 곳을 클릭하면 다시 원래 상태로 돌아온다

### 풀이

```css
/* 기본 상태 - 글자색 파란색 */
input[type="button"] {
  color: blue;
}

/* 마우스 올려질 때 - 글자색과 배경색 노란색 */
input[type="button"]:hover {
  color: yellow;
  background-color: yellow;
}

/* 마우스로 클릭될 때 - 배경색 노란색 */
input[type="button"]:active {
  background-color: yellow;
}

/* 포커스를 잃으면 원래 상태로 */
input[type="button"]:focus {
  outline: none;
}
```

---

## 9. 다음 전환(transition)이 일어나도록 CSS3 스타일 시드를 작성하라

### 조건

- **(1) `<span>` 태그의 텍스트 크기를 지정하는 font-size 프로퍼티가 변경되면, 2초에 걸쳐 천천히 텍스트의 크기가 변한다**

```css
span {
  transition: font-size 2s ease;
}
```

- **(2) `<img>` 태그의 폭을 지정하는 width 프로퍼티가 변경되면, 3초에 걸쳐 천천히 이미지 폭이 변한다**

```css
img {
  transition: width 3s ease;
}
```

---

## 10. 다음과 같은 HTML 태그와 출력된 모양이 있다. 스펀지밥 이미지에 마우스를 올렸을 때 주어진 CSS3 스타일 시드를 완성하라

### 조건

마우스를 올렸을 때:

- **(1) 180도 회전**
- **(2) y축으로 -20도 기울임**
- **(3) 90도 회전하고 1:3 비율 확대**

### 풀이

```css
<style>
    #tran {
        transition: transform 0.5s ease;
    }

    #tran:hover {
        /* (1) 180도 회전 */
        transform: rotateZ(180deg);
    }

    #tran:hover {
        /* (2) y축으로 -20도 기울임 */
        transform: rotateY(-20deg);
    }

    #tran:hover {
        /* (3) 90도 회전하고 1:3 비율 확대 */
        transform: rotateZ(90deg) scale(1, 3);
    }
</style>

...

<h3>마우스를 올려봐요</h3>
<hr>
<img id="tran" src="media/spongebob.png"
     width="100" height="100"
     alt="animation">
```
