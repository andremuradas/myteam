let hamburgerBtn = document.querySelector('.menu_mobile_btn img');
let menuMobile = document.querySelector('.menu_mobile');
let closeBtn = document.querySelector('.menu_mobile img');

hamburgerBtn.addEventListener('click',()=>{
    menuMobile.style.right = "0";
});

closeBtn.addEventListener('click',()=>{
    menuMobile.style.right = "-100%";
});

//ABOUT PAGE

let cross = document.querySelector('.card_icon img');
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

//CONTACT PAGE

let validator = {
    handleSubmit:(event)=>{
        event.preventDefault();
        let send = true;

        let inputs = form.querySelectorAll('#formRules');

        // validator.clearErrors();

        for(let i=0;i<inputs.length;i++){
            let input = inputs[i];
            inputs[i].classList.remove('input_error');
            
            let check = validator.checkInput(input);
            
            if(check !== true){
                send = false;
                validator.showError(input, check);
                
            }
        }

        if(send){
            form.submit();
        }

    },
    checkInput:(input) => {
        let rules = input.getAttribute('data-rules');
        if(rules !== null){
            rules = rules.split('|');
            for(let k in rules){
                let rDetails = rules[k].split('=');
                switch(rDetails[0]){
                    case 'required':
                        if(input.value == ''){
                            return 'This field is required'
                        }
                    break;
                    case 'min':

                    break;
                }
            }
        }

        return true;
    },
    showError:(input, error) => {
        input.classList.add('input_error');
    },
    // clearErrors:() => {

    // }


};

let form = document.querySelector('.validator');

form.addEventListener('submit', validator.handleSubmit);
