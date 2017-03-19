class front{}
function exibe(produtos: Array<Produto>): void{
    var body: any;
    body = document.getElementById("body");
    
    var aux: string;

    for (var i: number = 0; i < produtos.length; i++){
        aux =   '<div class="panel panel-primary" id="div_Produto_' + produtos[i].id + '">' + '\n' + 
                '  <div class="panel-heading" id = "div_heading_Produto_' + produtos[i].id + '">Produto</div>' + '\n' + 
                '' + '\n' + 
                '  <div class="panel-body">' + '\n' + 
                '' + '\n' + 
                '    <div class="col-sm-1">' + '\n' + 
                '        <input placeholder="ID"  type="text" class="form-control" id="txtId_' + produtos[i].id + '">' + '\n' + 
                '    </div>' + '\n' + 
                '' + '\n' + 
                '    <div class="col-sm-5">' + '\n' + 
                '      <input placeholder="Descrição" type="text" class="form-control" id="txtDescricao_' + produtos[i].id + '">' + '\n' + 
                '    </div>' + '\n' + 
                '' + '\n' + 
                '    <div class="col-sm-2">' + '\n' + 
                '      <div class="input-group">' + '\n' + 
                '          <span class="input-group-addon">R$</span>' + '\n' + 
                '          <input placeholder="Preço (R$)" type="number" min="0" step="1.00" data-number-to-fixed="2" data-number-stepfactor="100" class="form-control currency" id="txtPreco_' + produtos[i].id + '" />' + '\n' + 
                '      </div>' + '\n' + 
                '    </div>' + '\n' + 
                '' + '\n' + 
                '    <div class="col-sm-4">' + '\n' + 
                '      <input placeholder="Categoria" type="text" class="form-control" id="txtCategoria_' + produtos[i].id + '">' + '\n' + 
                '    </div>' + '\n' + 
                '' + '\n' + 
                '  </div>' + '\n' + 
                '  ' + '\n' + 
                '</div>'

        body.innerHTML += aux;

        (<HTMLInputElement> document.getElementById("txtID_" + produtos[i].id)).value = "" + produtos[i].id;
        (<HTMLInputElement> document.getElementById("txtDescricao_" + produtos[i].id)).value = "" + produtos[i].descricao;
        (<HTMLInputElement> document.getElementById("txtPreco_" + produtos[i].id)).value = "" + produtos[i].preco;
        (<HTMLInputElement> document.getElementById("txtCategoria_" + produtos[i].id)).value = "" + produtos[i].categoria;
    }
}