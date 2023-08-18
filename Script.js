//Assigning HTML DOM elements to variables
var form = document.querySelector('.form'); //the form covers the user-input section
var cardHolder = document.querySelector('.cardholder'); //cardholder's name displayed on the card
var cardNumber = document.querySelector('.cardnumber'); //card number displayed on the card
var cardExpiryDateMonth = document.querySelector('.card-expiry-date-MM'); //expiry date's month displayed on the card
var dateSlash = document.querySelector('.slash'); //this slash separates the expiry date's month and year
var cardExpiryDateYear = document.querySelector('.card-expiry-date-YY'); //expiry date's year displayed on the card
var cardCVC = document.querySelector('.card-cvc'); //this is the cvc numer displayed on the card
var input_cardHolder = document.querySelector('#input-cardholder'); //this is cardholder's name displayed on the card
var input_cardNumber = document.querySelector('.input-cardnumber'); //textfield for user to input card number
var input_expiryDateMonth = document.querySelector('.input-exp-date-MM'); //textfield for user to input card's expiry date's month
var input_expiryDateYear = document.querySelector('.input-exp-date-YY')
var inputCVC = document.querySelector('.input-cvc'); //textfield for user to input card's expiry date's year
var errorMessages = document.querySelectorAll('p'); //error message which is displayed when the form is submitted, message displayed depends on the type of error
var input = document.querySelectorAll('input'); // all textfields are assigned to this variable
var button = document.querySelector('.submit'); //the submit button
var inputs = [...input]; //this is an array containing each textfield in the form i.e. inputs = [input[0], input[1], input[2], input[3], input[4]];


//this form input eventlistener below fires when a text a key is pressed inside a textfield
form.addEventListener('input', function(e){
    //this conditional statement below restricts the block of code inside it to what a happens when an input is made in the textfield for the cardholder's name 
    
    if(e.target.className = 'input-cardholder'){
        input_cardHolder.value = input_cardHolder.value.replace(/[^\w\s]/g, '').replace(/\d/g, ''); //this regex pattern restricts input in the textfield for the cardholder's name to only letters and white space    
        cardHolder.innerHTML = input_cardHolder.value.toUpperCase();//this ensures that whatever is inputted in the cardholder's textfield is displayed in realtime on the card in capital letters
        if(document.activeElement === input_cardHolder && errorMessages[0].style.visibility === 'hidden'){
            input_cardHolder.style.borderColor = 'hsl(278, 94%, 30%)'
        }//this conditional statement ensures the textfield's border turns to the active color (violet) when the textfield is in focus while there is no error message.        
    }

    //this conditional statement below restricts the block of code inside it to what happens when an input is made in the textfield for the card number 
    if(e.target.className = 'input-cardnumber'){
        var length = input_cardNumber.value.length;
        var position = input_cardNumber.selectionEnd;
        input_cardNumber.value = input_cardNumber.value.replace(/[^\w]/g, '').replace(/(.{4})/g, '$1 ').trim();//this line of code (including regex patterns) creates a white space after every 4 figures inputted in the textfield for the card number
        
        
        if(input_cardNumber.value.charAt(length-1)===' '){
            input_cardNumber.selectionEnd = position + 1
        } else{
            input_cardNumber.selectionEnd = position + 0
        }; //this condition statement ensures that the caret automatically jumps the white space that appears after every 4 figures inputted in the textfield for the card number

        cardNumber.innerHTML = input_cardNumber.value
        if(document.activeElement === input_cardNumber && errorMessages[1].style.visibility === 'hidden'){
            input_cardNumber.style.borderColor = 'hsl(278, 94%, 30%)'
        };//this conditional statement ensures the textfield's border turns to the active color (violet) when the textfield is in focus while there is no error message.
    }

    //this conditional statement below restricts the block of code inside it to what happens when an input is made in the textfield for the card expiry date's month 
    if(e.target.className = 'input-exp-date-MM'){
        
        input_expiryDateMonth.value = input_expiryDateMonth.value.replace(/\D/, '').replace(/\W/, '').replace(/(^.{3})/, "");//this line of code restricts input to digits only, not exceeding 3    
        
        cardExpiryDateMonth.innerHTML = input_expiryDateMonth.value;
        if(input_expiryDateMonth.value !== '0' && input_expiryDateMonth.value.length < 2){
            cardExpiryDateMonth.innerHTML = '0'.concat(cardExpiryDateMonth.innerHTML)
        };//this conditional statement makes any number inputted in the texfield for card expiry date's month from 1 to 9 appears on the card concanated to 0 (e.g. 01)

        if(input_expiryDateMonth.value === ''){
            cardExpiryDateMonth.innerHTML = ''
        };//this conditional statement ensures that anytime the textfied is empty, the card part is equally empty
        
        if(document.activeElement === input_expiryDateMonth && input_expiryDateMonth.style.borderColor === 'rgb(222, 221, 223)'){
            input_expiryDateMonth.style.borderColor = 'hsl(278, 94%, 30%)'
        };//this conditional statement ensures the textfield's border turns to the active color (violet) when the textfield is in focus while there is no error message.
    }

    //this conditional statement below restricts the block of code inside it to what happens when an input is made in the textfield for the card expiry date's year 
    if(e.target.className = 'input-exp-date-YY'){
        input_expiryDateYear.value = input_expiryDateYear.value.replace(/\D/, '').replace(/\W/, '').replace(/(^.{3})/, '');//this line of code restricts input to digits only, not exceeding 3    
        cardExpiryDateYear.innerHTML = input_expiryDateYear.value;//this line ensures that the input in the texfield for the card expiry date's year is displayed on the card in real time
        
        if(document.activeElement === input_expiryDateYear && input_expiryDateYear.style.borderColor === 'rgb(222, 221, 223)'){
            input_expiryDateYear.style.borderColor = 'hsl(278, 94%, 30%)'
        };//this conditional statement ensures the textfield's border turns to the active color (violet) when the textfield is in focus while there is no error message.
        
    }

    if(input_expiryDateMonth.value === '' && input_expiryDateYear.value === ''){
        dateSlash.style.visibility = 'hidden'
    };//this conditional statement ensures that the slash between the expiry date's month and year disappears when there is no input in the two expiry date texfields
    
    if(input_expiryDateMonth.value.length > 0 || input_expiryDateYear.value.length > 0){
        dateSlash.style.visibility = 'visible'
    };//this conditional statement ensures that the slash between the expiry date's month and year appears only when there is an input in either of the expiry date texfields
    
    //this conditional statement below restricts the block of code inside it to what happens when an input is made in the textfield for the card expiry date's year 
    if(e.target.className = 'input-cvc'){
        inputCVC.value = inputCVC.value.replace(/\D/, '').replace(/\W/, '');//this line restricts input in the textfield for CVC to digits only    
        cardCVC.innerHTML = inputCVC.value;//this line ensures that input in the texfield for CVC is displayed in real time on the card
        if(document.activeElement === inputCVC && errorMessages[3].style.visibility === 'hidden'){
            inputCVC.style.borderColor = 'hsl(278, 94%, 30%)'
        };//this conditional statement ensures the textfield's border turns to the active color (violet) when the textfield is in focus while there is no error message.
    }
    
    }
    
)

input_cardHolder.onblur = (e) => {
    if(errorMessages[0].style.visibility === 'hidden'){
    e.target.style.borderColor = 'hsl(270, 3%, 87%)'
    }
}

input_cardNumber.onblur = (e) => {
    if(errorMessages[1].style.visibility === 'hidden'){
    e.target.style.borderColor = 'hsl(270, 3%, 87%)'
    }
}

//the blur events below ensure when a textfield or the submit button loses focus (after an error is corrected or the submit button is clicked), the border colour or the background color respectively returns to the inactive colour 
input_expiryDateMonth.onblur = (e) => {
    if(input_expiryDateMonth.style.borderColor === 'rgb(96, 5, 148)'){
    e.target.style.borderColor = 'hsl(270, 3%, 87%)'
    }
}

input_expiryDateYear.onblur = (e) => {
    if(input_expiryDateYear.style.borderColor === 'rgb(96, 5, 148)'){
    e.target.style.borderColor = 'hsl(270, 3%, 87%)'
    }
}

inputCVC.onblur = (e) => {
    if(errorMessages[3].style.visibility === 'hidden'){
    e.target.style.borderColor = 'hsl(270, 3%, 87%)'
    }
}



button.onblur = () => {
    if(document.activeElement !== button){
        button.style.backgroundColor = 'hsl(278, 68%, 11%)'
    }
}


inputs.map(input => {

//This keyup event below fires to move the caret automatically to the next textfield after an input has reached maximum length. The caret moves from the CVC texfield to the submit button.
    input.onkeyup = () => {
        if(document.activeElement === input && input.value.length === input.maxLength && input.style.borderColor !== 'rgb(255, 82, 82)'){
            button.focus()
        }
        
        
       if(input.value.length === input.maxLength && input.style.borderColor !== 'rgb(255, 82, 82)'){
            inputs[(inputs.indexOf(input) + 1)].focus()
                    
        }

        
            
        
    }
})


//this click eventlistener below fires when the button is clicked
button.onclick = (e) => {
    
        
        if(!/[A-Za-z]/.test(input_cardHolder.value)){
            e.preventDefault();
            errorMessages[0].style.visibility = 'visible';
            input[0].style.borderColor = 'hsl(0, 100%, 66%)';
        }else{
            errorMessages[0].style.visibility = 'hidden'
            input_cardHolder.style.borderColor = 'hsl(270, 3%, 87%)'
        };//this conditional statement prevents form submission and displays an error message below the textfield and changes the textfield border to red if the textfield for the cardholder's name is empty when the submit button is clicked. Otherwise (i.e. when the textfied is not empty) the border remains the same and no error message is seen

        if(input_cardNumber.value === ''){
            
            errorMessages[1].style.visibility = 'visible'
            errorMessages[1].innerHTML = "Can't be blank"
            e.preventDefault()
            input[1].style.borderColor = 'hsl(0, 100%, 66%)'
        }     
        else if(/[A-Za-z]/g.test(input_cardNumber.value)){
            e.preventDefault();
            errorMessages[1].style.visibility = 'visible';
            errorMessages[1].innerHTML = 'Wrong format, numbers only'
            input[1].style.borderColor = 'hsl(0, 100%, 66%)'
        }
        else if(input_cardNumber.value.length < 19){
            e.preventDefault();
            errorMessages[1].style.visibility = 'visible';
            errorMessages[1].innerHTML = 'Incomplete number'
            input[1].style.borderColor = 'hsl(0, 100%, 66%)'
        }else{
            errorMessages[1].style.visibility = 'hidden'
            input_cardNumber.style.borderColor = 'hsl(270, 3%, 87%)'
        };//this conditional statements effect display of an error message ("Can't be blank" or "Incomplete number" below the textfield for card number is empty or inputted number is not up to 19 digits) and changes the textfield border to red when the submit button is clicked. Form submission is prevented as long as there is an error message. Otherwise (i.e. when the textfied is not empty or input is up tp 19 digits), no error message is displayed, the border color does not change to red.


        if(input_expiryDateMonth.value === ''){
            e.preventDefault()
            errorMessages[2].style.visibility = 'visible'
            errorMessages[2].innerHTML = "Can't be blank"
            input[2].style.borderColor = 'hsl(0, 100%, 66%)'
        };//this conditional statement effects the display of the error message "Can't be blank"  below the textfield for the expiry date's month and changes the textfield border to red if the textfield  is empty when the submit button is clicked. Form submission is prevented if there is an error message. 

        if(input_expiryDateYear.value === ''){
            e.preventDefault()
            errorMessages[2].style.visibility = 'visible'
            errorMessages[2].innerHTML = "Can't be blank"
            input[3].style.borderColor = 'hsl(0, 100%, 66%)'
        };//this conditional statement effects the display of the error message "Can't be blank"  below the textfield for the expiry date's year and changes the textfield border to red if the textfield  is empty when the submit button is clicked. Form submission is prevented if there is an error message. 

        if(parseInt(input_expiryDateMonth.value) < 1 || parseInt(input_expiryDateMonth.value) > 12){
            e.preventDefault()
            errorMessages[2].style.visibility = 'visible'
            errorMessages[2].innerHTML = "Invalid date"
            input[2].style.borderColor = 'hsl(0, 100%, 66%)'
        }//this conditional statement effects the display of the error message "Can't be blank"  below the textfield for the expiry date's month and changes the textfield border to red if the textfield  is empty when the submit button is clicked. Form submission is prevented if there is an error message. 
        
        if(parseInt(input_expiryDateYear.value) < 23 || parseInt(input_expiryDateYear.value) > 29){
            e.preventDefault()
            errorMessages[2].style.visibility = 'visible'
            errorMessages[2].innerHTML = "Invalid date"
            input[3].style.borderColor = 'hsl(0, 100%, 66%)'
        }//this conditional statement effects the display of the error message "Invalid date" below the textfield for the expiry date's year and changes the textfield border to red if the textfield's input  is <23 0r >29 (card dates are valid only from year 2023 to 2029) when the submit button is clicked. Form submission is prevented if there is an error message.
        
        

        if(input_expiryDateMonth.value.length > 0 && parseInt(input_expiryDateMonth.value) >= 1 && parseInt(input_expiryDateMonth.value) <= 12){
            input_expiryDateMonth.style.borderColor = 'hsl(270, 3%, 87%)'
        }//this conditional statement ensures that when the input in the text for expiry date's month is any digit from 1 to 12, no error message appears.

        if(input_expiryDateYear.value.length > 0 && parseInt(input_expiryDateYear.value) >= 23 && parseInt(input_expiryDateYear.value) <= 29){
            input_expiryDateYear.style.borderColor = 'hsl(270, 3%, 87%)'
        }//this conditional statement ensures that the border of the textfield for card expiry date's year changes from red to the normal color once the input that is causing an error is corrected

        
        if(input_expiryDateMonth.style.borderColor === 'rgb(222, 221, 223)' && input_expiryDateYear.style.borderColor === 'rgb(222, 221, 223)'){
            errorMessages[2].style.visibility = 'hidden'
        }
        //this conditional statement ensures that the border of the textfield for card expiry date's month changes from red to the normal colour once the input that is causing an error is corrected    
        
        if(inputCVC.value === ''){
            e.preventDefault()
            errorMessages[3].style.visibility = 'visible'
            errorMessages[3].innerHTML = "Can't be blank"
            input[4].style.borderColor = 'hsl(0, 100%, 66%)'
        } 
        else if(inputCVC.value.length < 3 && inputCVC.value.length > 0){
            e.preventDefault();
            errorMessages[3].style.visibility = 'visible';
            errorMessages[3].innerHTML = 'Incomplete number'
            input[4].style.borderColor = 'hsl(0, 100%, 66%)'
        }else{
            errorMessages[3].style.visibility = 'hidden'
            inputCVC.style.borderColor = 'hsl(270, 3%, 87%)'
            
        };//this conditional statements ensure that an error message appears and the textfield's border changes to red if textfield for the CVC number is empty or inputted digits are not up to 3 when the confirm button is clicked. Otherwise, the error message and the red border color disappear.
        
        //the condition statement below allows form submission and all inputted data to be stored in the local storage only if no error messages appear or all errors have been corrected. Once form is successfully submitted, the webpage switches to another one where the stored inputs are uploaded.
            if(errorMessages[0].style.visibility === 'hidden' && errorMessages[1].style.visibility === 'hidden' && errorMessages[2].style.visibility === 'hidden' && errorMessages[3].style.visibility === 'hidden'){
            
            form.submit()
            window.location.replace("Index2.html");
            localStorage.setItem('cardholder', cardHolder.innerHTML);
            localStorage.setItem('card-number', cardNumber.innerHTML);
            localStorage.setItem('months', cardExpiryDateMonth.innerHTML);
            localStorage.setItem('slash', dateSlash.innerHTML);
            localStorage.setItem('years', cardExpiryDateYear.innerHTML);
            localStorage.setItem('card-cvc', cardCVC.innerHTML);
        }


    

    

}

    
button.onfocus = () => button.style.backgroundColor = 'hsl(278, 68%, 20%)';//this focus effects brightening of the submit button's background colour when it is in focus when the caret is focused on it

button.onmouseover = () => button.style.backgroundColor = 'hsl(278, 68%, 20%)';//this mouseover event maintains the mouse hover effct on the submit button after losing focus from the caret

button.onmouseout = () => button.style.backgroundColor = 'hsl(278, 68%, 11%)';
//this mouseout event effects return of background color to normal after the hover effect of the mouse on the submit button

button.onkeyup = e => {
    if(e.key === ' ' || e.key === 'Enter'){
        button.style.backgroundColor = 'hsl(278, 68%, 11%)'
    }
};//this keyup event effects brightening of the submit button's background colour on pressing the 'Space' and 'Enter' keys while the caret is focused on the button.





