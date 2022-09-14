/**
 * Map object
 */
let tempObj = {
    empName: 'Peter Smith',
    position: "Team Lead",
    project : "glassdoor moderation",
    dept: "Global Service Delivery",
    company: "Sama Kenya"
}
let newMap = new Map();
for (let key in tempObj) {
    newMap.set([key],tempObj[key]);
}
for ([key, value] of newMap.entries()){
    //console.table(key, value);
}
newMap.set("Name", "Cynthia Ahedo")
//console.log(newMap.delete('Name'));
//console.log(newMap);
//console.log(console);
/**
 * SET
 */
let empNo = 0;
let empStr = "EMPID";
let objSet = {
    [empStr + ++empNo]:{
        empName: 'Peter Smith',
        position: "Team Lead",
        project : "glassdoor moderation",
        dept: "Global Service Delivery",
        company: "Sama Kenya"
    },
    [empStr + ++empNo]:{
        empName: 'Basil Otieno',
        position: "Senior Team Lead",
        project : "glassdoor moderation",
        dept: "Global Service Delivery",
        company: "Sama Kenya"
    },
    [empStr + ++empNo]:{
        empName: 'Eunice Wangui',
        position: "Senior Associate",
        project : "glassdoor moderation",
        dept: "Global Service Delivery",
        company: "Sama Kenya"
    },
    [empStr + ++empNo]:{
        empName: 'Kennedy Njagi',
        position: "Junior Reviewer Associate",
        project : "glassdoor moderation",
        dept: "Global Service Delivery",
        company: "Sama Kenya"
    },
    [empStr + ++empNo]:{
        empName: 'Isiah Mundia',
        position: "Senior Associate",
        project : "glassdoor moderation",
        dept: "Global Service Delivery",
        company: "Sama Kenya"
    },
    [empStr + ++empNo]:{
        empName: 'Wamuyu Margaret',
        position: "Associate",
        project : "glassdoor moderation",
        dept: "Global Service Delivery",
        company: "Sama Kenya"
    },
    [empStr + ++empNo]:{
        empName: 'Paullaster Okoth',
        position: "Developer",
        project : "glassdoor moderation",
        dept: "Global Service Delivery",
        company: "Sama Kenya"
    }
}
console.table(objSet);
for (let key in objSet) {
    newMap.set([key],objSet[key]);
}
console.log(newMap);
for([key, value] of newMap.entries()){
   // console.table(key, value);
}
let newSet = new Set();
for(let prop in objSet) {
    newSet.add(prop,objSet[prop]);
}

for([key,value] of newSet.entries()){
   // console.table(key,value)
}
//newSet.add("Name", "Cynthia Ahedo");

