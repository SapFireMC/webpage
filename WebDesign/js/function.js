function magikarp1() {
	hideAll();
document.getElementById("l1").classList = "block";
}
function magikarp2() {
	hideAll();
document.getElementById("l2").classList = "block";
}
function hideAll() {
	document.getElementById("l1").classList = "large2";
	document.getElementById("l2").classList = "large2";
}
function fullScreen1() {
	document.getElementById("blackScreen").classList = "";
	document.getElementById("l1").classList = "";
}
function fullScreen2() {
	document.getElementById("blackScreen").classList = "";
	document.getElementById("l2").classList = "";
}
function minimize2() {
		document.getElementById("blackScreen").classList = "large2";
		document.getElementById("l1").classlist = "large2";
		document.getElementById("l2").classlist = "large2";
}