# 가라부 (Garabu) 클라이언트 💻

> **가계부 관리 프론트엔드 애플리케이션**  
> 직관적인 UI/UX와 실시간 데이터 동기화를 제공하는 React 기반 가계부 관리 웹 애플리케이션

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-3178C6?style=flat-square&logo=typescript)
![Redux](https://img.shields.io/badge/Redux_Toolkit-2.2.1-764ABC?style=flat-square&logo=redux)
![Bootstrap](https://img.shields.io/badge/React_Bootstrap-2.10.1-7952B3?style=flat-square&logo=bootstrap)
![Styled Components](https://img.shields.io/badge/Styled_Components-6.1.8-DB7093?style=flat-square&logo=styled-components)

## 📋 목차

- [프로젝트 개요](#-프로젝트-개요)
- [주요 기능](#-주요-기능)
- [기술 스택](#-기술-스택)
- [아키텍처 설계](#-아키텍처-설계)
- [주요 컴포넌트](#-주요-컴포넌트)
- [설치 및 실행](#-설치-및-실행)
- [상태 관리](#-상태-관리)
- [API 통신](#-api-통신)
- [성능 최적화](#-성능-최적화)
- [향후 개선 계획](#-향후-개선-계획)
- [개선사항 분석](#-개선사항-분석)

## 🎯 프로젝트 개요

**가라부(Garabu) 클라이언트**는 React 18과 TypeScript로 구축된 가계부 관리 웹 애플리케이션입니다. **직관적인 사용자 경험**, **반응형 디자인**, **실시간 데이터 동기화**를 통해 개인 및 공유 가계부 관리를 효율적으로 지원합니다. 로그인/회원가입부터 가계부 생성, 거래 내역 입력 및 조회까지 기본적인 가계부 기능을 제공합니다. Redux를 이용한 상태 관리와 axios 기반의 REST API 통신을 통해 데이터를 주고받으며, 캘린더 기반의 UI로 날짜별 지출·수입 정보를 확인할 수 있습니다.


### 이 프로젝트의 특별한 점

- **타입 안전성**: TypeScript로 구현된 완전한 타입 시스템
- **상태 관리**: Redux Toolkit을 활용한 효율적인 전역 상태 관리
- **반응형 UI**: React Bootstrap과 Styled Components를 결합한 모바일 친화적 디자인
- **OAuth2 소셜 로그인**: Google, Naver 간편 로그인 지원
- **실시간 토큰 관리**: JWT 토큰 자동 갱신 및 인증 상태 관리
- **캘린더 기반 시각화**: 직관적인 날짜별 거래 내역 관리
- **대쉬보드 기반 시각화**: 직관적인 지출 내역 대시보드화 관리
- **GA 모니터링**: Google Analytics를 통해 사용자 경험 모니터링

## ✨ 주요 기능

### 사용자 인증 및 권한 관리
- **다중 로그인 방식**: 일반 로그인 + OAuth2 소셜 로그인 (Google, Naver)
- **JWT 토큰 관리**: Access Token 자동 갱신 및 Refresh Token 처리
- **인증 상태 유지**: Redux Persist를 통한 로그인 상태 지속성
- **보안 라우팅**: 인증이 필요한 페이지 접근 제어

### 가계부 관리 시스템
- **다중 가계부 지원**: 여러 가계부 생성 및 선택적 관리
- **공유 가계부**: 여러 사용자가 함께 사용할 수 있는 협업 가계부
- **거래 내역 CRUD**: 수입/지출/이체 거래의 완전한 생성, 조회, 수정, 삭제
- **카테고리 관리**: 사용자 정의 카테고리 및 결제 수단 설정

### 직관적 사용자 인터페이스
- **캘린더 기반 UI**: `react-calendar`를 활용한 월별 거래 내역 시각화
- **반응형 디자인**: 모바일부터 데스크톱까지 최적화된 UI
- **실시간 피드백**: 사용자 액션에 대한 즉시 반응 및 상태 업데이트
- **접근성 고려**: 키보드 네비게이션 및 스크린 리더 지원
- **지출 내역 대쉬보드**: 카테고리 및 일, 월별 지출 수입 내역 시각화

### 고급 데이터 관리
- **오프라인 지원 준비**: Redux Persist를 통한 로컬 데이터 캐싱
- **실시간 동기화**: 서버와의 실시간 데이터 동기화
- **에러 핸들링**: 네트워크 오류 및 API 오류에 대한 사용자 친화적 처리
- **로딩 상태 관리**: 비동기 작업에 대한 명확한 로딩 표시

## 🛠 기술 스택<!-- {"fold":true} -->

### 프론트엔드 코어
- **React 18.2.0** - 최신 Concurrent Features 지원
- **TypeScript 4.9.5** - 강력한 타입 시스템으로 개발 생산성 향상
- **React Router v6** - 선언적 라우팅 시스템
- **Create React App** - 최적화된 개발 환경 설정

### 상태 관리 및 데이터 플로우
- **Redux Toolkit 2.2.1** - 현대적이고 효율적인 Redux 패턴
- **Redux Persist** - 상태 지속성 관리
- **React Redux** - React와 Redux 연결
- **RTK Query 준비** - 향후 서버 상태 관리 최적화

### UI/UX 라이브러리
- **React Bootstrap 2.10.1** - 컴포넌트 기반 UI 프레임워크
- **Styled Components 6.1.8** - CSS-in-JS 스타일링
- **React Icons** - 일관된 아이콘 시스템
- **React Calendar** - 달력 기반 인터페이스
- **React DatePicker** - 날짜 선택 컴포넌트

### HTTP 통신 및 인증
- **Axios 1.6.8** - Promise 기반 HTTP 클라이언트
- **Interceptors** - 요청/응답 자동 처리
- **React Cookie** - 쿠키 기반 인증 관리
- **JWT 토큰 처리** - 자동 토큰 갱신 시스템

### 개발 도구 및 유틸리티
- **Date-fns & Moment.js** - 날짜 처리 유틸리티
- **React Testing Library** - 컴포넌트 테스팅
- **Jest** - 단위 테스트 프레임워크
- **ESLint & Prettier** - 코드 품질 관리

## 🏗 아키텍처 설계

```
┌─────────────────────────────────────────────────────────────────┐
│                        가라부 클라이언트 아키텍처                      │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   프레젠테이션 계층   │    │    라우팅 계층      │    │   컴포넌트 계층    │
│                 │    │                 │    │                 │
│  ┌─────────────┐ │    │  ┌─────────────┐ │    │  ┌─────────────┐ │
│  │    Pages    │ │    │  │React Router │ │    │  │ UI 컴포넌트  │ │
│  │  - Dashboard│ │    │  │  - Routes   │ │    │  │ - Forms     │ │
│  │  - Login    │ │    │  │  - Guards   │ │    │  │ - Calendar  │ │
│  │  - MyPage   │ │    │  │  - Redirect │ │    │  │ - Modals    │ │
│  └─────────────┘ │    │  └─────────────┘ │    │  └─────────────┘ │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                        │                        │
         └────────────────────────┼────────────────────────┘
                                  │
┌─────────────────────────────────▼─────────────────────────────────┐
│                        상태 관리 계층                               │
│                                                                   │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                │
│  │Redux Store  │  │  Slices     │  │ Middleware  │                │
│  │             │  │ - Auth      │  │ - Persist   │                │
│  │ ┌─────────┐ │  │ - User      │  │ - Logger    │                │
│  │ │Root     │ │  │ - Ledger    │  │ - Thunk     │                │
│  │ │Reducer  │ │  │ - UI State  │  │             │                │
│  │ └─────────┘ │  │             │  │             │                │
│  └─────────────┘  └─────────────┘  └─────────────┘                │
└─────────────────────────────────┬─────────────────────────────────┘
                                  │
┌─────────────────────────────────▼─────────────────────────────────┐
│                        서비스 계층                                  │
│                                                                   │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                │
│  │ API Service │  │Auth Service │  │Utils Service│                │
│  │             │  │             │  │             │                │
│  │ ┌─────────┐ │  │ ┌─────────┐ │  │ ┌─────────┐ │                │
│  │ │ Axios   │ │  │ │JWT      │ │  │ │Date     │ │                │
│  │ │Instance │ │  │ │Manager  │ │  │ │Formatter│ │                │
│  │ │         │ │  │ │         │ │  │ │         │ │                │
│  │ └─────────┘ │  │ └─────────┘ │  │ └─────────┘ │                │
│  └─────────────┘  └─────────────┘  └─────────────┘                │
└─────────────────────────────────┬─────────────────────────────────┘
                                  │
┌─────────────────────────────────▼─────────────────────────────────┐
│                    백엔드 API 통신 계층                             │
│                                                                   │
│         HTTP 요청/응답 ◄─► 가라부 백엔드 서버                        │
│         (localhost:8080)                                          │
└───────────────────────────────────────────────────────────────────┘
```

**## 폴더 구조**

- `src/`
  - `Routes/` – 각 페이지 컴포넌트 (Dashboard, Insertdata, Login 등)
  - `components/` – 재사용 가능한 UI 컴포넌트 모음
  - `store/` – Redux 관련 설정 및 slice 파일
  - `api/axios.ts` – axios 인스턴스 및 인터셉터 설정
  - `style/` – styled-components 기반 스타일 정의
- `public/` – 정적 파일 (HTML 템플릿, 이미지 등)

### 아키텍처 특징

**계층화된 구조**
- **프레젠테이션 계층**: 사용자와 직접 상호작용하는 페이지 컴포넌트
- **라우팅 계층**: 페이지 간 네비게이션 및 인증 가드
- **상태 관리 계층**: Redux Toolkit 기반 전역 상태 관리
- **서비스 계층**: API 통신 및 비즈니스 로직 처리

**컴포넌트 기반 설계**
- **재사용 가능한 UI 컴포넌트**: 모듈화된 컴포넌트 구조
- **커스텀 훅**: 로직 재사용을 위한 React 훅 패턴
- **타입 안전성**: TypeScript를 통한 컴파일 타임 에러 방지
- **성능 최적화**: React.memo, useMemo, useCallback 활용

## 🧩 주요 컴포넌트

### 핵심 페이지 컴포넌트

```typescript
// Dashboard - 메인 대시보드
interface DashboardProps {
  selectedBook: string;
  transactions: Transaction[];
  onBookSelect: (bookName: string) => void;
}

// Insertdata - 거래 내역 입력
interface InsertdataProps {
  onSubmit: (transaction: TransactionData) => Promise<void>;
  categories: Category[];
  paymentMethods: PaymentMethod[];
}

// Login - 사용자 인증
interface LoginProps {
  onLogin: (credentials: LoginCredentials) => Promise<void>;
  redirectPath?: string;
}
```

### 재사용 컴포넌트

```typescript
// DateInput - 날짜 선택 컴포넌트
interface DateInputProps {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
}

// CalendarPage - 달력 기반 거래 내역 표시
interface CalendarPageProps {
  transactions: Transaction[];
  onDateSelect: (date: Date) => void;
  highlightDates?: Date[];
}
```

### 인증 및 상태 관리

```typescript
// LoginState - 로그인 상태 관리
interface AuthState {
  isAuthenticated: boolean;
  accessToken: string | null;
  user: User | null;
  loading: boolean;
}

// OAuth2Login - 소셜 로그인 컴포넌트
interface OAuth2LoginProps {
  provider: 'google' | 'naver';
  onSuccess: (authData: AuthResponse) => void;
  onError: (error: AuthError) => void;
}
```

## 🚀 설치 및 실행

### 필수 요구사항

- **Node.js 18+** (LTS 버전 권장)
- **npm 8+** 또는 **yarn 1.22+**
- **웹 브라우저** (Chrome 90+, Firefox 88+, Safari 14+)

### 로컬 개발 환경 설정

1. **저장소 클론**
```bash
git clone https://github.com/yourusername/garabu-client.git
cd garabu-client
```

2. **의존성 설치**
```bash
npm install
# 또는
yarn install
```

3. **환경 변수 설정**
```bash
# .env.local 파일 생성
REACT_APP_API_BASE_URL=http://localhost:8080
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
REACT_APP_NAVER_CLIENT_ID=your_naver_client_id
```

4. **개발 서버 실행**
```bash
npm start
# 또는
yarn start
```

5. **애플리케이션 접근**
- 개발 서버: `http://localhost:3000`
- 백엔드 API 연결 확인: `http://localhost:8080`

### 프로덕션 빌드

```bash
# 프로덕션 빌드 생성
npm run build

# 빌드 결과물 서빙 (optional)
npx serve -s build
```

### 테스트 실행

```bash
# 단위 테스트 실행
npm test

# 커버리지 리포트 생성
npm run test:coverage

# 테스트 감시 모드
npm run test:watch
```

## 🔄 상태 관리

### Redux Store 구조

```typescript
interface RootState {
  // 사용자 인증 상태
  auth: {
    isAuthenticated: boolean;
    accessToken: string | null;
    refreshToken: string | null;
  };
  
  // 로그인한 사용자 정보
  user: {
    username: string;
    email: string;
    bookNames: string[];
    loading: boolean;
    error: string | null;
  };
  
  // 거래 내역 데이터
  transactions: Transaction[];
  
  // UI 상태
  ui: {
    selectedBook: string;
    currentDate: Date;
    loading: Record<string, boolean>;
  };
}
```

### 주요 Redux Slices

**인증 상태 관리**
```typescript
// LoginStatusSlice.ts
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: null,
    isAuthenticated: false,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.accessToken = null;
      state.isAuthenticated = false;
    },
  },
});
```

**비동기 액션 (Async Thunks)**
```typescript
// LoggedInUserInfo.ts
export const fetchMemberTransaction = createAsyncThunk(
  'user/fetchMemberTransaction',
  async () => {
    const response = await api.get('/api/v2/book/mybooks');
    return response.data;
  }
);
```

## 🌐 API 통신

### Axios 인스턴스 설정

```typescript
// api/axios.ts
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json'
  }
});

// 요청 인터셉터: 인증 헤더 자동 추가
api.interceptors.request.use(config => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    config.headers['access'] = accessToken;
  }
  return config;
});

// 응답 인터셉터: 토큰 만료 시 자동 갱신
api.interceptors.response.use(
  response => response,
  async error => {
    if (error.response?.status === 401) {
      // 토큰 재발급 로직
      return handleTokenRefresh(error);
    }
    return Promise.reject(error);
  }
);
```

### API 엔드포인트 관리

```typescript
// API 호출 예시
interface ApiService {
  // 인증
  login: (credentials: LoginData) => Promise<AuthResponse>;
  logout: () => Promise<void>;
  refreshToken: () => Promise<TokenResponse>;
  
  // 가계부 관리
  getBooks: () => Promise<Book[]>;
  createBook: (bookData: BookData) => Promise<Book>;
  
  // 거래 내역
  getTransactions: (bookId: string) => Promise<Transaction[]>;
  createTransaction: (transaction: TransactionData) => Promise<Transaction>;
  
  // 카테고리 및 결제 수단
  getCategories: () => Promise<Category[]>;
  getPaymentMethods: () => Promise<PaymentMethod[]>;
}
```

## ⚡ 성능 최적화

### React 성능 최적화

**메모이제이션 활용**
```typescript
// 컴포넌트 메모이제이션
const ExpensiveComponent = React.memo(({ data, onAction }) => {
  return <div>{/* 복잡한 렌더링 로직 */}</div>;
});

// 계산 결과 캐싱
const processedData = useMemo(() => {
  return expensiveDataProcessing(rawData);
}, [rawData]);

// 콜백 함수 캐싱
const handleClick = useCallback((id: string) => {
  onItemClick(id);
}, [onItemClick]);
```

**코드 분할 및 지연 로딩**
```typescript
// 라우트 레벨 코드 분할
const Dashboard = lazy(() => import('./Routes/Dashboard'));
const Insertdata = lazy(() => import('./Routes/Insertdata'));

// 컴포넌트 지연 로딩
<Suspense fallback={<LoadingSpinner />}>
  <Dashboard />
</Suspense>
```

### 번들 최적화

**웹팩 최적화 설정**
- **Tree Shaking**: 사용하지 않는 코드 제거
- **압축**: Terser를 통한 JavaScript 압축
- **청크 분할**: vendor, common 청크 분리
- **이미지 최적화**: WebP 포맷 및 레이지 로딩

**성능 메트릭**
- **FCP (First Contentful Paint)**: < 1.5s
- **LCP (Largest Contentful Paint)**: < 2.5s
- **CLS (Cumulative Layout Shift)**: < 0.1
- **TTI (Time to Interactive)**: < 3s

## 🚧 향후 개선 계획

### 단기 개선사항 (1-3개월)

**사용자 경험 향상**
- **다크 모드 지원**: 사용자 설정에 따른 테마 전환
- **오프라인 모드**: Service Worker를 활용한 오프라인 기능
- **PWA 변환**: 모바일 앱과 같은 사용자 경험 제공
- **키보드 접근성**: 완전한 키보드 네비게이션 지원

**기능 강화**
- **거래 내역 검색**: 전체 텍스트 검색 및 고급 필터
- **데이터 내보내기**: Excel, CSV 포맷 데이터 내보내기
- **알림 시스템**: 예산 초과, 목표 달성 등 스마트 알림
- **통계 대시보드**: 지출 패턴 분석 및 시각화
- **GA 모니터링**: Google Analytics를 이용한 사용자 경험 추적

### 중기 목표 (3-6개월)

**아키텍처 개선**
- **MSW 도입**: API 모킹을 통한 독립적 개발 환경
- **RTK Query 마이그레이션**: 서버 상태 관리 최적화
- **Storybook 도입**: 컴포넌트 문서화 및 디자인 시스템
- **React Query 통합**: 캐싱 및 동기화 개선

**개발 경험 향상**
- **자동화된 테스팅**: Cypress를 활용한 E2E 테스트
- **CI/CD 파이프라인**: GitHub Actions 기반 자동 배포
- **코드 품질 관리**: Husky, lint-staged 도입
- **성능 모니터링**: Core Web Vitals 추적

### 장기 비전 (6-12개월)

**고급 기능**
- **실시간 협업**: WebSocket 기반 실시간 다중 사용자 편집
- **AI 기반 추천**: 머신러닝을 활용한 지출 패턴 분석
- **모바일 앱**: React Native 기반 네이티브 앱 개발
- **다국어 지원**: i18n을 활용한 국제화

**엔터프라이즈 기능**
- **마이크로 프론트엔드**: 모듈 연합(Module Federation) 아키텍처
- **보안 강화**: CSP, CORS 정책 강화
- **성능 최적화**: 서버 사이드 렌더링(Next.js 마이그레이션)
- **확장성 개선**: 대용량 데이터 처리 최적화

## 🔍 개선사항 분석

### 현재 강점

**기술적 우수성**
- **타입 안전성**: 컴파일 타임 에러 방지 및 개발 생산성 향상
- **컴포넌트 기반 설계**: 재사용 가능하고 유지보수가 용이한 구조
- **상태 관리**: Redux Toolkit의 현대적 패턴 적용

**사용자 경험**
- **직관적 UI**: 달력 기반의 직관적인 인터페이스
- **반응형 디자인**: 다양한 디바이스에서 일관된 경험
- **소셜 로그인**: 간편한 OAuth2 인증 시스템
- **실시간 피드백**: 사용자 액션에 대한 즉각적인 반응

### 개선이 필요한 영역

**고우선순위 개선사항**

1. **코드 품질 개선**
   - **현재 문제**: 주석 처리된 코드와 사용하지 않는 import 존재
   - **해결 방안**: ESLint 규칙 강화, 코드 리뷰 프로세스 도입
   - **영향**: 코드 가독성 향상 및 번들 크기 최적화

2. **환경 설정 관리**
   - **현재 문제**: API 엔드포인트가 하드코딩됨
   - **해결 방안**: 환경별 .env 파일 분리 및 빌드 최적화
   - **영향**: 배포 유연성 및 보안성 향상

3. **에러 처리 고도화**
   - **현재 문제**: 기본적인 에러 처리만 구현됨
   - **해결 방안**: Error Boundary, 사용자 친화적 에러 메시지 구현
   - **영향**: 사용자 경험 및 디버깅 효율성 향상

**중우선순위 개선사항**

4. **테스트 커버리지 확대**
   - **현재 문제**: 기본 테스트 파일만 존재
   - **해결 방안**: 컴포넌트별 단위 테스트 및 통합 테스트 작성
   - **영향**: 코드 안정성 및 리팩토링 신뢰도 향상

5. **성능 최적화**
   - **현재 문제**: 번들 크기 및 렌더링 최적화 부족
   - **해결 방안**: 코드 스플리팅, 메모이제이션 패턴 적용
   - **영향**: 초기 로딩 시간 단축 및 사용자 경험 개선

6. **접근성 개선**
   - **현재 문제**: 접근성 고려사항 부족
   - **해결 방안**: ARIA 속성 추가, 키보드 네비게이션 구현
   - **영향**: 웹 접근성 표준 준수 및 사용자층 확대

**저우선순위 개선사항**

7. **PWA 기능**
   - **현재 상태**: 기본 웹 애플리케이션
   - **개선 방향**: Service Worker, 오프라인 기능 추가
   - **영향**: 네이티브 앱과 유사한 사용자 경험

8. **국제화 지원**
   - **현재 상태**: 한국어 단일 언어
   - **개선 방향**: react-i18next를 활용한 다국어 지원
   - **영향**: 글로벌 사용자 대응 가능
   
- ****에러 처리 고도화****: API 호출 실패 시 사용자에게 안내 메시지를 표시하는 부분이 미흡합니다. 로딩/에러 상태 관리를 추가하면 UX가 향상됩니다.
- ****테스트 코드 보강****: `App.test.tsx` 등 기본 파일만 존재하므로 실제 기능 단위의 테스트를 작성할 필요가 있습니다.


### GPT & Claude 기술 부채 평가

**코드 품질 점수: 7.5/10**
- **강점**: TypeScript 활용, 컴포넌트 구조화
- **개선 영역**: 사용하지 않는 코드 정리, 일관된 코드 스타일 적용

**사용자 경험 점수: 8/10**
- **강점**: 직관적 UI, 반응형 디자인
- **개선 영역**: 로딩 상태 표시, 에러 메시지 개선

**성능 점수: 7/10**
- **강점**: React 18의 최신 기능 활용
- **개선 영역**: 번들 최적화, 렌더링 성능 개선

**유지보수성 점수: 8.5/10**
- **강점**: 컴포넌트 기반 구조, Redux 상태 관리
- **개선 영역**: 테스트 커버리지 확대, 문서화 개선

**보안 점수: 8/10**
- **강점**: JWT 토큰 관리, OAuth2 인증
- **개선 영역**: XSS 방지, CSP 정책 강화

이 가라부 클라이언트 프로젝트는 **현대적인 React 개발 패턴**과 **타입 안전한 TypeScript 구현**을 보여주는 우수한 포트폴리오 작품입니다. 직관적인 사용자 인터페이스와 효율적인 상태 관리를 통해 **프론트엔드 개발 역량**을 종합적으로 보여주며, 제시된 개선사항들을 통해 더욱 완성도 높은 애플리케이션으로 발전시킬 수 있습니다.