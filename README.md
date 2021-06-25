# WEBFLIX_summer
2020년 여름방학에 처음으로 웹 프론트엔드 구현
------

* 넷플릭스 홈페이지를 프론트적으로만 따라 만들어보기
* 개인 프로젝트(스터디)
* **템플릿을 사용하지 않음**
* HTML, CSS, JS의 이해를 위해 일일이 구글링, 강의를 참고하며 구현

-------------------

### 개발 도구
- Visual Studio Code
  - HTML Boilerplate
  - Live Server
- Fontawsome(https://fontawesome.com/)
- HTML, CSS, JS

-------------------
### 실행화면

*메인 상단*
- 텍스트의 크기 및 폰트 적용을 이해하고 이메일 주소를 입력할 수 있도록 하는 form을 추가함.
- 뒷 배경의 사진 위, 아래에 그라디언트를 적용시킴
- nav 바에는 로그인 버튼과 웹플릭스 로고를 넣음
![image](https://user-images.githubusercontent.com/62641359/123269194-b7e4a800-d539-11eb-8382-fdb201fefdfc.png)

*메인 하단*
 - 중간 나누는 바와 이미지를 위에 삽입하며 image 속성과 정렬의 이해를 도움
 - 자주 묻는 질문에 메뉴를 추가하면서 align 속성을 다룸
 - 아래 또한번 이메일 주소를 입력할 수 있는 칸 추가
![image](https://user-images.githubusercontent.com/62641359/123270093-8c15f200-d53a-11eb-9e5c-731c7e0e71f6.png)

*js를 통해 드롭다운 기능 구현*
 - 플러스를 누르면 아래로 설명이 펼쳐지도록 구현
 - 다른 항목의 플러스 버튼을 누르면 열려 있는 항목은 다시 접히고 서택한 항목
 - addEventListener와 style.display를 이용해서 기능 구현함
![image](https://user-images.githubusercontent.com/62641359/123270974-545b7a00-d53b-11eb-9cf6-c90e16468125.png)

*로그인 했을 때의 화면*
 - 넷플릭스 홈페이지 처럼 이미지를 상단에 꽉 차도록 설정
 - 재생 버튼과 상세정보를 커서를 잦다대면 변하도록 함
 - nav 바에 각 메뉴를 나열
![image](https://user-images.githubusercontent.com/62641359/123276836-80c5c500-d540-11eb-9bca-1a6cd24ec8ef.png)

*프로필을 눌렀을 때 드롭다운*
 - 프로필을 눌렀을 때 넷플릭스를 공용으로 이용하고 있는 유저들이 드롭다운으로 나열됨
![image](https://user-images.githubusercontent.com/62641359/123277137-cd110500-d540-11eb-8550-4033834883c2.png)


*<프로필 관리에 들어갔을 때>*
 - 위 사진의 드롭 다운에서 프로필 관리를 들어갔을 때 이 페이지로 이동함
 - 각자 공유하는 유저들의 정보가 나오고 그 유저의 프로필로 들어갈 수 있음
![image](https://user-images.githubusercontent.com/62641359/123289569-896fc880-d54b-11eb-9032-47da981c7a96.png)

*<프로필 수정 페이지>*
- 닉네임 변경도 가능하고 언어,관람등급, 자동 재생 설정을 관리할 수 있음
![image](https://user-images.githubusercontent.com/62641359/123363522-ae952300-d5ad-11eb-8ce9-bdf95c09cab5.png)

*<프로필 추가 페이지>*
- 들어갈때 오버레이처럼 로딩 화면이 뜸
- 닉네임을 적을 수 있고 어린이인지 체크도 할 수 있게 함
![image](https://user-images.githubusercontent.com/62641359/123363601-d5535980-d5ad-11eb-8564-7f52230f6780.png)
![image](https://user-images.githubusercontent.com/62641359/123363868-5c083680-d5ae-11eb-8b3f-c268aa83a437.png)


