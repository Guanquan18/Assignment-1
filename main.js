/* For naviation bar device is swtiched to mobile or tablet size*/ 
let menuButton = document.querySelector('.main-header-menu-button');
let menu = document.querySelector('.main-header-menu');

let ismenuOpen = false;

menuButton.onclick= function() {
    if (!ismenuOpen) {
        menu.style.display = "block";
        menuButton.style.backgroundPostition= "center left 50px,center";
        ismenuOpen = true;
    } else {
        menu.style.display="none";
        menuButton.style.backgroundPostition= "center,center left 50px";
        ismenuOpen = false;
    }
}
/* End of navation */

/* For contact us input form */

//Get values from user input
var contactFormName = document.getElementById('contact-us');
var contactFormFirstName = document.getElementById('fname').value;
var contactFormLastName = document.getElementById('lname').value;
var contactFormEmail =  document.getElementById('email').value;
var contactFormContactNumber = document.getElementById('contact-number').value;
var contactFormMessage = document.getElementById('message').value;

// Get error messages
var firstNameError = document.getElementById('first-name-error');
var lastNameError = document.getElementById('last-name-error');
var emailError = document.getElementById('email-error');
var contactNumError = document.getElementById('contact-number-error');
var messageError = document.getElementById('message-error');

contactFormName.addEventListener("submit", function(event) {
    var isError=false;



    /* Email validation */
    //Check if email is empty
    if (contactFormEmail == "") {
        emailError.innerHTML = "Email is required";
        isError=true;
    }
    //Check if email is correct format
    else if(!contactFormEmail.includes("@") 
        || !contactFormEmail.includes(".") 
        || contactFormEmail.includes(" ")){
        emailError.innerHTML = "Invalid Email Format";
        isError=true;
    }
    else if (contactFormEmail.length > 25 ) {
        emailError.innerHTML = "Email cannot be more than 25 characters";
        isError=true;
    }

    /* contact validation */
    //Check if contact number is empty
    if (contactFormContactNumber == "") {
        contactNumError.innerHTML = "Contact number is required";
        isError=true;
    }
    //Check if contact number is not a number
    else if (/^[A-Za-z0-9]*$/.test(contactFormContactNumber) == false) {
        contactNumError.innerHTML = "Contact number must be numbers only";
        isError=true;
    }
    //Check the length of contact number
    else if (contactFormContactNumber.length != 8 ) {
        contactNumError.innerHTML = "Contact number must be 8 digits";
        isError=true;
    }

    /* Message validation */
    if (contactFormMessage == "") {
        messageError.innerHTML = "Message is required";
        isError=true;
    }
    else if (contactFormMessage.length > 200 ) {
        messageError.innerHTML = "Message must be at least 10 characters";
        isError=true;
    }

    if (isError) {
        event.preventDefault();
    }



},false)
