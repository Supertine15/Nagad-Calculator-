function calculateCharge() {
    const amount = parseFloat(document.getElementById("amount").value);
    const chargeRate = 0.015; // ১.৫% চার্জ
    const charge = amount * chargeRate;
    const total = amount + charge;

    if (!isNaN(amount) && amount > 0) {
        document.getElementById("result").innerText = 
            `Cashout charge: ${charge.toFixed(2)} BDT\nTotal: ${total.toFixed(2)} BDT`;
    } else {
        document.getElementById("result").innerText = "Please enter a valid amount.";
    }
}