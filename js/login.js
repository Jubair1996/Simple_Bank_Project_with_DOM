document.getElementById("btn-submit").addEventListener("click", function(){
    const emailField = document.getElementById("email-field");
    const email = emailField.value;

    const passwordField = document.getElementById("password-filed");
    const password = passwordField.value;
    

    if(email ==="abujubair75@gmail.com" && password === "khan42"){
        window.location.href ="../balance/index.html";
    }
    else{
       alert("Please valid Email and Password");
    }
})