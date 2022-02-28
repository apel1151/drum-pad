function makeSound(){
    if(document.activeElement.id=="kick"){
        const audio = new Audio("audio/drum1.wav");
        audio.play();
    }
    else if(document.activeElement.id=="clap"){
        const audio = new Audio("audio/drum2.wav");
        audio.play();
    }
    else if(document.activeElement.id=="bip"){
        const audio = new Audio("audio/drum3.wav");
        audio.play();
    }
    else if(document.activeElement.id=="pop"){
        const audio = new Audio("audio/drum4.wav");
        audio.play();
    }
    else if(document.activeElement.id=="snar"){
        const audio = new Audio("audio/drum5.wav");
        audio.play();
    }
    else if(document.activeElement.id=="rock"){
        const audio = new Audio("audio/drum6.wav");
        audio.play();
    }
}

///////////////////////////// keyboard press ////////////////////////////////


document.addEventListener("keypress", function(event){
    if(event.key==="4"){
        const audio= new Audio("audio/drum1.wav");
        audio.play();
    }
    else if(event.key==="5"){
        const audio= new Audio("audio/drum2.wav");
        audio.play();
    }
    else if(event.key==="6"){
        const audio= new Audio("audio/drum3.wav");
        audio.play();
    }
    else if(event.key==="1"){
        const audio= new Audio("audio/drum4.wav");
        audio.play();
    }
    else if(event.key==="2"){
        const audio= new Audio("audio/drum5.wav");
        audio.play();
    }
    else if(event.key==="3"){
        const audio= new Audio("audio/drum6.wav");
        audio.play();
    }
})