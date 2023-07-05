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

        

        for(let i=0;i<inputs.length;i++){
            let input = inputs[i];
            //clean input styles
            inputs[i].classList.remove('input_error');
            //clean error messages
            inputs[i].nextElementSibling.innerHTML = '';
            
            let check = validator.checkInput(input);
            
            if(check !== true){
                send = false;
                validator.showError(input, check);
                
            }
        }

        if(send){
            // form.submit();
            alert("Enviado com sucesso!");
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
                        if(input.value.length < rDetails[1]){
                            return 'This field require '+rDetails[1]+' characters minimum'
                        }
                    break;
                    case 'email':
                        if(input.value.indexOf(".") > input.value.indexOf("@")+1 == false){
                            return 'Please use a valid email address'
                        }

                        if(input.value.indexOf("@") == 0){
                            return 'Please use a valid email address'
                        }

                        if(input.value.indexOf(" ") > -1){
                            return 'Please use a valid email address'
                        }


                    break;
                }
            }
        }

        return true;
    },
    showError:(input, error) => {
        input.classList.add('input_error');
        let errorMessage = document.querySelector('.models .error_message').cloneNode(true);
        errorMessage.innerHTML = error;
        input.nextElementSibling.appendChild(errorMessage)
    },


};

let form = document.querySelector('.validator');

form.addEventListener('submit', validator.handleSubmit);
