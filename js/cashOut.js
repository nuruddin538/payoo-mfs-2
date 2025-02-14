document.getElementById('btn-cash-out')
.addEventListener('click', function(event){
    event.preventDefault();
    const cashOut = getInputFieldValueById('input-cash-out');
    const pinNumber = getInputFieldValueById('input-cash-out-pin');
    if(isNaN(cashOut)){
        alert('Failed to cash out.');
        return;
    }
    if(pinNumber === 1234) {
        const balance = getTextFieldValueById('account-balance');
        if(cashOut > balance) {
            alert('You do not have enough money to cash out');
            return;
        }
        const newBalance = balance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
            <div class="text-white p-3 mt-2">
                <h4 class="text-2xl font-bold">Cash Out</h4>
                <p>${cashOut} withdraw. New Balance ${newBalance}</p>
            </div>
        `
        document.getElementById('transaction-container').appendChild(div);
    }
    else{
        alert('No money for you.... DGM.')
    }
})