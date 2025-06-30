# Contributing to Calyx

Calyx 프로젝트에 기여해주셔서 감사합니다! 이 문서는 프로젝트에 기여하는 방법을 안내합니다.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Bun 1.0.0+
- Git

### Setup

1. **Repository 클론**

   ```bash
   git clone https://github.com/your-username/calyx.git
   cd calyx
   ```

2. **의존성 설치**

   ```bash
   bun install
   ```

3. **개발 서버 실행**
   ```bash
   bun run dev
   ```

## 🔧 Development Workflow

### 1. 브랜치 생성

기능 개발이나 버그 수정을 위해 새로운 브랜치를 생성하세요:

```bash
# 메인 브랜치에서 최신 상태로 업데이트
git checkout main
git pull origin main

# 새로운 브랜치 생성
git checkout -b feature/your-feature-name
# 또는
git checkout -b fix/your-bug-fix
```

### 2. 브랜치 네이밍 컨벤션

- `feature/` - 새로운 기능
- `fix/` - 버그 수정
- `docs/` - 문서 수정
- `style/` - 코드 스타일 변경
- `refactor/` - 코드 리팩토링
- `test/` - 테스트 추가/수정
- `chore/` - 빌드 프로세스 또는 보조 도구 변경

### 3. 개발 및 테스트

```bash
# 코드 스타일 검사
bun run lint

# 코드 포맷팅
bun run format

# 타입 체크
bun run type-check

# 테스트 실행
bun run test

# 테스트 커버리지
bun run test:coverage
```

### 4. 커밋

커밋 메시지는 [Conventional Commits](https://www.conventionalcommits.org/) 형식을 따릅니다:

```bash
# 형식: type(scope): description
git commit -m "feat(calendar): add content scheduling feature"
git commit -m "fix(auth): resolve login token expiration issue"
git commit -m "docs(readme): update installation instructions"
```

**커밋 타입:**

- `feat`: 새로운 기능
- `fix`: 버그 수정
- `docs`: 문서 변경
- `style`: 코드 스타일 변경
- `refactor`: 코드 리팩토링
- `test`: 테스트 추가/수정
- `chore`: 빌드 프로세스 또는 보조 도구 변경

### 5. Push 및 Pull Request

```bash
git push origin feature/your-feature-name
```

GitHub에서 Pull Request를 생성하세요.

## 📝 Code Standards

### TypeScript

- 엄격한 타입 체크 사용
- `any` 타입 사용 금지
- 인터페이스와 타입 정의 명확히 작성

### React/Next.js

- 함수형 컴포넌트 사용
- Hooks 적절히 활용
- 컴포넌트는 단일 책임 원칙 준수

### Styling

- Emotion CSS-in-JS 사용
- 테마 토큰 활용
- 반응형 디자인 고려

### 파일 구조

```
features/
├── feature-name/
│   ├── components/
│   ├── hooks/
│   ├── types/
│   └── utils/
```

## 🧪 Testing

### 테스트 작성 원칙

- 모든 새로운 기능에 대한 테스트 작성
- 버그 수정 시 회귀 테스트 추가
- 컴포넌트, 훅, 유틸리티 함수 테스트

### 테스트 실행

```bash
# 전체 테스트
bun run test

# 특정 파일 테스트
bun run test path/to/file.test.ts

# 감시 모드
bun run test:watch

# 커버리지
bun run test:coverage
```

## 📚 Documentation

### 코드 주석

- 복잡한 로직에 대한 주석 작성
- 함수의 목적과 매개변수 설명
- 한국어 주석 사용

### README 업데이트

- 새로운 기능 추가 시 README 업데이트
- 설치 및 사용 방법 명시
- API 변경사항 문서화

## 🔍 Pull Request Process

### PR 체크리스트

- [ ] 코드가 프로젝트 스타일을 따름
- [ ] 자체 코드 리뷰 완료
- [ ] 테스트 추가 및 통과
- [ ] 문서 업데이트
- [ ] 커밋 메시지가 Conventional Commits 형식 준수

### 리뷰 프로세스

1. **자체 리뷰**: PR 생성 전 자신의 코드를 리뷰
2. **팀 리뷰**: 최소 1명의 팀원 리뷰 필요
3. **CI/CD 통과**: 모든 자동화 테스트 통과
4. **승인**: 리뷰어 승인 후 머지

## 🐛 Bug Reports

버그를 발견하셨다면:

1. 기존 이슈에서 중복 확인
2. 새로운 이슈 생성 시 버그 리포트 템플릿 사용
3. 재현 단계, 예상 동작, 실제 동작 명시
4. 환경 정보 및 스크린샷 첨부

## 💡 Feature Requests

새로운 기능을 제안하시려면:

1. 기존 이슈에서 중복 확인
2. 기능 요청 템플릿 사용
3. 문제점, 해결책, 우선순위 명시
4. 목업이나 스크린샷 첨부

## 🤝 Community Guidelines

- 서로를 존중하고 건설적인 피드백 제공
- 질문이 있으면 이슈나 토론 활용
- 코드 리뷰 시 긍정적이고 도움이 되는 의견 제시

## 📞 Getting Help

- **이슈**: 버그 리포트, 기능 요청, 질문
- **토론**: 일반적인 질문이나 아이디어 공유
- **문서**: README, Wiki 참조

## 🎉 Recognition

기여해주신 모든 분들께 감사드립니다! 기여자 목록은 프로젝트 README에 포함됩니다.

---

더 자세한 정보는 프로젝트 README를 참조하세요.
