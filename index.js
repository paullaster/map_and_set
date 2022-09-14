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
newMap.set("Name", "Cynthia Ahedo")
console.log(newMap.delete('Name'));
console.log(newMap);