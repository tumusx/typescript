class Aluno implements Pessoa {
    grauInstituicaoPessoa: number;
    idadePessoa: number;
    nomePessoa: String;
    tamanhoPessoa: number;

    formarPessoa(grauInstituicaoPessoa: number) {
        this.grauInstituicaoPessoa = grauInstituicaoPessoa;
    }

    mudarNomePessoa(nomePessoaNovo, nomePessoaAntigo) {
        if(nomePessoaNovo != null && !(nomePessoaNovo.length == 0)) {
            this.nomePessoa = nomePessoaNovo
            console.log("Seu nome: " + nomePessoaAntigo + ", agora é: " + nomePessoaNovo + ". Parabéns!!!")
        }else{
            console.log("Nome da pessoa não pode ser nullo ou vazio. Informe corretamente")
        }
    }

    constructor(grauInstituicaoPessoa, idadePessoa, nomePessoa, tamanhoPessoa) {
        this.grauInstituicaoPessoa = grauInstituicaoPessoa;
        this.idadePessoa = idadePessoa;
        this.nomePessoa = nomePessoa;
        this.tamanhoPessoa = tamanhoPessoa;
    }
}

function configurarPessoa() {
    let aluno: Aluno = new Aluno(2, 16, "Murillo", 1.81)
    console.log(aluno)
    aluno.mudarNomePessoa( "Murilo", "Murillo")
    aluno.formarPessoa(2)
}

configurarPessoa()

interface Pessoa {
    nomePessoa: String
    idadePessoa: number
    tamanhoPessoa: number
    grauInstituicaoPessoa: number

    formarPessoa(grauInstituicaoPessoa: number)
    mudarNomePessoa(nomePessoaNovo, nomePessoaAntigo)

}