function buscaProduto(){

  var idProduto = document.getElementById("txtPesquisaProduto").value;

  var xmlhttp = new XMLHttpRequest();
  var url = "http://localhost:57708/api/product/" + idProduto;

  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var produto = JSON.parse(this.responseText);

      console.log(produto);

      document.getElementById("txtId").value = produto.id;
      document.getElementById("txtDescricao").value = produto.name;
      document.getElementById("txtPreco").value = produto.price;
      document.getElementById("txtCategoria").value = produto.category;

      alert("Produto inserido com sucesso!\n\n" + "Resposta nº: " + this.status + "\n" + "Resposta: " + this.response);
    }else if (this.readyState == 4) {
      alert("Falha no processo!\n\n" + "Erro nº: " + this.status + "\n" + "Resposta: " + this.response);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
function cadastrarProduto(){
  var produto = '{' +
  '"Id": ' + document.getElementById("txtId").value + ',' +
  '"Name": "' + document.getElementById("txtDescricao").value + '",' +
  '"Category": "' + document.getElementById("txtCategoria").value + '",' +
  '"Price": ' + document.getElementById("txtPreco").value + '' +
  '}';

  var xmlhttp = new XMLHttpRequest();
  var url = "http://localhost:57708/api/product/";

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

  var idProduto = document.getElementById("txtPesquisaProduto").value;

  var xmlhttp = new XMLHttpRequest();
  var url = "http://localhost:57708/api/product/" + idProduto;

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
  '"Id": ' + document.getElementById("txtId").value + ',' +
  '"Name": "' + document.getElementById("txtDescricao").value + '",' +
  '"Category": "' + document.getElementById("txtCategoria").value + '",' +
  '"Price": ' + document.getElementById("txtPreco").value + '' +
  '}';

  var xmlhttp = new XMLHttpRequest();
  var url = "http://localhost:57708/api/product/";

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