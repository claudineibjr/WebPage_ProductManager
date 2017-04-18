var Categoria = (function () {
    function Categoria(_id, _descricao) {
        this.id = _id;
        this.descricao = _descricao;
    }
    Categoria.prototype.toString = function () {
        return "ID: " + this.id + "\n" +
            "Descrição: " + this.descricao;
    };
    return Categoria;
}());
