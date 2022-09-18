function getCSS() {
	datetoday = new Date();
	timenow = datetoday.getTime();
	datetoday.setTime(timenow);
	thehour = datetoday.getHours();
	if (thehour < 7)
		display = "css/night.css";
	else if (thehour < 19)
		display = "css/day.css";
	else
		display = "css/night.css";

	var css = '<';
	css += 'link rel="stylesheet" href=' + display + ' \/';
	css += '>';
	document.write(css);
}