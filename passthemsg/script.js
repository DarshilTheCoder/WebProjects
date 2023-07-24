(function(){
    const form = document.querySelector("#msgpass");

    form.addEventListener('submit',function(e){
        e.preventDefault();

        const message = document.querySelector("#msgwrite");
        const msgdisplay = document.querySelector(".msg-display");
        const feedback = document.querySelector(".feedback");

        if (message.value === '') {
            feedback.classList.add('show');
            setTimeout(() => {
                feedback.classList.remove('show');
            }, 3000);
        }
        else{
            msgdisplay.textContent = message.value;
            message.value = '';
        }
    })
})()

// function submitform(){
//     const form = document.querySelector('#msgpass');

//     const message = document.querySelector('#msgwrite');
//     const msgdisplay = document.querySelector('.msg-display');
//     const feedback = document.querySelector('.feedback');

//     if (message.value === '') {
//         feedback.classList.add('show');
//         setTimeout(() => {
//             feedback.classList.remove('show')
//         }, 3000);
//     }
//     else{
//         msgdisplay.textContent = message.value;
//         message.value = ''
//     }
// }

// const btn = document.querySelector('#btn');
// btn.addEventListener("click",submitform());