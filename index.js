

    let nameUser = prompt("What is your name? π©βπ»π§ββ");
    let ageRequest = prompt("What is your age?");
   
        if( ageRequest > 18){
            alert(`Welcome to our classroom ${nameUser} π»πΈπΌ hope you enjoy the time with us π`);
        }else{
            alert(`Sorry ${nameUser} you are too young to start this class π©βπͺ`);
        }

   function search(event){
       let searchInput = document.querySelector("#pass");
       alert(`Your secret password is ${searchInput.value} π`);
   }
 let form=document.querySelector(".campos");
 form.addEventListener("submit",search);
