import { getEmployees, getMenus } from './asyncFunctions.js';

Promise.all([getEmployees(), getMenus()])
.then(result => {
  const employees = result[0];
  const menus = result[1];
  
  console.log('직원 데이터:');
  console.log(employees);
  console.log('메뉴 데이터:');
  console.log(menus);
});

const promises = [];
const employeesPromise = getEmployees();
const menusPromise = getMenus();

promises.push(employeesPromise);
promises.push(menusPromise);

const allPromise = Promise.all(promises);
const result = await allPromise;

const employees = result[0];
const menus = result[1];

// console.log('직원 데이터:');
// console.log(employees);
// console.log('메뉴 데이터:');
// console.log(menus);
