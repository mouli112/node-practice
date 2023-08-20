/*  1. Consise Approaches (O(nlogn)) */

/* const MAP = {
    "1": "Gold Medal",
    "2": "Silver Medal",
    "3": "Bronze Medal",
}
var findRelativeRanks = function (score) {
    const hashmap = {};
    const sortScore = [...score].sort((a, b) => b - a);
    let output = [];

    for (let i = 0; i < sortScore.length; i++) {
        hashmap[sortScore[i]] = MAP[`${i + 1}`] || `${i + 1}`;
        console.log(hashmap);
    }

    for (let i = 0; i < score.length; i++) {
        output.push(hashmap[score[i]]);
    }
    return output;
};
let score = [10, 3, 8, 9, 4]
console.log(findRelativeRanks(score)); */

/* 2.  O(n^2) time complexity */

/* var findRelativeRanks = function (score) {
    let dummy = [...score].sort((a, b) => b - a);
    console.log(dummy);
    for (let i = 0; i < dummy.length; i++) {
        let index = score.indexOf(dummy[i]);
        console.log("index",index);
        if (i === 0) {
            score[index] = "Gold Medal"
        }
        else if (i === 1) {
            score[index] = "Silver Medal"
        }
        else if (i === 2) {
            score[index] = "Bronze Medal"
        }
        else {
            score[index] = String(i + 1)
        }
    }
    return score;
};
let score = [10, 3, 8, 9, 4];
console.log(findRelativeRanks(score)); */

// var findRelativeRanks = function (score) {
//     let hashTab = {};
//     score.map((e, index) => {
//         console.log(e,index);
//         hashTab[e] = index;
//         console.log(hashTab);
//     })
//     // !! .sort() function doesn't return a new array , but the original array reference
//     let scoreSorted = [...score].sort((a, b) => b - a);
//     for (let i = 0; i < score.length; i++) {
//         if (i == 0) score[hashTab[scoreSorted[i]]] = "Gold Medal";
//         else if (i == 1) score[hashTab[scoreSorted[i]]] = "Silver Medal";
//         else if (i == 2) score[hashTab[scoreSorted[i]]] = "Bronze Medal";
//         else score[hashTab[scoreSorted[i]]] = `${i + 1}`;
//     }
//     return score;
// };
// let score = [10, 3, 8, 9, 4];
// console.log(findRelativeRanks(score));

var findRelativeRanks = function (score) {
    let hashmap = {};
    score.map((ele,index)=>{
        hashmap[ele] = index;
    });
    let sortedScore = [...score].sort((a, b) => b - a);
    for(let i=0;i<score.length;i++){
        if(i == 0) score[hashmap[sortedScore[i]]] = "Gold Medal";
        else if (i == 1) score[hashmap[sortedScore[i]]] = "Silver Medal";
        else if (i == 2) score[hashmap[sortedScore[i]]] = "Bronge Medal";
        else score[hashmap[sortedScore[i]]] = String(i+1);
    }
    return score;
};
let score = [10, 3, 8, 9, 4];
console.log(findRelativeRanks(score));