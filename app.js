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

let inputName = document.getElementById("usr");
const submitBtn = document.querySelector('input[type="submit"]');

console.log (inputName, submitBtn);

submitBtn.addEventListener("click", allLeters);

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





