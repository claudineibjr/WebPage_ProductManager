function buscaCategoria(exibe: boolean = true, idCategoria: number = null): Array<Categoria> {

	url = (<HTMLInputElement> document.getElementById("txtAPILink")).value + "api/category/";

	if (url.trim() != ""){
		url = url + (idCategoria != null ? idCategoria : "");

		var xmlhttp: XMLHttpRequest = new XMLHttpRequest();

		xmlhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {

				if (this.responseText != "null") {

					var categorias: Array <Categoria> = JSON.parse(this.responseText);

					if (exibe){
						criaTabelasCategorias(categorias.length, "Exibição");
						exibeCategoria(categorias);
					}else{
						addOpcoesCategoria(categorias);
					}

					return categorias;

				}
			} else if (this.readyState == 4) {
				alert("Falha no processo!\n\n" + "Erro nº: " + this.status + "\n" + "Resposta: " + this.response);
				return null;
			}
		};
		xmlhttp.open("GET", url, true);
		xmlhttp.send();
	}else{
		alert("É obrigatório informar a URL da API");
		return null;
	}
}

function atualizaCategoria(categoria: Categoria) {

	url = (<HTMLInputElement> document.getElementById("txtAPILink")).value + "api/category/";

	if (url.trim() != ""){
		var xmlhttp: XMLHttpRequest = new XMLHttpRequest();

		xmlhttp.onreadystatechange = function () {

			if (this.status == 200 && this.readyState == 4) {
				alert("Categoria atualizado com sucesso!\n\n" + "Resposta nº: " + this.status + "\n" + "Resposta: " + this.response);
			} else if (this.readyState == 4) {
				alert("Falha no processo!\n\n" + "Erro nº: " + this.status + "\n" + "Resposta: " + this.response);
			}

		};

		xmlhttp.open("PUT", url, true);
		xmlhttp.setRequestHeader("Content-type", "application/JSON");
		xmlhttp.send(JSON.stringify(categoria));
	}else{
		alert("É obrigatório informar a URL da API");
	}
}

function cadastrarCategoria(categoria: Categoria) {

	url = (<HTMLInputElement> document.getElementById("txtAPILink")).value + "api/category/";

	if (url.trim() != ""){
		var xmlhttp: XMLHttpRequest = new XMLHttpRequest();
		
		xmlhttp.onreadystatechange = function () {

			if (this.status == 200 && this.readyState == 4) {
				alert("Categoria inserida com sucesso!\n\n" + "Resposta nº: " + this.status + "\n" + "Resposta: " + this.response);
			} else if (this.readyState == 4) {
				alert("Falha no processo!\n\n" + "Erro nº: " + this.status + "\n" + "Resposta: " + this.response);
			}

		};

		xmlhttp.open("POST", url, true);
		xmlhttp.setRequestHeader("Content-type", "application/JSON");
		xmlhttp.send(JSON.stringify(categoria));
	}else{
		alert("É obrigatório informar a URL da API");
	}
}

function deletaCategoria(idCategoria: string) {

	url = (<HTMLInputElement> document.getElementById("txtAPILink")).value + "api/category/";

	if (url.trim() != ""){
		
		url = url + idCategoria;
		var xmlhttp: XMLHttpRequest = new XMLHttpRequest();

		xmlhttp.onreadystatechange = function () {
			if (this.status == 200 && this.readyState == 4) {
				alert("Categoria deletada com sucesso!\n\n" + "Resposta nº: " + this.status + "\n" + "Resposta: " + this.response);
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