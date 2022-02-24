# 자리있어요?
<img src='https://user-images.githubusercontent.com/79308918/154640655-b4e2a7b4-46a2-4665-9793-9637322c892d.png' style=width:auto />

제가 살고있는 전주는 작은 상권에 비해 개인 카페가 꽤 많은 편인데, 

카페에 자리가 있는지 없는지 체크할 방법이 통화를 제외하곤 따로 없었고, 

카페를 가더라도 자리가 없으면 발걸음을 돌려 다른 카페를 찾아가야했던 것에 불편함을 느껴와서  만들게 되었습니다.
## 🌐 링크
https://2juzzang.shop


## 실행화면
### 구글 로그인
![1](https://user-images.githubusercontent.com/79308918/154909195-b4dac9f7-6e28-4740-8af6-faf9ce46e6b1.gif)

### 빈 좌석 변경
![React App - Chrome 2022-02-21 15-26-44_2](https://user-images.githubusercontent.com/79308918/154909159-65044fee-1dc8-4ea5-8452-a4178cb862e0.gif)



## 🛠️ 사용 기술

- React
- Redux
- Firebase
- AWS S3, Router 53, Certificate Manager, CloudFront

## ⚙ 기능

- Firebase OAuth 기능을 통한 로그인
    - redux와 session storage를 사용하여 로그인 정보를 저장하고 유지
- AWS를 통한 배포와 HTTPS 구축
- 카카오맵 api를 통해 마커 클릭시 카페의 이름과 빈 자리 수, 갱신 시간을 표시
- 사장님 로그인 후 해당 가게와 구글 계정의 정보가 일치하면 빈 자리 수 수정 가능

## 💡 배웠던 점

- 이론으로만 배웠던 local storage, session storage를 직접 적용해보고 익히게 되었다.
- firebase와 aws를 사용하여 서버리스 환경에서 개발을 진행하고 배포까지 할 수 있었다.
- open api(카카오맵)를 사용하여 개발을 진행했다.