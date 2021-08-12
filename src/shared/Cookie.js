// 쿠키 받아오기
const getCookie = (name) => {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return (
        value ? value[2] : null);
};

export { getCookie };