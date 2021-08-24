# npm 프로젝트에서 bootstrap 설치하기
1. npm init -y 선언
2. npm install parcel-bundler -D 
3. package.json 부분에 
    - "dev": "parcel index.html",
    - "bulid": "parcel build index.html" 수정
4. npm install bootstrap
5. scss 파일에 @import "../node_modules/bootstrap/scss/bootstrap.scss"; 
6. js 파일에 import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
- bootstrap.bundle 전체를 불러오는 코드 js 는 전체를 불러오면 성능이 저하 되기 때문에
- import bootstrap from 'bootstrap/js/dist/dropdown' 이런식으로 필요한 부분만 import하는게 좋다.
7. bootstrap 요소를 가져올 때 js에서 초기화를 해줘야하는 요소들이 있다. bootstrap 홈페이지에서 초기화 해줘야하는 부분이 명시되어 있으므로 확인 해야함.
# bootstrap Customize
- @import "../node_modules/bootstrap/scss/functions";
- @import "../node_modules/bootstrap/scss/variables";
- @import "../node_modules/bootstrap/scss/mixins";
- @import "../node_modules/bootstrap/scss/root";
   
- $theme-colors: (
  "primary":    $primary,
  "secondary":  yellowgreen,
  "success":    $success,
  "info":       $info,
  "warning":    $warning,
  "danger":     $danger,
  "light":      $light,
  "dark":       $dark
);
- secondary에 색상을 원하는 색으로 변경
- 다음 요소들에 secondary 요소들에는 yellowgreen으로 적용되는 방식
- 주의! Customize 할때는 Customize가 끝나고 나서 @import "../node_modules/bootstrap/scss/bootstrap.scss";로 불러와야한다 덮어 씌우는 방식
