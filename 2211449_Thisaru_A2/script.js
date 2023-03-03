// common

function logout() {
    window.setTimeout(function(){

        window.location.href = "login.html";
    
    }, 2000);
}
// login

function show_pass() {
  var x = document.getElementById("password_");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

const approvedUser = ["test"];
const approvedPasswords = ["12345678"];


function checkpassword() {

    const username = document.getElementById("username_").value;
    const password = document.getElementById("password_").value;


    let index = approvedUser.indexOf(username);


    if (password === approvedPasswords[index]) {

        alert("Login Sucessful");
        window.setTimeout(function(){

            window.location.href = "home.html";
        
        }, 3050);

      

    } else {
      alert("Login Unsucessful");
    }

}

// home

function create() {
    window.setTimeout(function(){

        window.location.href = "create.html";
    
    }, 2000);
}



    

