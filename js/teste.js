/*$(document).ready(function(){
    $("body").on("click", "button", function(){
        if (this.id.indexOf("btnAtualizarProduto_") > -1){

            var txtID = "txtId_" + this.id.substring(this.id.lastIndexOf("_")+1);

            alert("Atualizar o produto com o id " + document.getElementById(txtID).value );

        }
        if (this.id.indexOf("btnDeletarProduto_") > -1){
            var txtID = "txtId_" + this.id.substring(this.id.lastIndexOf("_")+1);

            deletaProduto(document.getElementById(txtID).value);

            alert("Deletar o produto com o id " + document.getElementById(txtID).value );
        }        
    });
});*/