const number = 10;

const fatorialFun = (num) => {
    let fatorialNum = 1

    for (let index = 1; index <= num; index += 1) {
        fatorialNum *= index;
    }

    return fatorialNum;
}

console.log(fatorialFun(number));