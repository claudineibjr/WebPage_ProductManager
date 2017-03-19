class Produto {
    id: Number;
    descricao: String;
    preco: Number;
    categoria: String;

    constructor(_id, _descricao, _preco, _categoria){
        this.id = _id;
        this.descricao = _descricao;
        this.preco = _preco;
        this.categoria = _categoria;
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

      if (multiplosResultados)
        produtos = JSON.parse(this.responseText);
      else{
        var produto: Produto = JSON.parse(this.responseText);
        produtos = new Array<Produto>();
        produtos.push(produto);
      }

      exibe(produtos);

      alert("Produto atualizado com sucesso!\n\n" + "Resposta nº: " + this.status + "\n" + "Resposta: " + this.response);
    }else if (this.readyState == 4) {
      alert("Falha no processo!\n\n" + "Erro nº: " + this.status + "\n" + "Resposta: " + this.response);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
function cadastrarProduto(){
  var produto = '{' +
  '"Id": ' + (<HTMLInputElement>document.getElementById("txtId")).value + ',' +
  '"Name": "' + (<HTMLInputElement>document.getElementById("txtDescricao")).value + '",' +
  '"Category": "' + (<HTMLInputElement>document.getElementById("txtCategoria")).value + '",' +
  '"Price": ' + (<HTMLInputElement>document.getElementById("txtPreco")).value + '' +
  '}';

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
function deletaProduto(){

  var idProduto = (<HTMLInputElement>document.getElementById("txtPesquisaProduto")).value;

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
  var produto = '{' +
  '"Id": ' + (<HTMLInputElement>document.getElementById("txtId")).value + ',' +
  '"Name": "' + (<HTMLInputElement>document.getElementById("txtDescricao")).value + '",' +
  '"Category": "' + (<HTMLInputElement>document.getElementById("txtCategoria")).value + '",' +
  '"Price": ' + (<HTMLInputElement>document.getElementById("txtPreco")).value + '' +
  '}';

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