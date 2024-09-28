// let mainBalence = parseFloat(document.getElementById('').innerText)

document.getElementById('noakhaliBtn').addEventListener('click', function(event){
    event.preventDefault();
    const noakhaliMoney = getInputValue('noakhaliInput');
    console.log("Noakhali Money:", noakhaliMoney);
    if(isNaN(noakhaliMoney) || noakhaliMoney < 0){
        alert("Invalid Donation Amount");
        return;
    }
    let intialMoney = getInitialInput('mainBalance');
    let noakhaliRelif = getInitialInput('noakhaliRelif');
    console.log("Initial Money:", intialMoney);
    console.log("Noakhali Relief:", noakhaliRelif);
    intialMoney -= noakhaliMoney;
    document.getElementById('mainBalance').innerText = intialMoney;
    document.getElementById('noakhaliRelif').innerText = noakhaliMoney;
    document.getElementById('noakhaliInput').value = '';

// for time adding
    const myDate = new Date();
    myDate.setFullYear(2025); // Sets the year to 2025
    myDate.setMonth(0); // Sets the month to January (0-based index)
    myDate.setDate(15); // Sets the day of the month to 15
    myDate.setHours(10);


    //add to transaction
    
    const div = document.createElement('div');
    div.classList.add('border','py-4', 'my-2');
    div.innerHTML = `<p class= "text-2xl font-bold ml-4"> ${noakhaliMoney} taka is Donated for Flood at Noakhali</p>
    <p class= "text-xl  ml-4">Date: ${myDate} </p>
    `;
    document.getElementById('transaction-container').appendChild(div);

    //Alert
    showModal()
});

document.getElementById('feniBtn').addEventListener('click', function(event){
    event.preventDefault();
    const feniMoney = getInputValue('feniInput')
    if(isNaN(feniMoney ) || feniMoney < 0){
        alert("Invalid Donation Amount")
        return;
    }
    let intialMoney = getInitialInput('mainBalance');
    let feniRelif = getInitialInput('feniRelif');
    intialMoney -= feniMoney;
    document.getElementById('mainBalance').innerText = intialMoney;
    document.getElementById('feniRelif').innerText = feniMoney;
    document.getElementById('feniInput').value = '';


    // for time adding
    const myDate = new Date();
    myDate.setFullYear(2025); 
    myDate.setMonth(0); 
    myDate.setDate(15); 
    myDate.setHours(10);


    //add to transaction
    
    const div = document.createElement('div');
    div.classList.add('border','py-4', 'my-2');
    div.innerHTML = `<p class= "text-2xl font-bold ml-4">${feniMoney} taka is Donated for Flood at  Feni</p>
    <p class= "text-xl  ml-4">Date: ${myDate} </p>
    `;
    document.getElementById('transaction-container').appendChild(div);


    //Alert
    showModal()
    
})
document.getElementById('aidBtn').addEventListener('click', function(event){
    event.preventDefault();
    const aidMoney = getInputValue('aidInput')
    if(isNaN(aidMoney ) || aidMoney < 0){
        alert("Invalid Donation Amount")
        return;
    }
    let intialMoney = getInitialInput('mainBalance');
    let aidRelif = getInitialInput('aidRelif');
    intialMoney -= aidMoney;
    document.getElementById('mainBalance').innerText = intialMoney;
    document.getElementById('aidRelif').innerText = aidMoney;
    document.getElementById('aidInput').value = '';

    // for time adding
    const myDate = new Date();
    myDate.setFullYear(2025); 
    myDate.setMonth(0); 
    myDate.setDate(15); 
    myDate.setHours(10);


    //add to transaction
    
    const div = document.createElement('div');
    div.classList.add('border','py-4', 'my-2');
    div.innerHTML = `<p class= "text-2xl font-bold ml-4"> ${aidMoney} taka is Donated for who Affected at Qouta Movement</p>
    <p class= "text-xl  ml-4">Date: ${myDate} </p>
    `;
    document.getElementById('transaction-container').appendChild(div);


    //Alert
    showModal()
    
})