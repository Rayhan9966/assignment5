// Function to calculate the grand total considering the discount percentage
function calculateGrandTotal(totalPrice, discount) {
  // Determine the discount percentage based on the provided discount code
  const discountPercentage =
    discount === "NEW15"
      ? 0.15
      : discount === "Couple20"
      ? 0.2
      : discount === "programmer"
      ? 0.3
      : 0;

  // Calculate the total discount amount
  const totalDiscount = totalPrice * discountPercentage;

  // Calculate the grand total after applying the discount
  const grandTotal = totalPrice - totalDiscount;

  // Update the inner text to display the discount percentage in red color
  updateInnerText("discount-percentage", `-${(discountPercentage * 100).toFixed(0)}%`);

  return grandTotal;
}

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

// Event listener for the "coupon-input" to validate and update the apply button state
document.getElementById("coupon-input").addEventListener("keyup", function (event) {
  const isValidCoupon =
    event.target.value.toLowerCase() === "new15" ||
    event.target.value.toLowerCase() === "couple20" ||
    event.target.value.toLowerCase() === "programmer";
  updateButtonState("btn-apply", isValidCoupon);
});

// Event listeners for each seat button to handle seat selection and update total price
const allSeatButtons = document.getElementsByClassName("btn-seat-select");
let seatCount = 0;
let seatCountDecrease = 24;

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
