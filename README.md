# 당신만의 맞춤화된 글로벌 뉴스 Moya

1. 서비스 소개
2. 서비스 기능 이미지
3. [폴더 구조 Reademe](docs/01.md)
4. [기여했던 역할 Reademe](docs/02.md)

시스메틱측의 보안 문제로 2022.06.03일(금)요일까지만 API가 제공됩니다. 때문에 이후부터는 코드 공개는 가능하나 기능이 작동하지 않습니다!

## 0. 실행 방법

```
npm start
```

## 1. 서비스 소개

- 주 서비스는 주식투자자들을 위한 해외 뉴스 검색 서비스입니다. 20000여개의 주식 관련된 키워드를 제공 해 투자 관련 뉴스를 제공합니다.
- 북마크를 통해 기사를 저장하고 자동 언어 번역기능을 제공해 세계의 투자자들을 위한 뉴스를 구독할 수 있습니다.
- 이 프로젝트는 팀 프로젝트 종료 후 아쉬웠던 부분을 리팩토링을 해 개선했습니다. 

## 2 프로젝트 구성원 및 기여도

- 백엔드 1분(기업), 프론트엔드 3분, 디자이너 3분,
- 프로젝트 전체 작업 기여도 : 40% 
- 올린 프로젝트 이미지와 기술 내용은 제가 작업한것만 기술합니다. 

## 3. 서비스 주요 기능 GIF

### Style-Guide

![스타일가이드](https://user-images.githubusercontent.com/71584114/170329399-73d2279b-3b5b-4f15-9716-b0b8313394dc.PNG)

- 일관된 스타일링을 위해 페이지 내에 마크업으로 공통 가이드 제작.

### 로그인 쿠키 받아오기

![로그인](https://user-images.githubusercontent.com/71584114/169321283-439c35a7-64da-4bb6-9011-77f9a3c918ed.gif)

- 로그인: 서버로부터 키워드 리스트 제공 받기 위해 세션쿠키 필요.
- 아이디 : aa, 비밀번호:aa

### 뉴스 키워드 리스트와 필터링 옵션 제공

![키워드 및 옵션](https://user-images.githubusercontent.com/71584114/169321379-780dda8e-8c78-40df-9164-b698089a4bf5.gif)
![자동완성](https://user-images.githubusercontent.com/71584114/170327814-dc8a79a7-e030-4be3-8463-0c60ebb00fca.gif)

- 주식 투자자들의 관심을 가질만한 20000개 이상의 뉴스 키워드 제공.
- 총 8개의 키워드 대주제와 3개의 맞춤뉴스 카테고리 제공.(startup,tickers,index,fx,sections,cateogry 등)
- 뉴스 필터링 옵션은 총 4개를 제공.
- 단 언어 필터링은 현재 서버측에서 영어만 지원.
- 해당 키워드를 클릭하면 구독된 페이지로 이동.

### 검색 결과 페이지 무한 스크롤링

![무한스크롤 및 옵션](https://user-images.githubusercontent.com/71584114/169321552-c25b0534-4a4b-4807-89d1-686b22aff480.gif)

- 무한스크롤
- 언어 번역 기능
- 뉴스카드 포맷 교체

### 검색된 뉴스 필터링 옵션 제공

![정렬 필터](https://user-images.githubusercontent.com/71584114/169321590-626eec07-a123-4eb9-b6e0-fedfd564eccb.gif)

- 정렬 필터링.

## 기타

### 기술 스택과 채택이유

##### [React-Query]

- 기존에는 Redux를 사용했으나 검색페이지 구현 문제.
- 검색페이지에서는 같은 Query와 EndPoint 요청이면 다음 페이지 아니라면 새 페이지 출력 목표.
- React-quey의 Query key 의존성 배열로 요청 구분 개선.
- 또한 리덕스에서 문제였던 무한스크롤 중복요청과 캐싱으로 최적화 개선.

#### [Recoil]

- 검색 폼의 Select 옵션 파라미터를 여러 컴포넌트에 동일한 상태로 전달하고자 목표.
- custom hook으로는 형제 컴포넌트에 데이터 전달이 어려워 전역상태로 단일한 값을 가지도록 개선.
- Redux에 비해 낮은 러닝커브와 코드 작성량.

기타 기술 스택

- webpack
- Typescript
- emotion, react-router, ui-material

## 참고 자료

- **지역성의 원칙을 고려한 패키지 구조: 기능별로 나누기** [https://ahnheejong.name/articles/package-structure-with-the-principal-of-locality-in-mind/](https://ahnheejong.name/articles/package-structure-with-the-principal-of-locality-in-mind/)
- 토스 토스ㅣSLASH 21 - 실무에서 바로 쓰는 Frontend Clean Code [https://toss.im/slash-21/sessions/3-3](https://toss.im/slash-21/sessions/3-3)
