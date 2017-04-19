var g_Categorias: Array <Categoria>;
var classNamePanel: string = "panel panel-default";
var classNamePanel_primary: string = "panel panel-primary";
var numAux: number = 1;

function criaTabelas(numeroTabelas: number, exibicaoCadastro: string): void {

	var body: HTMLElement;
	body = document.getElementById("div_0");

	/*if (exibicaoCadastro == "Exibição"){
		for (var iCount: number = 0; iCount < body.getElementsByClassName(classNamePanel_primary).length; iCount = iCount){
			//if (body.getElementsByClassName(classNamePanel)[iCount].id != "filtrosPesquisaProduto")
			body.removeChild(body.getElementsByClassName(classNamePanel_primary)[iCount]);
		}
	}*/

	for (var iCount: number = 0; iCount < numeroTabelas; iCount++) {

		//Criação do Painel
		var divPanelPrimary: HTMLDivElement = document.createElement("div");
		divPanelPrimary.className = (exibicaoCadastro == "Cadastro" ? classNamePanel_primary : classNamePanel );
		divPanelPrimary.id = "divPanelPrimary_" + (exibicaoCadastro == "Cadastro" ? "c" : "" ) + iCount;
		body.appendChild(divPanelPrimary);

		//Criação do cabeçalho do Painel
		var divPanelHeading: HTMLDivElement = document.createElement("div");
		divPanelHeading.className = "panel-heading";
		divPanelHeading.id = "divPanelHeading_" + (exibicaoCadastro == "Cadastro" ? "c" : "" ) + iCount;
		divPanelHeading.innerHTML = (exibicaoCadastro == "Cadastro" ? "Cadastrar produto" : "Produto" )
		divPanelPrimary.appendChild(divPanelHeading);

		//Criação do corpo do Painel
		var divPanelBody: HTMLDivElement = document.createElement("div");
		divPanelBody.className = "panel-body";
		divPanelBody.id = "divPanelBody_" + (exibicaoCadastro == "Cadastro" ? "c" : "" ) + iCount;
		divPanelPrimary.appendChild(divPanelBody);

		//Criação do ID
		var divColID: HTMLDivElement = document.createElement("div");
		divColID.className = "col-sm-1";
		divColID.id = "divColID_" + (exibicaoCadastro == "Cadastro" ? "c" : "" ) + iCount;
		divPanelBody.appendChild(divColID);

		var inputID: HTMLInputElement = document.createElement("input");
		inputID.placeholder = "ID";
		inputID.type = "text";
		inputID.className = "form-control";
		inputID.id = "txtId_Produto_" + (exibicaoCadastro == "Cadastro" ? "c" : "" ) + iCount;
    	inputID.readOnly = true;
		divColID.appendChild(inputID);

		//Criação da Descrição
		var divColDescricao: HTMLDivElement = document.createElement("div");
		divColDescricao.className = "col-sm-5";
		divColDescricao.id = "divColDescricao_" + (exibicaoCadastro == "Cadastro" ? "c" : "" ) + iCount;
		divPanelBody.appendChild(divColDescricao);

		var inputDescricao: HTMLInputElement = document.createElement("input");
		inputDescricao.placeholder = "Descrição";
		inputDescricao.type = "text";
		inputDescricao.className = "form-control";
		inputDescricao.id = "txtDescricao_Produto_" + (exibicaoCadastro == "Cadastro" ? "c" : "" ) + iCount;
		divColDescricao.appendChild(inputDescricao);

		//Criação do preço
		var divColPreco: HTMLDivElement = document.createElement("div");
		divColPreco.className = "col-sm-2";
		divColPreco.id = "divColPreco_" + (exibicaoCadastro == "Cadastro" ? "c" : "" ) + iCount;
		divPanelBody.appendChild(divColPreco);

		var divClassPreco: HTMLDivElement = document.createElement("div");
		divClassPreco.className = "input-group";
		divClassPreco.id = "divClassPreco_" + (exibicaoCadastro == "Cadastro" ? "c" : "" ) + iCount;
		divColPreco.appendChild(divClassPreco);

		var spanClassGroupPreco: HTMLSpanElement = document.createElement("span");
		spanClassGroupPreco.className = "input-group-addon";
		spanClassGroupPreco.innerHTML = "R$";
		spanClassGroupPreco.id = "spanClassGroupPreco_" + (exibicaoCadastro == "Cadastro" ? "c" : "" ) + iCount;
		divClassPreco.appendChild(spanClassGroupPreco);

		var inputPreco: HTMLInputElement = document.createElement("input");
		inputPreco.placeholder = "Preço (R$)";
		inputPreco.type = "number";
		inputPreco.min = "0";
		inputPreco.step = "1.00";
		inputPreco.className = "form-control currency";
		inputPreco.id = "txtPreco_Produto_" + (exibicaoCadastro == "Cadastro" ? "c" : "" ) + iCount;
		divClassPreco.appendChild(inputPreco);

		//Criação da categoria
		var divColCategoria: HTMLDivElement = document.createElement("div");
		divColCategoria.className = "col-sm-4";
		divColCategoria.id = "divColCategoria_" + (exibicaoCadastro == "Cadastro" ? "c" : "" ) + iCount;
		divPanelBody.appendChild(divColCategoria);

		var listaCategorias: HTMLSelectElement = document.createElement("select");
		listaCategorias.className = "form-control";
		listaCategorias.name = "categorias";
		listaCategorias.id = "txtCategoria_Produto_" + (exibicaoCadastro == "Cadastro" ? "c" : "" ) + iCount;
		divColCategoria.appendChild(listaCategorias);

		var opcoesCategorias: HTMLOptionElement = document.createElement("option");
		opcoesCategorias.value = "";
		opcoesCategorias.innerHTML = "Escolha uma categoria";
		listaCategorias.appendChild(opcoesCategorias);

		//Duas quebras de linha
		divPanelBody.appendChild(document.createElement("br"));
		divPanelBody.appendChild(document.createElement("br"));

		//Criação dos botões 
		var divColBotoes: HTMLDivElement = document.createElement("div");
		divColBotoes.className = "col-sm-8";
		divColBotoes.id = "divColBotoes_" + (exibicaoCadastro == "Cadastro" ? "c" : "" ) + iCount;
		divPanelBody.appendChild(divColBotoes);

		var divBtnGroup: HTMLDivElement = document.createElement("div");
		divBtnGroup.className = "btn-group";
		divBtnGroup.id = "divBtnGroup_" + (exibicaoCadastro == "Cadastro" ? "c" : "" ) + iCount;
		divColBotoes.appendChild(divBtnGroup);

		if (exibicaoCadastro == "Cadastro"){
			var btnCadastrarProduto: HTMLButtonElement = document.createElement("button");
			btnCadastrarProduto.type = "button";
			btnCadastrarProduto.className = "btn btn-success";
			btnCadastrarProduto.innerHTML = "Cadastrar produto ";
			btnCadastrarProduto.id = "btnCadastrarProduto_c" + iCount;
			divBtnGroup.appendChild(btnCadastrarProduto);

			var spanIconeCadastrar: HTMLSpanElement = document.createElement("span");
			spanIconeCadastrar.className = "glyphicon glyphicon-floppy-saved";
			spanIconeCadastrar.id = "spanIconeCadastrar_c" + iCount;
			btnCadastrarProduto.appendChild(spanIconeCadastrar);
		}

		if (exibicaoCadastro == "Exibição"){
			var btnAtualizarProduto: HTMLButtonElement = document.createElement("button");
			btnAtualizarProduto.type = "button";
			btnAtualizarProduto.className = "btn btn-primary";
			btnAtualizarProduto.innerHTML = "Atualizar produto ";
			btnAtualizarProduto.id = "btnAtualizarProduto_" + iCount;
			divBtnGroup.appendChild(btnAtualizarProduto);

			var spanIconeAtualizar: HTMLSpanElement = document.createElement("span");
			spanIconeAtualizar.className = "glyphicon glyphicon-ok";
			spanIconeAtualizar.id = "spanIconeAtualizar_" + iCount;
			btnAtualizarProduto.appendChild(spanIconeAtualizar);

			var btnDeletarProduto: HTMLButtonElement = document.createElement("button");
			btnDeletarProduto.type = "button";
			btnDeletarProduto.className = "btn btn-danger";
			btnDeletarProduto.innerHTML = "Deletar produto ";
			btnDeletarProduto.id = "btnDeletarProduto_" + iCount;
			divBtnGroup.appendChild(btnDeletarProduto);

			var spanIconeDeletar: HTMLSpanElement = document.createElement("span");
			spanIconeDeletar.className = "glyphicon glyphicon-trash";
			spanIconeDeletar.id = "spanIconeDeletar_" + iCount;
			btnDeletarProduto.appendChild(spanIconeDeletar);
		}
	}
}

function exibe(produtos: Array < Produto > ) {

	for (var iCount: number = 0; iCount < produtos.length; iCount++) {
		var inputID: HTMLInputElement = ( < HTMLInputElement > document.getElementById("txtId_Produto_" + iCount));
		var inputDescricao: HTMLInputElement = ( < HTMLInputElement > document.getElementById("txtDescricao_Produto_" + iCount));
		var inputPreco: HTMLInputElement = ( < HTMLInputElement > document.getElementById("txtPreco_Produto_" + iCount));
		var listaCategoria: HTMLSelectElement = ( < HTMLSelectElement > document.getElementById("txtCategoria_Produto_" + iCount));

		inputID.value = "" + produtos[iCount].id;
		inputDescricao.value = "" + produtos[iCount].descricao;
		inputPreco.value = "" + produtos[iCount].preco;
		addOpcaoCategoria(produtos[iCount].categoria, listaCategoria);
	}
}

function exibeCategoria(categorias: Array < Categoria > ) {

	for (var iCount: number = 0; iCount < categorias.length; iCount++) {
		var inputID: HTMLInputElement = ( < HTMLInputElement > document.getElementById("txtId_Categoria_" + iCount));
		var inputDescricao: HTMLInputElement = ( < HTMLInputElement > document.getElementById("txtDescricao_Categoria_" + iCount));

		inputID.value = "" + categorias[iCount].id;
		inputDescricao.value = "" + categorias[iCount].descricao;
	}
}

function deletaLinha(numeroLinha: number, produto_categoria: string = "produto") {

	var body: HTMLElement;
	body = document.getElementById(( produto_categoria == "categoria" ?  "div_1" : "div_0"));
	body.removeChild(body.getElementsByClassName(classNamePanel)[numeroLinha]);

}

function alterarAba(numeroAba: number){
	for (var i = 0; i < 2; i++){
		var tab = document.getElementById("aba_" + i);	tab.setAttribute("class", "inactive");
		var div = document.getElementById("div_" + i);	div.style.display = "none";
	}
	var tab = document.getElementById("aba_" + numeroAba);	tab.setAttribute("class", "active");

	var div = document.getElementById("div_" + numeroAba);	div.style.display = "block";

	//if (numeroAba == 0 && "a" == "b"){
		/*var body: HTMLElement;
		body = document.getElementById("div_0");
		if (body.getElementsByClassName(classNamePanel).length > 0)
			body.removeChild(body.getElementsByClassName(classNamePanel)[0]);*/

	//	criaTabelas(1, 'Cadastro');
	//}

	//if (numeroAba == 1){
	//	criaTabelasCategorias(1, 'Cadastro');
	//}*/

}

function addOpcaoCategoria(categoria: Categoria, selectList: HTMLSelectElement){
	var opcoesCategorias: HTMLOptionElement = document.createElement("option");
	opcoesCategorias.value = categoria.toString();
	opcoesCategorias.innerHTML = categoria.descricao.toString();
	selectList.appendChild(opcoesCategorias);	

	selectList.selectedIndex = 1;

	if (numAux == 1)
		numAux = 2;

}

function addOpcoesCategoria(categorias: Array <Categoria>){

	var listasCategorias: NodeListOf<HTMLElement> = document.getElementsByName("categorias");


	for (var i: number = 0; i < listasCategorias.length; i++ ){	

		if (listasCategorias.item(i).childElementCount == categorias.length + numAux){
			//console.log("Existem " + listasCategorias.item(i).childElementCount + " elementos e " + (categorias.length + 1) + " categorias" );
		} else {

			for (var j: number = 0; j < categorias.length; j++){
				var opcoesCategorias: HTMLOptionElement = document.createElement("option");
				opcoesCategorias.value = categorias[j].id.toString();
				opcoesCategorias.innerHTML = categorias[j].descricao.toString();
				listasCategorias.item(i).appendChild(opcoesCategorias);
			}

		}

	}
}

function criaTabelasCategorias(numeroTabelas: number, exibicaoCadastro: string): void{
	var body: HTMLElement;
	body = document.getElementById("div_1");

	/*if (exibicaoCadastro == "Exibição"){
		for (var iCount: number = 0; iCount < body.getElementsByClassName(classNamePanel_primary).length; iCount = iCount){
			body.removeChild(body.getElementsByClassName(classNamePanel_primary)[iCount]);
		}
	}*/

	for (var iCount: number = 0; iCount < numeroTabelas; iCount++) {

		//Criação do Painel
		var divPanelPrimary: HTMLDivElement = document.createElement("div");
		divPanelPrimary.className = (exibicaoCadastro == "Cadastro" ? classNamePanel_primary : classNamePanel );
		divPanelPrimary.id = "divPanelPrimary_" + iCount;
		body.appendChild(divPanelPrimary);

		//Criação do cabeçalho do Painel
		var divPanelHeading: HTMLDivElement = document.createElement("div");
		divPanelHeading.className = "panel-heading";
		divPanelHeading.id = "divPanelHeading_" + iCount;
		divPanelHeading.innerHTML = (exibicaoCadastro == "Cadastro" ? "Cadastrar categoria" : "Categoria" );
		divPanelPrimary.appendChild(divPanelHeading);

		//Criação do corpo do Painel
		var divPanelBody: HTMLDivElement = document.createElement("div");
		divPanelBody.className = "panel-body";
		divPanelBody.id = "divPanelBody_" + iCount;
		divPanelPrimary.appendChild(divPanelBody);

		//Criação do ID
		var divColID: HTMLDivElement = document.createElement("div");
		divColID.className = "col-sm-1";
		divColID.id = "divColID_" + iCount;
		divPanelBody.appendChild(divColID);

		var inputID: HTMLInputElement = document.createElement("input");
		inputID.placeholder = "ID";
		inputID.type = "text";
		inputID.className = "form-control";
		inputID.id = "txtId_Categoria_" + iCount;
    	inputID.readOnly = true;
		divColID.appendChild(inputID);

		//Criação da Descrição
		var divColDescricao: HTMLDivElement = document.createElement("div");
		divColDescricao.className = "col-sm-11";
		divColDescricao.id = "divColDescricao_" + iCount;
		divPanelBody.appendChild(divColDescricao);

		var inputDescricao: HTMLInputElement = document.createElement("input");
		inputDescricao.placeholder = "Descrição";
		inputDescricao.type = "text";
		inputDescricao.className = "form-control";
		inputDescricao.id = "txtDescricao_Categoria_" + iCount;
		divColDescricao.appendChild(inputDescricao);

		//Duas quebras de linha
		divPanelBody.appendChild(document.createElement("br"));
		divPanelBody.appendChild(document.createElement("br"));

		//Criação dos botões 
		var divColBotoes: HTMLDivElement = document.createElement("div");
		divColBotoes.className = "col-sm-8";
		divColBotoes.id = "divColBotoes_" + iCount;
		divPanelBody.appendChild(divColBotoes);

		var divBtnGroup: HTMLDivElement = document.createElement("div");
		divBtnGroup.className = "btn-group";
		divBtnGroup.id = "divBtnGroup_" + iCount;
		divColBotoes.appendChild(divBtnGroup);

		if (exibicaoCadastro == "Cadastro"){
			var btnCadastrarCategoria: HTMLButtonElement = document.createElement("button");
			btnCadastrarCategoria.type = "button";
			btnCadastrarCategoria.className = "btn btn-success";
			btnCadastrarCategoria.innerHTML = "Cadastrar categora ";
			btnCadastrarCategoria.id = "btnCadastrarCategoria_" + iCount;
			divBtnGroup.appendChild(btnCadastrarCategoria);

			var spanIconeCadastrar: HTMLSpanElement = document.createElement("span");
			spanIconeCadastrar.className = "glyphicon glyphicon-floppy-saved";
			spanIconeCadastrar.id = "spanIconeCadastrar_" + iCount;
			btnCadastrarCategoria.appendChild(spanIconeCadastrar);
		}

		if (exibicaoCadastro == "Exibição"){
			var btnAtualizarCategoria: HTMLButtonElement = document.createElement("button");
			btnAtualizarCategoria.type = "button";
			btnAtualizarCategoria.className = "btn btn-primary";
			btnAtualizarCategoria.innerHTML = "Atualizar categoria ";
			btnAtualizarCategoria.id = "btnAtualizarCategoria_" + iCount;
			divBtnGroup.appendChild(btnAtualizarCategoria);

			var spanIconeAtualizar: HTMLSpanElement = document.createElement("span");
			spanIconeAtualizar.className = "glyphicon glyphicon-ok";
			spanIconeAtualizar.id = "spanIconeAtualizar_" + iCount;
			btnAtualizarCategoria.appendChild(spanIconeAtualizar);

			var btnDeletarCategoria: HTMLButtonElement = document.createElement("button");
			btnDeletarCategoria.type = "button";
			btnDeletarCategoria.className = "btn btn-danger";
			btnDeletarCategoria.innerHTML = "Deletar categoria ";
			btnDeletarCategoria.id = "btnDeletarCategoria_" + iCount;
			divBtnGroup.appendChild(btnDeletarCategoria);

			var spanIconeDeletar: HTMLSpanElement = document.createElement("span");
			spanIconeDeletar.className = "glyphicon glyphicon-trash";
			spanIconeDeletar.id = "spanIconeDeletar_" + iCount;
			btnDeletarCategoria.appendChild(spanIconeDeletar);
		}
	}
}

$(document).ready(function () {
	$("body").on("click", "button", function () {

		//Clique no botão de atualização de produto
		if (this.id.indexOf("btnAtualizarProduto_") > -1) {

			var txtID: string = this.id.substring(this.id.lastIndexOf("_") + 1);

			var select: HTMLSelectElement = (<HTMLSelectElement> document.getElementById("txtCategoria_Produto_c" + txtID));
			var opcoes: HTMLCollectionOf<HTMLOptionElement> = select.selectedOptions;
			var idCategoria: number = Number(opcoes.item(0).value);

			var categoria: Categoria = new Categoria(	Number(opcoes.item(0).value),
														opcoes.item(0).innerHTML);

			var produto: Produto = new Produto( Number((<HTMLInputElement> document.getElementById("txtId_Produto_" + txtID)).value), 
												(<HTMLInputElement> document.getElementById("txtDescricao_Produto_" + txtID)).value, 
												Number((<HTMLInputElement> document.getElementById("txtPreco_Produto_" + txtID)).value), 
												categoria
												);

			atualizaProduto(produto);

		}

		//Clique no botão de deleção de produto
		if (this.id.indexOf("btnDeletarProduto_") > -1) {
			var numero: number = this.id.substring(this.id.lastIndexOf("_") + 1);
			var txtID: string = "txtId_Produto_" + numero;
			var ID: string = ( < HTMLInputElement > document.getElementById(txtID)).value;

			deletaLinha(numero);
			deletaProduto(ID);
		}

		//Clique no botão de cadastro de produto
		if (this.id.indexOf("btnCadastrarProduto_") > -1) {

			var txtID: string = this.id.substring(this.id.lastIndexOf("_c") + 2);

			var select: HTMLSelectElement = (<HTMLSelectElement> document.getElementById("txtCategoria_Produto_c" + txtID));
			var opcoes: HTMLCollectionOf<HTMLOptionElement> = select.selectedOptions;
			var idCategoria: number = Number(opcoes.item(0).value);

			var categoria: Categoria = new Categoria(	Number(opcoes.item(0).value),
														opcoes.item(0).innerHTML);

			var produto: Produto = new Produto(	Number((<HTMLInputElement> document.getElementById("txtId_Produto_c" + txtID)).value), 
												(<HTMLInputElement> document.getElementById("txtDescricao_Produto_c" + txtID)).value, 
												Number((<HTMLInputElement> document.getElementById("txtPreco_Produto_c" + txtID)).value), 
												categoria
												);

			alert(produto.toString());
			cadastrarProduto(produto);

		}

		//Clique no botão de pesquisa de categorias
		if (this.id.indexOf("btnPesquisaCategoria") > -1) {

			var txtID: string = (<HTMLInputElement> document.getElementById("txtPesquisaCategoria")).value;
			
			if (txtID.trim() != "")
				g_Categorias = buscaCategoria(true, Number(txtID));
			else
				g_Categorias = buscaCategoria(true);
			
			//if (g_Categorias == null || g_Categorias == undefined){
			//}

			//criaTabelasCategorias(g_Categorias.length, "Exibição");
			//exibeCategoria(g_Categorias);

		}

		//Clique no botão de atualização de categoria
		if (this.id.indexOf("btnAtualizarCategoria_") > -1) {

			var txtID: string = this.id.substring(this.id.lastIndexOf("_") + 1);

			var categoria: Categoria = new Categoria(	Number((<HTMLInputElement> document.getElementById("txtId_Categoria_" + txtID)).value), 
														(<HTMLInputElement> document.getElementById("txtDescricao_Categoria_" + txtID)).value
													);

			atualizaCategoria(categoria);

		}

		//Clique no botão de cadastro de categoria
		if (this.id.indexOf("btnCadastrarCategoria_") > -1) {

			var txtID: string = this.id.substring(this.id.lastIndexOf("_") + 1);

			var categoria: Categoria = new Categoria(	Number((<HTMLInputElement> document.getElementById("txtId_Categoria_c_" + txtID)).value), 
														(<HTMLInputElement> document.getElementById("txtDescricao_Categoria_c_" + txtID)).value
													);

			cadastrarCategoria(categoria);
		}

		//Clique no botão de deleção de produto
		if (this.id.indexOf("btnDeletarCategoria_") > -1) {
			var numero: number = this.id.substring(this.id.lastIndexOf("_") + 1);
			var txtID: string = "txtId_Categoria_" + numero;
			var ID: string = ( < HTMLInputElement > document.getElementById(txtID)).value;

			deletaLinha(numero, "categoria");
			deletaCategoria(ID);
		}

	});

	$("body").on("click", "select", function () {
		//Clique no select de categorias
		if (this.id.indexOf("txtCategoria_Produto_") > -1) {
			if (g_Categorias == null)
				g_Categorias = buscaCategoria(false);
		}		
	}

});