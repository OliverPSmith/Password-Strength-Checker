

/********** show/hide password*/ 

const pword = document.getElementById('pword');
const togglePWord = document.getElementById('toggle-password');

togglePWord.addEventListener('click', function(e) {
    const type = pword.getAttribute('type') === 'password' ? 'text' : 'password';
    pword.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});


/********** checklist */

const checkList = document.getElementById('check-list');

const lowerCase = document.getElementById('lower');
const upperCase = document.getElementById('upper');
const numLetters = document.getElementById('number');
const minLength = document.getElementById('length');

const strengthBar = document.getElementById('complete-bar');
const firstQ = document.getElementById('first-quarter');
const secondQ = document.getElementById('second-quarter');
const thirdQ = document.getElementById('third-quarter');
const fourthQ = document.getElementById('fourth-quarter');

const submitBtn = document.getElementById('submit-button');

/** display checklist */
pword.onfocus = function () {
    checkList.style.display = "block";
}

/** cross off from checklist */
pword.onkeyup = function() {
    /** display strength bar */
    if (strengthBar.style.display = "none") {
        strengthBar.style.display = "block";
    };  

    /** lowercase letters */
    const lowerCaseLetters = /[a-z]/g;
    if (pword.value.match(lowerCaseLetters)) {
        lowerCase.classList.remove('invalid');
        lowerCase.classList.add('valid');
        firstQ.style.display = "block";
    }   else {
        lowerCase.classList.remove('valid');
        lowerCase.classList.add('invalid');
        firstQ.style.display = "none";
    };

    /** uppercase letters */
    const upperCaseLetters = /[A-Z]/g;
    if (pword.value.match(upperCaseLetters)) {
        upperCase.classList.remove('invalid');
        upperCase.classList.add('valid');
        secondQ.style.display = "block";
    }   else {
        upperCase.classList.remove('valid');
        upperCase.classList.add('invalid');
        secondQ.style.display = "none";
    };

    /** numbers */
    const numbers = /[0-9]/g;
    if (pword.value.match(numbers)) {
        numLetters.classList.remove('invalid');
        numLetters.classList.add('valid');
        thirdQ.style.display = "block";
    }   else {
        numLetters.classList.remove('valid');
        numLetters.classList.add('invalid');
        thirdQ.style.display = "none";
    };

    /** length */
    if (pword.value.length >= 6) {
        minLength.classList.remove('invalid');
        minLength.classList.add('valid');
        fourthQ.style.display = "block";
    }   else {
        minLength.classList.remove('valid');
        minLength.classList.add('invalid');
        fourthQ.style.display = "none";
    };
    
    /** show submit buttons */
    if (pword.value.length >= 6 && pword.value.match(lowerCaseLetters)
        && pword.value.match(upperCaseLetters) && pword.value.match(numbers)) {
        submitBtn.style.display = "block";
    }   else {
        submitBtn.style.display = "none";
    };
}