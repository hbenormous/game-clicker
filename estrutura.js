class Item {
	constructor(param) {
		this.nome = param.nome;
		this.funcao = param.funcao;
	}
}

let loja = new Array();

loja.push(new Item({
	nome: "click",
	funcao: ()=>{
		if (Jogador.clicks >= Jogador.clickPreco) {
			Jogador.click += 1;
			Jogador.clickPreco += Jogador.click;
			Jogador.clicks -= Jogador.clickPreco;

			Sistema.injetarElementos();
		}
	}
}));

loja.push(new Item({
	nome: "clickAutomatico",
	funcao: ()=>{
		if (Jogador.clicks >= Jogador.clickAutomaticoPreco) {
			Jogador.clickAutomatico += 1;
			Jogador.clickAutomaticoPreco += Jogador.clickAutomatico;
			Jogador.clicks -= Jogador.clickAutomaticoPreco;

			if (Jogador.clickAutomatico == 1) {
				setInterval(()=>{
					Jogador.clicks += Jogador.clickAutomatico;
					Sistema.injetarElementos();
				}, 1000);
			}

			Sistema.injetarElementos();
		}
	}
}));

export loja;