import loja from "estrutura";

let Jogador = {
	clicks: 0,
	click: 1,
	clickPreco: 50,
	clickAutomatico: 0,
	clickAutomaticoPreco: 100,
};

let Sistema = {
	adicionarClicks: ()=>{
		if (Jogador.click >= 2) Jogador.clicks += Jogador.click;
		else Jogador.clicks += 1;

		Sistema.injetarElementos();
	},
	comprar: nomeDoItem=>{
		for (let item of loja) {
			item.nome == nomeDoItem ? item.funcao() : new Error();
		}
	},
	injetarElementos: ()=>{
		document.querySelector("#click").innerText = Jogador.click;
		document.querySelector("#clickPreco").innerText = Jogador.clickPreco;
		document.querySelector("#clicks").innerText = Jogador.clicks;
		document.querySelector("#clickAutomatico").innerText = Jogador.clickAutomatico;
		document.querySelector("#clickAutomaticoPreco").innerText = Jogador.clickAutomaticoPreco;
	},
	localStorage: {
		salvar: ()=>{
			localStorage.setItem("player", JSON.stringify(Jogador));
		},
		resetar: ()=>{
			localStorage.removeItem("player");

			Jogador.clicks = -1;
			Jogador.click = 1;
			Jogador.clickPreco = 50;
			Jogador.clickAutomatico = 0;
			Jogador.clickAutomaticoPreco = 100;;

			clearInterval(1);
		},
		recuperar: ()=>{
			if (localStorage.getItem("player") != null) Jogador = JSON.parse(localStorage.getItem("player"));
			if (Jogador.clickAutomatico >= 1) {
				setInterval(()=>{
					Jogador.clicks += Jogador.clickAutomatico;
					Sistema.injetarElementos();
				}, 1000);
			}
		}
	}
};

document.addEventListener("click", Sistema.adicionarClicks, false);

Sistema.localStorage.recuperar();