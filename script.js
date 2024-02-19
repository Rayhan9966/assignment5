const bookedSeats = [ ];
const totalSeat=8;
const totalSeatElement=document.getElementById("seat-count");
totalSeatElement.innerText=totalSeat;


let ticketPriceElement=document.getElementById("ticket-price");


function selectTicket(){

  ticketPriceElement.innerText=550;

}
const allSeatButton = document.getElementsByID("selectTicket()");
let seatCount = 0;
let seatCountDecrease = 28;


function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}


//  // Function to display the popup
//  function showPopup() {
//   var popup = document.getElementById('popup');
//   var overlay = document.getElementById('overlay');
//   popup.style.display = 'block';
//   overlay.style.display = 'block';

//   // Close the popup after 3 seconds (you can adjust this as needed)
//   setTimeout(function() {
//       popup.style.display = 'none';
//       overlay.style.display = 'none';
//  // Redirect to the next page after payment success
//  window.location.href = 'next-page.html'; // Replace 'next-page.html' with the URL of your next page
// }, 3000);
// }

// let ticketPriceElement=document.getElementById("ticket-price");


// function selectTicket(){

//   ticketPriceElement.innerText=550;

// }
// let ticketPriceElement=document.getElementById("ticket-price");


// function selectTicket(){

//   ticketPriceElement.innerText=550;

// }




function button(){
    const homePage=document.getElementById('hPage');
    homePage.classList.add('hidden');
    

    const phPage=document.getElementById('ph-paribahon');
    phPage.classList.remove('hidden');

}
