const navlist = document.getElementById('navlist');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('Click', ()=>{
    navlist.classList.toggle('navlist-active')
})

