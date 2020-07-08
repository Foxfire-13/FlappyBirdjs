class Matriz {
    constructor(linhas, colunas) {
        this.linhas = linhas;
        this.colunas = colunas;

        this.data = [];

        for (let i = 0; i < linhas; i++) {
            let arr = []
            for (let j = 0; j < colunas; j++) {
                arr.push(0)
            }
            this.data.push(arr);
        };
    }
}