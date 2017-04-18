class Produto {
	id: number;
	descricao: string;
	preco: number;
	categoria: Categoria;

	constructor(_id: number, _descricao: string, _preco: number, _categoria: Categoria) {
		this.id = _id;
		this.descricao = _descricao;
		this.preco = _preco;
		this.categoria = _categoria;
	}

	public toString(): string {
		return 	"ID: " + this.id + "\n" +
				"Descrição: " + this.descricao + "\n" +
				"Preço: " + this.preco + "\n" +
				"Categoria: " + this.categoria.id + " - " + this.categoria.descricao;
	}
}