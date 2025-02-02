let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");


function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 2;
    text_speak.lang = "hi-GB "; // Make sure this matches your desired language
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Mam");
    } else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon Mam");
    } else {
        speak("Good evening Mam");
    }
}

window.addEventListener('load', () => {
    wishMe();
});

let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();
recognition.lang = "en-US"; // Ensure the recognition language is set correctly
recognition.interimResults = false;

recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    console.log("Recognized Text:", transcript);  // Debugging output
    content.innerText = transcript;
    takeCommand(transcript.toLowerCase());
};

recognition.onerror = (event) => {
    console.error('Error occurred in recognition: ', event.error);
};

btn.addEventListener("click", () => {
    recognition.start();
    btn.style.display="none"
    voice.style.display="block"

});
function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello")||(message.includes("hey"))){
        speak("hello Mam,what can i help you with")
    }
    else if(message.includes("who are you")){
        speak("I am eve , a virtual assistant,created by Neha")
    }
    else if(message.includes("open youtube")){
        speak("Opening Youtube")
        window.open("https://www.youtube.com","_blank")
    }
    else if(message.includes("open google")){
        speak("Opening google")
        window.open("https://www.google.com","_blank")
    }
    else if(message.includes("open facebook")){
        speak("Opening facebook")
        window.open("https://www.facebook.com","_blank")
    }
    else if(message.includes("open instagram")){
        speak("Opening instagram")
        window.open("https://www.instagram.com","_blank")
    }
    else if(message.includes("open github")){
        speak("Opening github")
        window.open("https://www.github.com","_blank")
    }
    else if(message.includes("open linkedin")){
        speak("Opening linkedin")
        window.open("https://www.linkedin.com","_blank")
    }
    else if(message.includes("open calculator")){
        speak("Opening calculator")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("Opening whatsapp")
        window.open("whatsapp://")
    }
    else if(message.includes("time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak( time)
    }
    else if(message.includes("what date it is")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
    }
    else{
        speak(`this is what i found on internet regarding ${message.replace("eve","")}`)
        window.open(`https://www.google.com/search?q=${message.replace("eve","")}`)
    }
    
}


