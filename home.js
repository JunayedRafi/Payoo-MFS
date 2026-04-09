const validPin = 1234;

// Add Money  
document.getElementById('addMoneyBtn').addEventListener('click', function(e){
    e.preventDefault();
    const bank = document.getElementById('bank').value;
    const accountNumber = document.getElementById("accountNumber").value
    const amount = parseInt(document.getElementById("addAmount").value)
    const pin = parseInt(document.getElementById("addPin").value)
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    if(accountNumber.length < 11){
        alert("Please provide a valid account number")
        return;
    }
    if (amount <= 0) {
        alert("Please provide a valid amount");
        return;
    }
    if(pin !== validPin){
        alert("Please provide a valid pin number")
        return;
    }


    const totalNewAvailableBalance = amount+availableBalance;

    document.getElementById('available-balance').innerText = totalNewAvailableBalance;
})
// Cash Out  
document.getElementById('withdrawMoneyBtn').addEventListener('click', function(e){
    e.preventDefault();
    const agent = document.getElementById('agentNumber').value;
    const amount = parseInt(document.getElementById("withdrawAmount").value)
    const pin = parseInt(document.getElementById("withdrawPin").value)
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    if(agent.length < 11){
        alert("Please provide a valid account number")
        return;
    }
    if (amount <= 0) {
        alert("Please provide a valid amount");
        return;
    }
    if(pin !== validPin){
        alert("Please provide a valid pin number")
        return;
    }

    if(availableBalance == 0){
        alert("You don't have sufficiant balance")
        return;
    }
    const totalNewAvailableBalance = availableBalance-amount;

    document.getElementById('available-balance').innerText = totalNewAvailableBalance;
})


// Toggling Feature

document.getElementById('add-button').addEventListener('click', function(){
    document.getElementById('cash-out-parent').style.display = "none";
    document.getElementById('add-money-parent').style.display = "block"
})
document.getElementById('cash-out-button').addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display = "none"
    document.getElementById('cash-out-parent').style.display = "block";
})
