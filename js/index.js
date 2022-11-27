

    let nameUser = prompt("What is your name? 👩‍💻🧚‍♀");
    let ageRequest = prompt("What is your age?");
   
        if( ageRequest > 18){
            alert(`Welcome to our classroom ${nameUser} 🌻🌸🌼 hope you enjoy the time with us 😊`);
        }else{
            alert(`Sorry ${nameUser} you are too young to start this class 🌩☂😪`);
        }

   function search(event){
       let searchInput = document.querySelector("#pass");
       alert(`Your secret password is ${searchInput.value} 👈`);
   }
 let form=document.querySelector(".campos");
 form.addEventListener("submit",search);
