// let buildings = [
//     { Gym: 0, School: 1, Store: 0 },
//     { Gym: 1, School: 0, Store: 0 },
//     { Gym: 1, School: 1, Store: 0 },
//     { Gym: 0, School: 1, Store: 0 },
//     { Gym: 0, School: 1, Store: 1 }
// ]

// let home = {
//     gym : [2,3],
//     school : [1,3,4,5],
//     store : [5]
// }

let array = [[0, 1, 1, 0, 0], [1, 0, 1, 1, 1], [0, 0, 0, 0, 1]];
let input = ['gym','school']
let ar = [];
let gym=[];
let school = [];
let store = [];
for (let i = 0; i < 3; i++) {
    for (j = 0; j < 5; j++) {
        if (i == 0 && array[i][j] == 1) {
            //  dist = ar.push(Math.abs(i-j))
            gym.push(j);
        }
        if(i == 1 && array[i][j] == 1){
            school.push(j)
        }
        if(i == 2 && array[i][j] == 1){
            store.push(j)
        }
        
    }
}

let array = [gym.length,school.length, store.length]
// console.log(gym);
// console.log(school);
// console.log(store);


for (let i = 0; i < 3; i++){
    for (j = 0; j < 5; j++){
        abc = Math.min
    }

}