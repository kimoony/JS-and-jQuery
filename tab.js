// 반복문으로 탭 열기
// for (let i = 0; i < 3; i++) {
//   const onTap = () => {
//     const tapBtn = $('.tab-button');
//     const tapContent = $('.tab-content');

//     tapBtn.removeClass('active');
//     tapContent.removeClass('show');
//     tapBtn.eq(i).addClass('active');
//     tapContent.eq(i).addClass('show');
//   }
//   $('.tab-button').eq(i).click(onTap)
// };

// html에 data-id를 심어놓고 불러와서 사용하기
$('.list').click(function (e) {
  // console.log(e.target);
  // 만약에 내가 실제 누른 요소가 버튼 0이면 탭 0번째를 열어줘
  openTap(e.target.dataset.id);
})

function openTap(num) {
  $('.tab-button').removeClass('active');
  $('.tab-content').removeClass('show');
  $('.tab-button').eq(num).addClass('active');
  $('.tab-content').eq(num).addClass('show');
}

