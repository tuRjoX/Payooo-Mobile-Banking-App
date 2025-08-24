const validPin = 1234;
const transactionHistory = [];
// Add Money
document.getElementById("add-money-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const amount = parseInt(document.getElementById("add-amount").value);
    const pinNumber = parseInt(document.getElementById("add-pin").value);
    const availableBalance = parseInt(document.getElementById("available-balance").innerText);
    if (accountNumber.length < 11) {
      alert("Invalid account Number");
      return;
    }
    if (isNaN(amount) || amount <= 0) {
      alert("Invalid amount");
      return;
    }
    if (pinNumber !== validPin) {
      alert("Invalid pin Number");
      return;
    }
    const totalNewAvailableBalance = amount + availableBalance;
    document.getElementById("available-balance").innerText = totalNewAvailableBalance;
    alert(`Successfully added ৳${amount} from ${bank}, account number ${accountNumber}.`);

    const data = {
      name: "Add Money",
      date: new Date().toLocaleString()
    }
    transactionHistory.push(data);
});
// Cashout
document.getElementById("cash-out-btn").addEventListener("click", function (event) {
  event.preventDefault();
  const pinNumber = parseInt(document.getElementById("cash-out-pin").value);
  const amount2 = parseInt(document.getElementById("cash-out-amount").value);
  const availableBalance = parseInt(document.getElementById("available-balance").innerText);
  const accountNumber = document.getElementById("cash-out-agent-number").value;

  if (accountNumber.length < 11) {
    alert("Invalid account Number");
    return;
  }
  if (isNaN(amount2) || amount2 <= 0) {
    alert("Invalid amount");
    return;
  }
  if (amount2 > availableBalance) {
    alert("Insufficient balance");
    return;
  }
  if (pinNumber !== validPin) {
    alert("Invalid pin Number");
    return;
  }
  const totalNewAvailableBalance = availableBalance - amount2;
  document.getElementById("available-balance").innerText = totalNewAvailableBalance;
  alert(`Successfully withdrew ৳${amount2}.`);

  const data = {
      name: "Cash Out",
      date: new Date().toLocaleString()
    }
    transactionHistory.push(data);
});
// Transfer Money
document.getElementById('send-money-btn').addEventListener('click', function(event) {
    event.preventDefault();

    const userAccountNumber = document.getElementById('user-account-number').value;
    const transferAmount = parseInt(document.getElementById('transfer-amount').value);
    const availableBalanceElement = parseInt(document.getElementById('available-balance').innerText);
    const transferPin = parseInt(document.getElementById('transfer-pin').value);

    if(userAccountNumber.length < 11){
        alert("Account number is invalid.");
        return;
    }
    if(isNaN(transferAmount) || transferAmount <= 0){
        alert("Amount is invalid.");
        return;
    }
    if(transferAmount > availableBalanceElement){
        alert("Insufficient balance.");
        return;
    }
    if(transferPin !== validPin){
        alert("Pin number is invalid.");
        return;
    }
    const newBalance = availableBalanceElement - transferAmount;
    document.getElementById('available-balance').innerText = newBalance;
    alert(`Successfully transferred ৳${transferAmount} to account number ${userAccountNumber}.`);

    const data = {
      name: "Transfer Money",
      date: new Date().toLocaleString()
    }
    transactionHistory.push(data);
});
// Pay Bill
document.getElementById("pay-now-btn").addEventListener("click", function (event) {
  event.preventDefault();
  const billerAccountNumber = document.getElementById("biller-account-number").value;
  const payBillAmount = parseInt(document.getElementById("pay-bill-amount").value);
  const payBillPin = parseInt(document.getElementById("pay-bill-pin").value);
  const availableBalance = parseInt(document.getElementById("available-balance").innerText);

  if (billerAccountNumber.length < 11) {
    alert("Invalid account Number");
    return;
  }
  if (isNaN(payBillAmount) || payBillAmount <= 0) {
    alert("Invalid amount");
    return;
  }
  if (payBillAmount > availableBalance) {
    alert("Insufficient balance");
    return;
  }
  if (payBillPin !== validPin) {
    alert("Invalid pin Number");
    return;
  }
  const totalNewAvailableBalance = availableBalance - payBillAmount;
  document.getElementById("available-balance").innerText = totalNewAvailableBalance;
  alert(`Successfully paid ৳${payBillAmount} to account number ${billerAccountNumber}.`);

  const data = {
      name: "Pay Bill",
      date: new Date().toLocaleString()
    }
    transactionHistory.push(data);
});
// Transaction History
document.getElementById("transactions-button").addEventListener("click", function () {
  const transactionContainer = document.getElementById("transactions-container");
  transactionContainer.innerHTML = "";
  for(const data of transactionHistory){
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="bg-white rounded-xl p-3 flex justify-between items-center mt-3">
                <div class="flex items-center">
                  <div class="p-3 rounded-full bg-[#f4f5f7]">
                    <img src="assets/wallet1.png" class="mx-auto" alt="">
                  </div>
                  <div class="ml-3">
                    <h1>${data.name}</h1>
                    <p>${data.date}</p>
                  </div>
                </div>
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
    `;
    transactionContainer.appendChild(div);
  }
});
// Logout
document.getElementById("logout-button").addEventListener("click", function () {
  window.location.href = "index.html";
});
// toggling feature
document.getElementById("add-button").addEventListener("click", function () {
  const forms = document.getElementsByClassName('form');
  for(const form of forms){
    form.style.display = "none";
  }
  document.getElementById("add-money-parent").style.display = "block";

  const formButton = document.getElementsByClassName('form-btn');
  for(const btn of formButton){
    btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]");
    btn.classList.add("border-gray-300");
  }
  document.getElementById("add-button").classList.remove("border-gray-300");
  document.getElementById("add-button").classList.add("border-[#0874f2]","bg-[#0874f20d]");
});
document.getElementById("cash-out-button").addEventListener("click", function () {
  const forms = document.getElementsByClassName('form');
  for(const form of forms){
    form.style.display = "none";
  }
  document.getElementById("cash-out-parent").style.display = "block";

  const formButton = document.getElementsByClassName('form-btn');
  for(const btn of formButton){
    btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]");
    btn.classList.add("border-gray-300");
  }
  document.getElementById("cash-out-button").classList.remove("border-gray-300");
  document.getElementById("cash-out-button").classList.add("border-[#0874f2]","bg-[#0874f20d]");
});
document.getElementById("send-money-button").addEventListener("click", function () {
  const forms = document.getElementsByClassName('form');
  for(const form of forms){
    form.style.display = "none";
  }
  document.getElementById("send-money-parent").style.display = "block";

  const formButton = document.getElementsByClassName('form-btn');
  for(const btn of formButton){
    btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]");
    btn.classList.add("border-gray-300");
  }
  document.getElementById("send-money-button").classList.remove("border-gray-300");
  document.getElementById("send-money-button").classList.add("border-[#0874f2]","bg-[#0874f20d]");
});
document.getElementById("get-bonus-button").addEventListener("click", function () {
  const forms = document.getElementsByClassName('form');
  for(const form of forms){
    form.style.display = "none";
  }
  document.getElementById("get-bonus-parent").style.display = "block";

  const formButton = document.getElementsByClassName('form-btn');
  for(const btn of formButton){
    btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]");
    btn.classList.add("border-gray-300");
  }
  document.getElementById("get-bonus-button").classList.remove("border-gray-300");
  document.getElementById("get-bonus-button").classList.add("border-[#0874f2]","bg-[#0874f20d]");
});
document.getElementById("pay-bill-button").addEventListener("click", function () {
  const forms = document.getElementsByClassName('form');
  for(const form of forms){
    form.style.display = "none";
  }
  document.getElementById("pay-bill-parent").style.display = "block";

  const formButton = document.getElementsByClassName('form-btn');
  for(const btn of formButton){
    btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]");
    btn.classList.add("border-gray-300");
  }
  document.getElementById("pay-bill-button").classList.remove("border-gray-300");
  document.getElementById("pay-bill-button").classList.add("border-[#0874f2]","bg-[#0874f20d]");
});
document.getElementById("transactions-button").addEventListener("click", function () {
  const forms = document.getElementsByClassName('form');
  for(const form of forms){
    form.style.display = "none";
  }
  document.getElementById("transactions-parent").style.display = "block";

  const formButton = document.getElementsByClassName('form-btn');
  for(const btn of formButton){
    btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]");
    btn.classList.add("border-gray-300");
  }
  document.getElementById("transactions-button").classList.remove("border-gray-300");
  document.getElementById("transactions-button").classList.add("border-[#0874f2]","bg-[#0874f20d]");
});