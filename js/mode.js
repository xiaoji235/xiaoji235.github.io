mode=localStorage.getItem("mode")


if(mode){
	document.getElementById('theme_css').href = 'css/night.css'
}else{
	document.getElementById('theme_css').href = 'css/day.css'
}



document.getElementById('nightbtn').addEventListener('click', function(){ document.getElementById('theme_css').href = 'css/night.css'; })
document.getElementById('daybtn').addEventListener('click', function(){ document.getElementById('theme_css').href = 'css/day.css'; })