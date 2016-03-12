
function parse() {

	request = new XMLHttpRequest();
	request.open("GET", "data.json", true);
	request.onreadystatechange = callme;
	request.send(null);
};

function callme() {
	if (request.readyState ==4 && request.status == 200){
		data = request.responseText;	
		message = JSON.parse(data);	
		elem = document.getElementById("messages");
		for (count = 0; count < message.length; count++) {
			elem.innerHTML += "<p>" + "<span id= 'content'>" + message[count]["content"] + " " + "<span id = 'username'>" + message[count]["username"] + "</p>"; 
		}
	}
	
};


