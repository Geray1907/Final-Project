/* sign in */
 
 const formSignUp1 = document.querySelector(".formSignUp1");
 const textSignUp1 = document.querySelector(".textSignUp1");
 const passSignUp1 = document.querySelector(".passSignUp1");
 const submitBtn1 = document.querySelector("#signUp1 .contaBox1 button")
 
 submitBtn1.addEventListener("click", loginFunc)
 
 const myLocalData = JSON.parse(localStorage.getItem("myFormData"));
 console.log(myLocalData);
 console.log(formSignUp1);
 console.log(textSignUp1);
 console.log(passSignUp1);
 
 function loginFunc(e) {
     e.preventDefault();
     if (textSignUp1.value.trim() === "" || passSignUp1.value.trim() === "") {
         alert("Write your data properly")
     } else if (textSignUp1.value === myLocalData.name && passSignUp1.value === myLocalData.password) {
         location.href = "main.html"
     } else {
         alert("Either login or password are invalid")
     }
 } 
 