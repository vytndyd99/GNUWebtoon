// 버튼을 클릭시 페이버릿하트의 모양이 변경
const favoriteHeartChange = () => {
    const Heart = document.getElementsByClassName('favoriteHeart')[0].innerHTML;
    if(Heart === '♡') {
        document.getElementsByClassName('favoriteHeart')[0].innerText = "♥"
    }
    else {
        document.getElementsByClassName('favoriteHeart')[0].innerText = "♡"
    }
};