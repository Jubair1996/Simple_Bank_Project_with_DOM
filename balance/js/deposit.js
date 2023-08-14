document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-filed");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);
  depositField.value = " ";
  if (isNaN(newDepositAmount)) {
    alert("Please provide a valid number");
    return;
  }

  const depositTotalAmount = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalAmount.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);

  const currentDepositAmount = previousDepositTotal + newDepositAmount;

  depositTotalAmount.innerText = currentDepositAmount;

  const balanceTotalAmount = document.getElementById("balance-total");
  const previousBalanceTotalAmountString = balanceTotalAmount.innerText;
  const previousBalanceTotalAmount = parseFloat(
    previousBalanceTotalAmountString
  );

  const currentBalanceTotal = previousBalanceTotalAmount + newDepositAmount;

  balanceTotalAmount.innerText = currentBalanceTotal;
  
});
