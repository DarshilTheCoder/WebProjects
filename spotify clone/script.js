
let songIndex = 0;
let playBtn = document.getElementById("playBtn");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let myProgressBar = document.getElementById("myProgressBar")
let audioElement = new Audio('songs/1.mp3');
let songItem = Array.from(document.getElementsByClassName('songItem'))
let playIcon = Array.from(document.getElementsByClassName("playIcon"))


// let songItem = document.getElementsByClassName('songItem')
// audioElement.play();

let songsArray = [
    { songName: "Kala chasma", filepath: "songs/1.mp3", coverpath: "covers/1.jpg" },
    { songName: "Mauja Hi Mauja", filepath: "songs/2.mp3", coverpath: "covers/2.jpg" },
    { songName: "Hawa Banke", filepath: "songs/3.mp3", coverpath: "covers/3.jpg" },
    { songName: "Maan Meri Jaan", filepath: "songs/4.mp3", coverpath: "covers/4.jpg" },
    { songName: "I Love You", filepath: "songs/5.mp3", coverpath: "covers/5.jpg" },
    { songName: "Rab ne bana di Jodi", filepath: "songs/6.mp3", coverpath: "covers/6.jpg" },
    { songName: "Soni de Nakhre", filepath: "songs/7.mp3", coverpath: "covers/7.jpg" }
]

// 

//changing the cover and song with the use of js and here forEach is a loop which will work on array 
songItem.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songsArray[i].coverpath;
    element.getElementsByClassName('songName')[0].innerText = songsArray[i].songName

})


// handle play/pause events

playBtn.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play()
        playBtn.classList.add("fa-pause-circle");
        playBtn.classList.remove("fa-play-circle");
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause()
        playBtn.classList.remove("fa-pause-circle");
        playBtn.classList.add("fa-play-circle");
        gif.style.opacity = 0;
    }
})

// updating the seekbar 
audioElement.addEventListener("timeupdate", () => {
    // console.log("timeupdate");
    let progress = parseInt((audioElement.currentTime / audioElement.duration)*100);
    myProgressBar.value = progress;

})

myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    playIcon.forEach((element) => {

        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')

    })
}
playIcon.forEach((element) => {
    element.addEventListener("click", (e) => {
        makeAllPlays();
        // console.log(e.target)
        
        songIndex = parseInt(e.target.id);
        if (audioElement.paused) {
            
            e.target.classList.add('fa-pause-circle')
            e.target.classList.remove('fa-play-circle')
            audioElement.src = `songs/${songIndex + 1}.mp3`;
            masterSongName.innerText = songsArray[songIndex].songName;
            audioElement.currentTime =0;
            audioElement.play();
            playBtn.classList.add("fa-pause-circle");
            playBtn.classList.remove("fa-play-circle");
            gif.style.opacity = 1;
        }
        else{
            e.target.classList.add('fa-play-circle')
            e.target.classList.remove('fa-pause-circle')
            audioElement.src = `songs/${songIndex + 1}.mp3`;
            masterSongName.innerText = songsArray[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.pause();
            playBtn.classList.add("fa-play-circle");
            playBtn.classList.remove("fa-pause-circle");
            gif.style.opacity = 0;   
        }



    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 7) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songsArray[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    playBtn.classList.add("fa-pause-circle");
    playBtn.classList.remove("fa-play-circle");
    gif.style.opacity = 1;
})

document.getElementById('prev').addEventListener("click", () => {
    if (songIndex <= 0) {
        songIndex = 7;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songsArray[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    playBtn.classList.add("fa-pause-circle");
    playBtn.classList.remove("fa-play-circle");
    gif.style.opacity = 1;
})