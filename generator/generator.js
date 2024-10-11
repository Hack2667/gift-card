let form = document.querySelector('#gift-form'),
    emailInput = document.querySelector('#email');


form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (emailInput.value === '') {
        alert('Email required to receive the code')
    } else {
        _yy()
    }
})
