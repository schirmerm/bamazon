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
    for( let i = 0; i < data.length; i++){
    console.log(`Item number: ${data[i].item_id}`)
    console.log(`Product Item: ${data[i].product_name}`)
    console.log(`Price: $ ${data[i].price}`)
    }

    inquirer.prompt([
        {
            type: 'list',
            name: 'item_number',
            message: 'Which item number would you like to buy',
            choices: ['1','2','3','4','5','6','7','8','9','10']
        },
        {
            type: 'number',
            name: 'quantity',
            message: 'How many would you like to buy'
        }
    ])
    .then(({item_number, quantity}) => {
        switch(item_number){
            case '1':
                console.log(`You have chosen to buy an order of ${quantity} ${data[0].product_name}`)
                if(quantity <= data[0].stock_quantity){
                    console.log(`Congratulations your order has been placed`)
                    db.query(`INSERT INTO products(stock_quantity) VALUES (${data[0].stock_quantity - quantity}) `)
                }else{console.log(`Sorry we have insufficient quantity of that item we only have ${data[0].stock_quantity}`)}
                break
            case '2':
                    console.log(`You have chosen to buy an order of ${quantity} ${data[1].product_name}s`)
                break
            case '3':
                    console.log(`You have chosen to buy an order of ${quantity} ${data[2].product_name}s`)
                break
            case '4':
                    console.log(`You have chosen to buy an order of ${quantity} ${data[3].product_name}`)
                break
            case '5':
                    console.log(`You have chosen to buy an order of ${quantity} ${data[4].product_name}s`)
                break
            case '6':
                    console.log(`You have chosen to buy an order of ${quantity} ${data[5].product_name}`)
                break
            case '7':
                    console.log(`You have chosen to buy an order of ${quantity} ${data[6].product_name}`)
                break
            case '8':
                    console.log(`You have chosen to buy an order of ${quantity} ${data[7].product_name}s`)
                break
            case '9':
                    console.log(`You have chosen to buy an order of ${quantity} ${data[8].product_name}s`)
                break
            case '1o':
                    console.log(`You have chosen to buy an order of ${quantity} ${data[9].product_name}`)
                break    
                
        }
    })
    
    // console.log(data[0].item_id)

})