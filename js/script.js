const toggleBtn = document.querySelector('.toggle')
const toggleBtnIcon = document.querySelector('.toggle i')
const dropDownMenu = document.querySelector('.dropdown-menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

var firstIndex=0;
function automaticSlide(){
    setTimeout(automaticSlide, 3000);
    var pics;
    const img=document.querySelectorAll('.small-image img');
    for(pics=0; pics<img.length;pics++){
        img[pics].style.display='none';
    }
    firstIndex++;
    if(firstIndex > img.length){
        firstIndex =1;
    }

    img[firstIndex -1].style.display="block";
}
automaticSlide();

var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-error');
var optionError = document.getElementById('option-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required.' ;
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name!';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is required.'
        return false;
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email invalid'
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'Phone number is required.';
        return false;
    }

    if(phone.length !== 12){
        phoneError.innerHTML = 'Phone number should be 10 digits!';
        return false;
    }

    if(!phone.match(/^[0-9]{12}$/)){
        phoneError.innerHTML = 'Phone number is required';
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validateEmail() || !validatePhone()){
        submitError.style.display = 'flex';
        submitError.innerHTML = 'Please complete the following form!';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }
}



