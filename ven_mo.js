var credit, additions;
credit = 0 


/* functions for adding coins */
function add50() {
	additions = 0.5
	credit = credit + additions
	document.getElementById("demo").innerHTML = 'R' + credit;
}

function add1() {
	additions = 1
	credit = credit + additions
	document.getElementById("demo").innerHTML = 'R' + credit;
}

function add2() {
	additions = 2
	credit = credit + additions
	document.getElementById("demo").innerHTML = 'R' + credit;
}
function add5() {
	additions = 5
	credit = credit + additions
	document.getElementById("demo").innerHTML = 'R' + credit;
}

/* function for selecting products */
function sprite() {
	var stock = Number(document.getElementById('stocktable').rows[2].cells[2].innerHTML);
	cost = 8 ;
	if (stock == 0) {
		window.alert("Out of Stock");
	}
	else if (cost>credit) {
		window.alert("Not Enough");
	}
	else{
	credit = credit - cost
	document.getElementById("demo").innerHTML = 'R' + credit;
	document.getElementById('stocktable').rows[2].cells[2].innerHTML = stock - 1;
	document.getElementById("wow").innerHTML = 'Your Sprite was dispensed, you still have: R' + credit;
	}
}

function LaysSaltVineger() {
	var stock = Number(document.getElementById('stocktable').rows[4].cells[2].innerHTML);
	cost = 6 ;
	if (stock == 0) {
		window.alert("Out of Stock");
	}
	else if (cost>credit) {
		window.alert("Not Enough");
	}
	else{
	credit = credit - cost;
	document.getElementById("demo").innerHTML = 'R' + credit;
	document.getElementById('stocktable').rows[4].cells[2].innerHTML = stock - 1;
	document.getElementById("wow").innerHTML = 'Your Lays ~ Salt & Vinegar was dispensed, you still have: R' + credit;

		}
}
function LaysSourCreamandChives() {
	var stock = Number(document.getElementById('stocktable').rows[5].cells[2].innerHTML);
	cost = 6
	if (stock == 0) {
		window.alert("Out of Stock")
	}
	else if (cost>credit) {
		window.alert("Not Enough")
	}
	else{
	credit = credit - cost
	document.getElementById("demo").innerHTML = 'R' + credit;
	document.getElementById('stocktable').rows[5].cells[2].innerHTML = stock - 1;
	document.getElementById("wow").innerHTML = 'Your Lays ~ Sour Cream & Chives was dispensed, you still have: R' + credit;

	}
}
function appletizer() {
	var stock = Number(document.getElementById('stocktable').rows[3].cells[2].innerHTML);
	cost = 10 
	if (stock == 0) {
		window.alert("Out of Stock")
	}
	else if (cost>credit) {
			window.alert("Not Enough")
	}
	else{
	credit = credit - cost
	document.getElementById("demo").innerHTML = 'R' + credit;
	document.getElementById('stocktable').rows[3].cells[2].innerHTML = stock - 1;
	document.getElementById("wow").innerHTML = 'Your Appletizer was dispensed, you still have: R' + credit;

	}
}
function chappies() {
	var stock = Number(document.getElementById('stocktable').rows[1].cells[2].innerHTML);
	cost = 0.5 
	if (stock == 0) {
		window.alert("Out of Stock")
	}
	else if (cost>credit) {
		window.alert("Not Enough")
	}
	else{
	credit = credit - cost
	document.getElementById("demo").innerHTML = 'R' + credit;
	document.getElementById('stocktable').rows[1].cells[2].innerHTML = stock - 1;
	document.getElementById("wow").innerHTML = 'Your Chappie was dispensed, you still have: R' + credit;

	}
}

/* functions for refreshes, restocks and returns */
function reset() {
	document.getElementById("wow").innerHTML = 'R' + credit + ' change was returned';
	credit = 0
	document.getElementById("demo").innerHTML = 'R' + credit;
	
}
function restock() {
	displayLoader();
	document.getElementById('stocktable').rows[1].cells[2].innerHTML = 20;
	document.getElementById('stocktable').rows[2].cells[2].innerHTML = 8;
	document.getElementById('stocktable').rows[3].cells[2].innerHTML = 8;
	document.getElementById('stocktable').rows[4].cells[2].innerHTML = 8;
	document.getElementById('stocktable').rows[5].cells[2].innerHTML = 8;
	document.getElementById("wow").innerHTML = 'You Are Just in Luck we are fully stocked';

}
function refreshData() {
	displayLoader();
	document.getElementById('stocktable').rows[1].cells[2].innerHTML = 20;
	document.getElementById('stocktable').rows[2].cells[2].innerHTML = 8;
	document.getElementById('stocktable').rows[3].cells[2].innerHTML = 8;
	document.getElementById('stocktable').rows[4].cells[2].innerHTML = 8;
	document.getElementById('stocktable').rows[5].cells[2].innerHTML = 8;
	document.getElementById("wow").innerHTML = ' Thank you for choosing Mohen!';
	document.getElementById("demo").innerHTML = ' Enter Coins to Continue ';
}

/* function for loader */
function displayLoader() {
	document.getElementById("lol").style.display = "block";
	setTimeout(function() {document.getElementById("lol").style.display = "none"}, 600);
	
		
}
