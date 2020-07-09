<a href="https://gitmoji.carloscuesta.me"> <img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square" alt="Gitmoji?style=flat-square&logo=appveyor"> </a> <a href="https://github.com/codestates/Saekgalpi-ColorPalette"><img src ="https://img.shields.io/badge/github-Saekgalpi-lightgrey?style=flat-square&logo=appveyor"></a> <img src="https://img.shields.io/badge/npm-v6.14.4-important?style=flat-square&logo=appveyor"> <img src="https://img.shields.io/badge/node.js-v12.16.11-important?style=flat-square&logo=appveyor"> 



# 🎨 색갈피

한국어가 지원되는 컬러 팔레트 웹페이지, <a href="http://hwabaek.s3-website.ap-northeast-2.amazonaws.com/">색갈피</a>입니다.

이 웹페이지는 디자이너와 프로그래머에게 훌륭한 컬러팔레트를 제공하고, 저장할 수 있게 해줍니다.

1. 사용자가 컬러팔레트를 직접 정의할 수 있고, 저장이 가능합니다.
2. 색갈피 이용자가 정의한 컬러 팔레트를 다양한 방법으로 공유가 가능합니다. 
   - 공유 방법
      	1. Hex-code
      	2. rgb-code
     	3. Color Palette img
     	4. url

3. 사용자가 정의한 컬러팔레트를 한 곳에서 모아볼 수 있고, 삭제/편집 등 원활한 관리가 가능합니다.

   

# 💡 About 

## Getting Started

**Using npm** :

1. 이 repository를 **다운로드** or **Git Clone**받으십시오.

2. 상위 디렉토리/server/client 폴더에 각각 인스톨을 하십시오.

   ```
   $ npm install
   ```

3. server/client를 각각 실행하십시오.

   1. Server-side

      ```
      $ npm run server-start
      ```

   2. Client-side

      ```
      $ npm start
      ```

   or

url : **http://hwabaek.s3-website.ap-northeast-2.amazonaws.com** 에서 사용하십시오.

## About Service (움짤 첨부 예정)
   1. main page 
      - 조회수 순서로 16개의 색갈피 정렬
      - 최신순으로 4개의 색갈피 정렬
   
   2. login / logout
      - 로그인
      - 로그아웃
   
   3. signatureColor
      - 자신의 고유 색상을 지정, 편집
   
   4. password edit
      - 비밀번호 변경
   
   5. Create Palette
      - 색갈피 생성
      - 2 ~ 7개의 색을 설정
      - 색갈피 이름과 설명 설정
   
   6. Edit Palette
      - 색갈피 변경
      - 색 개수 변경
      - 이름과 설명 변경
   
   7. Delete Palette
      - 사용자 개인이 생성한 색갈피 삭제
   
   8. admin 
      - 전체 유저 조회
      - 유저 삭제 
      - 팔레트 삭제

## 🎨 Server

### :sparkles: API DOCS
하단의 하이퍼링크를 클릭하시면 API DOCS로 연결됩니다.   
<a href="https://hwabaek.gitbook.io/hwabaek/">색갈피 API DOCS</a>


### 📦 Dependencies

-   mysql
-   Sequelize
-   Sequelize-cli
-   express
-   express-session
-   cors
-   body parser
-   cookie parser


## 🎨 Client

### ✨ Features

-   팔레트 조회  
-   팔레트 편집 및 생성  
-   팔레트 공유 및 다운로드  
-   회원가입  
-   로그인  
-   로그아웃  
-   회원 정보 수정  

### 📦 Dependencies

-   React
-   React-Router
-   React-Hooks
-   SASS
-   Styled-Component

## License

이 코드는 <a href="https://github.com/carloscuesta/gitmoji/blob/master/LICENSE">MIT</a>의 라이센스에 따라 사용이 가능합니다. 
