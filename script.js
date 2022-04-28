let Player = {
	clicks: 0,
	click: 1,
	clickPreco: 50,
	clickAutomatico: 0,
	clickAutomaticoPreco: 100,

};

function addClicks(){
	if (Player.click >= 2) Player.clicks += Player.click;
	else Player.clicks += 1;

	dados();
}

document.addEventListener("click", addClicks, false);

function comprar(type){
	if (type == "ca") {
		if (Player.clicks >= Player.clickAutomaticoPreco) {
			Player.clickAutomatico += 1;
			Player.clickAutomaticoPreco += Player.clickAutomatico;
			Player.clicks -= Player.clickAutomaticoPreco;

			if (Player.clickAutomatico == 1) {
				setInterval(()=>{
					Player.clicks += Player.clickAutomatico;
					dados();
				}, 1000);
			}

			dados();
		}
	}
	else if (type == "c") {
		if (Player.clicks >= Player.clickPreco) {
			Player.click += 1;
			Player.clickPreco += Player.click;
			Player.clicks -= Player.clickPreco;

			dados();
		}
	}
}

function dados(){
	document.querySelector("#click").innerText = Player.click;
	document.querySelector("#clickPreco").innerText = Player.clickPreco;
	document.querySelector("#clicks").innerText = Player.clicks;
	document.querySelector("#clickAutomatico").innerText = Player.clickAutomatico;
	document.querySelector("#clickAutomaticoPreco").innerText = Player.clickAutomaticoPreco;
}