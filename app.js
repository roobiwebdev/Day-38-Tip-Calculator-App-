function validateInputs() {
  const billInput = Number(document.querySelector("#bill").value);
  const tipInput = Number(document.querySelector("#tip").value);
  const pplInput = Number(document.querySelector("#ppl").value);

  if (isNaN(billInput) || billInput <= 0 || isNaN(tipInput) || tipInput <= 0 || isNaN(pplInput) || pplInput <= 0) {
    return false;
  }
  return true;
}

function Calculate() {
  if (!validateInputs()) {
    document.querySelector(".Tip").textContent = `$0.00`;
    document.querySelector(".Total").textContent = `$0.00`;
    return;
  }

  const billInput = Number(document.querySelector("#bill").value);
  const tipInput = Number(document.querySelector("#tip").value);
  const pplInput = Number(document.querySelector("#ppl").value);

  const tipResult = (billInput * (tipInput / 100)) / pplInput;
  const totalResult = (billInput + billInput * (tipInput / 100)) / pplInput;

  document.querySelector(".Tip").textContent = `$${tipResult.toFixed(2)}`;
  document.querySelector(".Total").textContent = `$${totalResult.toFixed(2)}`;
}

document.querySelector("#bill").addEventListener("input", Calculate);
document.querySelector("#tip").addEventListener("input", Calculate);
document.querySelector("#ppl").addEventListener("input", Calculate);

document.querySelector(".five").addEventListener("click", () => {
  document.querySelector("#tip").value = 5;
  Calculate();
});
document.querySelector(".ten").addEventListener("click", () => {
  document.querySelector("#tip").value = 10;
  Calculate();
});
document.querySelector(".fifteen").addEventListener("click", () => {
  document.querySelector("#tip").value = 15;
  Calculate();
});
document.querySelector(".tweentyfive").addEventListener("click", () => {
  document.querySelector("#tip").value = 25;
  Calculate();
});
document.querySelector(".fifty").addEventListener("click", () => {
  document.querySelector("#tip").value = 50;
  Calculate();
});

document.querySelector(".reset-btn").addEventListener("click", () => {
  document.querySelector("#bill").value = '';
  document.querySelector("#tip").value = '';
  document.querySelector("#ppl").value = '';
  document.querySelector(".Tip").textContent = `$0.00`;
  document.querySelector(".Total").textContent = `$0.00`;
});
