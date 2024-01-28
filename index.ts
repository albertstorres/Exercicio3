const tabuada = (array: number[]): string[] => {
    const resultado: string[] = [];

    for (let j = 0; j < array.length; j++) {
        if (j == 0) {
            resultado[0] = (`---TABUADA DE ${array[j]}---`);
        }
        for (let i = 0; i < 11; i++) {
            resultado.push(`${array[j]} x ${i} = ${array[j] * i}`);
        }
        if (array[j + 1]) {
            resultado.push(`---TABUADA DE ${array[j + 1]}---`);
        }
    }

    return resultado

}


console.log(tabuada([1, 5, 2]));