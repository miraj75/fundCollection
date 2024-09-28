document.getElementById('donationBtn').addEventListener('click', function () {
    document.getElementById("donationPage").style.display = 'block';
    document.getElementById("historyPage").style.display = 'none';
    document.getElementById("historyPage").classList.add("hidden");
    document.getElementById("donationBtn").classList.add( "bg-lime-400", "hover:bg-lime-400");
    document.getElementById("historyBtn").classList.remove( "bg-lime-400", "hover:bg-lime-400");
});

document.getElementById('historyBtn').addEventListener('click', function () {
    
    document.getElementById("donationPage").style.display = 'none';
    document.getElementById("historyPage").style.display = 'block';
    document.getElementById("historyBtn").classList.add( "bg-lime-400", "hover:bg-lime-400");
    document.getElementById("donationBtn").classList.remove( "bg-lime-400", "hover:bg-lime-400");
    console.log('object');
    
});
