"use strict";

const signUp = e => {
    e.preventDefault();
    let email = document.getElementById('email').value,
        username = document.getElementById("username").value,
        password = document.getElementById('password').value,
        confirm = document.getElementById('cpassword').value;
    let selectrole = document.getElementById('role');
    // let role = "selectrole.options[selectrole.selectedIndex].value;"
    let role = "us";
    let error = document.getElementById('error');

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length &&
        JSON.parse(localStorage.getItem('formData')).some(data =>
            data.email.toLowerCase() == email.toLowerCase() &&
            data.password.toLowerCase() == password.toLowerCase()
        );

    let emailxist = formData.length &&
        JSON.parse(localStorage.getItem('formData')).some(data =>
            data.email.toLowerCase() == email.toLowerCase()
        );

    //alerty code

    if (!exist) {
        if (password.length > 6) {
            validpassword();
        }
        else {
            alertify.error("Password length should be greather than 6")
        }




    }
    else if (emailxist) {
        alertify.error("Ooopppssss... Duplicate account found!!!\nYou have already signed up");
    }

    else {

    }


    function validpassword() {
        if (password === confirm && password.length == confirm.length) {
            formData.push({ email, username, password, role });
            localStorage.setItem('formData', JSON.stringify(formData));
            document.querySelector('form').reset();
            document.getElementById('email').focus();
            return alertify.success("Account Created.\n\nPlease LogIn.");
        } else {
            return alertify.error("Password doesn't match")
            // error.innerHTML="Password doesn't match";
            // error.value.style.color = 'red';
        }
    }

    e.preventDefault();
}


// Signing In
function signIn(e) {
    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let selectrole = document.getElementById('mainrole'),
        role = selectrole.options[selectrole.selectedIndex].value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length &&
        JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.password.toLowerCase() == password && data.role.toLowerCase() == role);
    if (!exist) {
        alertify.error("Incorrect login credentials");
    }
    else {

        let loginData = JSON.parse(localStorage.getItem('loginData')) || [];
        loginData.unshift({ email, password, role });
        localStorage.setItem('loginData', JSON.stringify(loginData));
        let roles = (JSON.parse(localStorage.getItem('loginData'))[0]).role;

        // console.log(roles);

        if (roles === "ad") {
            window.location.href = "admin.html"
            // console.log("admin")
        }

        else if (roles = "us") {
            window.location.href = "user.html"
            // console.log("user");
        }

        else {
            alertify.errors("Choose correct role");
        }
        // console.log(formData.push({ username,password,role }));
        //     localStorage.setItem('formData', JSON.stringify(formData));
        // console.log (JSON.parse(localStorage.getItem('formData'))[0]);

        // location.href = "index.html";
        // alert("hello");
        // alert("correction")
    }

}

function hide() {

    let togglePassword = document.querySelector(".toggle-password");
    let togglecPassword = document.querySelector(".toggle-cpassword");

    let input = document.getElementById('password').attributes;
    let cinput = document.getElementById('cpassword').attributes;

    let inputvalue = document.getElementById('password');
    let cinputvalue = document.getElementById('cpassword');

    let inputtypevalue = input.getNamedItem("type").value;
    let cinputtypevalue = cinput.getNamedItem("type").value;

    togglePassword.classList.toggle("fa-eye-slash");
    togglecPassword.classList.toggle("fa-eye-slash");

    if (inputtypevalue === "password" && cinputtypevalue === "password") {

        inputvalue.setAttribute("type", "text");
        cinputvalue.setAttribute("type", "text")
    }
    else {

        inputvalue.setAttribute("type", "password");
        cinputvalue.setAttribute("type", "password");
    }

}

function lhide() {

    let togglePassword = document.querySelector(".toggle-password");
    // let togglecPassword = document.querySelector(".toggle-cpassword");

    let input = document.getElementById('password').attributes;
    // let cinput = document.getElementById('cpassword').attributes;

    let inputvalue = document.getElementById('password');
    // let cinputvalue= document.getElementById('cpassword');

    let inputtypevalue = input.getNamedItem("type").value;
    // let cinputtypevalue = cinput.getNamedItem("type").value;

    togglePassword.classList.toggle("fa-eye-slash");
    // togglecPassword.classList.toggle("fa-eye-slash");

    if (inputtypevalue === "password") {

        inputvalue.setAttribute("type", "text");
        // cinputvalue.setAttribute("type","text")
    }
    else {

        inputvalue.setAttribute("type", "password");
        // cinputvalue.setAttribute("type","password");
    }

}