# momentum-clone
모멘텀 클론, 패스트캠퍼스 혜혜효효팀 해커톤 프로젝트입니다.
<br>
<br>

## 🌻 데모
[👉데모페이지 이동](https://hyorard-b.github.io/momentum-clone/)
<br>
<br>

## 🌻 팀원
[🙋🏻김효성](https://github.com/hyorard-b)<br>
[🙋🏻‍♀️박혜준](https://github.com/margu31)<br>
[🙋🏻이효형](https://github.com/lhhyung91)<br>
[🙋🏻‍♀️장지혜](https://github.com/jjhstoday)<br>
<br>
<br>

## 🌻 스택

![react](https://img.shields.io/badge/react-17.0.2-brightgreen) ![redux](https://img.shields.io/badge/redux-4.0.5-yellowgreen) ![react-redux](https://img.shields.io/badge/react--redux-7.2.3-yellow) ![react-thunk](https://img.shields.io/badge/react--thunk-2.3.0-red)<br>![firebase](https://img.shields.io/badge/firebase-8.3.2-ff69b4) ![axios](https://img.shields.io/badge/axios-0.21.1-important) ![styled-components](https://img.shields.io/badge/styled--components-5.2.3-blueviolet) ![framer-motion](https://img.shields.io/badge/framer--motion-4.1.2-orange)<br>![prop-types](https://img.shields.io/badge/prop--types-15.7.2-success) ![eslint](https://img.shields.io/badge/eslint-7.23.0-9cf) ![prettier](https://img.shields.io/badge/prettier-2.2.1-critical)
<br>
<br>

## 🌻 프로젝트 소개
  ### 🌱기획 의도  
      ✔️ 다양한 리액트 실습을 해볼 수 있는 크롬 확장 프로그램 클론 코딩
  ### 🌱구현 기능  
      ✔️ 로그인  
      ✔️ Todo  
      ✔️ 시간대별 컨텐츠(시간 & 문구)  
      ✔️ 랜덤 이미지 API  
  ### 🌱역할 분배  
      ✔️ 김효성: 환경 구축, 로그인, 회원가입, 유효성 검사  
      ✔️ 박혜준: Todo 기능 구현  
      ✔️ 이효형: 비동기 이미지 API 기능 구현  
      ✔️ 장지혜: 시간대별 컨텐츠(시간 & 문구) 기능 구현  
<br>
<br>

## 🌻프로젝트 목표
  ### 🌱깃을 통한 팀원간 협업 연습  
      ✔️ git Wiki  
      ✔️ git Kanban
  ### 🌱리액트와 친해지기 🤪
<br>
<br>

## 🌻API
###   
    ✔️ unsplash  
    ✔️ firebase
<br>
<br>

## 🌻프로젝트 구조도
```
├── README.md
├── node_modules/ # 개발 의존 모듈 집합 디렉토리
├── package.json
├── public/ # 정적 리소스 디렉토리
│   ├── index.html # 애플리케이션 기본 템플릿
│   └── index.css
├── src/ # React 애플리케이션 개발 디렉토리
│   ├── api
│   │    └── firebase.js
│   ├── app
│   │    └── App.js
│   ├── components
│   │    ├── BackGround
│   │    │     ├── getList.js
│   │    │     └── PhotoList.js
│   │    ├── Dialog
│   │    │     ├── Dialog.styled.js
│   │    │     ├── SignInDialog.js
│   │    │     └── SignUpDialog.js
│   │    ├── FormInput
│   │    │     ├── FormInput.js
│   │    │     └── FormInput.styled.js
│   │    ├── Greeting
│   │    │     ├── Greeting.js
│   │    │     ├── GreetingMessage.js
│   │    │     ├── GreetingTime.js
│   │    │     └── GreetingTimeToggle.js
│   │    ├── Modal
│   │    │     ├── Modal.js
│   │    │     └── Modal.styled.js
│   │    ├── SignButton
│   │    │     ├── SignButton.styled.js
│   │    │     ├── SignButton.js
│   │    │     ├── SignOutButton.js
│   │    │     └── SignUpButton.js
│   │    └── Todo
│   │    │     ├── DropDownTitle.js
│   │    │     ├── InputTodo.js
│   │    │     ├── NewTodoOrTodoList.js
│   │    │     ├── TodoButton.js
│   │    │     ├── TodoList.js
│   │    │     ├── TodoListContainer.js
│   │    │     └── TodoModal.js
│   ├── containers
│   │    ├── SignContainer
│   │    │     ├── SignContainer.js
│   │    │     └── SignContainer.styled.js
│   │    ├── GreetingContainer.js
│   │    └── TodoContainer.js
│   ├── redux
│   │    ├── modules
│   │    │     ├── auth.js
│   │    │     ├── greeting.js
│   │    │     ├── index.js
│   │    │     └── todos.js
│   │    └── store.js
│   ├── utils # 유효성 검사
│   │    └── index.js
│   └── index.js # 엔트리 파일
└── yarn.lock
```
