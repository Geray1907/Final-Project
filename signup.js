   /* sign up */

   const formSignUp = document.querySelector("#signUp .contaBox .formSignUp");
   const textSignUp = document.querySelector(".textSignUp");
   const passSignUp = document.querySelector(".passSignUp");
   const submitBtn = document.querySelector("#signUp .contaBox button")
 
   console.log(formSignUp);
   console.log(textSignUp);
   console.log(passSignUp);
 
   submitBtn?.addEventListener("click", function (e) {
     e.preventDefault();
 
     if (textSignUp.value === "" || passSignUp.value === "") {
         alert("Write your data properly");
     } else {
         const myFormData = {
             name: textSignUp.value.trim(),
             password: passSignUp.value.trim(),
         }
 
         console.log(myFormData);
         localStorage.setItem("myFormData", JSON.stringify(myFormData));
         location.href = "login.html";
         textSignUp.value = "";
         passSignUp.value = "";
       }
     });
