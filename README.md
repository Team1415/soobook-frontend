# soobook-frontend

## 로컬에서 프로젝트 실행

```shell
yarn
yarn dev
```

- http://localhost:3000 으로 접속

## 도커로 실행

```shell
# build image
docker build -t soobook-frontend .

# run container
docker run -d -p 3000:3000 --name soobook-frontend soobook-frontend
```

## lint 적용

- vscode extension 설치
  - ESlint
  - prettier
- vscode settings 아래 옵션 설정
  - format on save: `true`
  - default formmater: `prettier`

```shell
yarn lint
```

- 참조 : https://dev.to/eshankvaish/set-up-eslint-and-prettier-in-a-react-typescript-app-2022-29c9

## mocking server 사용

- mock 사용하고 싶다면, `.env.development`에서 `VITE_APP_MOCK=true`로 변경
- mock 해제 시 `.env.development`에서 `VITE_APP_MOCK=false`로 변경

## conventions

### 폴더 구조

- 폴더는 모두 소문자로 작성

```
/
├── public
└── src
    ├── assets         # 이미지 파일 (svg, png, ...)
    ├── components     # 공통/page 컴포넌트
    │   ├── resources  # page 컴포넌트는 여기에 작성 (`/src/pages`와 동일한 폴더 구조에)
    │   └── ...        # 공통 컴포넌트는 신규 폴더를 만들고 사용 (layouts, buttons, ...)
    │
    ├── constants      # 상수 (enum, const, ...)
    ├── hooks          # 커스텀 훅
    ├── locales        # 다국화 설정
    ├── mocks          # api mock을 위한 파일
    ├── models         # interface, type 정의
    ├── pages          # 페이지 컴포넌트
    ├── queries        # react query 관련 파일
    ├── router         # react router 관련 파일
    ├── stores         # zustand 관련 파일
    └── utils          # util 로직
```

- src 하위에 바로 폴더를 생성할 필요 시, 절대경로 설정을 해주어야 함.
  - `/tsconfig.json` 에 경로 추가
  - `/vite.config.ts` 에 경로 추가

### 파일 네이밍

- 컴포넌트만 PascalCase로 작성하고, 그 외는 camelCase로 작성

  - `/src/components/buttons/CustomButton.tsx`
  - `/src/model/book.ts`

- styled를 사용하여 컴포넌트를 커스터마이즈한 경우, `~.style.tsx`라는 네이밍 사용.
  - `/src/components/buttons/CustomButton.tsx` : 로직에 집중
  - `/src/components/buttons/CustomButton.style.tsx` : styled한 컴포넌트를 모아두기

### 코드 컨벤션

- interface/type 정의
  - `I~`, `T~` 로 시작하는 interface/type 정의 지양
  - 컴포넌트에 종속된 props 정의는 `컴포넌트명Props`로 정의
    - 컴포넌트 명이 `CustomButton`일 경우 `interface CustomButtonProps`로 정의
    - 컴포넌트에 종속된 props는 특별한 경우를 제외하곤 export 하지 않는다. export해야 할 경우, model 하위에 정의하는 것을 고려.
- children을 props로 받아야 하는 경우

  - 아래와 같이 컴포넌트 작성

    ```typescript
    import { FC, PropsWithChildren } from 'react';

    const CustomComponent: FC<PropsWithChildren> = ({ children }) => {
      // your logic
    };
    ```

- lodash 대신 lodash-es 사용
- 반드시 절대경로로 import 한다. 상대경로 import 금지
