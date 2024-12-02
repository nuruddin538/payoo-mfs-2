document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault();
    console.log('add money button clicked');
    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');
    console.log('add money with parameter', addMoney, pinNumber);
})