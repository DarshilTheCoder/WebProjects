(function(){
    const btn = document.querySelectorAll(".counterbtn");
    const counter = document.querySelector("#counter");
    let count = 0;
    
    btn.forEach(function(button){
        button.addEventListener('click',function(){
            if (button.classList.contains('lowerbtn')) {
                count--;
            }
            else if (button.classList.contains('nextbtn')) {
                count++;
            }
            counter.textContent = count;
            if (count<0) {
                counter.style.color = 'red';
            }
            else if (count>0) {
                counter.style.color = 'green';
            }
            else{
                counter.style.color = 'black';
            }
        })
    })
})()


// (function(){
//     const lowerbtn = document.querySelector("#lowerbtn");
//     const nextbtn = document.querySelector("#nextbtn");
//     let count = 0;
//     const counter = document.querySelector("#counter");

//     lowerbtn.addEventListener("click",function(){
//         count--;
        
//     })
//     nextbtn.addEventListener("click",function(){
//         count++;
//     })
//     counter.textContent  = count;
//     if (count<0) {
//         counter.style.color = "red";
//     }
//     else if (count>0) {
//         counter.style.color = "green";
//     }
//     else{
//         counter.style.color = "black"
//     }
// })()