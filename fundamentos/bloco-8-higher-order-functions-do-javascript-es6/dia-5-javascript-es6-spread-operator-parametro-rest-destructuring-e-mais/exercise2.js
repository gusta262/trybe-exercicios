const sum = (...rest) => {
    return rest.reduce((acc, curr) => acc + curr, 0)
};

console.log(sum(1, 2, 4, 7,));