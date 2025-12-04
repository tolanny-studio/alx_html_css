const hamburger = document.querySelector('.js-hamburger')
const menu = document.querySelector('.js-menu')

hamburger.onclick=()=>{
  if(menu.classList.contains('display-menu')){
    menu.classList.remove('display-menu')
    return
  }
  menu.classList.add('display-menu')
}