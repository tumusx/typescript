var firstName = "Murillo";
var lastName = "Silva";
var age = 12;
function mostrarIdadeNomeUsuario() {
    console.log(firstName.concat(lastName.toString()));
    console.log("Idade: " + age);
}
mostrarIdadeNomeUsuario();
function sumElements(firstElement, secondElement) {
    alert(firstElement + secondElement);
}
sumElements(12, 32);
function configurarNomeDiretora(diretora) {
    console.log("Idade da diretora: " + diretora.idades);
    console.log("Nome da diretora: " + diretora.nomes);
}
function configurarNomeAluno(aluno) {
    console.log("nome do aluno: " + aluno.nomes);
    console.log("idade do aluno: " + aluno.idades);
}
var configuracoes = {
    nomes: "Murillo, raimundo",
    idades: 22
};
configurarNomeAluno(configuracoes);
configurarNomeDiretora(configuracoes);
var Alunos = /** @class */ (function () {
    function Alunos() {
    }
    Alunos.prototype.matricular = function () {
        var diretora = new /** @class */ (function () {
            function class_1() {
            }
            return class_1;
        }());
        diretora.idades = 21;
        diretora.nomes = "Olivia";
        return diretora;
    };
    return Alunos;
}());
var Diretoras = /** @class */ (function () {
    function Diretoras() {
    }
    Diretoras.prototype.matricular = function () {
        var aluno = new /** @class */ (function () {
            function class_2() {
            }
            return class_2;
        }());
        aluno.idades = 23;
        aluno.nomes = "Murillo";
        return aluno;
    };
    return Diretoras;
}());
function calcular(numeros, callback) {
    var sum = 0;
    numeros.forEach(function (value) {
        sum += value;
    });
    callback(sum);
}
calcular([100, 684, 144], function (resultado) {
    console.log("Resultado da soma dos n\u00FAmeros \u00E9: ".concat(resultado));
});
function merge() {
    var alunos = new Diretoras();
    var diretora = new Alunos();
    console.log(diretora.matricular());
    console.log(alunos.matricular());
}
merge();
