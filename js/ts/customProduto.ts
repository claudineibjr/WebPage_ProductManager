var url: string;

function buscaProduto() {

	url = (<HTMLInputElement> document.getElementById("txtAPILink")).value + "api/product/";

	if (url.trim() != ""){
		var idProduto: string = (( < HTMLInputElement > document.getElementById("txtPesquisaProduto")).value);
		url = url + idProduto;

		var xmlhttp: XMLHttpRequest = new XMLHttpRequest();

		xmlhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				var produtos: Array < Produto > ;

				if (this.responseText != "null") {

					produtos = JSON.parse(this.responseText);
					
					criaTabelas(produtos.length, 'Exibição');
					exibe(produtos);

					alert("Produto recebido com sucesso!\n\n" + "Resposta nº: " + this.status + "\n" + "Resposta: " + this.response);
				} else
					alert("Produto com o id " + idProduto + " não encontrado");
			} else if (this.readyState == 4) {
				alert("Falha no processo!\n\n" + "Erro nº: " + this.status + "\n" + "Resposta: " + this.response);
			}
		};
		xmlhttp.open("GET", url, true);
		xmlhttp.send();
	}else{
		alert("É obrigatório informar a URL da API");
	}

}

function cadastrarProduto(produto: Produto) {

	url = (<HTMLInputElement> document.getElementById("txtAPILink")).value + "api/product/";

	if (url.trim() != ""){
		var xmlhttp: XMLHttpRequest = new XMLHttpRequest();
		
		xmlhttp.onreadystatechange = function () {

			if (this.status == 200 && this.readyState == 4) {
				alert("Produto inserido com sucesso!\n\n" + "Resposta nº: " + this.status + "\n" + "Resposta: " + this.response);
			} else if (this.readyState == 4) {
				alert("Falha no processo!\n\n" + "Erro nº: " + this.status + "\n" + "Resposta: " + this.response);
			}

		};

		xmlhttp.open("POST", url, true);
		xmlhttp.setRequestHeader("Content-type", "application/JSON");
		xmlhttp.send(JSON.stringify(produto));
	}else{
		alert("É obrigatório informar a URL da API");
	}
}

function deletaProduto(idProduto: string) {

	url = (<HTMLInputElement> document.getElementById("txtAPILink")).value + "api/product/";

	if (url.trim() != ""){
		
		url = url + idProduto;
		var xmlhttp: XMLHttpRequest = new XMLHttpRequest();

		xmlhttp.onreadystatechange = function () {
			if (this.status == 200 && this.readyState == 4) {
				alert("Produto deletado com sucesso!\n\n" + "Resposta nº: " + this.status + "\n" + "Resposta: " + this.response);
			} else if (this.readyState == 4) {
				alert("Falha no processo!\n\n" + "Erro nº: " + this.status + "\n" + "Resposta: " + this.response);
			}
		};

		xmlhttp.open("DELETE", url, true);
		xmlhttp.send();
	}else{
		alert("É obrigatório informar a URL da API");
	}
}

function atualizaProduto(produto: Produto) {

	url = (<HTMLInputElement> document.getElementById("txtAPILink")).value + "api/product/";

	if (url.trim() != ""){
		var xmlhttp: XMLHttpRequest = new XMLHttpRequest();

		xmlhttp.onreadystatechange = function () {

			if (this.status == 200 && this.readyState == 4) {
				alert("Produto atualizado com sucesso!\n\n" + "Resposta nº: " + this.status + "\n" + "Resposta: " + this.response);
			} else if (this.readyState == 4) {
				alert("Falha no processo!\n\n" + "Erro nº: " + this.status + "\n" + "Resposta: " + this.response);
			}

		};

		xmlhttp.open("PUT", url, true);
		xmlhttp.setRequestHeader("Content-type", "application/JSON");
		xmlhttp.send(JSON.stringify(produto));
	}else{
		alert("É obrigatório informar a URL da API");
	}
}