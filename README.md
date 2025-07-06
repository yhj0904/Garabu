# Garabu

Garabu는 React와 TypeScript로 개발된 개인 가계부 관리 웹 애플리케이션입니다. 로그인/회원가입부터 가계부 생성, 거래 내역 입력 및 조회까지 기본적인 가계부 기능을 제공합니다. Redux를 이용한 상태 관리와 axios 기반의 REST API 통신을 통해 데이터를 주고받으며, 캘린더 기반의 UI로 날짜별 지출·수입 정보를 확인할 수 있습니다.

## 주요 기능

- **사용자 인증**: JWT 기반 로그인 및 회원가입. 토큰 만료 시 재발급(`reissue`) 처리 로직이 포함되어 있습니다.
- **가계부 생성 및 관리**: 여러 개의 가계부(Book)를 생성하고 선택하여 거래 내역을 관리할 수 있습니다. (Dashboard/Insertdata 등)
- **거래 내역 입력**: 날짜, 금액, 카테고리, 결제 수단 등을 입력하여 새로운 거래를 등록합니다.
- **거래 내역 조회**: 등록된 거래를 리스트 형태 또는 상세 페이지(예: `TransactionDetail`)로 확인합니다.
- **캘린더 시각화**: `react-calendar`와 `styled-components`를 활용하여 월별 달력에 거래 정보를 표시합니다.
- **마이페이지**: 로그인한 사용자의 기본 정보와 보유 중인 가계부 목록을 조회합니다.

## 사용 기술

- **React** + **TypeScript**
- **Redux Toolkit** / **redux-persist**
- **React Router**
- **React-Bootstrap** 및 **styled-components**
- **axios**
- 기타 라이브러리: `date-fns`, `moment`, `react-icons` 등

## 설치 및 실행 방법

1. 저장소 클론 후 의존성 설치

   ```bash
   npm install
   ```

2. 개발 서버 실행

   ```bash
   npm start
   ```

   기본적으로 `localhost:3000`에서 애플리케이션이 실행됩니다. API 서버 주소는 `src/api/axios.ts`에서 `http://localhost:8080`으로 설정되어 있으므로 백엔드 서버 또한 동일 포트에서 실행되어야 합니다.

3. 테스트 실행

   ```bash
   npm test
   ```

## 폴더 구조

- `src/`
  - `Routes/` – 각 페이지 컴포넌트 (Dashboard, Insertdata, Login 등)
  - `components/` – 재사용 가능한 UI 컴포넌트 모음
  - `store/` – Redux 관련 설정 및 slice 파일
  - `api/axios.ts` – axios 인스턴스 및 인터셉터 설정
  - `style/` – styled-components 기반 스타일 정의
- `public/` – 정적 파일 (HTML 템플릿, 이미지 등)

## 개선 사항 및 TODO

- **코드 정리**: 일부 파일은 주석 처리된 코드와 사용하지 않는 import가 존재합니다. 리팩터링을 통해 불필요한 코드를 정리하면 가독성이 향상됩니다.
- **API 주소 환경 변수화**: 현재 API 엔드포인트가 하드코딩되어 있습니다. `.env` 파일을 사용하여 환경별 설정을 분리하면 유지보수에 도움이 됩니다.
- **에러 처리 고도화**: API 호출 실패 시 사용자에게 안내 메시지를 표시하는 부분이 미흡합니다. 로딩/에러 상태 관리를 추가하면 UX가 향상됩니다.
- **테스트 코드 보강**: `App.test.tsx` 등 기본 파일만 존재하므로 실제 기능 단위의 테스트를 작성할 필요가 있습니다.

포트폴리오용 프로젝트로 발전시키기 위해 위의 개선 사항들을 참고하여 완성도를 높여 보시길 권장합니다.

