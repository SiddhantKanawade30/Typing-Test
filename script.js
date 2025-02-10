const typingText = document.querySelector(".typing-text p"),
inpField = document.querySelector(".wrapper .input-field"),
tryButton = document.querySelector(".content button"),
timeTag = document.querySelector(".time span b"),
mistakeTag = document.querySelector(".mistake span"),
wpmTag = document.querySelector(".wpm span");

alert("This is a typing speed application to test your typing speed")
let timer,
maxTime = prompt("Enter the time you want to type in seconds  and click on start"),
timeLeft = maxTime,
charIndex = mistakes = isTyping = 0;

function loadParagraph() {
    const ranIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = "";
    paragraphs[ranIndex].split("").forEach(char => {
        let span = `<span>${char}</span>`
        typingText.innerHTML += span;
    });
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}

function initTyping() {
    let characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    if(charIndex < characters.length - 1 && timeLeft > 0) {
        if(!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        if(typedChar == null) {
            if(charIndex > 0) {
                charIndex--;
                if(characters[charIndex].classList.contains("incorrect")) {
                    mistakes--;
                }
                characters[charIndex].classList.remove("correct", "incorrect");
            }
        } else {
            if(characters[charIndex].innerText == typedChar) {
                characters[charIndex].classList.add("correct");
            } else {
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");

        const wpm = Math.round(((charIndex - mistakes)  / 5) / (maxTime - timeLeft) * maxTime);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
        
        wpmTag.innerText = wpm;
        mistakeTag.innerText = mistakes;
       
    } else {
        clearInterval(timer);
        inpField.value = "";
    }
}

function initTimer() {
    if(timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
        let wpm = Math.round(((charIndex - mistakes)  / 5) / (maxTime - timeLeft) * maxTime);
        wpmTag.innerText = wpm;
    } else {
        clearInterval(timer);
    }
}

function resetGame() {
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    inpField.value = "";
    timeTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    mistakeTag.innerText = 0;
   
}

loadParagraph();
inpField.addEventListener("input", initTyping);
tryButton.addEventListener("click", resetGame);

// popup---------------------------------------------------------------------------------------------------

const share = document.getElementById('share-btn')
const container = document.getElementById("container")
const close = document.getElementById("close")
const input = document.getElementById('input')
const btn = document.getElementById('btn')
const TimeLeft = document.getElementById('TimeLeft')


function showPopupCard() {
    const overlay = document.getElementById("container");
    overlay.style.display = "flex";
}


function closePopupCard() {
    const overlay = document.getElementById("container");
    overlay.style.display = "none"; 
}


window.onload = function() {
    setTimeout(showPopupCard,(maxTime*1000+6000));  
};


 const wp = document.getElementById('whatsapp')
 const tw = document.getElementById('twitter')
 const sp = document.getElementById('snapchat')
 const insta = document.getElementById('instagram')
 const pinterest = document.getElementById('pinterest')
 const fb = document.getElementById('fb')
 const tele = document.getElementById('telegram')




const pageUrl = location.href;
const message = `Hey I just completed my typing test check it out at ${pageUrl}`;    


const whatsappApi = `https://wa.me/?text= ${message}`
const twitterApi =  `https://twitter.com/intent/tweet?text= ${message}`
const instaApi = `https://www.instagram.com/direct/new/`
const fbApi = `https://www.facebook.com/share.php?u= ${message}`
const pintApi = `http://pinterest.com/pin/create/button/?url= ${message}`
const telegramApi = `https://telegram.me/share/url?url=${pageUrl}&text=${message}`



wp.addEventListener("click",()=>{
    window.open(url=whatsappApi,target="_blank")
})
tw.addEventListener("click",()=>{
    window.open(url=twitterApi,target="_blank")
})
insta.addEventListener("click",()=>{
    window.open(url=instaApi,target="_blank")
})
pinterest.addEventListener("click",()=>{
    window.open(url=pintApi,target="_blank")
})
fb.addEventListener("click",()=>{
    window.open(url=fbApi,target="_blank")
})
tele.addEventListener("click",()=>{
    window.open(url=telegramApi,target="_blank")
})

