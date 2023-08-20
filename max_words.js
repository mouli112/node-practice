var mostWordsFound = function (sentences) {
    let max = 0;
    for (const i of sentences) {
        let len = i.split(" ").length;
        max = max > len ? max : len;
    }
    return max;
};