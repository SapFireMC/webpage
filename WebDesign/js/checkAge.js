$("#age").change(function() {
	if (document.getElementById("age").value < 10) {
		document.getElementById("ageCheck").innerHTML = "Please enter an older age";
	}
});