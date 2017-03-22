//var Produto: any = Produto;

/*function criaTabelas(numeroTabelas: number): void{

    for (var iCount: number = 0; iCount < numeroTabelas; iCount++){         
        var body: HTMLElement;
        body = document.getElementById("body");   

            var divPanelPrimary: HTMLDivElement = document.createElement("div");
            divPanelPrimary.className = "panel panel-primary";
            divPanelPrimary.id = "divPanelPrimary_" + ( iCount + 1); 
            body.appendChild(divPanelPrimary);

                var divPanelHeading: HTMLDivElement = document.createElement("div");
                divPanelHeading.className = "panel-heading";
                divPanelHeading.id = "divPanelHeading_" + ( iCount + 1);
                divPanelHeading.innerHTML = "Produto " + ( iCount + 1);
                divPanelPrimary.appendChild(divPanelHeading);

                var divPanelBody: HTMLDivElement = document.createElement("div");
                divPanelBody.className = "panel-body";
                divPanelBody.id = "divPanelBody_" + ( iCount + 1);
                divPanelPrimary.appendChild(divPanelBody);

                    var divColID: HTMLDivElement = document.createElement("div");
                    divColID.className = "col-sm-1";
                    divColID.id = "divColID_" + ( iCount + 1);
                    divPanelBody.appendChild(divColID);

                        var inputID: HTMLInputElement = document.createElement("input");
                        inputID.placeholder = "ID";
                        inputID.type = "text";
                        inputID.className = "form-control";
                        inputID.id = "txtId_" + ( iCount + 1);
                        divColID.appendChild(inputID);

                    var divColDescricao: HTMLDivElement = document.createElement("div");
                    divColDescricao.className = "col-sm-5";
                    divColDescricao.id = "divColDescricao_" + ( iCount + 1);
                    divPanelBody.appendChild(divColDescricao);

                        var inputDescricao: HTMLInputElement = document.createElement("input");
                        inputDescricao.placeholder = "Descrição";
                        inputDescricao.type = "text";
                        inputDescricao.className = "form-control";
                        inputDescricao.id = "txtDescricao_" + ( iCount + 1);
                        divColDescricao.appendChild(inputDescricao);

                    var divColPreco: HTMLDivElement = document.createElement("div");
                    divColPreco.className = "col-sm-2";
                    divColPreco.id = "divColPreco_" + ( iCount + 1);
                    divPanelBody.appendChild(divColPreco);

                        var divClassPreco: HTMLDivElement = document.createElement("div");
                        divClassPreco.className = "input-group";
                        divClassPreco.id = "divClassPreco_" + ( iCount + 1);
                        divColPreco.appendChild(divClassPreco);

                            var spanClassGroupPreco: HTMLSpanElement = document.createElement("span");
                            spanClassGroupPreco.className = "input-group-addon";
                            spanClassGroupPreco.innerHTML = "R$";
                            spanClassGroupPreco.id = "spanClassGroupPreco_" + ( iCount + 1);
                            divClassPreco.appendChild(spanClassGroupPreco);

                            var inputPreco: HTMLInputElement = document.createElement("input");
                            inputPreco.placeholder = "Preço (R$)";
                            inputPreco.type = "number";
                            inputPreco.min = "0";
                            inputPreco.step = "1.00";
                            inputPreco.className = "form-control currency";
                            inputPreco.id = "txtPreco_" + "#";
                            divClassPreco.appendChild(inputPreco);    

                    var divColCategoria: HTMLDivElement = document.createElement("div");
                    divColCategoria.className = "col-sm-4";
                    divColCategoria.id = "divColCategoria_" + ( iCount + 1);
                    divPanelBody.appendChild(divColCategoria);

                        var inputCategoria: HTMLInputElement = document.createElement("input");
                        inputCategoria.placeholder = "Categoria";
                        inputCategoria.type = "text";
                        inputCategoria.className = "form-control";
                        inputCategoria.id = "txtCategoria_" + ( iCount + 1);
                        divColCategoria.appendChild(inputCategoria);       

    }
}

function exibe(produtos: Array<Produto>){

    for (var iCount: number = 1; iCount <= produtos.length; iCount++){
        var inputID: HTMLInputElement = (<HTMLInputElement>document.getElementById("txtId_" + iCount));
        var inputDescricao: HTMLInputElement = (<HTMLInputElement>document.getElementById("txtDescricao_" + iCount));
        var inputPreco: HTMLInputElement = (<HTMLInputElement>document.getElementById("txtPreco_" + iCount));
        var inputCategoria: HTMLInputElement = (<HTMLInputElement>document.getElementById("txtCategoria_" + iCount));

        inputID.value = "" + produtos[iCount].id;
        inputDescricao.value = produtos[iCount].descricao;
        inputPreco.value = "" + produtos[iCount].preco;
        inputCategoria.value = produtos[iCount].categoria;
    }
}*/