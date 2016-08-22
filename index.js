//need to create variable to increment id for each card
var cardNum = 0;
//place UI controls into variables
var create = document.getElementById("createBtn");
var cardtxt = document.getElementById("userText");




create.addEventListener("click", insertCard);



//task1: insert card into dom
function insertCard(){
	createCard();
	backgroundColor();
	textColor();
	deleteCard();
	cardNum++;
}

function createCard(){
	var card = document.createElement("div");
	var id = document.createAttribute("id");
	id.value = "card";
	card.setAttributeNode(id);



	//task2: add two color inputs above text
	//on each card.  one for text color, the	
	//other for background-color
	var txtColor = document.createElement('input');
	txtColor.id = "txtcolor" + cardNum;
	txtColor.type="color";
	txtColor.setAttribute("value", "#00a3ff");
	card.appendChild(txtColor);
	
	//when user selects a background-color
	//change that to background color of 
	//card
	var backgroundColor = document.createElement('input');
	backgroundColor.id = "backgroundcolor" + cardNum;
	backgroundColor.type="color";
	backgroundColor.setAttribute("value", "#DCDCDC");
	card.appendChild(backgroundColor);

	//add delete button that remove card from dom
	var del = document.createElement('button');
	del.id="del"+cardNum;
	del.innerHTML = "Delete";
	card.appendChild(del);


	//task3: add text from text area to card
	//text for testing
	var text = document.createElement('p');
	text.innerHTML = cardtxt.value;
	card.appendChild(text);

	document.getElementById("cards").appendChild(card);

}

function backgroundColor(){
	var backgroundColor = document.getElementById("backgroundcolor"+cardNum);
	backgroundColor.addEventListener("input", function(){
		this.parentNode.style.backgroundColor = backgroundColor.value;
});
}

function textColor(){
	var txtColor = document.getElementById("txtcolor"+cardNum);
	txtColor.addEventListener("input", function(){
		this.parentNode.style.color = txtColor.value;
});
}

function deleteCard(){
	var delBtn = document.getElementById("del"+cardNum);
	delBtn.addEventListener("click",function(){
		this.parentNode.remove();
	});
}

