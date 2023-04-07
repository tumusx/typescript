var Aluno = /** @class */ (function () {
    function Aluno(grauInstituicaoPessoa, idadePessoa, nomePessoa, tamanhoPessoa) {
        this.grauInstituicaoPessoa = grauInstituicaoPessoa;
        this.idadePessoa = idadePessoa;
        this.nomePessoa = nomePessoa;
        this.tamanhoPessoa = tamanhoPessoa;
    }
    Aluno.prototype.formarPessoa = function (grauInstituicaoPessoa) {
        this.grauInstituicaoPessoa = grauInstituicaoPessoa;
    };
    Aluno.prototype.mudarNomePessoa = function (nomePessoaNovo, nomePessoaAntigo) {
        if (nomePessoaNovo != null && !(nomePessoaNovo.length == 0)) {
            this.nomePessoa = nomePessoaNovo;
            console.log("Seu nome: " + nomePessoaAntigo + ", agora é: " + nomePessoaNovo + ". Parabéns!!!");
        }
        else {
            console.log("Nome da pessoa não pode ser nullo ou vazio. Informe corretamente");
        }
    };
    return Aluno;
}());
function configurarPessoa() {
    var aluno = new Aluno(2, 16, "Murillo", 1.81);
    console.log(aluno);
    aluno.mudarNomePessoa("Murilo", "Murillo");
    aluno.formarPessoa(2);
}
configurarPessoa();
