burger=document.querySelector('.hamburger');
navbar=document.querySelector('.navbar');
leftnav=document.querySelector('.leftnav');
centernav=document.querySelector('.centernav');
rightnav=document.querySelector('.rightnav');

burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav-resp');
    leftnav.classList.toggle('v-class-resp');
    rightnav.classList.toggle('v-class-resp');
    centernav.classList.toggle('v-class-resp');
})