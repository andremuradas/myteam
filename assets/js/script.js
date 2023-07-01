let hamburgerBtn = document.querySelector('.menu_mobile_btn img');
let menuMobile = document.querySelector('.menu_mobile');
let closeBtn = document.querySelector('.menu_mobile img');
let cross = document.querySelector('.card_icon img');
hamburgerBtn.addEventListener('click',()=>{
    menuMobile.style.right = "0";
});

closeBtn.addEventListener('click',()=>{
    menuMobile.style.right = "-100%";
});

let cardIcon = document.querySelectorAll('.card_icon');
let cardHover = document.querySelectorAll('.directors .card_dep')

cardIcon.forEach(cardIconImg =>
{
    cardIconImg.addEventListener('click',(e)=>{
        
        if(e.target.computedStyleMap().get('transform')[1].angle.value === 0)
        {
            e.target.style.transform = "translate(-50%, 50%) rotate(45deg)";

            e.target.nextElementSibling.style.display = "flex";
            setTimeout(() => {
                e.target.nextElementSibling.style.opacity = "1";
            }, 150);
        }
        else
        {
            e.target.style.transform = "translate(-50%, 50%) rotate(0deg)";

            e.target.nextElementSibling.style.opacity = "0";
            setTimeout(() => {
                e.target.nextElementSibling.style.display = "none";
            }, 300);
        }
    });
    
});


