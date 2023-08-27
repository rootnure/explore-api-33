/* const user = {id: 1, name: 'Gorib Amir', job: 'Bakar'}
// JSON ==> JavaScript Object Notation
const stringified = JSON.stringify(user);
console.log(user); // { id: 1, name: 'Gorib Amir', job: 'Bakar' }
console.log(stringified); // {"id":1,"name":"Gorib Amir","job":"Bakar"}
 */

const shop = {
    owner: 'Jamal',
    address: {
        street: 'Kocukhet, Bhoot er goli',
        city: 'Dacca',
        country: "BD"
    },
    products: ['laptop', 'phone', 'monitor', 'GPU'],
    revenue: 98000,
    isOpen: true,
    isNew: false,
}

console.log(shop);
/* 
{
  owner: 'Jamal',
  address: { street: 'Kocukhet, Bhoot er goli', city: 'Dacca', country: 'BD' },
  products: [ 'laptop', 'phone', 'monitor', 'GPU' ],
  revenue: 98000,
  isOpen: true,
  isNew: false
}
*/

const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
/*
{"owner":"Jamal","address":{"street":"Kocukhet, Bhoot er goli","city":"Dacca","country":"BD"},"products":["laptop","phone","monitor","GPU"],"revenue":98000,"isOpen":true,"isNew":false}
*/

const shopObj = JSON.parse(shopJSON);
console.log(shopObj);
/*
{
  owner: 'Jamal',
  address: { street: 'Kocukhet, Bhoot er goli', city: 'Dacca', country: 'BD' },
  products: [ 'laptop', 'phone', 'monitor', 'GPU' ],
  revenue: 98000,
  isOpen: true,
  isNew: false
}
*/