let name;

document.getElementById("myButton").onclick = function(){
	name = document.getElementById("myText").value;
	console.log(name);
	document.getElementById("myLabel").innerHTML = name + " молодец, а Елнара не знает немецкий в 2023 году";
}