const arguments = process.argv;
const fs = require("fs");
console.log('Testing');

if(arguments[2]) {
    console.log('Args:', arguments[2]);
}
/*
fs.readFile("./user.json","utf-8", (err, data) => {
    if(err) {
        console.log('Error de lectura', err);
        return;
    }
    try {
        console.log('Data', JSON.parse(data));
    } catch (error) {
        console.log('Falló el parse');
    }
})
*/

function getCurrentUser() {
    return {
        name: "Angel",
        id: 1,
        email: "angel@fakemail.com"
    }
}

const user = getCurrentUser();
fs.writeFileSync(`${user.name}.json`, JSON.stringify(user));