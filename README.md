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
