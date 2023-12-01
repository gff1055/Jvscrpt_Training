let medNum = function(...nums){
    return (nums[0]+nums[1]+nums[2])/3;
}

let list1 = [10,11,12];
let list2 = [13,14,15];

let listTotComArr = [list1,list2];
let listTotComValDosArr = [...list1,...list2];


let obj1 = {
    propA: 1,
    propB: 2,
    propC: 3
};

let obj2 = {
    propA: 4,
    propE: 5,
    propF: 6
}

let objTot = {...obj1, propG: 12, ...obj2};