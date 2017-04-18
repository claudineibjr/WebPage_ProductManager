var Produto = (function () {
    function Produto(_id, _descricao, _preco, _categoria) {
        this.id = _id;
        this.descricao = _descricao;
        this.preco = _preco;
        this.categoria = _categoria;
    }
    Produto.prototype.toString = function () {
        return "ID: " + this.id + "\n" +
            "Descrição: " + this.descricao + "\n" +
            "Preço: " + this.preco + "\n" +
            "Categoria: " + this.categoria.id + " - " + this.categoria.descricao;
    };
    return Produto;
}());
