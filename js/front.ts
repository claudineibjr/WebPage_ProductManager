function criaTabelas(numeroTabelas: number): void{

    var numTabela: number = 1;

    for (var iCount: number = 0; iCount < numeroTabelas; iCount++){         
        var body: HTMLElement;
        body = document.getElementById("body");

        var bEncontrouNumero: boolean = false;

        while (!(bEncontrouNumero)){
            if (document.getElementById("divPanelPrimary_" + numTabela) == null)
                bEncontrouNumero = true;
            else{
                numTabela++;
            }
        }        

            var divPanelPrimary: HTMLDivElement = document.createElement("div");
            divPanelPrimary.className = "panel panel-primary";
            divPanelPrimary.id = "divPanelPrimary_" + numTabela; 
            body.appendChild(divPanelPrimary);

                var divPanelHeading: HTMLDivElement = document.createElement("div");
                divPanelHeading.className = "panel-heading";
                divPanelHeading.id = "divPanelHeading_" + numTabela;
                divPanelHeading.innerHTML = "Produto " + numTabela;
                divPanelPrimary.appendChild(divPanelHeading);

                var divPanelBody: HTMLDivElement = document.createElement("div");
                divPanelBody.className = "panel-body";
                divPanelBody.id = "divPanelBody_" + numTabela;
                divPanelPrimary.appendChild(divPanelBody);

                    var divColID: HTMLDivElement = document.createElement("div");
                    divColID.className = "col-sm-1";
                    divColID.id = "divColID_" + numTabela;
                    divPanelBody.appendChild(divColID);

                        var inputID: HTMLInputElement = document.createElement("input");
                        inputID.placeholder = "ID";
                        inputID.type = "text";
                        inputID.className = "form-control";
                        inputID.id = "txtId_" + numTabela;
                        divColID.appendChild(inputID);

                    var divColDescricao: HTMLDivElement = document.createElement("div");
                    divColDescricao.className = "col-sm-5";
                    divColDescricao.id = "divColDescricao_" + numTabela;
                    divPanelBody.appendChild(divColDescricao);

                        var inputDescricao: HTMLInputElement = document.createElement("input");
                        inputDescricao.placeholder = "Descrição";
                        inputDescricao.type = "text";
                        inputDescricao.className = "form-control";
                        inputDescricao.id = "txtDescricao_" + numTabela;
                        divColDescricao.appendChild(inputDescricao);

                    var divColPreco: HTMLDivElement = document.createElement("div");
                    divColPreco.className = "col-sm-2";
                    divColPreco.id = "divColPreco_" + numTabela;
                    divPanelBody.appendChild(divColPreco);

                        var divClassPreco: HTMLDivElement = document.createElement("div");
                        divClassPreco.className = "input-group";
                        divClassPreco.id = "divClassPreco_" + numTabela;
                        divColPreco.appendChild(divClassPreco);

                            var spanClassGroupPreco: HTMLSpanElement = document.createElement("span");
                            spanClassGroupPreco.className = "input-group-addon";
                            spanClassGroupPreco.innerHTML = "R$";
                            spanClassGroupPreco.id = "spanClassGroupPreco_" + numTabela;
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
                    divColCategoria.id = "divColCategoria_" + numTabela;
                    divPanelBody.appendChild(divColCategoria);

                        var inputCategoria: HTMLInputElement = document.createElement("input");
                        inputCategoria.placeholder = "Categoria";
                        inputCategoria.type = "text";
                        inputCategoria.className = "form-control";
                        inputCategoria.id = "txtDescricao_" + numTabela;
                        divColCategoria.appendChild(inputCategoria);       

    }
}

function exibe(){
    
}