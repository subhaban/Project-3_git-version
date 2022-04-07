/**
 * main.js
 * The init script for this HTML5 Video Application
 * This app is used as a demo for creating a video application utilizing the video API
 * built into HTML5. It is inspired by Bruce Lawson's example hack for creating video captions.
 * I added the ability to associate custom callbacks with moments in time of the video.
 *
 * 
 * @NOTE: Mozilla released Popcorn and Butter for doing the same thing right after I got this working.
 * @UPDATE: Popcorn and Butter are dead. This is now useful again. I've updated it to be vanilla JS 
 * with no dependencies. by Troy Bennett 7-2010 (updated 12-2021)
 */

import { cueTimer } from "./modules/cuepoints.js";

document.addEventListener("DOMContentLoaded", (e) => {

    var myCues = [
        
        { seconds: 5, callback: heading },
        { seconds: 18, callback: cinnamon },
        { seconds: 22, callback: cinnafacts },
        { seconds: 60, callback: imageshow },
        { seconds: 47, callback: cinnaorigin },
        { seconds: 49, callback: turmeric },
        { seconds: 70, callback: rosemary },
        { seconds: 90, callback: thymme },
        { seconds: 115, callback: ginger },
        { seconds: 135, callback: chilli },
        { seconds: 168, callback: funcwrapup },
        { seconds: 178, callback: quizlet }
    ];

    //this activates the cuepoints module.
    // Pass it the ID of the video to watch
    // and the array of cuepoint objects.
    cueTimer.setup("vid", myCues);

    //shortcut variables
    const vid = document.querySelector("#vid");
    const selectList = document.querySelector("#video_select");

//to load the video and start volume at 50%.
vid.src="assets/Richmedia.mp4";
vid.load();
vid.volume = 0.5;


    // make the select list control what video format to play
    selectList.addEventListener("change", (e) => {
        selectVideo(e, vid);
        vid.play();
        
    });
    
});

// short cut variables for buttons
 
 const  playbtn = document.querySelector('#playbtn');
 const  pausebtn = document.querySelector('#pausebtn');
 const  mutebtn = document.querySelector('#mutebtn');
 //const  ccbtn = document.querySelector('#ccbtn');
// const  seekinfobtn = document.querySelector('#seekinfobtn');
 const  stopbtn = document.querySelector('#stopbtn');
 const  beginbtn = document.querySelector('#beginbtn');
 let  muteimg = document.querySelector('.img_unmute');
 let  playimg = document.querySelector('.img_play');
 let  pauseimg = document.querySelector('.img_pause');
 


//short cut variables for function  changes
    const web = document.querySelector("#web");
    let pop = document.querySelector(".pop");
    let title = document.querySelector(".title");
    let img = document.querySelector(".thumbnail");
    const info = document.querySelector("#info");
    const col = document.querySelector(".col2");
   

 


//action added to buttons
 playbtn.addEventListener('click', (e) => {
     playimg.src="images/btn_playred100.png";
     pauseimg.src="images/btn_pause100.png";
    vid.play();
});
 
 pausebtn.addEventListener('click', (e) => {
      vid.pause();
      pauseimg.src="images/btn_pausered100.png";
      playimg.src="images/btn_playwt100.png";
      
 });
 
    mutebtn.addEventListener('click', (e)=> {
        vidmute();
        playimg.src="images/btn_playwt100.png";
        pauseimg.src="images/btn_pause100.png";
      
        
      });

        
stopbtn.addEventListener('click', (e) => {
   vid.play.pause();
   vid.currentTime = 0;
   playimg.src="images/btn_playwt100.png";
   pauseimg.src="images/btn_pause100.png";
      
});

beginbtn.addEventListener('click', (e) => {
    vid.currentTime = 0;
    playimg.src="images/btn_playwt100.png";
    pauseimg.src="images/btn_pause100.png";
      
});

//seekinfobtn.addEventListener('click', (e) => {
   // funcwrapup();
   // playimg.src="images/btn_playwt100.png";
   // pauseimg.src="images/btn_pause100.png";
      
    
//});


//the custom callback functions to trigger when a cuepoint is hit.
//You can code up whatever behavior you need in your own callbacks
//feel free to rename the functions to be more descriptive of what they do.
function vidmute(){
    if(vid.muted){
        vid.muted = false;
        muteimg.src = "images/btn_unmute100.png";
        
    } else {
        vid.muted = true;
        muteimg.src = "images/btn_mute100.png";
       
    }

}

function heading(){
    pop.classList.remove("hide");
    img.src = "images/samplespices.jpg";
    title.innerHTML ="Common Spices and its Benefits";
    title.style.color = "black";

}

function cinnamon() {
    //let pop =document.querySelector(".pop");
    //let title = document.querySelector(".title");
    //let img = document.querySelector(".thumbnail");
    img.src = "images/cinnamon.jpg";
    title.innerHTML ="CINNAMOM";
    title.style.color = "white";
   pop.classList.remove("hide");
    
}


function cinnafacts() {
    //vid.pause();
    const web = document.querySelector("#web");
    web.src ="https://www.webmd.com/diet/supplement-guide-cinnamon";
}

function imageshow() {

    const web = document.querySelector("#web");
    const col = document.querySelector(".col2");
    col.classList.add('size');
    web.src ="images/differentspices.jpg";
    pop.classList.add("hide");
   
}

function turmeric() {
    //const web = document.querySelector("#web");
    //let pop = document.querySelector(".pop");
   // let title = document.querySelector(".title");
   // let img = document.querySelector(".thumbnail");
    
    img.src = "images/turmeric2.jpg";

    title.innerHTML ="TURMERIC";
    web.src="https://www.medicalnewstoday.com/articles/306981";
    pop.classList.remove("hide");
}


function rosemary() {
    title.innerHTML ="ROSEMARY";
    img.src = "images/rosemerry.png";
   
    web.src="https://www.allrecipes.com/recipes/1072/ingredients/herbs-and-spices/herbs/rosemary/";
    pop.classList.remove("hide");
}

function thymme() {
    title.innerHTML ="THYMME";
    col.classList.remove('size');
    img.src = "images/thymme.png";
    web.src="https://www.acouplecooks.com/thyme-recipes/";
    pop.classList.remove("hide");


}

function ginger() {
    title.innerHTML ="GINGER";
    img.src = "images/ginger.png";
    web.src="https://www.happysprout.com/inspiration/growing-hydroponic-ginger/";
    pop.classList.remove("hide");
}

function chilli() {
    title.innerHTML ="CHILLI";
    img.src = "images/chilli.jpg";
    web.src="https://www.chilipeppermadness.com/frequently-asked-questions/the-scoville-scale/";
    pop.classList.remove("hide");

}
function funcwrapup() {
    pop.classList.remove("hide");
    web.src = "images/differentspices.jpg";
    img.src="images/samplespices.jpg";
    title.innerHTML ="Eat Healthy and Stay Healthy";
    title.style.color = "black";
    

}
function cinnaorigin(){
 vid.pause();
 info.src="assets/originofCinnamon.mp4";
vid.load();
vid.volume = 0.5;


}

function quizlet(){
    pop.classList.remove("hide");
    web.src = "images/differentspices.jpg";
    img.src="images/samplespices.jpg";
    title.innerHTML ="Eat Healthy and Stay Healthy";
    title.style.color = "black";
    vid.src="https://www.amexessentials.com/herbs-and-spices-trivia-quiz/ ";

   
}