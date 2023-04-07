var variavelVar = [2, 1, 3, 4, 5, 9, 6];
var variavelConst = [0, 2, 4, 6, 9, 8, 9];
function variatesTypescript() {
    var letVariavel = ["no escopo", "pode mudar de valor", "nao precisa ser inicializada"];
    letVariavel.forEach(function (value) {
        console.log(value);
    });
    var ordenando = variavelVar.sort(function (a, b) {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        return 0;
    });
    console.log(ordenando.reverse());
    console.log(ordenando);

    var filterList = variavelConst.filter(function (value) {
        if (value >= 0) {
            return value;
        }
    });
    console.log(filterList);
}
variatesTypescript();
