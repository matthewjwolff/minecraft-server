window.addEventListener('load', (event) => {
	var request = new XMLHttpRequest()
	request.open("GET", "https://mcapi.us/server/status?ip=minecraft.wolff.io")
	request.onreadystatechange = () => {
		if(request.readyState == 4 && request.status == 200) {
			var response = JSON.parse(request.responseText)
			var element = document.getElementById("statusField")
			element.innerText = response.online ? "Server is currently UP. There are "+response.players.now+" players online." : "Server is currently DOWN"
		}
	}
	request.send()
})
