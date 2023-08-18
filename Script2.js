//This event below fires when the submit button is clicked from the previous page and uploads all inputted data stored in the local storage. Once the 'continue' button is clicked, the webpage switches the previous one while the local storage is cleared. 

window.addEventListener('load', function(){
    
    document.querySelector('.cardholder').innerHTML = this.localStorage.getItem('cardholder')

    document.querySelector('.cardnumber').innerHTML = this.localStorage.getItem('card-number')

    document.querySelector('.card-expiry-date-MM').innerHTML = this.localStorage.getItem('months')

    document.querySelector('.slash').innerHTML = this.localStorage.getItem('slash')

    document.querySelector('.card-expiry-date-YY').innerHTML = this.localStorage.getItem('years')

    document.querySelector('.card-cvc').innerText = this.localStorage.getItem('card-cvc')

    console.log(this.localStorage.getItem('card-cvc'), this.localStorage.getItem('years'))
})

document.querySelector('.submit').onclick = () => {
    localStorage.clear()
    window.location.replace('Index.html')
    
}

