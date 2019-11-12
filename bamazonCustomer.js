const inquirer = require('inquirer')
const mysql = require('mysql2')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'bamazon'
});




db.query('SELECT * FROM `products`', (err,data) => {
if(err){
    console.log(err)
    }

    


    // console.log(data[0].item_id)

})