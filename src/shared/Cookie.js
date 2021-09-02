// 쿠키 받아오기
const getCookie = (name) => {
    let value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return (
        value ? value[2] : null);
};

//쿠키 삭제하기
const deleteCookie = (name) => {
    let date = new Date("2021-01-01").toUTCString();
    document.cookie = name + "=; expires=" + date;
};

export { getCookie, deleteCookie };