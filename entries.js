//output : ["tcs","google"];
const persons = [
    {
        name : "mouli",
        age : 23,
        company : "TCS"
    },
    {
        name: "pavani",
        age: 23,
        company: "Wipro"
    },
    {
        name: "mouli",
        age: 23,
        company: "Google"
    }
]
for(let i=0; i<persons.length; i++){
    let a = persons[i];
    let b = persons[i+1];
    let res = [];
    if(a.name.contains(b.name)){
        res.push(a.company,b.company)
    }  
}
console.log(res);