// Function to update the disabled state of a button based on a condition
function updateButtonState(element, condition) {
  const button = document.getElementById(element);
  button.disabled = !condition;
}

// Function to update the inner text of an element with the provided value
function updateInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

// Event listener for the "phone-number" input to update the next button state
document.getElementById("phone-number").addEventListener("keyup", function (event) {
  updateButtonState("btn-next", event.target.value !== "");
});

// Event listeners for each seat button to handle seat selection and update total price
const allSeatButtons = document.getElementsByClassName("btn-seat-select");
let seatCount = 0;
let seatCountDecrease = 28;

for (const button of allSeatButtons) {
  button.addEventListener("click", function (event) {
    // Show alert if the maximum seat count is reached
    const alert = document.getElementById("alert");
    if (seatCount >= 4) {
      alert.classList.remove("hidden");
      return;
    }

    // Update seat count and decrease count
    const seatNum = event.target.innerText;
    seatCount++;
    seatCountDecrease--;
    updateInnerText("seat-num", seatCount);
    updateInnerText("seat-num-decrease", seatCountDecrease);

    // Create and append selected seat details
    const selectedSeatContainer = document.getElementById("selected-seat-container");
    const div = document.createElement("div");
    div.classList.add(
      "flex",
      "justify-between",
      "border-b-2",
      "border-[#03071233]",
      "py-4",
      "font-normal",
      "text-[#03071299]",
      "text-base"
    );

    const p = document.createElement("p");
    p.innerText = seatNum;
    div.appendChild(p);

    const p2 = document.createElement("p");
    p2.innerText = "Economy";
    div.appendChild(p2);

    const p3 = document.createElement("p");
    p3.innerText = "550";
    div.appendChild(p3);

    selectedSeatContainer.appendChild(div);

    // Update total price and grand total
    const totalPrice = parseInt(document.getElementById("total-price").innerText);
    const newTotalPrice = totalPrice + 550;
    updateInnerText("total-price", newTotalPrice);

    const finalPrice = calculateGrandTotal(
      newTotalPrice,
      document.getElementById("coupon-input").value.toLowerCase()
    );
    updateInnerText("grand-total-price", finalPrice);

    // Apply discount when the apply button is clicked
    document.getElementById("btn-apply").addEventListener("click", function () {
      updateInnerText("grand-total-price", calculateGrandTotal(newTotalPrice, "new15"));
      document.getElementById("coupon-section").classList.add("hidden");
    });

    // Disable the selected seat button and style it
    event.target.style.background = "#1DD100";
    event.target.style.color = "white";
    event.target.disabled = true;
  });
}
