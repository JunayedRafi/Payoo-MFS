const validPin = 1234;
const transactionData = []
function getInputValueNumber(id) {
    const InputField = parseInt(document.getElementById(id).value);
    return InputField
}

function getInnerText(id){
    const element = parseInt(document.getElementById(id).innerText);
    return element;
}

function setInnerText(value){
    const availableBalanceElement = document.getElementById('available-balance');
    availableBalanceElement.innerText = value
}
function handleToggle(id){
    const forms = document.getElementsByClassName('form');
    for(const form of forms){
        form.style.display = 'none';
    }
    document.getElementById(id).style.display = 'block';
}

function handleBtn(id){
    const formBtns = document.getElementsByClassName('form-btn');
    for(const formBtn of formBtns){ 
        formBtn.classList.remove('bg-[#0874F20D]','border-[#0874F2]');
        formBtn.classList.add('border-[#0808081A]');
    }
    document.getElementById(id).classList.remove('border-[#0808081A]');
        document.getElementById(id).classList.add('bg-[#0874F20D]','border-[#0874F2]');
}

document.getElementById("transactions-button").addEventListener('click', function(){
    const transactionContainer = document.getElementById('transactionContainer')
    transactionContainer.innerText = ''
    for(const data of transactionData){
        const div = document.createElement('div')
        div.innerHTML = `<div class="bg-white rounded-xl p-3 flex justify-between items-center">
                <div class="flex items-center gap-3">
                    <div class="p-3 rounded-full bg-gray-300">
                        <img src="./assets/wallet1.png" class="mx-auto" alt="" srcset="">
                    </div>
                    <div>
                        <h1 class="text">${data.name}</h1>
                        <p class="text-[#08080880]">${data.amount}</p>
                        <p class="text-[#08080880]">${data.date}</p>
                    </div>
                </div>
            </div>`
            transactionContainer.appendChild(div)
    }
})

// Add Money  
document.getElementById('addMoneyBtn').addEventListener('click', function(e){
    e.preventDefault();
    const bank = document.getElementById('bank').value;
    const accountNumber = document.getElementById("accountNumber").value
    const amount = getInputValueNumber('addAmount')
    const pin = getInputValueNumber('addPin')
    const availableBalance = getInnerText('available-balance');

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
    setInnerText(totalNewAvailableBalance);

    const data = {
        name: "Add Money",
        date : new Date().toLocaleTimeString(),
        amount: amount
    }
    transactionData.push(data)
})
// Cash Out  
document.getElementById('withdrawMoneyBtn').addEventListener('click', function(e){
    e.preventDefault();
    const agent = document.getElementById('agentNumber').value;
    const amount = getInputValueNumber('withdrawAmount') 
    const pin = getInputValueNumber('withdrawPin')
    const availableBalance = getInnerText('available-balance');

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

    setInnerText(totalNewAvailableBalance);
        const data = {
        name: "Cash Out",
        date : new Date().toLocaleTimeString(),
        amount: amount
    }
    transactionData.push(data)
    console.log(transactionData)
})


// Toggling Feature

document.getElementById('add-button').addEventListener('click', function(){
    handleToggle('add-money-parent')
    handleBtn('add-button')
})
document.getElementById('cash-out-button').addEventListener('click', function(){
    handleToggle('cash-out-parent')
    handleBtn('cash-out-button')
})
document.getElementById('pay-bill-button').addEventListener('click', function(){
    handleToggle('pay-bill-parent')
    handleBtn('pay-bill-button')
})
document.getElementById('transactions-button').addEventListener('click', function(){
    handleToggle('transaction-parent')
    handleBtn('transactions-button')
})