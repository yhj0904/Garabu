240324

Data save test.
login Register.


240327

insert data transfer
api 엔드포인트 하드코딩됨...

240403
to
내정보 페이지 만들기.. 백엔드쪽 수정사항 많음.
달력 그려넣었으니 데이터베이스에 엑셀 시트 삽입후 계산한 값 서버에서 받아오기

240404
to
메인페이지 이후 글쓰기, 가계부 기록 등 접근시  login 페이지로 이동.
login하면 login 이 myPage 로 바뀜.
login 후 가계부 이름 입력하면 가계부 이름 띄우기.
백엔드에서 일별 월별 지출 금액 받아오기.
달력에 그리기.... 또 뭐해야하지...?

일단.. 1)달력에 데이터 표시하고 2)전체데이터 땡겨오고 앱 만들기...
1. 공동작업자 2.가계부별 데이터 불러올수 있도록...

240412
access token 만료시 reissue 사용하기...

240415
to 
db에 데이터 받아오면 싹다 그리기

240416
카테고리 결제수단등 기본 데이터 입력 하기

240417
to
기본 Ledger 데이터 API 폼 맞추기
        
        카테고리, 결제수단 추가하기로그인 유저에 맞춰서 작성자 칸에 넣고 disabled 하기.
        memo를 주제로.
23:31 reissue 400 error


do
카테고리 결제수단 입력.
      ----------------------------------                    ----------------------------------
- 공동작업
- 가계부 별 기록
- 요일 월별 데이터 가져와서 보여주기.
- 수입별 지출별 따로 보기. 전체 수입 지출 계산하기.


240419
to 
Ledger 데이터 폼 맞추기.
Book 추가하기 페이지도 확인.

do
현재 로그인 상태인 유저의 정보.(이름 이멜 가계부명)
reissue
Ledger 데이터 폼 맞추기.

        ============================
        검색조건.
        날짜
        유저
        가계부명
        카테고리별
        결제 수단별

        ==========================


240420 
to 
로그인 페이지 모달창으로.
로그인 상태 관리하기...


240421
- 프론트 : 사용자 경험을 위해 이미 로그인이 되어 Refresh 토큰이 존재한다면 로그인 경로로 접근하지 못하도록 설정
        
- 백 : 서버 부하를 막기 위해 이미 동일한 클라이언트에서 Refresh 토큰을 발급하였고 현재 활성화 상태면 접근하지 못하도록 설정240324

Data save test.
login Register.


240327

insert data transfer
api 엔드포인트 하드코딩됨...

240403
to
내정보 페이지 만들기.. 백엔드쪽 수정사항 많음.
달력 그려넣었으니 데이터베이스에 엑셀 시트 삽입후 계산한 값 서버에서 받아오기

240404
to
메인페이지 이후 글쓰기, 가계부 기록 등 접근시  login 페이지로 이동.
login하면 login 이 myPage 로 바뀜.
login 후 가계부 이름 입력하면 가계부 이름 띄우기.
백엔드에서 일별 월별 지출 금액 받아오기.
달력에 그리기.... 또 뭐해야하지...?

일단.. 1)달력에 데이터 표시하고 2)전체데이터 땡겨오고 앱 만들기...
1. 공동작업자 2.가계부별 데이터 불러올수 있도록...

240412
access token 만료시 reissue 사용하기...

240415
to 
db에 데이터 받아오면 싹다 그리기

240416
카테고리 결제수단등 기본 데이터 입력 하기

240417
to
기본 Ledger 데이터 API 폼 맞추기
        
        카테고리, 결제수단 추가하기로그인 유저에 맞춰서 작성자 칸에 넣고 disabled 하기.
        memo를 주제로.
23:31 reissue 400 error


do
카테고리 결제수단 입력.
      ----------------------------------                    ----------------------------------
- 공동작업
- 가계부 별 기록
- 요일 월별 데이터 가져와서 보여주기.
- 수입별 지출별 따로 보기. 전체 수입 지출 계산하기.


240419
to 
Ledger 데이터 폼 맞추기.
Book 추가하기 페이지도 확인.

do
현재 로그인 상태인 유저의 정보.(이름 이멜 가계부명)
reissue
Ledger 데이터 폼 맞추기.

        ============================
        검색조건.
        날짜
        유저
        가계부명
        카테고리별
        결제 수단별

        ==========================


240420 
to 
로그인 페이지 모달창으로.
로그인 상태 관리하기...


240421
- 프론트 : 사용자 경험을 위해 이미 로그인이 되어 Refresh 토큰이 존재한다면 로그인 경로로 접근하지 못하도록 설정
        
- 백 : 서버 부하를 막기 위해 이미 동일한 클라이언트에서 Refresh 토큰을 발급하였고 현재 활성화 상태면 접근하지 못하도록 설정240324

Data save test.
login Register.


240327

insert data transfer
api 엔드포인트 하드코딩됨...

240403
to
내정보 페이지 만들기.. 백엔드쪽 수정사항 많음.
달력 그려넣었으니 데이터베이스에 엑셀 시트 삽입후 계산한 값 서버에서 받아오기

240404
to
메인페이지 이후 글쓰기, 가계부 기록 등 접근시  login 페이지로 이동.
login하면 login 이 myPage 로 바뀜.
login 후 가계부 이름 입력하면 가계부 이름 띄우기.
백엔드에서 일별 월별 지출 금액 받아오기.
달력에 그리기.... 또 뭐해야하지...?

일단.. 1)달력에 데이터 표시하고 2)전체데이터 땡겨오고 앱 만들기...
1. 공동작업자 2.가계부별 데이터 불러올수 있도록...

240412
access token 만료시 reissue 사용하기...

240415
to 
db에 데이터 받아오면 싹다 그리기

240416
카테고리 결제수단등 기본 데이터 입력 하기

240417
to
기본 Ledger 데이터 API 폼 맞추기
        
        카테고리, 결제수단 추가하기로그인 유저에 맞춰서 작성자 칸에 넣고 disabled 하기.
        memo를 주제로.
23:31 reissue 400 error


do
카테고리 결제수단 입력.
      ----------------------------------                    ----------------------------------
- 공동작업
- 가계부 별 기록
- 요일 월별 데이터 가져와서 보여주기.
- 수입별 지출별 따로 보기. 전체 수입 지출 계산하기.


240419
to 
Ledger 데이터 폼 맞추기.
Book 추가하기 페이지도 확인.

do
현재 로그인 상태인 유저의 정보.(이름 이멜 가계부명)
reissue
Ledger 데이터 폼 맞추기.

        ============================
        검색조건.
        날짜
        유저
        가계부명
        카테고리별
        결제 수단별

        ==========================


240420 
to 
로그인 페이지 모달창으로.
로그인 상태 관리하기...


240421
- 프론트 : 사용자 경험을 위해 이미 로그인이 되어 Refresh 토큰이 존재한다면 로그인 경로로 접근하지 못하도록 설정
        
- 백 : 서버 부하를 막기 위해 이미 동일한 클라이언트에서 Refresh 토큰을 발급하였고 현재 활성화 상태면 접근하지 못하도록 설정