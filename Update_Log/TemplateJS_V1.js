// Start of script
function showContent() { // Shows content inside a <template> HTML5 tag
	var temp = document.getElementsByTagName("template")[0];
	var clon = temp.content.cloneNode(true);
	document.body.appendChild(clon);
}
// End of script
// Version 1 created September 15th 2019