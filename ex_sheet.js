const convertToTitle = function (columnNumber) {
    let result = '';
    while (columnNumber > 0) {
        const remainder = (columnNumber - 1) % 26;
        console.log(remainder);
        const char = String.fromCharCode(65 + remainder);
        result = char + result;
        columnNumber = Math.floor((columnNumber - 1) / 26);
    }
    return result;
};
let columnNumber = 28;
console.log(convertToTitle(columnNumber));