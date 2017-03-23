//var criaTabelas: any;
//var exibe: any;

class Produto {
    id: number;
    descricao: string;
    preco: number;
    categoria: string;

    constructor(_id, _descricao, _preco, _categoria){
        this.id = _id;
        this.descricao = _descricao;
        this.preco = _preco;
        this.categoria = _categoria;
    }

    public toString(): string{
      return  "ID: " + this.id + "\n" + 
              "Descrição: " + this.descricao + "\n" + 
              "Preço: " + this.preco + "\n" + 
              "Categoria: " + this.categoria;
    }
}

function buscaProduto(){

  var idProduto: string = ((<HTMLInputElement>document.getElementById("txtPesquisaProduto")).value);

  var xmlhttp: XMLHttpRequest = new XMLHttpRequest();
  var url: string = "http://localhost:57708/api/product/" + idProduto;

  var multiplosResultados: boolean = (idProduto == "" ? true : false);

  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var produtos: Array<Produto>;

      if (this.responseText != "null"){

        if (multiplosResultados)
          produtos = JSON.parse(this.responseText);
        else{
          var produto: Produto = JSON.parse(this.responseText);
          produtos = new Array<Produto>();
          produtos.push(produto);
        }

        criaTabelas(produtos.length);
        exibe(produtos);
        

        alert("Produto recebido com sucesso!\n\n" + "Resposta nº: " + this.status + "\n" + "Resposta: " + this.response);
      }else
        alert("Produto com o id " + idProduto + " não encontrado");
    }else if (this.readyState == 4) {
      alert("Falha no processo!\n\n" + "Erro nº: " + this.status + "\n" + "Resposta: " + this.response);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();

}
function cadastrarProduto(){

   var produto: Produto = new Produto(  (<HTMLInputElement>document.getElementById("txtId")).value,
                                        (<HTMLInputElement>document.getElementById("txtDescricao")).value,
                                        (<HTMLInputElement>document.getElementById("txtPreco")).value,
                                        (<HTMLInputElement>document.getElementById("txtCategoria")).value
                                      );

  var xmlhttp: XMLHttpRequest = new XMLHttpRequest();
  var url: string = "http://localhost:57708/api/product/";

  xmlhttp.onreadystatechange = function() {

    if (this.status == 200 && this.readyState == 4){
      alert("Produto inserido com sucesso!\n\n" + "Resposta nº: " + this.status + "\n" + "Resposta: " + this.response);
    }else if (this.readyState == 4) {
      alert("Falha no processo!\n\n" + "Erro nº: " + this.status + "\n" + "Resposta: " + this.response);
    }
    
  };

  xmlhttp.open("POST", url, true);
  xmlhttp.setRequestHeader("Content-type", "application/JSON");
  xmlhttp.send(produto);
}
function deletaProduto(idProduto: string){

  var xmlhttp: XMLHttpRequest = new XMLHttpRequest();
  var url: string = "http://localhost:57708/api/product/" + idProduto;

  xmlhttp.onreadystatechange = function() {
    if (this.status == 200 && this.readyState == 4){
      alert("Produto deletado com sucesso!\n\n" + "Resposta nº: " + this.status + "\n" + "Resposta: " + this.response);
    }else if (this.readyState == 4) {
      alert("Falha no processo!\n\n" + "Erro nº: " + this.status + "\n" + "Resposta: " + this.response);
    }
  };

  xmlhttp.open("DELETE", url, true);
  xmlhttp.send();
}

function atualizaProduto(){
   var produto: Produto = new Produto(  (<HTMLInputElement>document.getElementById("txtId")).value,
                                        (<HTMLInputElement>document.getElementById("txtDescricao")).value,
                                        (<HTMLInputElement>document.getElementById("txtPreco")).value,
                                        (<HTMLInputElement>document.getElementById("txtCategoria")).value
                                      );

  var xmlhttp: XMLHttpRequest = new XMLHttpRequest();
  var url: string = "http://localhost:57708/api/product/";

  xmlhttp.onreadystatechange = function() {

    if (this.status == 200 && this.readyState == 4){
      alert("Produto atualizado com sucesso!\n\n" + "Resposta nº: " + this.status + "\n" + "Resposta: " + this.response);
    }else if (this.readyState == 4) {
      alert("Falha no processo!\n\n" + "Erro nº: " + this.status + "\n" + "Resposta: " + this.response);
    }
    
  };

  xmlhttp.open("PUT", url, true);
  xmlhttp.setRequestHeader("Content-type", "application/JSON");
  xmlhttp.send(produto);
}

/*  front.ts  */

//var Produto: any = Produto;

function criaTabelas(numeroTabelas: number): void{

    var body: HTMLElement;
    body = document.getElementById("body");

    for (var iCount: number = 0; iCount < document.getElementsByClassName("panel panel-primary").length; iCount++){
      body.removeChild(document.getElementsByClassName("panel panel-primary")[iCount]);
    }

    for (iCount = 0; iCount < numeroTabelas; iCount++){         

            var divPanelPrimary: HTMLDivElement = document.createElement("div");
            divPanelPrimary.className = "panel panel-primary";
            divPanelPrimary.id = "divPanelPrimary_" + iCount; 
            body.appendChild(divPanelPrimary);

                var divPanelHeading: HTMLDivElement = document.createElement("div");
                divPanelHeading.className = "panel-heading";
                divPanelHeading.id = "divPanelHeading_" + iCount;
                divPanelHeading.innerHTML = "Produto";
                divPanelPrimary.appendChild(divPanelHeading);

                var divPanelBody: HTMLDivElement = document.createElement("div");
                divPanelBody.className = "panel-body";
                divPanelBody.id = "divPanelBody_" + iCount;
                divPanelPrimary.appendChild(divPanelBody);

                    var divColID: HTMLDivElement = document.createElement("div");
                    divColID.className = "col-sm-1";
                    divColID.id = "divColID_" + iCount;
                    divPanelBody.appendChild(divColID);

                        var inputID: HTMLInputElement = document.createElement("input");
                        inputID.placeholder = "ID";
                        inputID.type = "text";
                        inputID.className = "form-control";
                        inputID.id = "txtId_" + iCount;
                        divColID.appendChild(inputID);

                    var divColDescricao: HTMLDivElement = document.createElement("div");
                    divColDescricao.className = "col-sm-5";
                    divColDescricao.id = "divColDescricao_" + iCount;
                    divPanelBody.appendChild(divColDescricao);

                        var inputDescricao: HTMLInputElement = document.createElement("input");
                        inputDescricao.placeholder = "Descrição";
                        inputDescricao.type = "text";
                        inputDescricao.className = "form-control";
                        inputDescricao.id = "txtDescricao_" + iCount;
                        divColDescricao.appendChild(inputDescricao);

                    var divColPreco: HTMLDivElement = document.createElement("div");
                    divColPreco.className = "col-sm-2";
                    divColPreco.id = "divColPreco_" + iCount;
                    divPanelBody.appendChild(divColPreco);

                        var divClassPreco: HTMLDivElement = document.createElement("div");
                        divClassPreco.className = "input-group";
                        divClassPreco.id = "divClassPreco_" + iCount;
                        divColPreco.appendChild(divClassPreco);

                            var spanClassGroupPreco: HTMLSpanElement = document.createElement("span");
                            spanClassGroupPreco.className = "input-group-addon";
                            spanClassGroupPreco.innerHTML = "R$";
                            spanClassGroupPreco.id = "spanClassGroupPreco_" + iCount;
                            divClassPreco.appendChild(spanClassGroupPreco);

                            var inputPreco: HTMLInputElement = document.createElement("input");
                            inputPreco.placeholder = "Preço (R$)";
                            inputPreco.type = "number";
                            inputPreco.min = "0";
                            inputPreco.step = "1.00";
                            inputPreco.className = "form-control currency";
                            inputPreco.id = "txtPreco_" + iCount;
                            divClassPreco.appendChild(inputPreco);    

                    var divColCategoria: HTMLDivElement = document.createElement("div");
                    divColCategoria.className = "col-sm-4";
                    divColCategoria.id = "divColCategoria_" + iCount;
                    divPanelBody.appendChild(divColCategoria);

                        var inputCategoria: HTMLInputElement = document.createElement("input");
                        inputCategoria.placeholder = "Categoria";
                        inputCategoria.type = "text";
                        inputCategoria.className = "form-control";
                        inputCategoria.id = "txtCategoria_" + iCount;
                        divColCategoria.appendChild(inputCategoria);   

                    divPanelBody.appendChild(document.createElement("br"));
                    divPanelBody.appendChild(document.createElement("br"));

                    var divColBotoes: HTMLDivElement = document.createElement("div");
                    divColBotoes.className = "col-sm-8";
                    divColBotoes.id = "divColBotoes_" + iCount;
                    divPanelBody.appendChild(divColBotoes);

                      var divBtnGroup: HTMLDivElement = document.createElement("div");
                      divBtnGroup.className = "btn-group";
                      divBtnGroup.id = "divBtnGroup_" + iCount;
                      divColBotoes.appendChild(divBtnGroup);

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

function exibe(produtos: Array<Produto>){

    for (var iCount: number = 0; iCount < produtos.length; iCount++){
        var inputID: HTMLInputElement = (<HTMLInputElement>document.getElementById("txtId_" + iCount));
        var inputDescricao: HTMLInputElement = (<HTMLInputElement>document.getElementById("txtDescricao_" + iCount));
        var inputPreco: HTMLInputElement = (<HTMLInputElement>document.getElementById("txtPreco_" + iCount));
        var inputCategoria: HTMLInputElement = (<HTMLInputElement>document.getElementById("txtCategoria_" + iCount));

        inputID.value = "" + produtos[iCount].id;
        inputDescricao.value = "" + produtos[iCount].descricao;
        inputPreco.value = "" + produtos[iCount].preco;
        inputCategoria.value = "" + produtos[iCount].categoria;
    }
}

$(document).ready(function(){
    $("body").on("click", "button", function(){
        if (this.id.indexOf("btnAtualizarProduto_") > -1){

            var txtID: string = "txtId_" + this.id.substring(this.id.lastIndexOf("_")+1);
            var ID: string = (<HTMLInputElement> document.getElementById(txtID)).value;

            alert("Atualizar o produto com o id " + ID );

        }
        if (this.id.indexOf("btnDeletarProduto_") > -1){
            var txtID: string = "txtId_" + this.id.substring(this.id.lastIndexOf("_")+1);
            var ID: string = (<HTMLInputElement> document.getElementById(txtID)).value;

            deletaProduto(ID);

            alert("Deletar o produto com o id " + ID);
        }        
    });
});