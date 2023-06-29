/*トグルメニュー（モバイル）
==============================================*/

//メニューの出し入れ
const toggleButton = document.querySelector('.toggle-menu-button');
const headerMenu = document.querySelector('.header-site-menu');
const menuPanel = document.querySelector('#menu-panel');
const menuItems = document.querySelectorAll('#menu-panel li');



toggleButton.addEventListener('click',()=>{
  headerMenu.classList.toggle('is-show'); 
});

