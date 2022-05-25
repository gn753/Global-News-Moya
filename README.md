# 모야 서비스 최종 개발문서

1. 서비스 소개
2. 구현기능
3. 폴더 구조
4. 참고했던 자료

## 0. 실행 방법

```
npm start
```

## **1. 서비스 소개**

> 글로벌 검색 엔진 서비스

해외 상장 기업 뉴스를 한글로 볼 수 있습니다. 실시간 수집한 해외 뉴스를 WiseTranslate의 경제 뉴스 AI번역 기술로 한글로 제공합니다.

## 2**. 구현한 기능**

### 2.**1 로그인 쿠키 받아오기**

![로그인](https://user-images.githubusercontent.com/71584114/169321283-439c35a7-64da-4bb6-9011-77f9a3c918ed.gif)


- 로그인: 서버로부터 키워드 리스트 제공 받기 위해 세션쿠키 필요.
- 아이디 : aa, 비밀번호:aa

### **2.2. 뉴스 키워드 리스트와 필터링 옵션 제공**

![키워드 및 옵션](https://user-images.githubusercontent.com/71584114/169321379-780dda8e-8c78-40df-9164-b698089a4bf5.gif)
![자동완성](https://user-images.githubusercontent.com/71584114/170327814-dc8a79a7-e030-4be3-8463-0c60ebb00fca.gif)


- 주식 투자자들의 관심을 가질만한 20000개 이상의 뉴스 키워드 제공.
- 3개의 키워드 카테고리 제공.
- 뉴스 필터링 옵션은 총 4개를 제공.
- 단 언어 필터링은 현재 서버측에서 영어만 지원.
- 해당 키워드를 클릭하면 구독된 페이지로 이동.

### **2.3. 검색 결과 페이지 무한 스크롤링**
![무한스크롤 및 옵션](https://user-images.githubusercontent.com/71584114/169321552-c25b0534-4a4b-4807-89d1-686b22aff480.gif)

- 무한스크롤
- 언어 번역 기능
- 뉴스카드 포맷 교체

### **2.4. 검색된 뉴스 필터링 옵션 제공**
![정렬 필터](https://user-images.githubusercontent.com/71584114/169321590-626eec07-a123-4eb9-b6e0-fedfd564eccb.gif)

- 정렬 필터링.

## **2. 기술 스택과 채택이유**

### [React-Query]

- 기존에는 Redux를 사용했으나 검색페이지 구현 문제.
- 검색페이지에서는 같은 Query와 EndPoint 요청이면 다음 페이지 아니라면 새 페이지 출력 목표.
- React-quey의 Query key 의존성 배열로 요청 구분 개선.
- 또한 리덕스에서 문제였던 무한스크롤 중복요청과 캐싱으로 최적화 개선.

### [Recoil]

- 검색 폼의 Select 옵션 파라미터를 여러 컴포넌트에 동일한 상태로 전달하고자 목표.
- custom hook으로는 형제 컴포넌트에 데이터 전달이 어려워 전역상태로 단일한 값을 가지도록 개선.
- Redux에 비해 낮은 러닝커브와 코드 작성량.

기타 기술 스택

- webpack
- Typescript
- emotion, react-router, ui-material

## 3 폴더 구조
![Cap 2022-05-19 03-24-47-025](https://user-images.githubusercontent.com/71584114/169322093-689d22db-d9dc-4eee-8c36-22eb03b7ae8b.png)

- 폴더구조는 크게 기능과 페이지 레이아웃으로 나누었습니다.
- 기능에는 루트 index와 해당 데이터에 의존성이 있는 자식컴포넌트와 폴더 내
  Hook과 util이 존재합니다.
- 여러 폴더를 이동하지 않고 수정사항을 반영할 수 있도록 작업 효율성을 높였습니다.
- 덕분에 에러가 났을 때마다 빠른 수정사항 반영이 가능해 원활한 작업이 이루어졌습니다.

## 4 참고했던 자료

- **지역성의 원칙을 고려한 패키지 구조: 기능별로 나누기** [https://ahnheejong.name/articles/package-structure-with-the-principal-of-locality-in-mind/](https://ahnheejong.name/articles/package-structure-with-the-principal-of-locality-in-mind/)
- 토스 토스ㅣSLASH 21 - 실무에서 바로 쓰는 Frontend Clean Code [https://toss.im/slash-21/sessions/3-3](https://toss.im/slash-21/sessions/3-3)
