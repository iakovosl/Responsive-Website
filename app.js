//Responsive Navbar

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


//Needed validation rules
//Only letters accepted

const inputName = document.getElementById("usr");
const submitBtn = document.querySelector('input[type="submit"]');

console.log (inputName, submitBtn);

submitBtn.addEventListener("click",allLeters);

function allLeters(e){
    e.preventDefault();
    let letters = /^[A-Za-z]+$/;
    

    if (inputName.value.match(letters)){
        alert("Ok!Your name have accepted!");
    }else{
        alert("Please input only letters! ");
       
    }
}

//Needed validation rules
//Only email characters accepted

const inputMail = document.getElementById("exampleInputEmail1");
const submitMailBtn = document.querySelector('input[type="submit"]');

console.log (inputMail, submitMailBtn);

submitMailBtn.addEventListener("click",allLeters);

function allLeters(e){
    e.preventDefault();
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    

    if (inputMail.value.match(mailformat)){
        alert("Ok!Your email have accepted!");
    }else{
        alert("Please input only accepted characters! ");
       
    }
}

//Needed validation rules phone numbers


const inputPhone = document.getElementById("phone");
const submitPhoneBtn = document.querySelector('input[type="submit"]');

console.log (inputPhone, submitPhoneBtn);

submitPhoneBtn.addEventListener("click",allLeters);

function allLeters(e){
    e.preventDefault();
    var phonenumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    
    if (inputPhone.value.match(phonenumber)){
        alert("Ok!Your phone number have accepted!");
    }else{
        alert("Please input only accepted characters! ");
       
    }
}


