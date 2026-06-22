# 김희진 포트폴리오 블로그

Next.js App Router 기반 개발자 포트폴리오 블로그입니다.

## 포함 항목

- 자기소개: 이름, 성별, 생년월일, 이메일, 전공
- 기술 스택: Python, Next.js, FastAPI, PostgreSQL, JWT/JWE, httpOnly Cookie, CORS, Docker, Alembic, Vercel
- 다국어 지원: 한국어, 영어, 중국어, 일본어, 프랑스어
- 링크 영역: GitHub, 개인 블로그
- 블로그 노트 미리보기

## 링크 설정

GitHub와 개인 블로그 URL은 [app/page.tsx](./app/page.tsx)의 `profileLinks` 값을 채우면 활성화됩니다.

```ts
const profileLinks = {
  github: "https://github.com/your-id",
  blog: "https://your-blog.example.com",
};
```

## 실행

```bash
npm install
npm run dev
```
