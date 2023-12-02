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
const contactFormName = document.getElementById('contact-us');
const contactFormFirstName = document.getElementById('fname');
const contactFormLastName = document.getElementById('lname');
const contactFormEmail =  document.getElementById('email');
const contactFormContactNumber = document.getElementById('contact-number');
const contactFormMessage = document.getElementById('message');

// Get error messages

contactFormName.addEventListener("submit", function(event) {
    var isError=false;

    event.preventDefault();

    validateForm();
    
},false)

function validateForm(){
    if (contactFormFirstName.value.trim()==''){
        setEror(contactFormFirstName, 'First name cannot be blank');
    }

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
}

function setEror(element, errorMessage) {
    const parent=element.parentElement;
    parent.classList.add("error");
    const paragraph=parent.querySelector("p");
    paragraph.textContent=errorMessage;
}