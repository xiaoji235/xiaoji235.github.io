mode=localStorage.getItem("mode")


if(mode=="night"){
	document.getElementById('theme_css').href = 'https://cdn.jsdelivr.net/gh/xiaoji235/xiaoji235.github.io/css/night.css'
}else{
	document.getElementById('theme_css').href = 'https://cdn.jsdelivr.net/gh/xiaoji235/xiaoji235.github.io/css/day.css'
}


document.getElementById('nightbtn').addEventListener('click', function(){ document.getElementById('theme_css').href = 'https://cdn.jsdelivr.net/gh/xiaoji235/xiaoji235.github.io/css/night.css'; localStorage.setItem("mode","night")})



document.getElementById('daybtn').addEventListener('click', function(){ document.getElementById('theme_css').href = 'https://cdn.jsdelivr.net/gh/xiaoji235/xiaoji235.github.io/css/day.css'; localStorage.setItem("mode","day")})
