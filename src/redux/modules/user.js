// import { createReducer, createAction } from '@reduxjs/toolkit';
// import axios from 'axios';

// import './App.css';
// import axios from 'axios';
// function App() {
//     // 쿠키를 받아오는 방법, 다른 파일에 정리해두세요
//     function getCookie(name) {
//         var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
//         return value ? value[2] : null;
//     }
//     // 쿠키에서 jwt 를 불러와 해더에 추가해서 보내는 방법
//     function sendRequestWithJWT() {
//         let headers = {}
//         if (getCookie('jwt') != null) {
//             headers = { 'Authorization': getCookie('jwt') }
//         }
//         axios.post('http://localhost/restricted', {}, {
//             headers: headers
//         })
//             .then((response) => {
//                 console.log(response.data);
//             })
//             .catch((error) => {
//                 // 로그인이 안되어 있다면 401 이 나옵니다.
//                 // if (error.response.status === 401) {
//                 // }
//             })
//     }
//     // 로그인 방법
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo" />
//                 <a href={'http://localhost/oauth2/authorization/kakao'}>카카오 로그인</a>
//                 <a href={'http://localhost/oauth2/authorization/google'}>구글 로그인</a>
//                 <a href={'http://localhost/oauth2/authorization/naver'}>네이버 로그인</a>
//                 <button onClick={() => { console.log(getCookie("jwt")) }}>print jwt</button>
//                 <button onClick={() => { sendRequestWithJWT() }}>get restricted</button>
//             </header>
//         </div>
//     );
// }
// export default App;