import React, { useEffect } from 'react';

function LoginStatus() {
    useEffect(() => {
        console.log("로그인 판별기 ...")
        // 쿠키에서 'refresh' 토큰 확인
        const hasRefreshToken = document.cookie.split('; ').some((item) => item.trim().startsWith('refresh'));

        console.log(hasRefreshToken);

        // 로컬 스토리지에서 'access' 토큰 확인
        const hasAccessToken = !!localStorage.getItem('access');

        
        console.log(hasAccessToken);

        // 두 조건 모두 충족하면 로그인됨
        if (hasRefreshToken && hasAccessToken) {
            console.log("로그인 되어있습니다.");
        } else if(!hasAccessToken && hasRefreshToken){
            console.log("엑세스 없고 리프레쉬 있음.")
        } else if(hasAccessToken && !hasRefreshToken){
            console.log("엑세스 있 리프레쉬 없.")
        } 
        else if( !(hasRefreshToken && hasAccessToken)){
            console.log(" 로그인 안돼있음 ");
        }
    }, []);

    return null; // UI 렌더링이 필요 없을 때 null 반환
}

export default LoginStatus;
