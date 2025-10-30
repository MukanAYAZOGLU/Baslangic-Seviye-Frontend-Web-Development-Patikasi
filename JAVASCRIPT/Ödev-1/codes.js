let name = prompt("Adınız nedir?");

let theName = document.getElementById("name");
let time = document.getElementById("time");
let firstLine=document.getElementById("firstLine");
let hiPerson=document.getElementById("hiPerson");
let lastPiece=document.getElementById("lastPiece");
let lastLineFirstSpan=document.getElementById("lastLineFirstSpan");

let lastLineSecondSpan=document.getElementById("lastLineSecondSpan");
let lastLineThirdSpan=document.getElementById("lastLineThirdSpan");

firstLine.innerText = `Kodluyoruz`;

theName.innerText=name;

hiPerson.innerText = `Merhaba, ${theName.textContent}! Hoş Geldin!`;

theName.style.fontWeight = "bold";
theName.style.fontStyle = "italic";


lastPiece.innerText=`tarihinde`;

lastLineFirstSpan.innerText= `Kodluyoruz Frontend Web Development Patikası`;
lastLineFirstSpan.style.fontWeight="bold";
lastLineFirstSpan.style.fontStyle="italic";


lastLineSecondSpan.innerText="'nın Javascript";

lastLineThirdSpan.innerText=`bölümü 1. Ödevindesiniz.`;

function updateClock(){
    let theDay=new Date().getDay();

    switch(theDay){
        case 0: theDay= "Pazar"; break;
        case 1: theDay= "Pazartesi"; break;
        case 2: theDay= "Salı"; break;
        case 3: theDay= "Çarşamba"; break;
        case 4: theDay= "Perşembe"; break;
        case 5: theDay= "Cuma"; break;
        case 6: theDay= "Cumartesi"; break;
    }

    time.innerHTML =
        `
${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} 
${theDay}
        `;

}

setInterval(updateClock,1000);
updateClock();




