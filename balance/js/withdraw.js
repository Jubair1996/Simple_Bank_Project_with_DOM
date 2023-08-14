document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-filed");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
  withdrawField.value = " ";
  if (isNaN(newWithdrawAmount)) {
    alert("Please provide a valid number");
    return;
  }

  const withdrawTotalAmount = document.getElementById("withdraw-total");
  const previousWithdrawTotalAmountString = withdrawTotalAmount.innerText;
  const previousWithdrawTotalAmount = parseFloat(
    previousWithdrawTotalAmountString
  );

  const withdrawBalanceTotal = document.getElementById("balance-total");
  const previousBalanceTotalAmountString = withdrawBalanceTotal.innerText;
  const previousBalanceTotalAmount = parseFloat(
    previousBalanceTotalAmountString
  );

  if (newWithdrawAmount > previousBalanceTotalAmount) {
    alert("Not enough Money");
    return;
  }
  const currentWithdrawAmount = previousWithdrawTotalAmount + newWithdrawAmount;
  withdrawTotalAmount.innerText = currentWithdrawAmount;

  const newBalanceTotal = previousBalanceTotalAmount - newWithdrawAmount;

  withdrawBalanceTotal.innerText = newBalanceTotal;
});
