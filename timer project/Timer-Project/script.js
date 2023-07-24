console.log("hello this is js");

const days_el = document.getElementById("days");
const minutes_el = document.getElementById("minutes");
const hours_el = document.getElementById("hours");
const seconds_el = document.getElementById("seconds");

const examDate = "23 May 2022"
function countDown(){
    const examdates = new Date(examDate);
    const currentdate = new Date();


    const totalseconds = (examdates - currentdate)/1000;
    const minutes = Math.floor(totalseconds/60)%60;
    const hours = Math.floor(totalseconds/3600)%24;
    const days = Math.floor(totalseconds/86000);
    const seconds = Math.floor(totalseconds)%60;


    
    days_el.innerHTML = days;
    minutes_el.innerHTML = formatTime(minutes);
    hours_el.innerHTML = formatTime(hours);
    seconds_el.innerHTML = formatTime(seconds);
    // console.log(days)
    // console.log(hours)
    // console.log(minutes)
    // console.log(totalseconds)
    // console.log(examdates - currentdate)
}

function formatTime(time){
    return time<10?`0${time}`:time;
}
setInterval(() => {
    
    countDown();
}, 1000);
