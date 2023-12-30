
let qrBox = document.querySelector('#QrBox');

let qr = document.querySelector('#QR'); 

let userInput = document.querySelector('#userInput');

let generateBtn = document.querySelector('#generate');


generateBtn.addEventListener('click', generateQR);


function generateQR() {

    qr.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + userInput.value;

}