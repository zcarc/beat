
## 서비스 소개
#### 현재 인기있는 음악 차트를 보여주고 연관된 내용을 검색하여 유튜브 플레이어를 통해서 스트리밍 하는 음악 재생 서비스입니다.

## 기술 스택
- 프론트엔드: Typescript, Javascript, React, Redux Toolkit, React Query, HTML, CSS, TailwindCSS, Vite

- 백엔드: Java, Spring boot, Spring Data JPA, Querydsl, Python, Fast API, MariaDB

- 인프라: AWS EC2, Github Actions, AWS CodeDeploy, Nginx


## 서비스 화면


| 메인 페이지 | 재생 |
| :----------------: | :-----------: |
|![메인 페이지](https://user-images.githubusercontent.com/17092074/212845789-65abafac-52fb-4852-9a67-39905339e8bd.gif)|![재생](https://user-images.githubusercontent.com/17092074/212845860-88da7b46-f501-438c-bdbd-5e26596bd951.gif)|

| 검색 | 회원가입 |
| :----------------: | :-----------: |
| ![검색](https://user-images.githubusercontent.com/17092074/212845890-52256c08-6451-4597-b43a-9bffa32fc5a5.gif) | ![회원가입](https://user-images.githubusercontent.com/17092074/212845946-4cf26ebd-0262-47cc-8714-555b71cd2e5e.gif) |


| 로그인 | 로그아웃 |
| :----------------: | :-----------: |
| ![로그인](https://user-images.githubusercontent.com/17092074/212845975-9d322d24-a2ff-415c-8cfb-95f2fc1ee26d.gif) | ![로그아웃](https://user-images.githubusercontent.com/17092074/212846027-b25cae00-f438-4197-91a2-212d87247989.gif) |

|  플레이리스트 생성 및 곡 추가 | 플레이리스트 곡 조회  |
| :----------------: | :-----------: |
| ![플레이리스트 생성 및 곡 추가](https://user-images.githubusercontent.com/17092074/212846043-689ad494-4aa0-4a94-802b-c1c40cd91736.gif) | ![플레이리스트 곡 조회](https://user-images.githubusercontent.com/17092074/212846067-0ce6e98e-ded5-40f1-95c6-5ef9a43ceceb.gif) |


| 플레이리스트 곡 삭제  |
| :----------------: |
[<img width="480px" src="https://user-images.githubusercontent.com/17092074/212846081-6c041632-c11e-4f3a-ab26-828bfef7aa76.gif" />](https://user-images.githubusercontent.com/17092074/212846081-6c041632-c11e-4f3a-ab26-828bfef7aa76.gif) |


- 메인 페이지: 현재 인기 차트 목록을 볼 수 있습니다.
- 재생: 썸네일을 클릭하면 유튜브 플레이어와 상단 프로그레스바가 재생 시간에 맞춰서 실행됩니다.
- 검색: 제목 또는 아티스트를 검색하여 곡 리스트를 가져오고 스크롤을 통해서 추가적으로 다음 리스트를 가져올 수 있습니다. 차트 및 검색은 Fast API를 통해서 유튜브 API를 사용했습니다.
- 회원가입: 아이디와 이메일의 유효성 검사를 통해서 회원가입을 할 수 있습니다.
- 로그인: 아이디와 이메일의 유효성 검사를 통해서 로그인을 할 수 있습니다.  로그인을 하면 서버 메모리 세션에 저장되고 클라이언트로 쿠키를 보내주어 로그인을 유지했습니다.
- 로그아웃: 세션과 쿠키를 삭제하여 로그아웃을 진행했습니다.
- 플레이리스트 생성 및 곡 추가: 곡 리스트에서 플레이리스트 추가 아이콘을 통해서 새 플레이리스트를 생성하고 곡을 추가할 수 있습니다.
- 플레이리스트 곡 조회 : 보관함에서 플레이리스트에 담긴 곡을 조회할 수 있고 또한 해당 페이지에서도  플레이리스트를 추가할 수 있습니다.
- 플레이리스트 곡 삭제: 플레이리스트에서 곡의 삭제 아이콘을 통해서 곡을 삭제할 수 있습니다.



## ERD
![ERD](https://user-images.githubusercontent.com/17092074/212846096-dd75cd34-a077-4d2f-822d-194f02ea1645.png)

