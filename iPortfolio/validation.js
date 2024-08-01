/*form-validation*/

const Name = document.getElementById('name-field');
const email = document.getElementById('email-field');
const contact = document.getElementById('contact-field');
const form = document.getElementById('myform');

const name_error = document.getElementById('name_error');
const email_error = document.getElementById('email_error');
const contact_error = document.getElementById('contact_error');

form.addEventListener('submit', (e)=>{

    var name_check =/^[A-Za-z\s]+$/;

    var email_check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var contact_check = /^(\+1|1)?\s*\(?\d{3}\)?\s*\d{3}[\s.-]?\d{4}$/;

        if(Name.value.trim() ==='' || Name.value == null){
            e.preventDefault();
            name_error.innerHTML = "Name is required";
        }
        else if(!Name.value.match(name_check)){
            name_error.innerHTML = "Name is required";
        }
        else{

            name_error.innerHTML = "";
        }

        if(!email.value.match(email_check)){
            e.preventDefault();
            email_error.innerHTML = "Enter valid email";

        }
        else{

            email_error.innerHTML = " ";
        }


        if(!contact.value.match(contact_check)){
            e.preventDefault();
            contact_error.innerHTML = "Enter valid number";
            
        }
        else{

            contact_error.innerHTML = " ";
        }
})