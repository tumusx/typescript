const firstName: String = "Murillo"
const lastName : String = "Silva"
const age = 12
function mostrarIdadeNomeUsuario(){
    console.log(firstName.concat(lastName.toString()))
    console.log("Idade: " + age)
}
mostrarIdadeNomeUsuario()

function sumElements(firstElement: number, secondElement: number) {
    alert(firstElement + secondElement)
}

sumElements(12, 32);

interface Aluno {
    nomes: String
    idades: number
}

interface Diretora {
    nomes: String
    idades: number
}

function configurarNomeDiretora(diretora: Diretora) {
    console.log("Idade da diretora: " + diretora.idades)
    console.log("Nome da diretora: " + diretora.nomes)
}

function configurarNomeAluno(aluno: Aluno) {
    console.log("nome do aluno: " + aluno.nomes)
    console.log("idade do aluno: " + aluno.idades)
}

const configuracoes = {
    nomes: "Murillo, raimundo",
    idades: 22
};

configurarNomeAluno(configuracoes)
configurarNomeDiretora(configuracoes)

class Alunos {
    matricular() {
        let diretora: Diretora = new class implements Diretora {
            idades: number;
            nomes: String;
        }
        diretora.idades = 21;
        diretora.nomes = "Olivia"
        return diretora
    }
}

class Diretoras {
    matricular() {
        let aluno: Aluno = new class implements Aluno {
            idades: number;
            nomes: String;
        }
        aluno.idades = 23;
        aluno.nomes = "Murillo"
        return aluno
    }
}

function merge() {
    let alunos: Alunos = new Diretoras()
    let diretora: Diretoras = new Alunos()
    console.log(diretora.matricular())
    console.log(alunos.matricular())
}
merge()