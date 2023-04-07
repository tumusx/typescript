var variavelVar = [2, 1, 3, 4, 5, 9, 6]
const variavelConst = [0, 2, 4, 6, 9, 8, 9]

/**
 * var = global e não precisa ser inicializada
 * let = escopo e não precisa ser inicializada
 * const = precisa ser inicializada
 */
function variatesTypescript() {
    let letVariavel = ["no escopo", "pode mudar de valor", "nao precisa ser inicializada"]
    letVariavel.forEach(value => {
        console.log(value)
    })

    let ordenando: number[] = variavelVar.sort((a, b) => {
        if(a > b){
            return 1;
        }
        if (a<b) {
            return -1;
        }
        return 0;
    });
    console.log(ordenando.reverse())
    console.log(ordenando)


    let filterList = variavelConst.filter(value => {
        if(value >= 0) {
            return value;
        }
    })

    console.log(filterList)

}

variatesTypescript()