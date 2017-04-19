class Categoria {
    id: number;
    descricao: string;
	
    constructor(_id: number, _descricao: string) {
		this.id = _id;
		this.descricao = _descricao;
	}

	public toString(): string {
		return 	"ID: " + this.id + "\n" +
				"Descrição: " + this.descricao;
	}
}