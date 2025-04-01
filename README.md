# 📌 Git Workflow & Commit Convention

가독성을 위해 모든 커밋을 **한국어로 작성**합니다.  
커밋 메시지는 `타입 :: 설명` 형식으로 작성하며, 브랜치는 일관된 네이밍 규칙을 따릅니다.  

---

## 1️⃣ 브랜치 전략

### 🌱 기본 브랜치
| 브랜치명 | 역할 |
|---------|----------------|
| `main`  | 최종 배포 브랜치 (절대 직접 푸시 금지) |
| `develop` | 개발용 브랜치, 기능 브랜치가 병합되는 곳 |

### 🌿 기능 브랜치 규칙  
**브랜치는 `타입/작업내용` 형식으로 생성합니다.**  

| 타입          | 설명 |
|--------------|------------------------------|
| `feature/`   | 새로운 기능 개발 |
| `fix/`       | 버그 수정 |
| `hotfix/`    | 긴급 수정 (배포 후 치명적 버그 대응) |
| `refactor/`  | 코드 리팩토링 |
| `chore/`     | 설정 변경, 패키지 업데이트 |
| `docs/`      | 문서 (README, 주석) 수정 |

📌 **브랜치 네이밍 예시**  
```bash
feature/login-api
fix/header-ui-bug
hotfix/critical-payment-error
refactor/optimize-db-query
docs/update-readme
```
---

## 2️⃣ 커밋 전략

### 🌱 커밋 메시지 규칙
커밋 메시지는 `타입 :: 설명` 형식으로 작성합니다.  

| 타입         | 설명                          |
|-------------|------------------------------|
| `ADD ::`    | 새로운 기능, 파일, 리소스 추가 |
| `FIX ::`    | 버그 수정                      |
| `UPDATE ::` | 기존 기능 개선 및 수정         |
| `REMOVE ::` | 불필요한 코드, 파일 삭제       |
| `REFACTOR ::` | 코드 리팩토링 (기능 변화 없음) |
| `STYLE ::`  | 코드 스타일 변경 (포맷팅, 주석 등) |
| `DOCS ::`   | 문서 (README, 주석) 수정       |
| `CHORE ::`  | 빌드, 패키지, 설정 변경 (코드 변화 없음) |

### 🌿 커밋 메시지 예시
```bash
git commit -m "ADD :: 로그인 기능 추가"
git commit -m "FIX :: 회원가입 시 이메일 중복 검사 버그 수정"
git commit -m "UPDATE :: 메인 페이지 UI 개선"
git commit -m "REMOVE :: 사용하지 않는 콘솔 로그 삭제"
git commit -m "REFACTOR :: API 호출 로직 최적화"
git commit -m "STYLE :: 코드 포맷 정리"
git commit -m "DOCS :: README.md 커밋 메시지 가이드 추가"
git commit -m "CHORE :: ESLint 설정 변경"
```
---

## 3️⃣ Git Flow 사용 예시
```bash
# 1. 최신 develop 브랜치로 이동
git checkout develop
git pull origin develop

# 2. 기능 브랜치 생성 (예: 로그인 기능 개발)
git checkout -b feature/login-api

# 3. 작업 후 커밋
git add .
git commit -m "ADD :: 로그인 API 구현"

# 4. 원격 저장소에 푸시
git push origin feature/login-api

# 5. PR(Merge Request) 생성 후 리뷰 요청
```
---
## 4️⃣ 추가 규칙
- ✔ 브랜치는 작은 단위로 작업하며 자주 병합하기
- ✔ 한 커밋에 너무 많은 변경 사항을 포함하지 않기
- ✔ main 브랜치에는 직접 푸시 금지 (PR 필수!)
- ✔ 기능 브랜치 삭제는 merge 후 진행