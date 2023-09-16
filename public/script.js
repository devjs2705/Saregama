// var colours = ['blueviolet', 'rgb(34, 54, 34)', ' pink', 'rgb(233, 33, 33)', 'lightskyblue', 'magenta', 'mediumseagreen'];
// var email = document.getElementById("inputemail");
// var confirmEmail = document.getElementById("inputConfirmEmail");

let flag = 0;


let currentSong;
let punjabiSong = new Audio('../songs/We Rollin - Shubh.mp3');
let rockSong = new Audio('../songs/Imagine_Dragons_Bones.mp3');
let romanticSong = new Audio('../songs/Ed_Sheeran_Perfect.mp3');
let jazzSong = new Audio('../songs/Green_Day_Boulevard_of_Broken_Dreams.mp3');
let travelSong = new Audio('../songs/Safar.mp3');
let lofiSong = new Audio('../songs/Lofi_Fruits_Music_Yellow.mp3');
let partySong = new Audio('../songs/Imagine_Dragons_Bones.mp3');
let bollywoodSong = new Audio('../songs/Kesariya_Official_Lyric_Brahmāstra_Ranbir_Alia_.mp3');

let punjabi = document.getElementById("punjabi");
let rock = document.getElementById("rock");
let jazz = document.getElementById("jazz");
let romantic = document.getElementById("romantic");
let travel = document.getElementById("travel");
let lofi = document.getElementById("lofi");
let party = document.getElementById("party");
let bollywood = document.getElementById("bollywood");

let play = document.getElementById("play");
let progressBar = document.getElementById("bar");

// to get random element from a list
// function get_random (list) {
//     return list[Math.floor((Math.random()*list.length))];
//   }

function signup()
{
    console.log("here");
    location.href = "sign_up_page.html";
}
function login()
{
    console.log("here");
    location.href = "login_page.html";
    // var name = document.getElementById("signUp");
    // name.innerText = "dev";
}




// will change the color of the border according to the validity of email (login page)
// var login_page_email_input = document.getElementById("loginemail");
// login_page_email_input.addEventListener('keyup', ()=>{
//     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(login_page_email_input.value))
//     {
//         document.getElementById("loginemail").style.borderColor = "darkgreen";
//         // document.getElementById("btn").style.backgroundColor = "rgb(32, 212, 8)";
//         document.getElementById("errormessage").style.display = 'block';
//     }
//     else
//     {
//         document.getElementById("loginemail").style.borderWidth = "5";
//         document.getElementById("loginemail").style.borderColor = "red";
//     }
// })



function login_page_login()
{
    console.log("here");

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("loginemail").value))
    // if(document.getElementById("loginemail").style.borderColor == "green")
    {
        location.href = "HomePage.html";
    }
    else{
        alert("You have entered an invalid email address!");
        return (false);
    }

    
    // var name = document.getElementById("signUp");
    // name.innerText = "dev";
}
function login_page_signup()
{
    console.log("there");
    location.href = "sign_up_page.html";
}

function sign_up_page_signup()
{
    console.log("there");
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("inputemail").value) )
    {
        if(document.getElementById("inputemail").value == document.getElementById("inputConfirmEmail").value)
            location.href = "login_page.html";
        else
            alert("email not matched");
    }
    else{
        alert("You have entered an invalid email address!");
    }
}

function sign_up_page_login()
{
    console.log("here");
    location.href = "login_page.html";
}

play.addEventListener('click', ()=>{
    if(currentSong.paused)
    {
        currentSong.play();
        play.classList.remove('fa-play-circle');
        play.classList.add('fa-pause-circle');
    }
    else
    {
        currentSong.pause();
        play.classList.remove('fa-pause-circle');
        play.classList.add('fa-play-circle');
    }
})

rock.addEventListener('click', ()=>{
    if(rockSong.paused)
    {
        if(flag==1)
        {
            currentSong.pause();
        }
        currentSong = rockSong;
        rockSong.currentTime = 0;
        rockSong.play();
        play.classList.remove('fa-play-circle');
        play.classList.add('fa-pause-circle');
        flag = 1;
    }
    else
    {
        currentSong.pause();
        play.classList.remove('fa-pause-circle');
        play.classList.add('fa-play-circle');
    }
})

romantic.addEventListener('click', ()=>{
    if(romanticSong.paused)
    {
        if(flag==1)
        {
            currentSong.pause();
        }
        currentSong = romanticSong;
        romanticSong.currentTime = 0;
        romanticSong. play();
        play.classList.remove('fa-play-circle');
        play.classList.add('fa-pause-circle');
        flag = 1;
    }
    else
    {
        currentSong.pause();
        play.classList.remove('fa-pause-circle');
        play.classList.add('fa-play-circle');
    }
})

jazz.addEventListener('click', ()=>{
    if(jazzSong.paused)
    {
        if(flag==1)
        {
            currentSong.pause();
        }
        currentSong = jazzSong;
        jazzSong.currentTime = 0;
        jazzSong. play();
        play.classList.remove('fa-play-circle');
        play.classList.add('fa-pause-circle');
        flag = 1;
    }
    else
    {
        currentSong.pause();
        play.classList.remove('fa-pause-circle');
        play.classList.add('fa-play-circle');
    }
})

travel.addEventListener('click', ()=>{
    if(travelSong.paused)
    {
        if(flag==1)
        {
            currentSong.pause();
        }
        currentSong = travelSong;
        travelSong.currentTime = 0;
        travelSong. play();
        play.classList.remove('fa-play-circle');
        play.classList.add('fa-pause-circle');
        flag = 1;
    }
    else
    {
        currentSong.pause();
        play.classList.remove('fa-pause-circle');
        play.classList.add('fa-play-circle');
    }
})

lofi.addEventListener('click', ()=>{
    if(lofiSong.paused)
    {
        if(flag==1)
        {
            currentSong.pause();
        }
        currentSong = lofiSong;
        lofiSong.currentTime = 0;
        lofiSong. play();
        play.classList.remove('fa-play-circle');
        play.classList.add('fa-pause-circle');
        flag = 1;
    }
    else
    {
        currentSong.pause();
        play.classList.remove('fa-pause-circle');
        play.classList.add('fa-play-circle');
    }
})

punjabi.addEventListener('click', ()=>{
    if(punjabiSong.paused)
    {
        if(flag==1)
        {
            currentSong.pause();
        }
        currentSong = punjabiSong;
        punjabiSong.currentTime = 0;
        punjabiSong. play();
        play.classList.remove('fa-play-circle');
        play.classList.add('fa-pause-circle');
       
    }
    else
    {
        currentSong.pause();
        play.classList.remove('fa-pause-circle');
        play.classList.add('fa-play-circle');
    } flag = 1;
})

party.addEventListener('click', ()=>{
    if(partySong.paused)
    {
        if(flag==1)
        {
            currentSong.pause();
        }
        currentSong = partySong;
        partySong.currentTime = 0;
        partySong. play();
        play.classList.remove('fa-play-circle');
        play.classList.add('fa-pause-circle');
        flag = 1;
    }
    else
    {
        currentSong.pause();
        play.classList.remove('fa-pause-circle');
        play.classList.add('fa-play-circle');
    }
})

bollywood.addEventListener('click', ()=>{
    if(bollywoodSong.paused)
    {
        if(flag==1)
        {
            currentSong.pause();
        }
        currentSong = bollywoodSong;
        bollywoodSong.currentTime = 0;
        bollywoodSong. play();
        play.classList.remove('fa-play-circle');
        play.classList.add('fa-pause-circle');
        flag = 1;
    }
    else
    {
        currentSong.pause();
        play.classList.remove('fa-pause-circle');
        play.classList.add('fa-play-circle');
    }
})

punjabiSong.addEventListener('timeupdate', ()=>{
    progress = parseInt((punjabiSong.currentTime/punjabiSong.duration)*100);
    progressBar.value = progress;
})

rockSong.addEventListener('timeupdate', ()=>{
    progress = parseInt((rockSong.currentTime/rockSong.duration)*100);
    progressBar.value = progress;
})

jazzSong.addEventListener('timeupdate', ()=>{
    progress = parseInt((jazzSong.currentTime/jazzSong.duration)*100);
    progressBar.value = progress;
})

travelSong.addEventListener('timeupdate', ()=>{
    progress = parseInt((travelSong.currentTime/travelSong.duration)*100);
    progressBar.value = progress;
})

partySong.addEventListener('timeupdate', ()=>{
    progress = parseInt((partySong.currentTime/partySong.duration)*100);
    progressBar.value = progress;
})

romanticSong.addEventListener('timeupdate', ()=>{
    progress = parseInt((romanticSong.currentTime/romanticSong.duration)*100);
    progressBar.value = progress;
})

lofiSong.addEventListener('timeupdate', ()=>{
    progress = parseInt((lofiSong.currentTime/lofiSong.duration)*100);
    progressBar.value = progress;
})

bollywoodSong.addEventListener('timeupdate', ()=>{
    progress = parseInt((bollywoodSong.currentTime/bollywoodSong.duration)*100);
    progressBar.value = progress;
})


